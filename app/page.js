'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('microloans');

  const services = {
    microloans: {
      title: 'Microloans & MSME Financing',
      icon: '💰',
      description: 'Loan amounts ranging from ₦100,000 to ₦5,000,000',
      features: [
        'Short-term credit solutions (7-90 days)',
        'Working capital for business growth',
        'Quick processing and disbursement',
        'Competitive interest rates'
      ]
    },
    savings: {
      title: 'Savings Mobilization',
      icon: '🏦',
      description: 'Cooperative society savings structure',
      features: [
        'Secure deposit management',
        'Competitive returns on savings',
        'Financial security for your future',
        'Easy access to your funds'
      ]
    },
    advisory: {
      title: 'Financial Advisory',
      icon: '📊',
      description: 'Expert guidance for your business',
      features: [
        'Customer education programs',
        'Business advisory services',
        'Financial literacy training',
        'Strategic business consultation'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden py-8 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center text-white">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <span className="text-emerald-200 text-sm font-semibold">Precision Financing for Your Growth</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
                DEMFAGBS
                <span className="block text-emerald-200 mt-2">Global Finance</span>
              </h1>

              {/* Subtitle */}
              <p className="text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Your trusted microfinance partner in Nigeria
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link
                  href="/contact"
                  className="bg-white text-emerald-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More About Us
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">₦10M</div>
                  <p className="text-emerald-200 text-sm">Disbursed in First 48 Hours</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">100+</div>
                  <p className="text-emerald-200 text-sm">Active Customers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">27+</div>
                  <p className="text-emerald-200 text-sm">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose DEMFAGBS Global Finance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring professional excellence, rapid service delivery, and deep community focus to every financial solution we provide.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🏆
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Excellence</h3>
              <p className="text-gray-700">
                Led by seasoned banking professionals with over 27 years of combined experience from top-tier institutions including First Bank, Zenith Bank, and Ecobank.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapid Service Delivery</h3>
              <p className="text-gray-700">
                Within our first 48 hours of operation, we successfully disbursed ₦2.1 million in loans to support local businesses and entrepreneurs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🏘️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Focus</h3>
              <p className="text-gray-700">
                Strategically positioned to serve MSMEs, market traders, artisans, and individuals along the Lagos-Ibadan Expressway corridor.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                ✅
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Fully licensed as a Money Lender and Cooperative in Ogun State, ensuring complete regulatory compliance and transparent operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help businesses at every stage of growth
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(services).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === key
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{services[key].icon}</span>
                  {services[key].title}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{services[activeTab].icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{services[activeTab].title}</h3>
                <p className="text-xl text-gray-600">{services[activeTab].description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {services[activeTab].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Services</h3>
              <ul className="space-y-3">
                {[
                  'Loan structuring and restructuring',
                  'Business re-engineering',
                  'Debt management solutions',
                  'Project finance',
                  'Property sales and development consultation'
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Our Impact in Numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold">₦2.1 Million</div>
                  <p className="text-emerald-100">Disbursed in first 48 hours</p>
                </div>
                <div>
                  <div className="text-4xl font-bold">50+ Customers</div>
                  <p className="text-emerald-100">Currently serving and growing</p>
                </div>
                <div>
                  <div className="text-4xl font-bold">₦300 Million</div>
                  <p className="text-emerald-100">Projected loan book growth within 12 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Trajectory */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Growth Trajectory
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear roadmap to becoming Southwest Nigeria&apos;s leading microfinance institution
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  year: '2025',
                  title: 'Foundation Building',
                  description: 'Building balance sheet to ₦400 million, establishing strong community presence',
                  color: 'emerald'
                },
                {
                  year: '2026-2027',
                  title: 'Expansion Phase',
                  description: 'Scaling to ₦1 billion with ₦800 million loan portfolio, targeting 20,000+ MSMEs',
                  color: 'blue'
                },
                {
                  year: '2029',
                  title: 'Advanced Operations',
                  description: 'Acquiring Microfinance License, projecting ₦30 billion in debt, ₦8 billion in interest income',
                  color: 'purple'
                },
                {
                  year: '2031',
                  title: 'Regional Presence',
                  description: 'Physical presence across Lagos, Ogun, and Oyo State, leading microfinance institution',
                  color: 'orange'
                }
              ].map((phase, idx) => (
                <div key={idx} className="relative">
                  <div className={`bg-gradient-to-br from-${phase.color}-50 to-${phase.color}-100 rounded-2xl p-8 h-full border border-${phase.color}-200`}>
                    <div className={`text-${phase.color}-600 font-bold text-xl mb-4`}>{phase.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                    <p className="text-gray-700 text-sm">{phase.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;DEMFAGBS Global Finance understood my business needs immediately. Their quick processing helped me expand my trading business along the Lagos-Ibadan corridor.&quot;
              </p>
              <div className="font-semibold text-gray-900">Market Trader, Magboro</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;The professional approach and deep understanding of local business challenges makes DEMFAGBS my preferred financial partner.&quot;
              </p>
              <div className="font-semibold text-gray-900">MSME Owner, Arepo</div>
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
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your financing needs and discover how DEMFAGBS Global Finance can support your business growth and financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Your Loan Today
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-emerald-700 transition-colors inline-flex items-center justify-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}