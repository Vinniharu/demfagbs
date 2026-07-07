import Link from 'next/link';

export const metadata = {
  title: 'Impact & Roadmap | Demfagbs Global Finance & Co. Ltd',
  description: 'Our growth roadmap from H2 2025 to 2031 — ₦30 billion in debt capacity, 20,000+ MSMEs served, and a path to becoming a leading microfinance bank in Southwest Nigeria.',
};

export default function Impact() {
  const timeline = [
    {
      year: 'H2 2025',
      title: 'Launch & Foundation',
      color: 'emerald',
      milestones: [
        'Build balance sheet toward ₦400 million total debt',
        'Establish strong market presence across the Lagos-Ibadan Expressway corridor',
        'Deploy GRUBIES banking software and Credit Registry integration',
        'Disburse initial working capital loans to 50+ MSME clients',
      ],
    },
    {
      year: '2026',
      title: 'Scale & Expand',
      color: 'emerald',
      milestones: [
        'Scale to ₦1 billion total debt and ₦800 million active loan portfolio',
        'Expand physical presence and deepen community partnerships in Ogun State',
        'Launch Lagos State expansion and establish first Lagos-area relationships',
        'Develop comprehensive customer education and financial literacy programs',
      ],
    },
    {
      year: '2027',
      title: 'Mass Disbursement',
      color: 'teal',
      milestones: [
        'Disburse loans to over 20,000 MSMEs across Ogun State',
        'Establish physical branch presence in Lagos State',
        'Strengthen cooperative and group lending products for trade associations',
        'Target ₦5 billion in cumulative loans disbursed',
      ],
    },
    {
      year: '2029',
      title: 'License & Leadership',
      color: 'slate',
      milestones: [
        'Acquire a full Microfinance Bank license from the CBN',
        'Reach ₦30 billion in total debt capacity',
        'Achieve ₦25 billion in cumulative loans disbursed to MSMEs',
        'Generate ₦8 billion in interest income annually',
      ],
    },
    {
      year: '2031',
      title: 'Regional Leader',
      color: 'emerald',
      milestones: [
        'Establish full physical branch presence across Lagos, Ogun, and Oyo States',
        'Achieve ₦4 billion in profit before tax',
        'Serve as the leading MSME-focused microfinance institution in Southwest Nigeria',
        'Expand digital lending capabilities for faster, mobile-first disbursements',
      ],
    },
  ];

  const forecast = [
    { value: '₦30 Billion', label: 'Total Debt Capacity', sub: 'Projected by 2029', accent: 'emerald' },
    { value: '₦25 Billion', label: 'Loans Disbursed', sub: 'Cumulative by 2029', accent: 'teal' },
    { value: '₦8 Billion', label: 'Interest Income', sub: 'Annual revenue by 2029', accent: 'emerald' },
    { value: '₦4 Billion', label: 'Profit Before Tax', sub: 'Annual PBT by 2029', accent: 'slate' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-slate-950 py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-gradient-to-br from-emerald-600/15 via-teal-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
            Vision 2025 — 2031
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Our Roadmap &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Long-Term Impact
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-6 max-w-2xl leading-relaxed">
            A clear, staged growth path — from building our first loan portfolio in Ogun State to becoming a licensed, multi-state microfinance institution serving over 20,000 MSMEs.
          </p>
        </div>
      </section>

      {/* ROADMAP TIMELINE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Growth Trajectory</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Roadmap Timeline</h3>
          </div>

          <div className="relative">
            {/* Vertical connector */}
            <div className="hidden lg:block absolute left-[calc(16.6%-1px)] top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-600 to-slate-800"></div>

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Year node */}
                  <div className="lg:col-span-2 flex items-center lg:flex-col lg:items-center gap-4">
                    <div className={`w-20 h-20 rounded-full flex flex-col items-center justify-center text-white font-extrabold relative z-10 shadow-lg border-4 border-white shrink-0 ${
                      item.color === 'emerald' ? 'bg-emerald-600' :
                      item.color === 'teal' ? 'bg-teal-700' :
                      'bg-slate-900'
                    }`}>
                      <span className="text-xs font-extrabold leading-tight text-center px-1">{item.year}</span>
                    </div>
                    <span className="lg:hidden font-extrabold text-slate-900 text-lg">{item.title}</span>
                  </div>

                  {/* Content card */}
                  <div className="lg:col-span-10">
                    <div className={`p-8 rounded-3xl border ${
                      item.color === 'emerald' ? 'bg-emerald-50/60 border-emerald-200/60' :
                      item.color === 'teal' ? 'bg-teal-50/60 border-teal-200/60' :
                      'bg-slate-50 border-slate-200/80'
                    }`}>
                      <h4 className="hidden lg:block text-xl font-extrabold text-slate-900 tracking-tight mb-5">{item.title}</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.milestones.map((m, mi) => (
                          <li key={mi} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-slate-700 leading-relaxed">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2029 FORECAST STATS */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
        <div className="absolute inset-0 bg-grid-white opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">2029 Forecast Snapshot</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Where We Project to Be by 2029
            </h3>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-xl mx-auto">
              These forward-looking projections are based on our staged growth model, current traction, and the depth of MSME demand across Southwest Nigeria. For detailed investor information, contact us to request our investor pack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {forecast.map((f, i) => (
              <div key={i} className={`p-8 rounded-3xl text-center border ${
                f.accent === 'emerald' ? 'bg-emerald-600/20 border-emerald-500/30' :
                f.accent === 'teal' ? 'bg-teal-600/15 border-teal-500/25' :
                'bg-white/5 border-white/10'
              }`}>
                <div className={`text-3xl lg:text-4xl font-extrabold mb-2 ${
                  f.accent === 'emerald' ? 'text-emerald-300' :
                  f.accent === 'teal' ? 'text-teal-300' :
                  'text-white'
                }`}>{f.value}</div>
                <div className="font-bold text-white text-base mb-1">{f.label}</div>
                <div className="text-xs text-slate-400">{f.sub}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:from-emerald-400 hover:to-teal-300 shadow-2xl shadow-emerald-900/40 transition-all hover:-translate-y-0.5"
            >
              Request Investor Information Pack
            </Link>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT NARRATIVE */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Why It Matters</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              The Human Impact Behind the Numbers
            </h3>
            <div className="space-y-5 text-base text-slate-600 leading-relaxed text-left">
              <p>
                Behind every naira disbursed is a market trader who can now restock her stall, a tailor who can upgrade his equipment, or a small food vendor who can afford to meet a bulk order. That is the impact Demfagbs Global Finance is built to create — not just at scale, but one loan at a time.
              </p>
              <p>
                Nigeria has over 39 million MSMEs — yet less than 5% have access to formal credit. By targeting the Lagos-Ibadan Expressway corridor, one of Nigeria&apos;s most commercially active peri-urban zones, we are meeting a massive, underserved demand with structured, fairly priced financial solutions.
              </p>
              <p>
                As we grow our loan portfolio toward our 2031 vision, every expansion milestone translates directly to more jobs created, more businesses sustained, and stronger local economies built from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
