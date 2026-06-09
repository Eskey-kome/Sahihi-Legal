"use client";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Corporate Transactions & Restructuring",
    tagline: "Navigate complexity. Close with confidence.",
    description:
      "We provide end-to-end corporate legal advisory services for startups, SMEs, investors and established businesses. The practice focuses on business formation, corporate restructuring, investment transactions and governance. We help clients choose the right legal structure for their ventures, establish clear ownership and management frameworks, facilitate investment and shareholding changes and ensure regulatory compliance as their businesses evolve.",
    details: [
      "Company incorporation and business structuring.",
      "Legal opinions on the most suitable business vehicle (company, partnership, LLP, trust or sole proprietorship).",
      "Drafting and negotiating shareholder agreements and partnership deeds.",
      "Investment agreements and venture capital transactions.",
      "Share transfers, share allotments and corporate reorganizations.",
      "Director appointments, resignations and changes in company management.",
      "Corporate governance advisory and preparation of board and shareholder resolutions.",
      "Due diligence and legal opinions for corporate transactions.",
    ],
  },
  {
    id: "02",
    title: "Regulatory Compliance",
    tagline: "Stay ahead of the rules. Stay in business.",
    description:
      "We provide practical legal support that enables businesses to operate confidently and compliantly. From obtaining industry-specific licenses and maintaining statutory records to advising on employment relationships and corporate governance, we help our clients build strong legal foundations for sustainable growth. Our services combine regulatory compliance, corporate secretarial support and labour law advisory to ensure businesses can focus on their operations while remaining legally protected.",
    details: [
      "Advising on the regulatory and licensing requirements applicable to various industries and assisting clients in obtaining the necessary permits and approvals.",
      "Ongoing corporate compliance advisory to ensure businesses meet their statutory obligations.",
      "Preparation and filing of company annual returns and maintenance of statutory records.",
      "Corporate secretarial services, including attendance at board and shareholder meetings and preparation of accurate minutes and resolutions to ensure proper corporate record keeping.",
      "Advising employers and businesses on Kenyan employment and labour laws.",
      "Drafting and reviewing employment contracts, consultancy agreements, independent contractor agreements and service agreements.",
      "Preparing confidentiality agreements and Non-Disclosure Agreements (NDAs) to protect business information and intellectual property.",
      "Advising on workplace policies, employee rights and obligations, disciplinary and grievance procedures, discrimination and harassment matters and termination processes.",
    ],
  },
  {
    id: "03",
    title: "Data Protection",
    tagline: "Protect what matters. Build trust at scale.",
    description:
      "We help businesses comply with Kenya's data protection laws by advising on how they collect, store and use personal data. We also assist with registration as data controllers or processors and prepare privacy policies, terms of use and internal compliance frameworks to ensure businesses operate lawfully and responsibly in the digital space.",
    details: [
      "Advising on compliance with Kenya's Data Protection Act and applicable data protection principles.",
      "Assisting clients in determining whether they require registration as a data controller or data processor and supporting the application process with the Office of the Data Protection Commissioner.",
      "Conducting data protection compliance assessments and gap analyses.",
      "Drafting and reviewing privacy policies tailored to specific business models and data processing activities.",
      "Drafting terms of use, website policies and user-facing legal documentation for digital platforms and applications.",
      "Advising on lawful data collection, processing, storage, sharing and cross-border data transfers.",
      "Supporting businesses in implementing internal data protection policies and governance frameworks.",
      "Providing general advisory on emerging issues in digital compliance and privacy law.",
    ],
  },
  {
    id: "04",
    title: "Intellectual Property & Technology Law",
    tagline: "Own your innovation. Defend your edge.",
    description:
      "We help businesses and creators protect what makes them unique. This includes registering trademarks and copyrights in Kenya and internationally, advising on intellectual property ownership and preparing agreements for the sale, licensing or transfer of intellectual property rights. We also assist with dealings at KIPI and KECOBO to ensure proper protection of your brand and creative assets.",
    details: [
      "Advising on intellectual property rights, ownership and protection strategies.",
      "Trademark registration in Kenya and coordination of international trademark filings.",
      "Copyright registration and advisory in Kenya, including liaison with the Kenya Copyright Board (KECOBO).",
      "Conducting basic IP due diligence in commercial transactions.",
      "Drafting and reviewing intellectual property assignment agreements, licensing agreements and sale/transfer agreements.",
      "Structuring ownership and commercialisation of intellectual property for businesses, startups and creators.",
      "Liaising with the Kenya Industrial Property Institute (KIPI) on trademark and patent matters.",
      "Advising on infringement risks, brand protection strategies and enforcement options.",
      "Supporting businesses in protecting their brands, content, software and innovations across multiple jurisdictions.",
    ],
  },
  {
    id: "05",
    title: "Trust Incorporations",
    tagline: "Structure wealth. Preserve legacy.",
    description:
      "We provide strategic legal advice on the creation and implementation of trust structures for wealth management, succession planning and asset protection. From advising on the most suitable trust arrangement and drafting bespoke trust deeds to facilitating the transfer of assets into the trust, we help our clients build lasting structures that protect their legacy and support future generations.",
    details: [
      "Advising clients on the most appropriate trust structure to achieve their estate planning, succession, asset protection or philanthropic goals.",
      "Preparing legal opinions on the suitability and implications of various trust structures.",
      "Drafting and reviewing trust deeds tailored to the client's specific objectives.",
      "Advising on the appointment, powers and responsibilities of trustees and beneficiaries.",
      "Assisting with the establishment and proper registration or incorporation of trusts where required.",
      "Advising on and facilitating the transfer and vesting of assets into trusts, including land, shares, and other property.",
      "Structuring family wealth and business succession arrangements through trusts.",
      "Reviewing and amending existing trust structures and trust instruments.",
    ],
  },
  {
    id: "06",
    title: "Startup & Venture Legal Advisory",
    tagline: "From idea to exit — legally protected.",
    description:
      "We are the legal partner of choice for African startups and the investors who back them. From incorporation and term sheets to equity structures and investor agreements, we provide practical, commercially-aware legal counsel that helps early-stage companies scale with confidence.",
    details: [
      "Fund manager license application.",
      "Deal support and due diligence.",
      "Founder agreements and investor agreements.",
    ],
  },
  {
    id: "07",
    title: "Real Estate & Property Law",
    tagline: "Secure your property. Protect your investment.",
    description:
      "We advise and represent individuals, investors, developers and businesses in all aspects of real estate transactions. Our role is to protect our clients' interests by conducting thorough legal due diligence, structuring transactions, managing the transfer process and ensuring that property rights are properly secured.",
    details: [
      "Acting for purchasers in land and property acquisitions.",
      "Acting for vendors in the sale and disposal of real estate.",
      "Conducting legal due diligence and title investigations.",
      "Preparing and reviewing sale agreements, transfers, leases and other conveyancing documents.",
      "Advising and structuring real estate development and joint venture projects.",
      "Sectional property and sectional title establishment and registration.",
      "Liaising with land registries and relevant government agencies to facilitate registrations and approvals.",
      "Advising investors on legal and regulatory issues affecting real estate investments.",
      "Providing legal opinions and strategic advice on conveyancing and property law matters.",
      "Coordinating completion processes, stakeholder arrangements and post-completion registrations.",
    ],
  },
];

