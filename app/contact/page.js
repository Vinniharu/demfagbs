'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What loan amounts are available?',
      a: 'We offer structured credit from ₦100,000 to ₦5,000,000 for individual traders and MSMEs. Group and cooperative lending can be structured differently based on collective requirements.',
    },
    {
      q: 'How quickly can I receive my loan after applying?',
      a: 'Our credit assessment team operates with a 48–72 hour turnaround from receipt of complete documentation. Many applications are assessed and approved faster for returning borrowers.',
    },
    {
      q: 'What documents do I need to apply?',
      a: 'For individual traders: a valid government ID, proof of address, and evidence of business activity (3-month bank statement or daily sales record). For MSMEs: business registration documents, 6-month bank statement, and a brief business profile.',
    },
    {
      q: 'Do I need collateral to get a loan?',
      a: 'Collateral requirements depend on loan size and risk profile. We offer both secured and guarantor-backed credit options. For smaller working capital loans, collateral may not be required.',
    },
    {
      q: 'What are your interest rates and repayment terms?',
      a: 'Interest rates are risk-adjusted and competitive, with repayment tenors from 7 to 90 days aligned to your business cash flow. Full pricing is disclosed transparently before loan agreement.',
    },
    {
      q: 'Which areas do you currently serve?',
      a: 'We are actively serving clients along the Lagos-Ibadan Expressway corridor — including Magboro, Arepo, Mowe, Ibafo, Ofada, and surrounding communities in Ogun State. Lagos expansion is actively underway.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-slate-950 py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-600/15 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 mx-auto">
            We&apos;re Ready to Help
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Touch
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-6 max-w-2xl leading-relaxed mx-auto">
            Whether you&apos;re a business owner looking for financing or a partner interested in working with us, we invite you to reach out through our direct channels or visit our office.
          </p>
        </div>
      </section>

      {/* DIRECT CHANNELS SECTION */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Direct Channels</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">How to Reach Us</h3>
            <p className="text-base text-slate-500 mt-4 leading-relaxed">
              Our team is available during business hours to answer questions, guide you through credit requirements, and discuss customized financing solutions.
            </p>
          </div>

          {/* 3 Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Office */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col items-start shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="font-extrabold text-slate-900 text-xl mb-2">Office Address</div>
              <div className="text-sm text-slate-600 leading-relaxed">
                No. 3, Ifelodun Avenue, Off Magboro Road,<br />
                Beside Wise Buyers Supermarket,<br />
                Magboro, Ogun State, Nigeria.
              </div>
            </div>

            {/* Phone */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col items-start shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="font-extrabold text-slate-900 text-xl mb-2">Phone Number</div>
              <a href="tel:08023157017" className="text-emerald-700 font-extrabold text-xl hover:underline mb-1">0802 315 7017</a>
              <div className="text-xs text-slate-500 font-medium">Mon–Fri: 8AM–5PM · Sat: 9AM–2PM</div>
            </div>

            {/* Email */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col items-start shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="font-extrabold text-slate-900 text-xl mb-2">Email Address</div>
              <a href="mailto:demfagbsglobal@gmail.com" className="text-emerald-700 font-bold text-base hover:underline break-all mb-1">demfagbsglobal@gmail.com</a>
              <div className="text-xs text-slate-500 font-medium">Response within 24 business hours</div>
            </div>
          </div>

          {/* Office Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-6 lg:p-10">
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-800 relative aspect-video">
                <Image src="/shop.jpg" alt="Demfagbs Global Finance Office — Magboro, Ogun State" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-[10px] font-bold uppercase text-emerald-300 tracking-widest">Our Headquarters</div>
                  <div className="text-sm font-bold">Magboro, Ogun State</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 text-white">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Visit Our Office</span>
              <h4 className="text-2xl font-extrabold text-white tracking-tight mt-1 mb-4">Dedicated to Personal Relationship Banking</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                We welcome our clients and trade partners to visit our Magboro branch. Our relationship managers are ready to discuss your business capital requirements in person.
              </p>
              {/* <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Connect With Us</div>
                <div className="flex items-center gap-3">
                  {['LinkedIn', 'Facebook', 'Instagram', 'X'].map((s, si) => (
                    <div key={si} className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all cursor-pointer">
                      {s.charAt(0)}
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Common Questions</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all ${isOpen ? 'bg-white border-emerald-300/60 shadow-md' : 'bg-white border-slate-200/80'}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-slate-900 text-base">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}