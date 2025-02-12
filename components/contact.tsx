"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  // Handle input change with proper event typing
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission with proper event typing
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setLoading(false);
    setResponseMsg(result.message);

    if (result.success) {
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">C</span>ontact <span className="text-yellow">Me</span>
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-[32px] p-8">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  className="w-full h-14 px-6 rounded-full bg-[#F5F5F5] text-dark placeholder:text-dark/60"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="w-full h-14 px-6 rounded-full bg-[#F5F5F5] text-dark placeholder:text-dark/60"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No."
                  className="w-full h-14 px-6 rounded-full bg-[#F5F5F5] text-dark placeholder:text-dark/60"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  className="w-full h-14 px-6 rounded-full bg-[#F5F5F5] text-dark placeholder:text-dark/60"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                placeholder="Message *"
                rows={6}
                className="w-full p-6 rounded-[32px] bg-[#F5F5F5] text-dark placeholder:text-dark/60 resize-none"
                required
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-32 h-[52px] rounded-full bg-yellow text-dark font-medium hover:bg-yellow/90 transition-colors flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {responseMsg && <p className="text-center text-green-600 mt-4">{responseMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}