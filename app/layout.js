import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://demfagbs.vercel.app'),
  title: {
    default: 'Demfagbs Global Finance & Co. Ltd | MSME Loans & Working Capital',
    template: '%s | Demfagbs Global Finance & Co. Ltd',
  },
  description: 'Demfagbs Global Finance provides accessible credit and financial solutions to micro, small, and medium-scale enterprises (MSMEs) across Ogun State, Lagos, and Oyo — helping Nigerian small businesses grow.',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'Demfagbs Global Finance & Co. Ltd',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
