export default function Founder() {
  const experience = [
    {
      period: '2014-2025',
      company: 'First Bank',
      role: 'Principal Manager / Regional Manager',
      achievements: [
        'Promoted to Principal Manager and appointed as Regional Manager, South West 2',
        'Provided strategic leadership covering Ekiti, Ondo, and Osun States',
        'Turned around loss-making region into profitability within one financial year',
        'Overall Best Business Manager, Apapa First Bank (2014)',
        'Top Performing Area Manager/BDO on debit card issuance (2017)'
      ]
    },
    {
      period: '2007-2014',
      company: 'Ecobank',
      role: 'Branch Manager',
      achievements: [
        'Overall Best Branch Manager in Ikeja Area (2007)',
        'Ecobank Deal of the Month Award (July 2005)',
        'Certificate and Managing Director&apos;s letter of commendation',
        'Demonstrated exceptional leadership and customer-focused approach'
      ]
    },
    {
      period: '2000-2007',
      company: 'Zenith Bank',
      role: 'Banking Officer',
      achievements: [
        'Most Outstanding Trainee in Comprehensive Bank Training (2000)',
        'Developed deep expertise in banking operations',
        'Built strong foundation in financial services'
      ]
    },
    {
      period: '1998-2000',
      company: 'Equity Bank Limited',
      role: 'Treasury Officer',
      achievements: [
        'Started illustrious banking career',
        'Gained insights into financial markets and risk management',
        'Developed operational expertise in banking'
      ]
    }
  ];

  const expertise = [
    { icon: '💰', title: 'Treasury Management', desc: 'Deep expertise in treasury operations and liquidity management' },
    { icon: '🤝', title: 'Relationship Management', desc: 'Building strong customer relationships and branch profitability' },
    { icon: '📊', title: 'Regional Management', desc: 'Leading large-scale operations and diverse teams' },
    { icon: '🏦', title: 'Banking Operations', desc: 'Comprehensive understanding of retail and commercial banking' },
    { icon: '⚖️', title: 'Risk Management', desc: 'Strong background in credit risk assessment and portfolio management' },
    { icon: '💸', title: 'Debt Recovery', desc: 'Specialized expertise in debt recovery and portfolio performance' }
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
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Meet Our Founder</h1>
            <h2 className="text-3xl mb-4">Ademola Fagbelu, MBA, FCIB</h2>
            <p className="text-xl text-white/90">Managing Director / Chief Executive Officer</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Professional Image Section */}
            <div className="order-2 lg:order-1">
              <div className="max-w-md mx-auto">
                {/* Image Container */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg">
                  <div className="aspect-[3/4] bg-white rounded-2xl shadow-md overflow-hidden mb-6">
                    <img
                      src="/father.jpg"
                      alt="Ademola Fagbelu - Managing Director / CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Ademola Fagbelu</h3>
                    <p className="text-emerald-600 font-semibold text-lg mb-1">MBA, FCIB</p>
                    <p className="text-gray-600">Managing Director / CEO</p>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-3xl font-bold text-emerald-600">27+</div>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600">FCIB</div>
                      <p className="text-sm text-gray-600">Fellow CIBN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">A Visionary Leader in Nigerian Banking</h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Ademola Fagbelu stands as one of Nigeria&apos;s most accomplished banking professionals, bringing over 27 years of exceptional experience to DEMFAGBS Global Finance. As our Managing Director and CEO, he leads with a vision of transforming financial services delivery in underserved communities across Nigeria.
                </p>

                <p>
                  His remarkable career journey through Nigeria&apos;s top financial institutions - from Equity Bank to Zenith Bank, Ecobank, and First Bank - has equipped him with unparalleled expertise in every facet of banking operations, from treasury management to regional leadership.
                </p>

                <p>
                  At DEMFAGBS Global Finance, Mr. Fagbelu combines his extensive banking experience with a deep commitment to financial inclusion, positioning the company to become a transformational force in Nigerian microfinance.
                </p>
              </div>

              {/* Professional Credentials */}
              <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Professional Credentials</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    MBA, Business Administration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    BSc (Hons) Agricultural Economics, University of Ibadan
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Fellow, Chartered Institute of Bankers (FCIB)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Licensed Banking & Finance Consultant
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Foundation */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Educational Foundation</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 text-2xl mb-6">
                  🎓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Bachelor of Science (Honours) in Agricultural Economics</li>
                  <li>• University of Ibadan - Second Class Upper Division</li>
                  <li>• Master of Business Administration (MBA)</li>
                  <li>• Overall Best Student, CIBN Foundation Program (2004)</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-6">
                  🏆
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Qualifications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Fellowship of The Chartered Institute of Bankers (FCIB)</li>
                  <li>• Practice License from CIBN</li>
                  <li>• Authorized to consult in Banking, Finance & Allied Matters</li>
                  <li>• Continuous professional development commitment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Distinguished Banking Career</h2>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 border-l-4 border-emerald-600">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-emerald-600 font-bold mb-2">{exp.period}</p>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                      <p className="text-gray-700">{exp.role}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-bold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700">{achievement}</span>
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

      {/* Core Expertise */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Core Expertise and Competencies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Awards and Recognition</h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { year: '2017', award: 'Top Performing Area Manager/BDO on Debit Card Issuance', desc: 'With International E-Business Training to Johannesburg, South Africa' },
                { year: '2014', award: 'Overall Best Business Manager', desc: 'Apapa First Bank, 2014 Financial Year' },
                { year: '2007', award: 'Overall Best Branch Manager', desc: 'Ikeja Area Ecobank' },
                { year: '2005', award: 'Ecobank Deal of the Month Award', desc: 'July 2005 with Certificate and MD&apos;s Letter of Commendation' },
                { year: '2004', award: 'Overall Best Student', desc: 'Foundation Program, Chartered Institute of Bankers of Nigeria' },
                { year: '2000', award: 'Most Outstanding Trainee', desc: 'Comprehensive Bank Training, Zenith Bank' }
              ].map((award, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                  <div className="flex items-start">
                    <div className="bg-emerald-600 text-white rounded-full px-3 py-1 text-sm font-bold mr-4">
                      {award.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{award.award}</h3>
                      <p className="text-gray-700 text-sm">{award.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Leadership Philosophy</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 text-center">
              As a self-motivated and strategically focused leader, Mr. Fagbelu believes in the power of financial inclusion to transform lives and communities. His leadership philosophy is built on:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Strategic Vision',
                  desc: 'The ability to see beyond immediate challenges and develop comprehensive roadmaps for sustainable growth and profitability.'
                },
                {
                  title: 'People Development',
                  desc: 'A commitment to developing talent and building high-performing teams that deliver exceptional results.'
                },
                {
                  title: 'Customer-Centricity',
                  desc: 'An unwavering focus on understanding and meeting customer needs through innovative financial solutions.'
                },
                {
                  title: 'Operational Excellence',
                  desc: 'A dedication to maintaining the highest standards of operational efficiency and regulatory compliance.'
                },
                {
                  title: 'Community Impact',
                  desc: 'A belief that financial institutions have a responsibility to contribute positively to the communities they serve.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision for DEMFAGBS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Vision for DEMFAGBS Global Finance</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12">
              Under Mr. Fagbelu&apos;s leadership, DEMFAGBS Global Finance is positioned to become a transformational force in Nigerian microfinance. His vision encompasses:
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Immediate Goals</h3>
                <p className="text-gray-700">
                  Building a robust microfinance platform that serves the underserved communities along the Lagos-Ibadan corridor with precision and professionalism.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medium-term Objectives</h3>
                <p className="text-gray-700">
                  Scaling operations to reach thousands of MSMEs and individuals, providing them with the financial tools needed for sustainable growth.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-term Vision</h3>
                <p className="text-gray-700">
                  Establishing DEMFAGBS Global Finance as the leading microfinance institution in Southwest Nigeria, recognized for innovation, impact, and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Banking */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Beyond Banking: Comprehensive Business Solutions</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 text-center">
              Mr. Fagbelu&apos;s expertise extends beyond traditional banking to encompass:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Business advisory and strategic consulting',
                'Equity investment and portfolio management',
                'Loan structuring and restructuring',
                'Business re-engineering and transformation',
                'Funds intermediation and debt management',
                'Project finance and development',
                'Property sales and development'
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <svg className="w-8 h-8 text-emerald-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Message from Founder */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">A Message from Our Founder</h2>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <div className="space-y-6 text-lg">
              <p className="italic">
                &quot;Throughout my 27-year journey in Nigerian banking, I have witnessed firsthand the transformative power of accessible financial services. At DEMFAGBS Global Finance, we are not just providing loans; we are empowering dreams, supporting livelihoods, and building stronger communities.&quot;
              </p>

              <p className="italic">
                &quot;Our commitment goes beyond profit – we are dedicated to creating sustainable value for our customers, stakeholders, and the communities we serve. Every loan we disburse, every business we support, and every individual we empower contributes to the economic development of Nigeria.&quot;
              </p>

              <p className="italic">
                &quot;I invite you to join us on this exciting journey of financial inclusion and community empowerment. Together, we can build a more financially inclusive Nigeria, one customer at a time.&quot;
              </p>

              <div className="text-right mt-8">
                <p className="font-bold text-xl">Ademola Fagbelu, MBA, FCIB</p>
                <p className="text-emerald-200">Managing Director / CEO</p>
                <p className="text-emerald-200">DEMFAGBS Global Finance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}