import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Demfagbs Global Finance & Co. Ltd',
  description: 'MSME loans, working capital finance, credit appraisal, and cooperative lending solutions from Demfagbs Global Finance — built for small businesses in Ogun State and beyond.',
};

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'MSME Loans',
      desc: 'Structured credit facilities designed for micro, small, and medium-scale businesses looking to expand operations, purchase inventory, or invest in equipment. We offer flexible loan sizes and repayment schedules tailored to your business cash flow cycle.',
      features: ['Loan amounts from ₦100,000 to ₦5,000,000', 'Short-term tenors from 7 to 90 days', 'Fast assessment within 48–72 hours', 'Flexible repayment structured to cash flow'],
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      accent: 'emerald',
    },
    {
      number: '02',
      title: 'Working Capital Finance',
      desc: 'Short-term funding solutions to help businesses manage day-to-day cash flow, seasonal demand peaks, and operational costs. Designed for traders, market vendors, and small manufacturers who need quick access to working capital.',
      features: ['Rapid disbursement within 48 hours of approval', 'Seasonal and revolving credit options', 'Aligned to daily/weekly trading cycles', 'No unnecessary bureaucratic delays'],
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      accent: 'teal',
    },
    {
      number: '03',
      title: 'Credit Appraisal & Advisory',
      desc: 'Our team works closely with borrowers to assess needs, structure repayment plans, and offer practical financial guidance. We help clients understand their credit profile and build toward larger financing as their business grows.',
      features: ['Free initial credit consultation', 'Business cash flow analysis', 'Repayment plan structuring', 'Financial literacy coaching for borrowers'],
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      accent: 'slate',
    },
    {
      number: '04',
      title: 'Cooperative & Group Lending',
      desc: 'Tailored lending arrangements for cooperative societies and business groups seeking collective access to credit. We work with established trade associations, market groups, and cooperatives to structure group credit facilities.',
      features: ['Group credit facilities for trade associations', 'Collective repayment structures', 'Market cooperative partnerships', 'Savings mobilization through cooperative structure'],
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      accent: 'emerald',
    },
  ];

  const steps = [
    { n: '1', title: 'Apply', desc: 'Submit your loan application at our Magboro office or reach out by phone or email to get started.' },
    { n: '2', title: 'Assessment', desc: 'Our credit team reviews your application and appraises your business cash flow and repayment capacity.' },
    { n: '3', title: 'Approval', desc: 'Receive your loan terms, interest rate, and repayment schedule clearly communicated in writing.' },
    { n: '4', title: 'Disbursement', desc: 'Funds are released directly to your account. Your business grows. We stay in touch.' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-slate-950 py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-br from-emerald-600/15 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
            What We Offer
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Financial Solutions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Built for MSMEs
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-6 max-w-2xl leading-relaxed">
            From short-term working capital to advisory services — every product we offer is built around the real needs of Nigerian small businesses.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start p-8 lg:p-12 rounded-3xl border ${
                  svc.accent === 'emerald' ? 'bg-emerald-50/50 border-emerald-200/60' :
                  svc.accent === 'teal' ? 'bg-teal-50/50 border-teal-200/60' :
                  'bg-slate-50 border-slate-200/80'
                }`}
              >
                {/* Left: number + icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md ${
                    svc.accent === 'emerald' ? 'bg-emerald-600 shadow-emerald-600/20' :
                    svc.accent === 'teal' ? 'bg-teal-600 shadow-teal-600/20' :
                    'bg-slate-800 shadow-slate-900/20'
                  }`}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                    </svg>
                  </div>
                  <span className="text-5xl font-extrabold text-slate-200 tracking-tighter leading-none">{svc.number}</span>
                </div>

                {/* Middle: title + desc */}
                <div className="lg:col-span-6">
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">{svc.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">{svc.desc}</p>
                </div>

                {/* Right: features */}
                <div className="lg:col-span-4">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Key Features</h4>
                  <ul className="space-y-2.5">
                    {svc.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Simple Process</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">How It Works</h3>
            <p className="text-base text-slate-500 mt-4">From application to disbursement — a clear, transparent process designed for MSMEs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-800"></div>

            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-extrabold text-2xl mb-5 relative z-10 shadow-lg border-4 border-white ${
                  i === 0 ? 'bg-emerald-600' :
                  i === 1 ? 'bg-emerald-700' :
                  i === 2 ? 'bg-teal-700' :
                  'bg-slate-900'
                }`}>
                  {step.n}
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-600/20 hover:from-emerald-500 hover:to-teal-600 hover:-translate-y-0.5 transition-all"
            >
              Start Your Application
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
