"use client";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const insights = [
  {
    id: 1,
    category: "Corporate Transactions",
    tag: "M&A",
    title: "What Every Kenyan Startup Should Know Before Raising a Series A",
    excerpt:
      "From term sheet negotiations to shareholder agreements, the legal groundwork you lay before your first institutional round determines how much control you retain and how smoothly future rounds close.",
    date: "May 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Data Protection",
    tag: "Compliance",
    title: "Kenya's Data Protection Act: A Practical Compliance Checklist for Businesses",
    excerpt:
      "The Office of the Data Protection Commissioner has stepped up enforcement. Here is what your business needs to have in place — from privacy notices to data processing agreements.",
    date: "April 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 3,
    category: "Regulatory Compliance",
    tag: "Regulation",
    title: "Navigating the CBK Sandbox: A Guide for Fintech Founders",
    excerpt:
      "The Central Bank of Kenya's regulatory sandbox offers fintechs a controlled environment to test products. Understanding the entry criteria and exit conditions is critical to a successful application.",
    date: "April 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Intellectual Property",
    tag: "IP & Tech",
    title: "Protecting Your SaaS Product in Africa: Trademarks, Copyrights & Contracts",
    excerpt:
      "Software IP protection in Africa requires layering multiple legal instruments. A single copyright registration is rarely enough — here is how to build a defensible IP strategy across key markets.",
    date: "March 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 5,
    category: "Corporate Transactions",
    tag: "M&A",
    title: "Cross-Border M&A in East Africa: Key Legal Considerations for Investors",
    excerpt:
      "From foreign ownership restrictions in regulated sectors to multi-jurisdictional antitrust filings, cross-border deals in East Africa carry distinct legal risk profiles that require early-stage planning.",
    date: "March 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    category: "Data Protection",
    tag: "Compliance",
    title: "AI Tools in the Workplace: Managing Employee Data Privacy Obligations",
    excerpt:
      "As businesses adopt AI-powered HR and productivity tools, questions around lawful basis for processing, employee consent, and cross-border data transfers are becoming increasingly urgent for legal and HR teams.",
    date: "February 2025",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = ["All", "Corporate Transactions", "Data Protection", "Regulatory Compliance", "Intellectual Property"];

const tagColors: Record<string, string> = {
  "M&A": "bg-blue-100 text-blue-800",
  "Compliance": "bg-emerald-100 text-emerald-800",
  "Regulation": "bg-amber-100 text-amber-800",
  "IP & Tech": "bg-purple-100 text-purple-800",
};

const categoryAccent: Record<string, string> = {
  "Data Protection": "bg-emerald-400",
  "Regulatory Compliance": "bg-amber-400",
  "Intellectual Property": "bg-purple-400",
  "Corporate Transactions": "bg-[#0A2342]",
};

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? insights
      : insights.filter((i) => i.category === activeCategory);

  const featured = filtered.find((i) => i.featured) ?? filtered[0];
  const rest = filtered.filter((i) => i.id !== featured?.id);

  return (
    <>
      <Navbar />

      {/* Fixed right blue border */}
      <div className="fixed inset-y-0 right-0 w-1 bg-[#0A2342] z-40 pointer-events-none" />

      {/* ── HERO ── */}
      <section className="w-full relative overflow-hidden text-white" style={{ minHeight: "560px" }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Law-Photo-7.webp"
            alt="Sahihi Legal Insights"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Layered overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/50 to-black/15" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        {/* Content pinned to bottom */}
        <div
          className="relative z-20 max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-end"
          style={{ minHeight: "560px", paddingBottom: "72px" }}
        >
          {/* Eyebrow with gold rule */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-amber-400" />
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold">
              Legal Insights
            </p>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] max-w-3xl"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              textShadow: "0 2px 24px rgba(0,0,0,0.5)",
            }}
          >
            Clarity on the Law.
            <br />
            <span className="italic font-normal text-white/85">
              Strategy for Business.
            </span>
          </h1>

          {/* Sub-row: description + divider + stat */}
          <div className="mt-7 flex flex-col sm:flex-row sm:items-end flex-wrap gap-6">
            <p className="text-gray-200 text-base leading-relaxed max-w-lg">
              Practical legal commentary on corporate law, compliance, data protection
              and technology  written for founders, investors and business leaders
              operating in Africa and beyond.
            </p>
            <div className="hidden sm:block w-px h-14 bg-white/20 flex-shrink-0" />
            <div className="flex gap-8 flex-shrink-0">
              <div>
                <p
                  className="text-4xl font-bold text-white leading-none"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  6
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/45 mt-1.5">
                  Insights Published
                </p>
              </div>
              <div>
                <p
                  className="text-4xl font-bold text-white leading-none"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  4
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/45 mt-1.5">
                  Practice Areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="w-full bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex gap-3 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition border ${
                activeCategory === cat
                  ? "bg-[#0A2342] text-white border-[#0A2342]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#0A2342] hover:text-[#0A2342]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="w-full bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">

          {/* FEATURED INSIGHT */}
          {featured && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-amber-400" />
                <p className="text-xs uppercase tracking-[0.25em] text-amber-600 font-semibold">
                  Featured Insight
                </p>
              </div>
              <div className="bg-[#0A2342] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-xl">
                <div className="lg:col-span-3 p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColors[featured.tag] ?? "bg-gray-200 text-gray-700"}`}>
                        {featured.tag}
                      </span>
                      <span className="text-blue-300 text-xs">{featured.category}</span>
                    </div>
                    <h2
                      className="text-3xl md:text-4xl font-bold text-white leading-snug mb-5"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{featured.date}</span>
                      <span>·</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-white text-sm font-semibold border border-white/30 rounded-full px-5 py-2 hover:bg-white hover:text-[#0A2342] transition cursor-pointer">
                      Read Insight
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* Decorative right panel */}
                <div className="hidden lg:flex lg:col-span-2 items-center justify-center bg-[#0d2e56] p-14">
                  <div className="text-center">
                    <div
                      className="text-8xl font-bold text-white opacity-[0.06] leading-none select-none"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      LAW
                    </div>
                    <div className="mt-6 space-y-3">
                      {["Corporate", "Compliance", "Strategy", "Africa"].map((word) => (
                        <div key={word} className="text-xs tracking-[0.3em] text-blue-300 uppercase">
                          {word}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 w-8 h-px bg-amber-400 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INSIGHTS GRID */}
          {rest.length > 0 && (
            <>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-6 h-px bg-[#0A2342]/30" />
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
                  More Insights
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((insight) => (
                  <article
                    key={insight.id}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col overflow-hidden cursor-pointer hover:-translate-y-1"
                  >
                    <div className={`h-[3px] w-full ${categoryAccent[insight.category] ?? "bg-[#0A2342]"}`} />
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColors[insight.tag] ?? "bg-gray-100 text-gray-600"}`}>
                          {insight.tag}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-[#0A2342] leading-snug mb-3 group-hover:text-blue-800 transition-colors"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {insight.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                        {insight.excerpt}
                      </p>
                      <div className="mt-6 flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                        <div className="flex gap-3">
                          <span>{insight.date}</span>
                          <span>·</span>
                          <span>{insight.readTime}</span>
                        </div>
                        <span className="text-[#0A2342] font-semibold group-hover:underline text-xs flex items-center gap-1">
                          Read
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg">No insights in this category yet.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-[#0A2342] font-semibold underline text-sm"
              >
                View all insights
              </button>
            </div>
          )}

          {/* CTA BANNER */}
          <div className="mt-16 bg-[#0A2342] rounded-2xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <div className="w-6 h-px bg-amber-400" />
                <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Get Advice</p>
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Need legal advice on a specific issue?
              </h3>
              <p className="text-blue-200 text-sm mt-1">
                Our team is available for consultations across all practice areas.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-white text-[#0A2342] px-8 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition"
            >
              Book a Free Consultation
            </Link>
          </div>

        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#0A2342] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold">Sahihi Legal</h3>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                A digitally-driven African business law firm helping startups,
                investors, and international businesses operate with confidence
                in Kenya and across global markets.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {["/", "/about", "/services", "/insights", "/blogs", "/contact"].map((href, i) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-white transition capitalize">
                      {["Home", "About", "Services", "Insights", "Blogs", "Contact"][i]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  ["LinkedIn", "https://www.linkedin.com/company/sahihi-legal"],
                  ["X (Twitter)", "https://twitter.com/SahihiLegal"],
                  ["YouTube", "https://www.youtube.com/@SahihiLegal"],
                  ["WhatsApp", "https://wa.me/254737776749"],
                ].map(([name, href]) => (
                  <li key={name}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{name}</a>
                  </li>
                ))}
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