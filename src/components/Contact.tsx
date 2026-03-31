import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const serviceKey = import.meta.env.VITE_SERVICE_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log("Service ID:", serviceKey);
    console.log("Template ID:", templateId);
    console.log("API Key:", apiKey);
    if (form.current) {
      emailjs.sendForm(serviceKey, templateId, form.current, apiKey).then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          setStatus("error");
          console.log(error.text);
        },
      );
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif text-[#3e3a35] mb-4">
          get in touch
        </h2>
        <p className="text-[#6b665f] font-light">
          Have a project in mind? Let's build it together.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] uppercase text-[#3e3a35]/40 ml-4">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="bg-white/50 border border-[#3e3a35]/5 rounded-2xl px-6 py-4 outline-none focus:border-[#8fae8b] transition-all font-light"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] uppercase text-[#3e3a35]/40 ml-4">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="bg-white/50 border border-[#3e3a35]/5 rounded-2xl px-6 py-4 outline-none focus:border-[#8fae8b] transition-all font-light"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-[0.2em] uppercase text-[#3e3a35]/40 ml-4">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="bg-white/50 border border-[#3e3a35]/5 rounded-[2rem] px-6 py-6 outline-none focus:border-[#8fae8b] transition-all font-light resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-12 py-4 bg-[#3e3a35] text-[#f9f7f2] rounded-full hover:bg-[#2a2723] transition-all duration-300 disabled:opacity-50 flex items-center gap-3"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <span className="text-lg">→</span>
          </button>
        </div>

        {status === "success" && (
          <p className="text-center text-[#8fae8b] font-serif italic">
            Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-400 font-serif italic">
            Oops! Something went wrong. Try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
