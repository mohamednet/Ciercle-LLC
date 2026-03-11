import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Store in SQLite database
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.contact.create({
        data: { name, email, message },
      });
    } catch (dbError) {
      console.warn("Database storage failed (will still return success):", dbError);
    }

    // Send email notification (only if Resend is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const { getResend } = await import("@/lib/resend");
        await getResend().emails.send({
          // Update to "Ciercle LLC <noreply@cierclellc.com>" after verifying domain in Resend
          from: process.env.EMAIL_FROM || "Ciercle LLC <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL || "contact@cierclellc.com",
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
      } catch (emailError) {
        console.warn("Email notification failed:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
