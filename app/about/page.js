import Link from 'next/link';

export const metadata = {
  title: 'About Us | Demfagbs Global Finance & Co. Ltd',
  description: 'Learn about Demfagbs Global Finance — our founding story, mission, vision, values, and geographic expansion plan across Ogun, Lagos, and Oyo States.',
};

export default function About() {
  const values = [
    {
      title: 'Integrity',
      desc: 'We operate with full transparency, accountability, and ethical standards in every transaction and client relationship.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
      title: 'Accessibility',
      desc: 'We meet MSMEs where they are — in markets, shops, and communities — making credit easy to access without unnecessary barriers.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
      title: 'Growth-Focused',
      desc: 'Our success is fundamentally tied to our clients\' success. Every loan we make is designed to create real, measurable business growth.',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
    {
      title: 'Community Impact',
      desc: 'We invest in the regions we serve. From Magboro to Mowe, our work strengthens local economies and creates employment opportunities.',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  const regions = [
    { name: 'Ogun State', status: 'Active', color: 'emerald', desc: 'Our primary operational base. Active across Magboro, Arepo, Mowe, Ibafo, and Ofada.' },
    { name: 'Lagos State', status: 'Expanding', color: 'teal', desc: 'Active expansion plan underway to establish a physical presence and serve Lagos MSMEs.' },
    { name: 'Oyo State', status: 'Planned', color: 'slate', desc: 'Planned medium-term expansion to bring our services to Oyo State enterprises and traders.' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-slate-950 py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-emerald-600/15 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
            Our Story & Identity
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            About Demfagbs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Global Finance
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-6 max-w-2xl leading-relaxed">
            A Nigerian microfinance institution built to close the credit gap — empowering MSMEs, market traders, and small businesses with the capital they need to grow.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Our Story</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Built to Solve a Simple but Persistent Problem
            </h3>
            <div className="space-y-5 text-base text-slate-600 leading-relaxed">
              <p>
                Demfagbs Global Finance & Co. Ltd was founded to solve a simple but persistent problem: too many micro, small, and medium-scale enterprises across Nigeria — particularly in Ogun State — lack access to the credit they need to grow. We exist to close that gap with responsible, structured, and accessible lending.
              </p>
              <p>
                Our founders recognized that traditional commercial banks — though well-capitalized — are structurally ill-equipped to serve the millions of Nigerian traders, artisans, and small business owners who drive local economies. The documentation requirements are too cumbersome, the timelines too long, and the loan sizes too large for the typical working-capital need of an MSME.
              </p>
              <p>
                By combining deep banking expertise with deep community knowledge, Demfagbs bridges this gap — offering structured, right-sized credit with fast turnarounds, fair pricing, and genuine client support. We launched operations in H2 2025, disbursing over ₦2.1 million in our first 48 hours and building a growing portfolio across the Lagos-Ibadan Expressway corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Purpose & Direction</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Mission & Vision</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-600/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Mission</h4>
              <p className="text-base text-slate-600 leading-relaxed">
                To provide accessible, responsible financial solutions that empower MSMEs to grow, create jobs, and strengthen local economies.
              </p>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest">Why We Exist</span>
              </div>
            </div>

            {/* Vision */}
            <div className="p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-extrabold text-white mb-4 tracking-tight">Our Vision</h4>
              <p className="text-base text-slate-300 leading-relaxed">
                To become a leading microfinance institution in Nigeria, recognized for reliability, integrity, and impact in underserved communities.
              </p>
              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">Where We Are Going</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">What Guides Us</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 border border-emerald-600/20 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={v.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{v.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE OPERATE */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        <div className="absolute right-0 top-0 w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Geographic Presence</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">Where We Operate</h3>
            <p className="text-base text-slate-300 mt-4 leading-relaxed">
              Our operations are currently centered in Ogun State, with an active expansion plan to establish a physical presence in Lagos State and, ultimately, Oyo State — bringing our lending services closer to the communities that need them most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((r, i) => (
              <div key={i} className={`p-8 rounded-3xl border backdrop-blur-md ${
                r.color === 'emerald' ? 'bg-emerald-600/20 border-emerald-500/30' :
                r.color === 'teal' ? 'bg-teal-600/10 border-teal-500/20' :
                'bg-white/5 border-white/10'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{r.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    r.color === 'emerald' ? 'bg-emerald-500 text-white' :
                    r.color === 'teal' ? 'bg-teal-500 text-white' :
                    'bg-slate-700 text-slate-300'
                  }`}>
                    {r.status}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-400 max-w-lg">
              Our primary focus is the Lagos-Ibadan Expressway commercial corridor — including Magboro, Arepo, Mowe, Ibafo, and Ofada — where we have deep community relationships and proven demand.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:from-emerald-400 hover:to-teal-300 shadow-xl shadow-emerald-900/30 transition-all whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}