const whyItems = [
  {
    label: "Africa-First Expertise",
    body: "Deep knowledge of Kenyan and East African legal frameworks, with experience advising on cross-border transactions across the continent.",
  },
  {
    label: "Digitally Driven",
    body: "We leverage technology to deliver faster, clearer and more accessible legal services without sacrificing quality or precision.",
  },
  {
    label: "Business-Aligned Counsel",
    body: "We don't just tell you what the law says. We help you understand what it means for your business and how to move forward strategically.",
  },
  {
    label: "Trusted by Founders & Investors",
    body: "From seed-stage startups to established enterprises, our clients trust us to protect their interests at every stage of growth.",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);

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
            backgroundImage: "url('/Law-Photo-4.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88) 50%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300 font-semibold mb-5">
            What We Do
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Legal Expertise Built for Modern Business
          </h1>
          <p className="mt-6 text-gray-200 text-lg leading-relaxed max-w-2xl">
            Sahihi Legal delivers precise, strategic legal services for startups,
            growing enterprises and international businesses operating in Kenya
            and across global markets.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#0A2342] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition text-sm"
            >
              Book a Consultation
            </Link>
            
            <a
              href="https://wa.me/254737776749"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0A2342] transition text-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium mb-4">
            Our Practice Areas
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0A2342] leading-tight mb-16 max-w-2xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Six Areas. One Firm.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`relative p-8 border-gray-100 cursor-pointer transition-all duration-300 group
                  ${idx % 2 === 0 ? "md:border-r" : ""}
                  border-b
                  ${activeService === service.id ? "bg-white text-[#0A2342]" : "bg-[#0A2342] hover:bg-[#0d2d56]"}
                `}
                onClick={() =>
                  setActiveService(activeService === service.id ? null : service.id)
                }
              >
                {/* Number */}
                <p
                  className={`text-5xl font-bold leading-none mb-4 transition-colors duration-300 ${
                    activeService === service.id
                      ? "text-[#0A2342]/10"
                      : "text-white/10"
                  }`}
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {service.id}
                </p>

                <h3
                  className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                    activeService === service.id ? "text-[#0A2342]" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-xs font-medium italic mb-4 transition-colors duration-300 ${
                    activeService === service.id ? "text-blue-200" : "text-blue-500"
                  }`}
                >
                  {service.tagline}
                </p>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    activeService === service.id ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {service.description}
                </p>

                {/* Expanded details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeService === service.id
                      ? "max-h-[600px] opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs uppercase tracking-widest font-semibold text-blue-500 mb-3">
                    Includes
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Toggle hint */}
                <div
                  className={`mt-5 flex items-center gap-1.5 text-xs font-semibold transition-colors duration-300 ${
                    activeService === service.id ? "text-[#0A2342]/50 group-hover:text-[#0A2342]" : "text-white/50 group-hover:text-white"
                  }`}
                >
                  <span>
                    {activeService === service.id ? "Close" : "See what's included"}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeService === service.id ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SAHIHI */}
      <section className="w-full bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-[380px]">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium mb-4">
                Why Sahihi Legal
              </p>
              <h2
                className="text-4xl font-bold text-[#0A2342] leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The difference is in how we think.
              </h2>
              <p className="mt-5 text-gray-500 text-base leading-relaxed">
                We don't just practice law we practice it with a commercial mindset,
                a digital edge and a genuine commitment to your outcomes.
              </p>
              <Link
                href="/about"
                className="inline-block mt-8 bg-[#0A2342] text-white text-sm font-semibold px-6 py-3 rounded-lg border border-[#0A2342] hover:bg-white hover:text-[#0A2342] transition"
              >
                Learn About Us →
              </Link>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyItems.map((item) => (
                <div
                  key={item.label}
                  className="p-7 bg-[#0A2342] border border-[#0d2d56] rounded-xl shadow-sm"
                >
                  <p className="text-sm font-bold text-white mb-2">{item.label}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="w-full bg-[#0A2342]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-blue-200 text-base max-w-lg">
              Book a free 30-minute consultation and let us understand your situation first.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="https://wa.me/254737776749"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0A2342] px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition text-center"
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="border border-white text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white hover:text-[#0A2342] transition text-center"
            >
              Contact Form
            </Link>
          </div>
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
                <li><a href="https://wa.me/254737776749" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="mailto:esmurimi@gmail.com" className="hover:text-white transition">esmurimi@gmail.com</a></li>
                <li><a href="mailto:ekome61933@anu.ac.ke" className="hover:text-white transition">ekome61933@anu.ac.ke</a></li>
                <li><a href="https://wa.me/254737776749" className="hover:text-white transition">WhatsApp: 0737 776 749</a></li>
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