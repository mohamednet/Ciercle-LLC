"use client";

import { useState } from "react";

const MAX_NAME = 100;
const MAX_EMAIL = 255;
const MAX_MESSAGE = 5000;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "rate-limited">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setErrorMsg("All fields are required.");
      return;
    }

    if (trimmedName.length > MAX_NAME) {
      setStatus("error");
      setErrorMsg(`Name must be under ${MAX_NAME} characters.`);
      return;
    }

    if (trimmedEmail.length > MAX_EMAIL || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (trimmedMessage.length > MAX_MESSAGE) {
      setStatus("error");
      setErrorMsg(`Message must be under ${MAX_MESSAGE} characters.`);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      if (res.status === 429) {
        setStatus("rate-limited");
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again or email us directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          maxLength={MAX_NAME}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your full name"
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary dark:focus:ring-[#6ba3fe] focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          maxLength={MAX_EMAIL}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary dark:focus:ring-[#6ba3fe] focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2"
        >
          Message
          <span className="font-normal text-gray-400 ml-2">
            {formData.message.length}/{MAX_MESSAGE}
          </span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          maxLength={MAX_MESSAGE}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your project..."
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary dark:focus:ring-[#6ba3fe] focus:border-transparent outline-none transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary text-white py-3.5 px-6 rounded-full font-semibold hover:bg-[#3b7de6] transition-colors disabled:opacity-50 shadow-sm"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
          <span className="material-icons text-green-600 dark:text-green-400 text-xl">
            check_circle
          </span>
          <p className="text-sm text-green-700 dark:text-green-400 font-medium">
            Message sent successfully! We&apos;ll get back to you soon.
          </p>
        </div>
      )}
      {status === "rate-limited" && (
        <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
          <span className="material-icons text-yellow-600 dark:text-yellow-400 text-xl">
            schedule
          </span>
          <p className="text-sm text-yellow-700 dark:text-yellow-400 font-medium">
            Too many requests. Please wait a few minutes and try again.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
          <span className="material-icons text-red-600 dark:text-red-400 text-xl">
            error
          </span>
          <p className="text-sm text-red-700 dark:text-red-400 font-medium">
            {errorMsg || "Failed to send message. Please try again or email us directly."}
          </p>
        </div>
      )}
    </form>
  );
}
