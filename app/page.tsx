"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showOther, setShowOther] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "",
  });

  const services = [
    "Corporate Transactions & Restructuring",
    "Regulatory Compliance",
    "Data Protection",
    "Intellectual Property & Technology Law",
    "Trust Incorporations",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = () => {
    const { name, phone, email, company, message } = formData;
    if (!name || !phone) {
      alert("Please fill in at least your name and phone/WhatsApp.");
      return;
    }
    const allServices = [...selectedServices, ...(showOther && otherText ? [`Other: ${otherText}`] : [])];
    let text = `Hello Sahihi Legal,\n\nI'd like to get in touch.\n\n*Name:* ${name}`;
    if (email) text += `\n*Email:* ${email}`;
    if (company) text += `\n*Company:* ${company}`;
    if (allServices.length) text += `\n*Services:* ${allServices.join(", ")}`;
    if (message) text += `\n\n*Brief:* ${message}`;
    window.open(`https://wa.me/254769929070?text=${encodeURIComponent(text)}`, "_blank");
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
      {/* Fixed blue side borders */}
      <div className="fixed inset-y-0 left-0 w-1 bg-[#0A2342] z-40 pointer-events-none" />
      <div className="fixed inset-y-0 right-0 w-1 bg-[#0A2342] z-40 pointer-events-none" />

      {/* HERO SECTION */}
      <section className="w-full bg-[#0A2342] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
    
    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-blue-200" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
  Protect what you build.
</h2> 
 <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-xl">
              We are a digitally-driven law firm helping startups,
              investors, venture capital firms and international businesses operate
              seamlessly in Kenya and across global markets.
              <br /><br />
              We focus on delivering clear legal strategy, regulatory compliance
              and business-focused solutions that help you grow with confidence.
            </p>
            <div className="mt-8 flex gap-4">
             <Link href="/contact" className="bg-white text-[#0A2342] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
  Talk to Us
</Link><Link href="/contact" className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0A2342] transition">
  Free Consultation
</Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm md:max-w-lg xl:max-w-xl">
             <Image
                src="/law-photo-1.avif"
                alt="Sahihi Legal Office"
                width={650}
                height={750}
                priority
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-28">

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-14">

            <div className="flex-1 min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium mb-5">
                About US
              </p>

              <h2
                className="text-4xl md:text-5xl font-bold text-[#0A2342] leading-tight max-w-2xl mb-10"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Built on Research.<br />
                Driven by Strategy.<br />
                Focused on Results.
              </h2>

              <div className="w-12 h-[2px] bg-[#0A2342] opacity-20 mb-10" />

              <p className="text-lg font-normal text-gray-600 leading-relaxed">
                We are a modern business law firm supporting startups, growing enterprises
                and international businesses operating in Kenya and across global markets. Every
                advisory we deliver is precise, practical and aligned with contemporary commercial realities.
              </p>
            </div>

         <div className="w-full lg:w-[420px] xl:w-[500px]">
  <div className="w-full rounded-2xl bg-[#0A2342] p-8 flex flex-col justify-between gap-6 shadow-2xl min-h-[340px]">
    <p className="text-white/[0.04] font-bold text-[120px] leading-none -mt-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>SL</p>
    <div className="grid grid-cols-1 gap-4 -mt-8">
      {[
     { label: "Founded", value: "2025", sub: "Nairobi, Kenya" },
{ label: "Approach", value: "Digital-first", sub: "A digital-first legal practice supporting investment, innovation and corporate growth across Africa and cross-border markets" },
      ].map((item) => (
      <div key={item.label} className="bg-white/10 border border-white/20 rounded-lg p-5">
          <span className="text-[10px] tracking-[0.15em] uppercase text-blue-300 font-bold block mb-1">{item.label}</span>
          <span className="text-white font-bold text-lg block" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{item.value}</span>
          <span className="text-white/50 text-xs">{item.sub}</span>
        </div>
      ))}
    </div>
  </div>
</div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y md:divide-y-0 divide-gray-100 border border-gray-100 rounded-xl overflow-hidden mb-14">
            {[
              { n: "01", title: "Research-Driven", desc: "Every advisory is grounded in rigorous legal research tailored to your commercial context." },
              { n: "02", title: "Strategically Focused", desc: "We align legal counsel with your business objectives not just compliance but growth." },
          { n: "03", title: "Africa & Beyond", desc: "Deep expertise in Kenyan law and cross-border transactions across global markets." },
            ].map((p) => (
              <div key={p.n} className="p-7 bg-white">
                <p
                  className="text-4xl font-bold text-[#0A2342] opacity-[0.07] leading-none mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {p.n}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0A2342] mb-2">{p.title}</p>
                <p className="text-sm font-normal text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0A2342] rounded-xl px-10 py-10">
            <p
              className="text-lg md:text-xl text-blue-200 leading-relaxed"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              We provide strategic legal solutions across {" "}
              <span className="text-white font-semibold">
                real-estate,commercial transactions and and regulatory compliance
              </span>{" "}
              ensuring businesses are legally secure and precisely positioned for what comes next.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-28">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342]">Our Core Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            We provide strategic legal solutions tailored for businesses, startups
            and global organizations operating in dynamic markets.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Corporate Transactions & Restructuring", desc: "We provide end-to-end corporate legal advisory for startups, SMEs, investors and established businesses covering business formation, corporate restructuring, investment transactions and governance." },
              { title: "Regulatory Compliance", desc: "We provide practical legal support that enables businesses to operate confidently and compliantly, combining regulatory compliance, corporate secretarial support and labour law advisory." },
              { title: "Data Protection", desc: "We help businesses comply with Kenya's data protection laws, advising on how they collect, store and use personal data and preparing privacy policies, terms of use and internal compliance frameworks." },
              { title: "Intellectual Property & Technology Law", desc: "We help businesses and creators protect what makes them unique registering trademarks and copyrights locally and internationally and advising on IP ownership, licensing and transfer." },
              { title: "Trust Incorporations", desc: "We provide strategic legal advice on trust structures for wealth management, succession planning and asset protection from advising on the right arrangement to drafting bespoke trust deeds." },
              { title: "Startup & Venture Legal Advisory", desc: "We are the legal partner of choice for African startups and their investors from incorporation and term sheets to equity structures and investor agreements, helping early-stage companies scale with confidence." },
              { title: "Real Estate & Property Law", desc: "We advise and represent individuals, investors, developers and businesses in all aspects of real estate transactions conducting due diligence, structuring deals and ensuring property rights are properly secured." },
            ].map((s) => (
              <div key={s.title} className="p-6 bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#0A2342]">{s.title}</h3>
                <p className="mt-3 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / GET STARTED SECTION */}
      <section className="w-full bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-0 flex flex-col lg:flex-row min-h-[700px]">

          {/* LEFT — FORM */}
          <div className="flex-1 py-20 pr-0 lg:pr-16">
            <span className="inline-block bg-blue-100 text-[#0A2342] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Get Started
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] leading-tight max-w-xl">
              Ready to work with a firm that puts clients first?
            </h2>

            <p className="mt-4 text-base text-gray-500 max-w-lg">
              Fill in your details below and we&apos;ll get back to you promptly.
            </p>

            <div className="mt-10 space-y-6" id="form-body">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#0A2342] mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0A2342] mb-1.5">Work Email *</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#0A2342] mb-1.5">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0A2342] mb-1.5">Company / Brand</label>
                  <input
                    type="text"
                    placeholder="Your company or brand name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-[#0A2342] mb-3">
                  Services You&apos;re Interested In{" "}
                  <span className="font-normal text-gray-400">(select all that apply)</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {services.map((service) => (
                    <label
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`flex items-center gap-3 border rounded-lg px-4 py-2.5 text-sm cursor-pointer transition ${
                        selectedServices.includes(service)
                          ? "border-[#0A2342] bg-[#0A2342] text-white"
                          : "border-gray-200 text-gray-700 hover:border-[#0A2342] hover:bg-blue-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => {}}
                        className="accent-white w-4 h-4"
                      />
                      {service}
                    </label>
                  ))}
                  <label
                    onClick={() => setShowOther((prev) => !prev)}
                    className={`flex items-center gap-3 border rounded-lg px-4 py-2.5 text-sm cursor-pointer transition ${
                      showOther
                        ? "border-[#0A2342] bg-[#0A2342] text-white"
                        : "border-gray-200 text-gray-700 hover:border-[#0A2342] hover:bg-blue-50"
                    }`}
                  >
                    <input type="checkbox" checked={showOther} onChange={() => {}} className="accent-white w-4 h-4" />
                    Other — please specify
                  </label>
                </div>

                {showOther && (
                  <div className="mt-3">
                    <label className="block text-sm font-bold text-[#0A2342] mb-1.5">Please Specify</label>
                    <input
                      type="text"
                      placeholder="Describe what you need..."
                      value={otherText}
                      onChange={(e) => setOtherText(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0A2342] mb-1.5">Message / Brief *</label>
                <textarea
                  rows={4}
                  placeholder="Tell us a bit about your situation or what you need help with..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] resize-y transition"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#0A2342] text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#0d2e56] active:scale-[0.99] transition"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.302-1.507A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.359-.213-3.721.889.928-3.618-.234-.372A9.818 9.818 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182c5.427 0 9.818 4.391 9.818 9.818 0 5.427-4.391 9.818-9.818 9.818z"/>
                </svg>
                Submit via WhatsApp
              </button>
<p className="text-center text-sm text-gray-400 pb-2">
  Email:{" "}
  <a href="https://mail.google.com/mail/?view=cm&to=info@sahihilegal.co.ke" target="_blank" rel="noopener noreferrer" className="text-[#0A2342] font-semibold hover:underline">
    info@sahihilegal.co.ke
  </a>{" "}
  &nbsp;·&nbsp; WhatsApp:{" "}
  <a href="https://wa.me/254769929070" className="text-[#0A2342] font-semibold hover:underline">
    0769 929 070
  </a>
</p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
       <div className="hidden lg:flex lg:w-[420px] xl:w-[520px] flex-shrink-0 items-start pt-[160px] pb-[80px]">
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

      {/* FOOTER */}
      <footer className="w-full bg-[#0A2342] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold">Sahihi Legal</h3>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                A digitally-driven African business law firm helping startups,
                investors and international businesses operate with confidence
                in Kenya and across global markets.
              </p>
            </div>

            {/* Quick Links */}
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

            {/* Social */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="https://www.linkedin.com/company/sahihi-legal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/SahihiLegal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@SahihiLegal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/254769929070" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="mailto:info@sahihilegal.co.ke" className="hover:text-white transition">
                    info@sahihilegal.co.ke
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/254769929070" className="hover:text-white transition">
                    WhatsApp: 0769 929 070
                  </a>
                </li>
                <li className="pt-1 text-gray-500">Nairobi, Kenya</li>
              </ul>
            </div>

          </div>

          {/* Divider + bottom bar */}
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