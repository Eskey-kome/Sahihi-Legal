"use client";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";// Note: ensure your project config matches this or uses "next/image"
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;
    const service = formData.subject;

    let text = `Hello Sahihi Legal,\n\nI'd like to get in touch.\n\n*Name:* ${name}`;
    if (email) text += `\n*Email:* ${email}`;
    if (phone) text += `\n*Phone:* ${phone}`;
    if (service) text += `\n*Service Area:* ${service}`;
    if (message) text += `\n\n*Message:* ${message}`;

window.open(`https://wa.me/254769929070?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="w-full relative overflow-hidden" style={{ minHeight: "520px" }}>
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Law-Photo-5.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.20) 100%)",
          }}
        />
        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300 font-semibold mb-5">
            Get In Touch
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let's Start a Conversation
          </h1>
          <p className="mt-6 text-white text-lg leading-relaxed max-w-2xl font-medium">
            Whether you have a pressing legal question or a complex transaction to navigate,
            our team is ready to listen, advise and act with precision and clarity.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
            href="https://wa.me/254769929070"
  target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0A2342] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition text-sm"
            >
              WhatsApp Us
            </a>
            
            <a
            href="https://mail.google.com/mail/?view=cm&to=info@sahihilegal.co.ke"
  target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0A2342] transition text-sm"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-0 flex flex-col lg:flex-row min-h-[700px]">

          {/* LEFT — Form */}
          <div className="flex-1 py-20 pr-0 lg:pr-16">
            <span className="inline-block bg-blue-100 text-[#0A2342] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Contact Us
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A2342] leading-tight max-w-xl mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Reach us directly.
            </h2>
            <p className="text-gray-500 text-base mb-8 max-w-lg">
              We typically respond within one business day. For urgent matters, WhatsApp is fastest.
            </p>

            {/* Inline contact info */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-10 text-sm items-center">
  <a href="mailto:info@sahihilegal.co.ke" className="text-[#0A2342] font-medium hover:underline">info@sahihilegal.co.ke</a>
  <span className="text-gray-300">·</span>
  <a href="https://wa.me/254769929070" className="text-[#0A2342] font-medium hover:underline">+254 769 929 070</a>
  <span className="text-gray-300">·</span>
  <span className="text-gray-500">Nairobi, Kenya</span>
</div>

       {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 rounded-full bg-[#0A2342]/5 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#0A2342]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-[#0A2342] mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Message Received
                </h3>
                <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. A member of our team will be in touch with you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2">
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Mwangi"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0A2342] placeholder-gray-300 focus:outline-none focus:border-[#0A2342] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="type"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0A2342] placeholder-gray-300 focus:outline-none focus:border-[#0A2342] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 700 000 000"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0A2342] placeholder-gray-300 focus:outline-none focus:border-[#0A2342] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2">
                      Service Area <span className="text-blue-400">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0A2342] focus:outline-none focus:border-[#0A2342] transition bg-white"
                    >
                      <option value="" disabled>Select a practice area</option>
                      <option>Corporate Transactions & Restructuring</option>
                      <option>Regulatory Compliance</option>
                      <option>Data Protection</option>
                      <option>Intellectual Property & Technology Law</option>
                      <option>Trust Incorporations</option>
                      <option>Startup & Venture Legal Advisory</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2">
                    Your Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your situation and how we can help…"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0A2342] placeholder-gray-300 focus:outline-none focus:border-[#0A2342] transition resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-gray-400">We respect your privacy. No spam ever.</p>
                  <button
                    type="submit"
                    className="bg-[#0A2342] text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#0d2d56] transition"
                  >
                    Send Message →
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT — Image */}
          <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] flex-shrink-0 items-start pt-[160px] pb-[80px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/law-photo-2.jpg.jpg"
                alt="Sahihi Legal"
                fill
                className="object-cover object-center"
                sizes="520px"
              />
              <div className="absolute inset-0 bg-[#0A2342]/20 rounded-2xl" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA STRIP */}
      <section className="w-full bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium mb-3">
              Prefer to talk?
            </p>
            <h2
              className="text-3xl font-bold text-[#0A2342] leading-tight max-w-xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Book a free 30-minute consultation.
            </h2>
            <p className="mt-3 text-gray-700 text-sm max-w-lg">
              No obligations. Just a conversation about your legal needs and how Sahihi Legal can help.
            </p>
          </div>
          
          <a
           href="https://wa.me/254769929070"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-shrink-0 bg-[#0A2342] text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-[#0d2d56] transition"
>
            WhatsApp Us Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#0A2342] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold">Sahihi Legal</h3>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                A digitally-driven African business law firm helping startups,
                investors and international businesses operate with confidence
                in Kenya and across global markets.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://www.linkedin.com/company/sahihi-legal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="https://twitter.com/SahihiLegal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">X (Twitter)</a></li>
                <li><a href="https://www.youtube.com/@SahihiLegal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YouTube</a></li>
<li><a href="https://wa.me/254769929070" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="mailto:info@sahihilegal.co.ke" className="hover:text-white transition">info@sahihilegal.co.ke</a></li>
<li><a href="https://wa.me/254769929070" className="hover:text-white transition">WhatsApp: 0769 929 070</a></li>
                <li className="pt-1 text-gray-500">Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Sahihi Legal. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
              <a href="/disclaimer" className="hover:text-white transition">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}