"use client";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
const team = [
  {
    name: "Christine Kawira",
    role: "Advocate of the High Court of Kenya",
    founder: true,
    bio: "Christine is the founder of Sahihi Legal and an Advocate of the High Court of Kenya with 3 years post-qualification experience. She built the firm on a conviction that businesses in Africa and beyond deserve world-class legal counsel serving clients from Kenya and across borders with precision, integrity and commercial insight.",
  },
  {
    name: "Eskey Murimi",
    role: "Operations & Systems",
    founder: false,
    bio: "Manages the firm's digital infrastructure, client systems and operational workflows ensuring Sahihi Legal runs efficiently and every client interaction is seamless.",
  },
];
  const values = [
    {
      n: "01",
      title: "Precision",
      desc: "Every legal opinion we deliver is meticulously researched, clearly reasoned and aligned with the specific commercial context of our clients.",
    },
    {
      n: "02",
      title: "Integrity",
      desc: "We hold ourselves to the highest ethical standards transparent in our advice, honest about risks and always acting in our clients' best interests.",
    },
    {
      n: "03",
      title: "Innovation",
      desc: "As a digitally-driven firm, we leverage technology to deliver faster, smarter and more accessible legal services for modern businesses.",
    },
    {
      n: "04",
      title: "Partnership",
      desc: "We don't just advise we become invested in your growth. Your legal challenges are our challenges; your wins are our wins.",
    },
  ];

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

      {/* ── HERO ── */}
      <section className="w-full bg-[#0A2342] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-medium mb-4">
              About Sahihi Legal
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Who We Are
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl font-medium text-blue-200">
              A Modern Law Firm Built for African Businesses and Global markerts
            </h2>
            <p className="mt-6 text-gray-200 text-lg leading-relaxed max-w-xl">
              Sahihi Legal is a digitally-driven law firm supporting startups,
              growing enterprises, investors and international organisations operating
              in Kenya and across global markets.
              <br /><br />
              We combine deep legal expertise with a genuine understanding of
              commercial realities  delivering advice that is precise, practical
              and built to move your business forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#0A2342] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                Work With Us
              </Link>
              <Link
                href="/services"
                className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0A2342] transition"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-lg xl:max-w-xl">
              <Image
                src="/Law-photo-3.jpg"
                alt="Sahihi Legal Team"
                width={650}
                height={750}
                className="rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

   {/* ── OUR STORY ── */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-28">
  <div className="flex flex-col lg:flex-row gap-16 items-end mb-14">
           <div className="flex-1 min-w-0 flex flex-col justify-end">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium mb-5">
                Our Story
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#0A2342] leading-tight max-w-2xl mb-10"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Founded to Serve the<br />
                New Generation of<br />
                African Business & Global Markets.
              </h2>
              <div className="w-12 h-[2px] bg-[#0A2342] opacity-20 mb-10" />
              <p className="text-lg font-normal text-gray-600 leading-relaxed mb-6">
                Sahihi Legal was founded on a simple but powerful conviction: that businesses
                operating in Africa and across global markets deserve world-class legal counsel
                that is not only technically excellent but commercially intelligent. We believe
                legal advisors should do more than manage risk they should help businesses
                seize opportunities, expand with confidence and thrive internationally in an
                increasingly connected world.
              </p>
              <p className="text-lg font-normal text-gray-600 leading-relaxed">
                Too often, legal advice is delivered in isolation from business strategy
                complex, slow and disconnected from what actually matters to a growing company.
                We built Sahihi Legal to be different. From day one, our focus has been on
                understanding your business goals and delivering legal solutions that enable them.
              </p>
            </div>

         <div className="w-full lg:w-[480px] xl:w-[540px] lg:pt-[280px]">
              <div className="w-full rounded-2xl bg-[#0A2342] p-8 flex flex-col gap-4 shadow-2xl">
                <p
                  className="text-white/5 font-bold text-6xl"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  SL
                </p>
              <div className="grid grid-cols-1 gap-3">
                  {[
                   { label: "Founded", value: "2025", sub: "Nairobi, Kenya" },
                   { label: "Approach", value: "Digital-first", sub: "A digital-first legal practice supporting investment, innovation and corporate growth across Africa and cross-border markets" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 border border-white/20 rounded-lg p-3">
                      <span className="text-[10px] tracking-[0.15em] uppercase text-blue-300 font-bold block mb-1">
                        {item.label}
                      </span>
                      <span
                        className="text-white font-bold text-lg block"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {item.value}
                      </span>
                      <span className="text-white/50 text-xs">{item.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Blue pull-quote */}
          <div className="bg-[#0A2342] rounded-xl px-10 py-10">
            <p
              className="text-lg md:text-xl text-blue-200 leading-relaxed"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              We are not just advisors {" "}
              <span className="text-white font-semibold">
                we are strategic partners invested in the long-term success of
                every client we serve.
              </span>{" "}
              That commitment shapes everything we do.
            </p>
        </div>

        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="w-full bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium mb-5">
            What We Stand For
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            These principles guide every engagement, every opinion and every
            relationship we build with our clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.n}
                className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <p
                  className="text-5xl font-bold text-[#0A2342] opacity-[0.07] leading-none mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {v.n}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0A2342] mb-3">
                  {v.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="w-full bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium mb-5">
            The People Behind the Firm
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            A dedicated group of both legal and technical professionals committed to
            delivering exceptional results for our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y md:divide-y-0 divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {team.map((member, i) => (
              <div key={i} className="p-8 bg-white">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full bg-[#0A2342]/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#0A2342] opacity-40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  {member.founder && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#0A2342] px-3 py-1 rounded-full">
                      Founder
                    </span>
                  )}
                </div>
                <p className="text-lg font-bold text-[#0A2342]">{member.name}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SAHIHI ── */}
      <section className="w-full bg-[#0A2342] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-medium mb-5">
            Why Choose Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-12 max-w-2xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What Makes Sahihi Legal Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Digitally Driven",
                desc: "We use technology to streamline every client interaction  from onboarding to document delivery so you get faster, more accessible legal support.",
              },
              {
                title: "Africa-Focused",
                desc: "We understand the unique regulatory, commercial and cultural landscape of doing business in Kenya and across the continent.",
              },
              {
                title: "Business-First Mindset",
                desc: "Our advice is shaped by your commercial goals. We don't just identify legal risks we help you navigate them while moving forward.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/10 rounded-xl p-7 hover:border-white/30 transition"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-3">
                  {item.title}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#0A2342] px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-100 transition text-center"
            >
              Start a Conversation
            </Link>
            <Link
              href="/services"
              className="border border-white/30 px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition text-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#0A2342] text-white border-t border-white/10">
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
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">
                Quick Links
              </h4>
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
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">
                Social
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="https://www.linkedin.com/company/sahihi-legal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
                </li>
                <li>
                  <a href="https://twitter.com/SahihiLegal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">X (Twitter)</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@SahihiLegal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YouTube</a>
                </li>
                <li>
                  <a href="https://wa.me/254737776749" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-4">
                Contact Us
              </h4>
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