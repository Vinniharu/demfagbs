import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Demfagbs Global Finance & Co. Ltd — Financing Growth for Nigeria\'s Small Businesses';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#020617', // slate-950
          backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.22) 0%, transparent 45%), radial-gradient(circle at 10% 90%, rgba(13, 148, 136, 0.18) 0%, transparent 45%)',
          padding: '56px 64px',
          fontFamily: 'sans-serif',
          color: 'white',
          border: '14px solid #064e3b', // emerald-900 border framing
        }}
      >
        {/* Top Brand & License Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderBottom: '1px solid rgba(51, 65, 85, 0.6)',
            paddingBottom: '24px',
          }}
        >
          {/* Logo & Name */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: '#10b981', // emerald-500
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '18px',
                fontSize: '32px',
                fontWeight: 900,
                color: '#020617',
              }}
            >
              D
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.5px' }}>
                DEMFAGBS GLOBAL FINANCE
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#34d399', letterSpacing: '2px', marginTop: '2px' }}>
                & CO. LTD · LICENSED MONEY LENDER
              </div>
            </div>
          </div>

          {/* Credibility Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(52, 211, 153, 0.4)',
              fontSize: '14px',
              fontWeight: 700,
              color: '#6ee7b7',
            }}
          >
            ★ 27+ Years Leadership Experience
          </div>
        </div>

        {/* Main Value Proposition */}
        <div style={{ display: 'flex', flexDirection: 'column', margin: '24px 0' }}>
          <div
            style={{
              fontSize: '15px',
              fontWeight: 800,
              color: '#34d399',
              letterSpacing: '3px',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            MSME Capital & Financial Solutions
          </div>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              maxWidth: '960px',
            }}
          >
            Financing Growth for Nigeria&apos;s Small Businesses
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#94a3b8', // slate-400
              marginTop: '16px',
              lineHeight: 1.4,
              maxWidth: '880px',
            }}
          >
            Structured credit from ₦100,000 to ₦5,000,000 with 48–72 hour rapid disbursement, flexible 7–90 day tenors, and transparent advisory.
          </div>
        </div>

        {/* Informative 3-Column Feature Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '20px',
            width: '100%',
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(15, 23, 42, 0.8)', // slate-900/80
              border: '1px solid rgba(51, 65, 85, 0.8)',
              borderRadius: '20px',
              padding: '22px',
              flex: 1,
            }}
          >
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#34d399', marginBottom: '8px' }}>
              💼 MSME & Working Capital
            </div>
            <div style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.4 }}>
              Tailored loans for traders, artisans, and enterprises to boost inventory and daily business operations.
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(51, 65, 85, 0.8)',
              borderRadius: '20px',
              padding: '22px',
              flex: 1,
            }}
          >
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#34d399', marginBottom: '8px' }}>
              ⚡ 48–72h Turnaround
            </div>
            <div style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.4 }}>
              Streamlined credit assessment with straightforward documentation and flexible repayment structures.
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(51, 65, 85, 0.8)',
              borderRadius: '20px',
              padding: '22px',
              flex: 1,
            }}
          >
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#34d399', marginBottom: '8px' }}>
              🛡️ Licensed & Regulated
            </div>
            <div style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.4 }}>
              Ogun State Licensed Money Lender and registered cooperative society backed by veteran banking leadership.
            </div>
          </div>
        </div>

        {/* Bottom Contact Footer */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid rgba(51, 65, 85, 0.6)',
            paddingTop: '20px',
            fontSize: '15px',
            fontWeight: 700,
            color: '#e2e8f0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#10b981', marginRight: '8px' }}>📍</span>
            No. 3 Ifelodun Avenue, off Magboro Road, Magboro, Ogun State
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#34d399' }}>
            📞 0802 315 7017 &nbsp;&nbsp;|&nbsp;&nbsp; ✉️ demfagbsglobal@gmail.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
