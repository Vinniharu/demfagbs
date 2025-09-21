import Image from 'next/image';

export default function Founder() {
  const experience = [
    {
      period: '2025-Present',
      company: 'DEMFAGBS Global Finance & Co Ltd',
      role: 'Managing Director / CEO',
      achievements: [
        'Leading micro credits/loans for individuals, MSMEs and businesses',
        'Serving Magboro, Arepo, Ibafo, Mowe communities',
        'Banking & Finance consulting and business advisory services'
      ]
    },
    {
      period: '2018-2025',
      company: 'First Bank',
      role: 'Principal Manager / Regional Manager',
      achievements: [
        'Regional Manager, South West 2 from December 2018',
        'Turned loss-making region profitable within one year',
        'Led strategic transformation through diligence and resourcefulness'
      ]
    },
    {
      period: '2007-2018',
      company: 'Ecobank',
      role: 'Branch Manager / Area Manager',
      achievements: [
        'Overall Best Branch Manager, Ikeja Area (2007)',
        'Deal of the Month Award (July 2005)',
        'Exceptional leadership in branch management'
      ]
    },
    {
      period: '2000-2007',
      company: 'Zenith Bank',
      role: 'Banking Officer',
      achievements: [
        'Most Outstanding Trainee (2000)',
        'Built strong foundation in retail and commercial banking'
      ]
    },
    {
      period: '1998-2000',
      company: 'Equity Bank Limited',
      role: 'Treasury Officer',
      achievements: [
        'Started banking career in treasury management',
        'Developed core financial markets competencies'
      ]
    }
  ];

  const expertise = [
    { icon: '💰', title: 'Treasury Management', desc: 'Expert in treasury operations and financial markets' },
    { icon: '🤝', title: 'Relationship Management', desc: 'Proven track record in customer relationships and profitability' },
    { icon: '📊', title: 'Regional Leadership', desc: 'Successfully transformed entire regional operations' },
    { icon: '🏦', title: 'Banking Operations', desc: 'Comprehensive expertise across retail and commercial banking' },
    { icon: '⚖️', title: 'Risk & Audit', desc: 'Strong background in risk management and audit' },
    { icon: '💸', title: 'Debt Recovery', desc: 'Specialized in debt management and recovery operations' }
  ];

  const awards = [
    { year: '2017', award: 'Top Performing Area Manager on Debit Card Issuance', desc: 'Earned International E-Business training in South Africa' },
    { year: '2014', award: 'Overall Best Business Manager', desc: 'Apapa Area, First Bank' },
    { year: '2007', award: 'Overall Best Branch Manager', desc: 'Ikeja Area, Ecobank' },
    { year: '2005', award: 'Ecobank Deal of the Month Award', desc: 'With MD&apos;s letter of commendation' },
    { year: '2004', award: 'Overall Best Student', desc: 'CIBN Foundation Program' },
    { year: '2000', award: 'Most Outstanding Trainee', desc: 'Zenith Bank comprehensive training' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Meet Our Founder</h1>
            <h2 className="text-2xl mb-2">Ademola Fagbelu, MBA, FCIB</h2>
            <p className="text-lg text-white/90">Managing Director / CEO</p>
            <p className="text-white/80 mt-1">Self-Motivated and Strategically Focused Leader</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Professional Image */}
            <div className="order-2 lg:order-1">
              <div className="max-w-sm mx-auto">
                <div className="bg-gray-50 rounded-3xl p-6 shadow-lg">
                  <div className="aspect-[3/4] bg-white rounded-2xl shadow-md overflow-hidden mb-4 relative">
                    <Image
                      src="/father.jpg"
                      alt="Ademola Fagbelu - Managing Director / CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Ademola Fagbelu</h3>
                    <p className="text-emerald-600 font-semibold">MBA, FCIB</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">27+</div>
                      <p className="text-xs text-gray-600">Years Experience</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">FCIB</div>
                      <p className="text-xs text-gray-600">Fellow CIBN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Banking Leader & Entrepreneur</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Ademola Fagbelu began his banking career in 1998 as a Treasury Officer at Equity Bank Limited. 
                  He holds BSc (Hons.) Agricultural Economics (Second Class Upper) from University of Ibadan, 
                  an MBA, and is a Fellow of The Chartered Institute of Bankers of Nigeria (FCIB).
                </p>
                
                <p>
                  With 27 years&apos; banking experience spanning Treasury Management, Branch Management, Regional Management, 
                  and Commercial Banking across Equity Bank, Zenith Bank, Ecobank and First Bank.
                </p>
                
                <p>
                  Successfully transformed First Bank&apos;s loss-making South West 2 region into profitability within 
                  one year as Regional Manager. Currently leads DEMFAGBS Global Finance, providing micro credits 
                  and business solutions to communities in Magboro, Arepo, Ibafo, Mowe and surrounding areas.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-6 bg-gray-50 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 mb-3">Key Credentials</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• MBA, Business Administration</div>
                  <div>• Fellow, CIBN (FCIB)</div>
                  <div>• BSc Agricultural Economics (UI)</div>
                  <div>• Licensed Banking Consultant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Career Journey</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-emerald-600 shadow-md">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-emerald-600 font-bold text-sm">{exp.period}</p>
                    <h3 className="text-lg font-bold text-gray-900">{exp.company}</h3>
                    <p className="text-gray-600 text-sm">{exp.role}</p>
                  </div>
                  <div className="md:col-span-3">
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-emerald-500 mr-2">•</span>
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
      </section>

      {/* Core Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center shadow-md">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Awards & Recognition</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-3 border-emerald-500">
                <div className="flex items-start">
                  <div className="bg-emerald-600 text-white rounded px-2 py-1 text-xs font-bold mr-3 flex-shrink-0">
                    {award.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{award.award}</h3>
                    <p className="text-gray-600 text-xs">{award.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMFAGBS Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">DEMFAGBS Global Finance Services</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 text-center mb-8">
              <p className="text-gray-700">
                Specializing in micro credits/loans for individuals, MSMEs and businesses in 
                Magboro, Arepo, Ibafo, Mowe and surrounding communities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <h4 className="font-bold text-gray-900 mb-3">Financial Services</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Micro credits & loans</li>
                  <li>• Banking & Finance consulting</li>
                  <li>• Business advisory services</li>
                  <li>• Equity investment</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <h4 className="font-bold text-gray-900 mb-3">Business Solutions</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Business re-engineering</li>
                  <li>• Debt management & recovery</li>
                  <li>• Project finance</li>
                  <li>• Property development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Founder */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Founder&apos;s Message</h2>
          
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="space-y-4 text-center">
               <p className="italic">
                 &quot;My 27-year banking journey from Treasury Officer to CEO has equipped me with deep insights 
                 into financial services. At DEMFAGBS Global Finance, we bridge the financial inclusion gap 
                 for underserved communities through comprehensive business solutions.&quot;
               </p>
              
              <div className="mt-6">
                <p className="font-bold text-lg">Ademola Fagbelu, MBA, FCIB</p>
                <p className="text-emerald-200">Managing Director / CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}