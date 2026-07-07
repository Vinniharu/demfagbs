import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Management Team | Demfagbs Global Finance & Co. Ltd',
  description: 'Meet the experienced leadership team behind Demfagbs Global Finance — banking veterans from First Bank, Zenith Bank, Ecobank, UBA, and Polaris Bank driving MSME financial inclusion.',
};

export default function Team() {
  const team = [
    {
      name: 'Ademola Fagbelu',
      credentials: 'BSc, MBA, ACIB, AMNIM, FCIB',
      role: 'Managing Director / Chief Executive Officer',
      photo: '/father.jpg',
      bio: [
        `Ademola Fagbelu began his banking career in 1998 as a Treasury Officer at Equity Bank Limited having bagged BSc (Hons.) in Agric. Economics, Second class (upper division), University of Ibadan. Also bagged MBA and practice License of The Chartered Institute of Bankers of Nigeria to Consult in Banking, Finance and Allied Matters. Ademola is also a Fellow of The Chartered Institute of Bankers of Nigeria, FCIB.`,
        `With about 27 years' experience in banking, spanning Treasury Management, Relationship and Branch Management, Area Management and Regional Management, Retail Banking and Commercial Banking, Debt Recovery, Risk Management and Audit across various Banks including: Equity Bank, Zenith Bank, Ecobank and First Bank.`,
        `He was promoted to Principal Manager and appointed as Regional Manager, South West 2 of First Bank in December 2018, responsible for providing leadership and overall supervision of businesses across South West 2 region of First Bank. He was responsible for the provision of roadmaps and strategies for meeting and surpassing targets. He successfully turned around and transformed a loss making south west 2 region of First Bank into profitability within one financial year of assuming leadership due to his diligence, hard work and resourcefulness. He is a self-motivated and strategically focused Leader.`,
        `In the course of his career, he equally attended several trainings, seminars and workshops both within and outside the Country that equipped him for the task at hand, as well as in the future. He also won several awards including but not limited to the following: Overall best Student in Foundation, Chartered Institute of Bankers of Nigeria, 2004, Most Outstanding Trainee in 3 Months Comprehensive Banking training of Zenith Bank, 2000, Top Performing Area Manager/BDO on debit card Issuance for financial year 2017 with an International E-Business training to Johannesburg, South Africa, Overall Best Business Manager, Apapa Area, First bank during 2014 Financial Year, Overall Best Branch manager in Ikeja Area of Ecobank in 2007, as well as Won Ecobank deal of the Month Award of July 2005 with a Certificate and Managing Director's letter of Commendation.`
      ],
      highlights: [
        '27+ years banking experience across leading banks',
        'Former Regional Manager, First Bank (South West 2)',
        'Fellow, Chartered Institute of Bankers of Nigeria (FCIB)',
        'BSc Agricultural Economics (UI), MBA & ACIB'
      ],
    },
    {
      name: 'Mrs Patricia Abolade Fagbelu',
      credentials: 'HND',
      role: 'Head, Human Resources & Admin / Deputy Managing Director',
      photo: null,
      bio: [
        `Mrs Patricia Abolade Fagbelu is a graduate of Business Administration and Management from Federal Polytechnic, Offa, Kwara State (HND, 2001). During her National Youth Service Corps (NYSC), she completed her primary assignment at First Bank of Nigeria, Marina, Lagos. She is currently the Head, Human Resources and Admin of Demfagbs Global Finance, responsible for the Human Resources department and general administration.`,
        `Prior to her current position, she is a seasoned entrepreneur with over 20 years of post-graduation experience as the Chief Executive Officer of BOLFAGBS DYNAMIC VENTURES, a company engaged in the sales, distribution, and marketing of fast-moving consumer goods (FMCG) along the Lagos/Ibadan expressway corridor. She is well knowledgeable in general administration and operational management, and is a focused, goal-getter, and target-driven executive. Mrs Patricia Abolade Fagbelu also serves on the Board of Demfagbs Global Finance and Co. Ltd as the Deputy Managing Director.`
      ],
      highlights: [
        'Deputy Managing Director & Board Member',
        '20+ years entrepreneurial & executive leadership',
        'CEO of Bolfagbs Dynamic Ventures (FMCG distribution)',
        'Business Administration & Management (HND)'
      ],
    },
    {
      name: 'Mrs Anna George Oba',
      credentials: 'HND, BSc',
      role: 'Manager, Business Development',
      photo: null,
      bio: [
        `Mrs Anna George Oba began her banking career in 2006 as a Customer Service Officer at United Bank for Africa (UBA), having bagged a National Diploma in Computer Science, from Abdul Gusau Polytechnic, Zamfara State. She proceeded to earn a B.Sc. in Computer Science, from Lagos State University (LASU). With about 20 years' experience in banking and financial services, spanning Customer Service, Retail and Consumer Banking, Relationship Management, Branch Management, Loan Processing and Credit Appraisal, and Financial Advisory Services, across several institutions including United Bank for Africa (UBA), Skye Bank Plc (now Polaris Bank), Polaris Bank Limited, Glaze Credit Limited.`,
        `Anna is currently the Manager, Business Development of Demfagbs Global Finance, where she oversees day-to-day business generation, credit processing and marketing, loan creation, managing financial records and reporting and overall staff supervision. She also ensures compliance with internal policies and regulatory requirements.`,
        `At Glaze Credit Limited, she developed and maintained strong relationships with over 500 micro, small, and medium-scale enterprise (MSME) clients, and her efforts in prospecting and onboarding new clients contributed to a 50% increase in the institution's loan portfolio within one fiscal year. At Polaris Bank, she promoted the bank's digital products and services, driving a 35% increase in adoption of electronic banking platforms through proactive client education. During her tenure at Skye Bank Plc, she also managed a portfolio of over 100 retail and SME clients across Kebbi State and Lagos State, delivering tailored financial solutions and serving as primary liaison between clients and internal departments to ensure prompt issue resolution.`,
        `On the job, she attended several professional trainings and seminars that have equipped her with the knowledge, skills, and capacity required to effectively handle current responsibilities and prepare for future leadership opportunities. A very dedicated staff with a strong foundation in customer relationship management, people and conflict management, strategic planning, and organizational administration.`
      ],
      highlights: [
        '~20 years banking & financial services experience',
        'Former UBA, Polaris Bank (Skye Bank), Glaze Credit',
        'Managed relationships with 500+ MSME clients',
        'B.Sc. Computer Science, Lagos State University'
      ],
    },
    {
      name: 'Ms Sakariyah Kabirah Kehinde',
      credentials: 'HND',
      role: 'Head, Operations',
      photo: null,
      bio: [
        `Ms Sakariyah Kabirah Kehinde is a dedicated and result-driven Business Administration and Management graduate (HND, 2022) from Osun State Polytechnic, Iree with practical experience in operations management, sales, and education.`,
        `Currently serving as the Head of Operations at Demfagbs Global Finance, she is responsible for coordinating daily business operations and supporting the achievement of strategic goals. She previously worked as a sales representative at Bolfagbs Dynamic Store (2023/2024), where she developed strong customer relationship, communication, and sales skills. During her National Youth Service Corps (NYSC) in Niger State (2024/2025), she served as a teacher, demonstrating exceptional leadership and commitment.`
      ],
      highlights: [
        'Head of daily business operations coordination',
        'Business Administration & Management (HND, 2022)',
        'Practical experience in operations & sales management',
        'Strong foundation in customer relationship management'
      ],
    },
    {
      name: 'Lawal Rasak Bolaji',
      credentials: 'MSc, MNIM, AIMS, MCIB, CSD, PMP',
      role: 'Consultancy Technology',
      photo: null,
      bio: [
        `Lawal Rasak Bolaji is a seasoned technology executive, fintech strategist, cybersecurity professional, and project management expert with over 20 years of experience in banking, fintech, microfinance, risk management, and digital transformation.`,
        `He heads our Consultancy Technology and is CEO of GrubiesCore Payments Limited, which is the banking software powering Demfagbs Global Finance. He also leads the development of innovative fintech solutions, including payment gateways, digital banking platforms, core banking systems, and API integration services. Throughout his career, he has held executive leadership positions such as Chief Technology Officer (CTO), Chief Risk Officer (CRO), and Project Manager, driving digital transformation, enterprise technology modernization, cybersecurity, and financial inclusion initiatives.`,
        `Mr. Lawal has extensive expertise in fintech architecture, software development, cloud computing, cybersecurity, enterprise risk management, project management, and digital banking. He has successfully delivered large-scale projects involving core banking implementations, payment integrations, cloud infrastructure, business process automation, and agency banking solutions while leading multidisciplinary teams and managing complex technology portfolios.`,
        `He holds a Master's degree in Information Technology and a Bachelor's degree in Computer Science, complemented by professional certifications and memberships in project management, banking, cybersecurity, and management. Recognized for aligning technology with business strategy, Mr. Lawal has consistently enabled organizations to enhance operational efficiency, strengthen regulatory compliance, improve customer experience, and achieve sustainable growth through innovative digital solutions.`
      ],
      highlights: [
        '20+ years experience in banking technology & fintech',
        'CEO of GrubiesCore Payments Limited (GRUBIES Software)',
        'Expertise in core banking, APIs & cybersecurity',
        'MSc Information Technology & Certified PMP'
      ],
    },
    {
      name: 'Similoluwa Benjamin Fagbelu',
      credentials: 'AAT',
      role: 'Head, Internal Control & Compliance',
      photo: null,
      bio: [
        `Similoluwa Benjamin Fagbelu is a dedicated and result-driven professional holding an AAT Certification, with hands-on experience in marketing, finance, and compliance. He is an Economics undergraduate at the University of Lagos (300L). He began as a Marketing and Finance Intern at Demfagbs Global Finance (2025), where he introduced strategic advertisements, managed cooperative entries, and facilitated loans and repayments.`,
        `He is also active with AIESEC in Lagos as a Team Member in Membership and Talent Experience and Organizing Committee Vice President (Financials), facilitating engagements and member experience across the Local Committee. He is currently the Head of Internal Control and Compliance at Demfagbs Global Finance, responsible for strengthening internal controls and ensuring regulatory compliance.`
      ],
      highlights: [
        'Head of Internal Control & Regulatory Compliance',
        'Certified Accounting Technician (AAT Certification)',
        'Economics Undergraduate, University of Lagos',
        'Experience in financial controls & cooperative lending'
      ],
    },
    {
      name: 'Oluwanifemi Stephen Fagbelu',
      credentials: 'BSc',
      role: 'Technical Support',
      photo: null,
      bio: [
        `Oluwanifemi Stephen Fagbelu is a professional software engineer with 3+ years of experience in web application and mobile app development. He is a graduate of Computer Science (BSc) from Caleb University in Lagos State, with years of experience in software engineering, website maintenance, and overall technical support for the company.`,
        `He has been working with EIB Group for the past year, where he handles software creation and maintenance on a day-to-day basis. He is time-conscious, goal-oriented, and fully dedicated to any task assigned to him, always eager to contribute to the continuous growth of the organization.`
      ],
      highlights: [
        'Professional Software Engineer (3+ years experience)',
        'Web application & mobile app development',
        'BSc Computer Science, Caleb University',
        'Handles company systems & digital technical support'
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-slate-950 py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-emerald-600/15 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
            Management Team of Demfagbs Global Finance & Co. Ltd
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Leadership Team
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-6 max-w-2xl leading-relaxed">
            Our leadership brings together decades of banking, technology, operations, and compliance experience — built to serve Nigeria&apos;s MSMEs with professionalism and integrity.
          </p>
        </div>
      </section>

      {/* TEAM PROFILES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {team.map((member, i) => {
              const hasPhoto = Boolean(member.photo);

              return (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200/80 p-8 lg:p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                >
                  {hasPhoto ? (
                    /* Layout for MD/CEO with photo */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      <div className="lg:col-span-4">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative bg-slate-900 max-w-sm mx-auto lg:max-w-none">
                          <Image
                            src={member.photo}
                            alt={`${member.name} — ${member.role}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                          <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md">
                            <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-0.5">{member.credentials}</div>
                            <div className="text-white font-bold text-sm leading-snug">{member.name}</div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                          {member.credentials}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                          {member.name}
                        </h2>
                        <div className="text-base font-bold text-emerald-700 mb-6">{member.role}</div>

                        <div className="space-y-4 mb-8">
                          {member.bio.map((para, idx) => (
                            <p key={idx} className="text-base text-slate-600 leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-200/60">
                          {member.highlights.map((h, hi) => (
                            <div key={hi} className="flex items-start gap-2.5">
                              <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-xs text-slate-700 font-semibold leading-relaxed">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Clean full-width layout for all other team members without photo */
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                        {member.credentials}
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                        {member.name}
                      </h2>
                      <div className="text-base font-bold text-emerald-700 mb-6">{member.role}</div>

                      <div className="space-y-4 mb-8 max-w-4xl">
                        {member.bio.map((para, idx) => (
                          <p key={idx} className="text-base text-slate-600 leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-slate-200/60">
                        {member.highlights.map((h, hi) => (
                          <div key={hi} className="flex items-start gap-2.5">
                            <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs text-slate-700 font-semibold leading-relaxed">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Work With Our Team?
          </h3>
          <p className="text-emerald-100 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Whether you need a working capital loan, advisory support, or are interested in partnering with us — our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-extrabold text-sm bg-white text-emerald-800 hover:bg-emerald-50 shadow-xl shadow-emerald-900/30 transition-all hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
