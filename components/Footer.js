import Link from 'next/link';

export default function Footer() {
  const siteLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/business-model', label: 'Business Model' },
    { href: '/impact', label: 'Impact & Roadmap' },
    { href: '/team', label: 'Management Team' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    { href: '/services', label: 'MSME Loans' },
    { href: '/services', label: 'Working Capital Finance' },
    { href: '/services', label: 'Credit Appraisal & Advisory' },
    { href: '/services', label: 'Cooperative & Group Lending' },
  ];

  const leadership = [
    'Ademola Fagbelu — MD/CEO',
    'Patricia A. Fagbelu — Deputy MD',
    'Anna George Oba — Business Dev.',
    'Sakariyah K. Kehinde — Operations',
    'Lawal Rasak Bolaji — Head IT',
    'Similoluwa B. Fagbelu — Compliance',
    'Oluwanifemi S. Fagbelu — Tech Support',
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2.5 group mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-base">D</span>
              </div>
              <div>
                <div className="font-extrabold text-white text-sm tracking-tight">DEMFAGBS</div>
                <div className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">Global Finance</div>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Providing accessible credit and financial solutions to micro, small, and medium-scale enterprises across Ogun State and beyond.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>No. 3, Ifelodun Ave., Off Magboro Road,<br />Magboro, Ogun State, Nigeria.</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:08023157017" className="hover:text-emerald-400 transition-colors">0802 315 7017</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:demfagbsglobal@gmail.com" className="hover:text-emerald-400 transition-colors">demfagbsglobal@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-emerald-600 group-hover:bg-emerald-400 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <Link href={s.href} className="text-xs text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-emerald-600 group-hover:bg-emerald-400 transition-colors"></span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Our Leadership</h4>
            <ul className="space-y-2.5">
              {leadership.map((name, i) => (
                <li key={i} className="text-xs text-slate-400">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Bar */}
        <div className="pt-8 border-t border-slate-800/60">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                Licensed Money Lender · Ogun State
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                Registered Cooperative Society
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                CAC Incorporated · Nigeria
              </span>
            </div>
            <p className="text-[10px] text-slate-500 text-center lg:text-right">
              © {new Date().getFullYear()} Demfagbs Global Finance & Co. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}