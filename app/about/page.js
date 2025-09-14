export default function About() {
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
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">About DEMFAGBS Global Finance</h1>
          <p className="text-2xl text-white/90 max-w-4xl">
            Driving Financial Inclusion Through Precision Financing
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering MSMEs and Individuals with Accessible Microfinance Solutions</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Welcome to DEMFAGBS Global Finance, your trusted partner in financial inclusion. We are a licensed financing company dedicated to providing microloans and short-term credit to underserved individuals, MSMEs, and traders across the Lagos-Ibadan Expressway corridor. With deep banking experience and local insights, we drive financial inclusion in peri-urban communities, helping businesses grow and thrive.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">₦2.1M</div>
                <p className="text-gray-700">Disbursed within first 48 hours</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-700">Customers currently served</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">27+</div>
                <p className="text-gray-700">Years of banking experience</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Since launching operations in July 2025, we have established ourselves as a trusted financial partner in the Lagos-Ibadan Expressway corridor, leveraging deep banking experience and local market insights to drive meaningful financial inclusion in peri-urban communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 text-2xl mb-6">
                🎯
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To democratize access to financial services by providing precision financing solutions that empower individuals, MSMEs, and traders to grow their businesses, achieve their financial goals, and contribute to economic development in their communities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-6">
                🔭
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To become the leading microfinance institution in Southwest Nigeria, recognized for our commitment to financial inclusion, professional excellence, and sustainable community impact.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-2xl mb-6">
                💎
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span><strong>Integrity:</strong> Highest standards of transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span><strong>Excellence:</strong> Professional service delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span><strong>Community:</strong> Understanding local needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span><strong>Innovation:</strong> Adapting to market dynamics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span><strong>Sustainability:</strong> Long-term value creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Business Model</h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Activities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Disbursing microloans and MSME working capital loans (₦100,000 - ₦5,000,000)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Mobilizing savings through cooperative society structure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Providing customer education and advisory on financial literacy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Maintaining regulatory compliance and transparent reporting</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Sources</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-gray-700">Interest income on short-term loans (7–90 days)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-gray-700">Management and processing fees (3%)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-gray-700">Late repayment penalties (2.5%)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-gray-700">Fixed debt investment income and cooperative commissions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Target Market */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Target Market</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto text-center">
              We proudly serve MSMEs, market traders, artisans, and individuals operating along the Lagos-Ibadan Expressway corridor, including the vibrant communities of Magboro, Arepo, Ibafo, Mowe, and Ofada. These communities represent the entrepreneurial spirit of Nigeria, where hardworking individuals need accessible financial services to grow and sustain their businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Magboro', 'Arepo', 'Ibafo', 'Mowe', 'Ofada', 'Market Traders', 'Artisans', 'MSMEs'].map((market, index) => (
                <span key={index} className="bg-white text-emerald-700 px-4 py-2 rounded-full font-medium shadow-sm">
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Competitive Advantages</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                👥
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Leadership</h3>
              <p className="text-gray-700">
                Over 27 years of banking experience from leading Nigerian financial institutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                📍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Location</h3>
              <p className="text-gray-700">
                Positioned in the heart of the Lagos-Ibadan corridor understanding local dynamics
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                💻
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Integration</h3>
              <p className="text-gray-700">
                GRUBIES Banking Software and Credit Registry integration for efficient operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                ⚖️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Licensed Money Lender and Cooperative in Ogun State ensuring complete compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Traction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Traction and Growth</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 text-center">
              Since launching operations in July 2025 with ₦3 million in equity capital, we have demonstrated remarkable growth:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">₦2.1M</div>
                <p className="text-gray-700">Disbursed in first 48 hours</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-700">Growing customer base</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">₦300M</div>
                <p className="text-gray-700">Target loan book (12 months)</p>
              </div>
            </div>

            {/* Future Outlook */}
            <div className="bg-gray-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Future Outlook</h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Short-term Goals (2025-2026)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Build balance sheet to ₦400 million total debt</li>
                    <li>• Establish strong market presence across target communities</li>
                    <li>• Develop comprehensive customer education programs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Medium-term Objectives (2027-2029)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Scale to ₦1 billion total debt with ₦800 million loan portfolio</li>
                    <li>• Serve over 20,000 MSME customers across Ogun State</li>
                    <li>• Acquire Microfinance License for expanded operations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Long-term Vision (2031)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Establish physical presence in Lagos, Ogun, and Oyo States</li>
                    <li>• Achieve ₦30 billion in debt and ₦25 billion in loans disbursed</li>
                    <li>• Generate ₦8 billion in interest income and ₦4 billion in profit before tax</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Financial Inclusion */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">Our Commitment to Financial Inclusion</h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-white/90 mb-8">
              Financial inclusion is not just our business; it&apos;s our passion. We understand that access to appropriate financial services can transform lives, build businesses, and strengthen communities.
            </p>

            <p className="text-lg text-white/80 mb-12">
              Through our precision financing approach, we are committed to:
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-3">Bridging the Gap</h4>
                <p className="text-white/80">Financial services gap in underserved communities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-3">Supporting Growth</h4>
                <p className="text-white/80">MSMEs that drive local economic development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-3">Educating Communities</h4>
                <p className="text-white/80">Financial literacy for informed decisions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-3">Building Relationships</h4>
                <p className="text-white/80">Sustainable financial partnerships</p>
              </div>
            </div>

            <p className="text-xl font-semibold">
              At DEMFAGBS Global Finance, we believe that every individual and business deserves access to professional financial services. We are proud to be part of the solution, driving financial inclusion one customer at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}