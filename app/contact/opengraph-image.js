import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Demfagbs Global Finance — Contact Direct Channels & Magboro Headquarters';
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
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.25) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(13, 148, 136, 0.18) 0%, transparent 45%)',
          padding: '56px 64px',
          fontFamily: 'sans-serif',
          color: 'white',
          border: '14px solid #064e3b', // emerald-900 border framing
        }}
      >
        {/* Top Brand Header */}
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
                & CO. LTD · DIRECT CHANNELS
              </div>
            </div>
          </div>

          {/* Contact Badge */}
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
            📍 Magboro Branch Headquarters
          </div>
        </div>

        {/* Main Title & Description */}
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
            We Are Ready To Help Your Business Grow
          </div>
          <div
            style={{
              fontSize: '54px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              maxWidth: '960px',
            }}
          >
            Get in Touch With Our Relationship Banking Team
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
            Speak directly with our loan specialists about structured credit, working capital financing, or trade partnerships.
          </div>
        </div>

        {/* 3 Contact Cards Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '20px',
            width: '100%',
          }}
        >
          {/* Phone Card */}
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
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#34d399', marginBottom: '6px' }}>
              📞 Phone Line
            </div>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', marginBottom: '4px' }}>
              0802 315 7017
            </div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>
              Mon–Fri: 8AM–5PM · Sat: 9AM–2PM
            </div>
          </div>

          {/* Email Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(51, 65, 85, 0.8)',
              borderRadius: '20px',
              padding: '22px',
              flex: 1.2,
            }}
          >
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#34d399', marginBottom: '6px' }}>
              ✉️ Email Address
            </div>
            <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', marginBottom: '4px' }}>
              demfagbsglobal@gmail.com
            </div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>
              Response within 24 business hours
            </div>
          </div>

          {/* Office Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(51, 65, 85, 0.8)',
              borderRadius: '20px',
              padding: '22px',
              flex: 1.3,
            }}
          >
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#34d399', marginBottom: '6px' }}>
              🏢 Office Address
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '4px', lineHeight: 1.3 }}>
              No. 3, Ifelodun Ave, Off Magboro Road
            </div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>
              Beside Wise Buyers Supermarket, Magboro, Ogun State
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
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
            <span style={{ color: '#10b981', marginRight: '8px' }}>★</span>
            Licensed Money Lender · Ogun State
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#34d399' }}>
            ⚡ Structured Loans ₦100k – ₦5M · 48–72h Disbursement
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
