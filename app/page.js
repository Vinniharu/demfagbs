import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Demfagbs Global Finance & Co. Ltd | MSME Loans & Working Capital, Ogun State',
  description: 'Demfagbs Global Finance provides accessible credit, MSME loans, and working capital financing for small businesses across Ogun, Lagos, and Oyo States.',
};

export default function Home() {
  const stats = [
    { value: '27+', label: 'Years combined leadership banking experience' },
    { value: '20,000+', label: 'MSMEs targeted for loan disbursement across Ogun State' },
    { value: '₦300M', label: 'Working capital sought to scale our lending portfolio' },
    { value: 'Ogun • Lagos • Oyo', label: 'Regional footprint & active expansion plan' },
  ];

  const services = [
    {
      title: 'MSME Loans',
      desc: 'Fast, flexible credit for micro, small, and medium enterprises. Structured credit facilities designed to expand operations, purchase inventory, or invest in equipment.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      href: '/services',
    },
    {
      title: 'Working Capital Finance',
      desc: 'Short-term funding to manage cash flow and inventory. Helping businesses handle day-to-day operational costs, seasonal demand, and supply chain financing.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      href: '/services',
    },
    {
      title: 'Business Advisory',
      desc: 'Practical guidance to help borrowers grow sustainably. Our credit team works closely with you to structure repayment plans and offer sound financial advice.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      href: '/services',
    },
  ];

  const roadmapItems = [
    { year: 'H2 2025', label: 'Launch & Build', desc: 'Build balance sheet toward ₦400 million total debt capacity' },
    { year: '2026', label: 'Scale Operations', desc: 'Scale to ₦1 billion total debt and ₦800 million loan portfolio' },
    { year: '2027', label: 'Mass Disbursement', desc: 'Disburse loans to over 20,000 MSMEs across Ogun State' },
    { year: '2029', label: 'License & Growth', desc: 'Acquire Microfinance Bank license; reach ₦30B debt capacity' },
    { year: '2031', label: 'Regional Leader', desc: 'Full physical presence across Lagos, Ogun, and Oyo States' },
  ];

  const team = [
    { name: 'Ademola Fagbelu', role: 'MD / CEO', initials: 'AF' },
    { name: 'Anna George Oba', role: 'Business Dev.', initials: 'AO' },
    { name: 'Sakariyah Kehinde', role: 'Head Operations', initials: 'SK' },
    { name: 'Lawal Rasak Bolaji', role: 'Head IT', initials: 'LB' },
    { name: 'Patricia Fagbelu', role: 'Deputy MD', initials: 'PF' },
    { name: 'Similoluwa Fagbelu', role: 'Compliance', initials: 'SF' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ============================
          1. HERO SECTION
      ==============================*/}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        {/* Emerald glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-gradient-to-bl from-emerald-600/20 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-emerald-900/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 py-28 w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Licensed Money Lender · Ogun State
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Financing Growth for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Nigeria&apos;s Small Businesses
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Demfagbs Global Finance & Co. Ltd provides accessible credit and financial solutions to micro, small, and medium-scale enterprises (MSMEs) across Ogun State — and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-900/40 hover:from-emerald-400 hover:to-teal-400 hover:-translate-y-0.5 transition-all"
            >
              Apply for a Loan
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-base text-white border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ============================
          2. TRUST STRIP
      ==============================*/}
      <section className="bg-emerald-700 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-2 lg:divide-y-0 lg:divide-x divide-emerald-600/50">
            {stats.map((stat, i) => (
              <div key={i} className={`${i > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''} first:pt-0`}>
                <div className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs text-emerald-100/80 mt-1 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================
          3. WHO WE ARE SNAPSHOT
      ==============================*/}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Right image */}
            <div className="relative order-2 lg:order-2">
              <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative">
                <Image
                  src="/shop.jpg"
                  alt="Demfagbs Global Finance Office, Magboro, Ogun State"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent"></div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-2xl bg-emerald-50 border-4 border-white flex flex-col items-center justify-center shadow-lg">
                <div className="text-2xl font-extrabold text-emerald-700">50+</div>
                <div className="text-[10px] font-bold text-emerald-600 uppercase text-center leading-tight">Clients<br/>Served</div>
              </div>
            </div>

            {/* Left text */}
            <div className="order-1 lg:order-1">
              <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Who We Are</h2>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Closing the Credit Gap for Nigeria&apos;s MSMEs
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Demfagbs Global Finance & Co. Ltd is a Nigerian microfinance institution built to close the credit gap for underserved communities. We provide working capital and structured lending to micro, small, and medium-scale enterprises that traditional banks often overlook — helping them grow, create jobs, and strengthen local economies.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Founded by a team with over 27 combined years of experience at Nigeria&apos;s leading banks — First Bank, Zenith Bank, Ecobank, UBA, and Polaris Bank — we bring institutional-grade expertise to community-level lending.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-600 transition-colors group text-sm"
              >
                Read our full story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          4. HOW WE HELP — 3 COLUMNS
      ==============================*/}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Our Financial Solutions</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              How We Help Your Business
            </h3>
            <p className="text-base text-slate-500 mt-4 leading-relaxed">
              Three core pillars designed to meet MSMEs where they are and support sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 border border-emerald-600/20 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{svc.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                <Link href={svc.href} className="text-xs font-bold text-emerald-700 uppercase tracking-wider hover:text-emerald-600 inline-flex items-center gap-1 group/link">
                  Learn more
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
            >
              View All Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============================
          5. ROADMAP PREVIEW
      ==============================*/}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Growth Trajectory</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Where We Are Headed
            </h3>
            <p className="text-base text-slate-500 mt-4 leading-relaxed">
              By 2029, we project a loan portfolio built on ₦30 billion in total debt capacity and ₦25 billion in loans disbursed to MSMEs — generating ₦8 billion in interest income and ₦4 billion in profit before tax.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-200 via-emerald-500 to-slate-200 mx-20"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {roadmapItems.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-full flex flex-col items-center justify-center mb-4 relative z-10 border-4 border-white shadow-lg ${
                    i === 0 ? 'bg-emerald-600 text-white' :
                    i === 1 ? 'bg-emerald-700 text-white' :
                    i === 2 ? 'bg-slate-900 text-white' :
                    i === 3 ? 'bg-emerald-800 text-white' :
                    'bg-teal-700 text-white'
                  }`}>
                    <span className="font-extrabold text-xs leading-tight">{item.year}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-600 transition-colors group text-sm"
            >
              See our full roadmap
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================
          6. MANAGEMENT TEAM PREVIEW
      ==============================*/}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Our People</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Led by Experienced Banking Professionals
            </h3>
            <p className="text-base text-slate-500 mt-4 leading-relaxed">
              Our leadership team brings decades of combined experience from Nigeria&apos;s leading banks — First Bank, Zenith Bank, Ecobank, UBA, and Polaris Bank — into building a microfinance institution built for MSMEs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 text-xl font-extrabold shadow-md border-4 border-white group-hover:scale-105 transition-transform ${
                  i % 3 === 0 ? 'bg-emerald-600 text-white' :
                  i % 3 === 1 ? 'bg-slate-800 text-white' :
                  'bg-teal-700 text-white'
                }`}>
                  {member.initials}
                </div>
                <div className="font-bold text-slate-900 text-xs leading-tight">{member.name}</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">{member.role}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-600 transition-colors group text-sm"
            >
              Meet the full team
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================
          7. CLOSING CTA BAND
      ==============================*/}
      <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-radial-emerald opacity-50"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
            Get Started Today
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
            Talk to our team about a loan solution built for your business. Fast assessment, fair terms, and funding designed to fuel MSME growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:from-emerald-400 hover:to-teal-300 shadow-2xl shadow-emerald-900/50 transition-all hover:-translate-y-0.5"
          >
            Contact Us
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}