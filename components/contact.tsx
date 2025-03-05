"use client";

import { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";

type Status = {
  type: "success" | "error" | null;
  message: string;
};

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<Status>({ type: null, message: "" });
  
  // Store form reference
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    // Reset status before new submission
    setStatus({ type: null, message: "" });

    // Ensure form reference exists
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      mobile: formData.get("mobile") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        form.reset(); // Reset form
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">C</span>ontact <span className="text-yellow">Me</span>
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card rounded-[32px] p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    className="w-full h-14 px-6 rounded-full bg-[#222] text-white placeholder:text-white/60"
                    required
                  />
                </div>
                <div>
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="w-full h-14 px-6 rounded-full bg-[#222] text-white placeholder:text-white/60"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only">Mobile No.</label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile No."
                    className="w-full h-14 px-6 rounded-full bg-[#222] text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label className="sr-only">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    className="w-full h-14 px-6 rounded-full bg-[#222] text-white placeholder:text-white/60"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="sr-only">Message</label>
                <textarea
                  name="message"
                  placeholder="Message *"
                  rows={6}
                  className="w-full p-6 rounded-[32px] bg-[#222] text-white placeholder:text-white/60 resize-none"
                  required
                />
              </div>

              {status.type && (
                <div
                  className={`px-6 py-3 rounded-full text-center ${
                    status.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-32 h-[52px] rounded-full bg-yellow text-dark font-medium hover:bg-yellow/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send <IoSend className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          <img
            src="https://nikunjthesiya.vercel.app/assets/character.png"
            alt=""
            className="absolute -bottom-20 right-0 w-80"
          />
        </div>
      </div>
    </section>
  );
}

