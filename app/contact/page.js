'use client';

import { useState } from 'react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('loan');

  const faqs = [
    {
      question: 'What is the minimum and maximum loan amount?',
      answer: 'We offer loans ranging from ₦100,000 to ₦5,000,000, depending on your business needs and capacity.'
    },
    {
      question: 'How quickly can I receive my loan?',
      answer: 'Our efficient processing system enables disbursement within 48-72 hours of approval, subject to complete documentation.'
    },
    {
      question: 'What are your interest rates?',
      answer: 'Our competitive rates are determined based on loan amount, duration, and risk assessment. Contact us for personalized quotes.'
    },
    {
      question: 'Do you require collateral?',
      answer: 'Collateral requirements depend on loan amount and type. We also offer unsecured loan options for qualified applicants.'
    },
    {
      question: 'Can I apply if my business is new?',
      answer: 'Yes! We support new and existing businesses. Our team will assess your business plan and potential for success.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve the Lagos-Ibadan Expressway corridor, including Magboro, Arepo, Ibafo, Mowe, Ofada, and surrounding areas.'
    }
  ];

  const services = [
    { icon: '💰', title: 'Microloans & MSME Financing', desc: 'Quick loan processing with amounts from ₦100,000 - ₦5,000,000' },
    { icon: '💼', title: 'Business Advisory Services', desc: 'Strategic planning and financial literacy education' },
    { icon: '🏦', title: 'Savings & Investment Services', desc: 'Cooperative savings programs and investment advisory' },
    { icon: '🔧', title: 'Specialized Services', desc: 'Debt management, property development, and project finance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact DEMFAGBS Global Finance</h1>
          <p className="text-2xl text-white/90 max-w-4xl">
            Get in Touch with Nigeria&apos;s Premier Microfinance Partner
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">We&apos;re Here to Help</h2>
              <p className="text-xl text-gray-600">
                Ready to take your business to the next level? Contact us today for a free consultation.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  📍
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
                <p className="text-gray-700">
                  No. 3, Ifelodun Avenue, Off Magboro Road<br />
                  Beside Wise Buyers Supermarket<br />
                  Magboro, Ogun State, Nigeria
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Easily accessible via Lagos-Ibadan Expressway
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  📧
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
                <a href="mailto:demfagbsglobal@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  demfagbsglobal@gmail.com
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  We respond within 24 hours
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  ⏰
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Mon - Fri:</strong> 8:00 AM - 5:00 PM</li>
                  <li><strong>Saturday:</strong> 9:00 AM - 2:00 PM</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
              </div>
            </div>

            {/* Map/Directions */}
            <div className="bg-gray-50 rounded-3xl p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Find Us</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Directions</h4>
                  <p className="text-gray-700 mb-4">
                    Located on Ifelodun Avenue, just off Magboro Road, beside the popular Wise Buyers Supermarket.
                    Easily accessible via public transportation or private vehicle with ample parking available.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• From Lagos: Take Lagos-Ibadan Expressway, exit at Magboro</li>
                    <li>• From Ibadan: Take Lagos-Ibadan Expressway, exit at Magboro</li>
                    <li>• Landmarks: Wise Buyers Supermarket, Magboro Market</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <div className="aspect-video bg-emerald-100 rounded-lg overflow-hidden">
                    <img
                      src="/shop.jpg"
                      alt="DEMFAGBS Global Finance Office Location - Magboro, Ogun State"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-emerald-700 font-medium">Our Office in Magboro, Ogun State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Services We Offer</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How to Apply for a Loan</h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { step: '1', title: 'Initial Consultation', desc: 'Contact us to discuss your financing needs' },
                { step: '2', title: 'Application Submission', desc: 'Submit your application with required documents' },
                { step: '3', title: 'Quick Assessment', desc: 'Rapid assessment within 24-48 hours' },
                { step: '4', title: 'Funds Disbursement', desc: 'Receive funds directly to your account' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Required Documentation Tabs */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Required Documentation</h3>

              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('loan')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'loan'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Individual Loans
                </button>
                <button
                  onClick={() => setActiveTab('msme')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'msme'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  MSME Loans
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8">
                {activeTab === 'loan' ? (
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Valid government-issued ID (National ID, Driver&apos;s License, or International Passport)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Proof of address (utility bill or tenancy agreement)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Bank statement (last 3 months)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Business registration documents (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Proof of income or business income records</span>
                    </li>
                  </ul>
                ) : (
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Certificate of business registration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Valid identification of directors/owners</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Business financial statements</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Bank statements (last 6 months)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Business plan or project proposal</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Collateral documentation (if required)</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership & Investment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
              <p className="text-gray-700 mb-6">
                We welcome partnerships with community organizations, business development agencies, financial advisors, and educational institutions.
              </p>
              <h3 className="font-bold text-gray-900 mb-4">Benefits of Partnership:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Revenue sharing opportunities</li>
                <li>• Professional development and training</li>
                <li>• Access to our customer network</li>
                <li>• Joint marketing and promotional activities</li>
                <li>• Collaborative business development</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Investor Relations</h2>
              <p className="text-gray-700 mb-6">
                We are actively seeking strategic investors and debt capital providers who share our vision of financial inclusion.
              </p>
              <h3 className="font-bold text-gray-900 mb-4">Investment Opportunities:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Debt capital: ₦300 million target</li>
                <li>• Attractive returns on investment</li>
                <li>• Social impact through financial inclusion</li>
                <li>• Professional management team</li>
                <li>• Transparent reporting and governance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Application Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Take the first step towards growing your business. Our team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:demfagbsglobal@gmail.com"
              className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us Now
            </a>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-emerald-700 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Consultation
            </button>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Visit Us Today</h3>
            <p className="text-white/90">
              No. 3, Ifelodun Avenue, Off Magboro Road<br />
              Beside Wise Buyers Supermarket<br />
              Magboro, Ogun State, Nigeria
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}