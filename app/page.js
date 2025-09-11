'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-gray-800 text-lg">DEMFAGBS</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'about', label: 'About' },
                { id: 'process', label: 'Process' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-emerald-200 text-sm font-medium">Your prosperity, Our priority</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                DEMFAGBS
                <span className="block text-emerald-200">Global Finance</span>
                <span className="block text-3xl lg:text-4xl font-medium text-white/90">& Co. Ltd.</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Your trusted financial partner providing fast and flexible loan solutions for individuals, SMEs, and corporate customers in Magboro, Ogun State.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Explore Our Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
                >
                  Contact Us Today
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-3xl p-8 mx-auto">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-emerald-800">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <h3 className="text-2xl font-bold mb-2">Financial Growth</h3>
                      <p className="text-emerald-700">Empowering businesses across Nigeria</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-300 rounded-full opacity-15"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 rounded-full px-4 py-2 mb-4">
              <span className="text-emerald-600 font-medium">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tailored Loan Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive financial solutions designed to help businesses at every stage of growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                title: "Weekly Loans",
                description: "Perfect for traders and small businesses with flexible weekly repayment schedules that match your cash flow.",
                features: ["Quick approval", "Flexible terms", "Low interest rates"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Short-term Loans",
                description: "Get quick access to capital for immediate business needs with our fast-track lending process.",
                features: ["24-48 hour approval", "Minimal documentation", "Emergency funding"]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "MSME Loans",
                description: "Comprehensive financing solutions for Micro, Small & Medium Enterprises looking to expand and grow.",
                features: ["Business expansion", "Equipment financing", "Working capital"]
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Business Types */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">We Serve All Business Types</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
              From retail stores and supermarkets to manufacturing and agriculture - whatever your business sector, 
              we have the right financing solution tailored to your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Retail Stores', 'Supermarkets', 'Restaurants', 'Manufacturing', 'Agriculture', 'Clothing', 'Services'].map((business, index) => (
                <span key={index} className="bg-white text-emerald-700 px-4 py-2 rounded-full font-medium shadow-sm">
                  {business}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
                <span className="text-emerald-600 font-medium">Why Choose DEMFAGBS</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Your Success Is Our Priority
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                With years of experience in financial services, we understand the unique challenges faced by Nigerian businesses. 
                Our commitment goes beyond just providing loans - we&apos;re your partners in growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: "⚡", title: "Fast Approval", desc: "Get approved within 24-48 hours" },
                  { icon: "🔄", title: "Flexible Terms", desc: "Repayment options that fit your cash flow" },
                  { icon: "💰", title: "Competitive Rates", desc: "Fair pricing with no hidden fees" },
                  { icon: "📄", title: "Simple Process", desc: "Minimal documentation required" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="w-full h-80 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center text-emerald-800">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold">Trusted by 1000+ Businesses</h3>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">1000+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">₦2B+</div>
                    <div className="text-sm text-gray-600">Loans Disbursed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-100 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 rounded-full px-4 py-2 mb-4">
              <span className="text-emerald-600 font-medium">Simple Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your business loan is easier than ever with our streamlined 4-step process.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", desc: "Complete our simple online application form with your business details.", icon: "📝" },
              { step: "02", title: "Review", desc: "Our expert team quickly assesses your needs and requirements.", icon: "🔍" },
              { step: "03", title: "Approve", desc: "Get approved within 24-48 hours with competitive rates.", icon: "✅" },
              { step: "04", title: "Receive", desc: "Funds are disbursed directly to your business account.", icon: "💳" }
            ].map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-emerald-600 transition-colors">
                    <span className="group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert transition-all">
                      {process.icon}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-emerald-600 mb-2">STEP {process.step}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8">
                    <svg className="w-full h-full text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-emerald-200 font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how we can help take your business to the next level.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Visit Our Office",
                content: "No 3, Ifelodun Avenue, Beside Wise Buyers Supermarkets, Magboro, Ogun State"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Call Us Now",
                content: "08023157017 | 08103046800"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email Us",
                content: "demfagbsglobal@gmail.com"
              }
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <p className="text-white/80">{contact.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Start Your Application Today</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards growing your business. Our team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:08023157017" 
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: 08023157017
              </a>
              <a 
                href="mailto:demfagbsglobal@gmail.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-emerald-700 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <span className="font-bold text-xl">DEMFAGBS Global Finance & Co. Ltd.</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your trusted financial partner providing fast and flexible loan solutions across Nigeria. 
                Empowering businesses to reach their full potential.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">📧</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">📱</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'Services', 'About', 'Process', 'Contact'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Weekly Loans</li>
                <li>Short-term Loans</li>
                <li>MSME Loans</li>
                <li>Business Consultation</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DEMFAGBS Global Finance & Co. Ltd. All rights reserved. | Microfinance Institution</p>
          </div>
        </div>
      </footer>
    </div>
  );
}