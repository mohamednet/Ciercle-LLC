import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter: max 5 requests per IP per 15 minutes
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Escape HTML to prevent injection
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validate email format
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !email.includes("\n") && !email.includes("\r");
}

// Strip newlines/carriage returns to prevent header injection
function sanitizeForHeader(str: string): string {
  return str.replace(/[\r\n]/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate content type
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { name, email, message } = body;

    // Type validation
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid input types" },
        { status: 400 }
      );
    }

    // Trim inputs
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();

    // Presence check
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Length validation
    if (trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Name must be under 100 characters" },
        { status: 400 }
      );
    }
    if (trimmedEmail.length > 255) {
      return NextResponse.json(
        { error: "Email must be under 255 characters" },
        { status: 400 }
      );
    }
    if (trimmedMessage.length > 5000) {
      return NextResponse.json(
        { error: "Message must be under 5000 characters" },
        { status: 400 }
      );
    }

    // Email format validation
    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Store in SQLite database with sanitized data
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.contact.create({
        data: {
          name: trimmedName.slice(0, 100),
          email: trimmedEmail.slice(0, 255),
          message: trimmedMessage.slice(0, 5000),
        },
      });
    } catch {
      // Database failure is non-critical, continue to send email
    }

    // Send email notification (only if Resend is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const { getResend } = await import("@/lib/resend");
        const safeName = sanitizeForHeader(escapeHtml(trimmedName));
        const safeEmail = sanitizeForHeader(escapeHtml(trimmedEmail));
        const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br>");

        await getResend().emails.send({
          from: process.env.EMAIL_FROM || "Ciercle LLC <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL || "contact@cierclellc.com",
          subject: `New Contact Form Submission from ${sanitizeForHeader(trimmedName)}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage}</p>
          `,
        });
      } catch {
        // Email failure is non-critical
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
