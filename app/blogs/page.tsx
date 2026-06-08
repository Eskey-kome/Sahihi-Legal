"use client";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    slug: "why-every-kenyan-business-needs-a-data-protection-officer",
    category: "Data Protection",
    title: "Why Every Kenyan Business Needs a Data Protection Officer in 2025",
    excerpt:
      "The Office of the Data Protection Commissioner is no longer just issuing warnings — enforcement actions are real. We break down who needs a DPO, what they do, and how to appoint one correctly.",
    author: "Sahihi Legal Team",
    date: "May 12, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "what-is-a-shareholders-agreement",
    category: "Corporate Law",
    title: "What Is a Shareholders Agreement and Why Your Startup Needs One Before Day One",
    excerpt:
      "A shareholders agreement is not just a formality. It governs how decisions are made, what happens when a co-founder leaves, and who controls the company in a dispute. Here is what to include.",
    author: "Sahihi Legal Team",
    date: "April 28, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "understanding-nda-kenya",
    category: "Contracts",
    title: "Understanding NDAs in Kenya: What Makes Them Enforceable?",
    excerpt:
      "Not all non-disclosure agreements are created equal. Kenyan courts have set clear standards for enforceability. We walk through what to include, what to avoid, and common mistakes businesses make.",
    author: "Sahihi Legal Team",
    date: "April 10, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "foreign-investment-kenya-legal-checklist",
    category: "Investment Law",
    title: "Setting Up in Kenya as a Foreign Investor: A Legal Checklist",
    excerpt:
      "From entity selection to sector-specific licensing, foreign businesses entering Kenya face a multi-step legal process. This checklist covers the key steps from incorporation to operational readiness.",
    author: "Sahihi Legal Team",
    date: "March 22, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "trademark-registration-kenya",
    category: "Intellectual Property",
    title: "How to Register a Trademark in Kenya: Step by Step",
    excerpt:
      "Your brand name and logo are business assets. Registering a trademark through the Kenya Industrial Property Institute gives you legal protection and the right to stop others from using your marks.",
    author: "Sahihi Legal Team",
    date: "March 5, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "employment-contracts-kenya-what-to-include",
    category: "Employment Law",
    title: "Employment Contracts in Kenya: What Every Employer Must Include",
    excerpt:
      "Under the Employment Act, certain terms are not optional. Many businesses — especially fast-growing startups — use informal agreements that expose them to significant labour disputes down the line.",
    author: "Sahihi Legal Team",
    date: "February 18, 2025",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = [
  "All",
  "Corporate Law",
  "Data Protection",
  "Contracts",
  "Investment Law",
  "Intellectual Property",
  "Employment Law",
];

const categoryColors: Record<string, string> = {
  "Data Protection": "bg-emerald-100 text-emerald-800",
  "Corporate Law": "bg-blue-100 text-blue-800",
  "Contracts": "bg-amber-100 text-amber-800",
  "Investment Law": "bg-indigo-100 text-indigo-800",
  "Intellectual Property": "bg-purple-100 text-purple-800",
  "Employment Law": "bg-rose-100 text-rose-800",
};

const categoryAccent: Record<string, string> = {
  "Data Protection": "bg-emerald-400",
  "Corporate Law": "bg-blue-500",
  "Contracts": "bg-amber-400",
  "Investment Law": "bg-indigo-500",
  "Intellectual Property": "bg-purple-400",
  "Employment Law": "bg-rose-400",
};

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const featured = filtered.find((b) => b.featured) ?? filtered[0];
  const rest = filtered.filter((b) => b.id !== featured?.id);

  return (
    <>
      <Navbar />

      <div className="fixed inset-y-0 right-0 w-1 bg-[#0A2342] z-40 pointer-events-none" />

      {/* HERO */}
      <section className="w-full relative overflow-hidden" style={{ minHeight: "520px" }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Law-Photo-11.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.88) 50%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300 font-semibold mb-5">
            Sahihi Legal Blog
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Law, Explained.<br />
            <span className="italic font-normal">Simply.</span>
          </h1>
          <p className="mt-6 text-gray-200 text-lg leading-relaxed max-w-2xl">
            Plain-language breakdowns of Kenyan and international law for
            founders, business owners and professionals who want to stay
            informed and ahead.
          </p>
          <div className="mt-8 flex gap-4">
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

      {/* CATEGORY FILTER */}
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

      <main className="w-full bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">

          {/* FEATURED POST */}
          {featured && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-amber-400" />
                <p className="text-xs uppercase tracking-[0.25em] text-amber-600 font-semibold">
                  Featured Post
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-700"}`}>
                      {featured.category}
                    </span>
                    <h2
                      className="mt-5 text-3xl md:text-4xl font-bold text-[#0A2342] leading-snug"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-gray-500 text-base leading-relaxed">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
                    <div className="text-xs text-gray-400 flex gap-3">
                      <span>{featured.date}</span>
                      <span>·</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <Link
                      href={`/blogs/${featured.slug}`}
                      className="inline-flex items-center gap-2 bg-[#0A2342] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#0d2e56] transition"
                    >
                      Read Post
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center bg-[#0A2342] p-14">
                  <div className="text-center space-y-5">
                    <div
                      className="text-7xl font-bold text-white opacity-[0.05] select-none"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      BLOG
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      {["Data Protection", "Corporate Law", "IP Law", "Contracts"].map((t) => (
                        <span
                          key={t}
                          className={`text-xs font-semibold px-4 py-1.5 rounded-full ${categoryColors[t] ?? "bg-gray-100 text-gray-500"}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="w-8 h-px bg-amber-400 mx-auto mt-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BLOG GRID */}
          {rest.length > 0 && (
            <>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-6 h-px bg-[#0A2342]/30" />
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
                  More Posts
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((blog) => (
                  <article
                    key={blog.id}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col overflow-hidden hover:-translate-y-1"
                  >
                    <div className={`h-[3px] w-full ${categoryAccent[blog.category] ?? "bg-[#0A2342]"}`} />
                    <div className="p-7 flex flex-col flex-1">
                      <span className={`self-start text-xs font-bold px-3 py-1 rounded-full mb-4 ${categoryColors[blog.category] ?? "bg-gray-100 text-gray-600"}`}>
                        {blog.category}
                      </span>
                      <h3
                        className="text-xl font-bold text-[#0A2342] leading-snug mb-3 group-hover:text-blue-800 transition-colors"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                        {blog.excerpt}
                      </p>
                      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                        <div className="flex gap-3 text-xs text-gray-400">
                          <span>{blog.date}</span>
                          <span>·</span>
                          <span>{blog.readTime}</span>
                        </div>
                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="text-[#0A2342] font-semibold text-xs group-hover:underline flex items-center gap-1"
                        >
                          Read
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg">No posts in this category yet.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-[#0A2342] font-semibold underline text-sm"
              >
                View all posts
              </button>
            </div>
          )}

          {/* CTA BANNER */}
          <div className="mt-16 bg-[#0A2342] rounded-2xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-amber-400" />
                <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Get Advice</p>
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Have a legal question?
              </h3>
              <p className="text-blue-200 text-sm mt-1">
                Our team is happy to help — book a free consultation today.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-white text-[#0A2342] px-8 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition"
            >
              Talk to Us
            </Link>
          </div>

        </div>
      </main>

      {/* FOOTER */}
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
                {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Insights", "/insights"], ["Blogs", "/blogs"], ["Contact", "/contact"]].map(([name, href]) => (
                  <li key={name}><Link href={href} className="hover:text-white transition">{name}</Link></li>
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
                  <li key={name}><a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{name}</a></li>
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