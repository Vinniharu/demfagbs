import Link from 'next/link';

export const metadata = {
  title: 'Business Model | Demfagbs Global Finance & Co. Ltd',
  description: 'How Demfagbs Global Finance operates — our microfinance lending model, revenue structure, and key financial milestones for building a responsible, growing loan portfolio.',
};

export default function BusinessModel() {
  const milestones = [
    {
      phase: 'Near-Term',
      heading: '₦400 Million Total Debt',
      desc: 'Build balance sheet toward ₦400 million in total debt — establishing a proven track record, strong credit governance, and a growing loan portfolio in Ogun State.',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      status: 'In Progress',
      accent: 'emerald',
    },
    {
      phase: 'Short-Term',
      heading: '₦1 Billion Debt · ₦800M Loans',
      desc: 'Scale to ₦1 billion in total debt with a ₦800 million active loan portfolio — demonstrating consistent repayment rates and portfolio quality to attract institutional funders.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      status: '2026 Target',
      accent: 'teal',
    },
    {
      phase: 'Medium-Term',
      heading: '20,000+ MSMEs Served',
      desc: 'Disburse working capital loans to over 20,000 MSMEs across Ogun State. Expand branch presence into Lagos State and initiate the Oyo State footprint.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      status: '2027 Target',
      accent: 'slate',
    },
    {
      phase: 'Long-Term',
      heading: 'Microfinance Bank License',
      desc: 'Pursue acquisition of a full Microfinance Bank license from the Central Bank of Nigeria — unlocking a broader suite of deposit and credit products for our clients.',
      icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
      status: '2029 Milestone',
      accent: 'emerald',
    },
    {
      phase: 'Vision 2031',
      heading: 'Multi-State Physical Presence',
      desc: 'Establish physical branches in Lagos, Ogun, and Oyo States. Achieve ₦30 billion in debt capacity and ₦25 billion in loans disbursed — becoming a recognized name in Southwest Nigeria microfinance.',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      status: '2031 Vision',
      accent: 'teal',
    },
  ];

  const revenues = [
    { title: 'Interest Income', desc: 'Earned on short-term working capital and MSME loans across 7-to-90-day tenors.', pct: 'Primary Revenue Stream' },
    { title: 'Processing & Management Fees', desc: 'Standardized credit processing, documentation, and management fees on each facility extended.', pct: 'Supplementary Revenue' },
    { title: 'Late Repayment Penalties', desc: 'Risk-adjusted penalty structure for delayed repayments, incentivizing timely loan servicing.', pct: 'Risk Recovery' },
    { title: 'Investment Income', desc: 'Returns on fixed debt investments, treasury placements, and cooperative management commissions.', pct: 'Diversified Returns' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-slate-950 py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-emerald-600/15 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
            How We Operate
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Business Model
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-6 max-w-2xl leading-relaxed">
            A disciplined microfinance lending model — building our balance sheet responsibly while extending credit to underserved MSMEs across Ogun State and neighboring regions.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">How We Work</h2>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                Responsible Lending, Sustainable Growth
              </h3>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  Demfagbs Global Finance operates a disciplined microfinance lending model — building our balance sheet responsibly while extending credit to underserved MSMEs across Ogun State and neighboring regions. Our approach balances growth with prudent risk management, supported by an experienced leadership team with deep banking backgrounds.
                </p>
                <p>
                  We raise debt capital from individual investors, institutional partners, and development finance institutions to fund our loan portfolio. This capital is then deployed as structured working capital and MSME credit — generating interest income that sustains our operations and delivers returns to capital providers.
                </p>
                <p>
                  Our proprietary GRUBIES banking software, combined with Credit Registry integration, allows for rapid underwriting, precise risk assessment, and real-time loan portfolio monitoring — giving us the governance infrastructure to scale responsibly.
                </p>
              </div>
            </div>

            {/* Revenue Structure */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Revenue Structure</h3>
              {revenues.map((r, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-slate-900 text-sm">{r.title}</h4>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full uppercase tracking-wider">{r.pct}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY FINANCIAL MILESTONES */}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Milestone Progression</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Key Financial Milestones</h3>
            <p className="text-base text-slate-500 mt-4 leading-relaxed">
              A structured, stage-by-stage growth trajectory — each phase building on the last to create a resilient, scalable microfinance institution.
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className={`p-8 lg:p-10 rounded-3xl border grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
                m.accent === 'emerald' ? 'bg-white border-emerald-200/60' :
                m.accent === 'teal' ? 'bg-white border-teal-200/60' :
                'bg-white border-slate-200/80'
              }`}>
                <div className="lg:col-span-1 flex items-center gap-4 lg:flex-col lg:items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 ${
                    m.accent === 'emerald' ? 'bg-emerald-600' :
                    m.accent === 'teal' ? 'bg-teal-700' :
                    'bg-slate-800'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={m.icon} />
                    </svg>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{m.phase}</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">{m.heading}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
                <div className="lg:col-span-3 flex lg:justify-end">
                  <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest ${
                    m.status === 'In Progress' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                    m.status.includes('2026') ? 'bg-teal-50 text-teal-800 border border-teal-200' :
                    m.status.includes('2029') ? 'bg-slate-100 text-slate-700 border border-slate-200' :
                    'bg-slate-900 text-white border border-slate-800'
                  }`}>
                    {m.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR RELATIONS CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
            Interested in Partnering or Investing?
          </h3>
          <p className="text-emerald-100 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            We are actively seeking strategic investors and debt capital providers who share our vision of financial inclusion across Southwest Nigeria.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-extrabold text-sm bg-white text-emerald-800 hover:bg-emerald-50 shadow-xl shadow-emerald-900/30 transition-all hover:-translate-y-0.5"
          >
            Request Our Investor Pack
          </Link>
        </div>
      </section>
    </div>
  );
}
