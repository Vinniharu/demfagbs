import Link from 'next/link';

export default function Footer() {
  return (
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
              Licensed financing company dedicated to providing microloans and short-term credit to underserved individuals, MSMEs, and traders across the Lagos-Ibadan Expressway corridor.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:demfagbsglobal@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span className="text-sm">📧</span>
              </a>
              <a href="tel:08023157017" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span className="text-sm">📱</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/founder" className="text-gray-400 hover:text-white transition-colors">
                  Our Founder
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Microloans & MSME Financing</li>
              <li>Savings Mobilization</li>
              <li>Financial Literacy & Advisory</li>
              <li>Business Re-engineering</li>
              <li>Debt Management Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-gray-400">
              <p className="mb-2">
                <strong>Office:</strong> No. 3, Ifelodun Avenue, Off Magboro Road, Beside Wise Buyers Supermarket, Magboro, Ogun State
              </p>
              <p><strong>Email:</strong> demfagbsglobal@gmail.com</p>
            </div>
            <div className="text-gray-400 md:text-right">
              <p>&copy; 2025 DEMFAGBS Global Finance & Co. Ltd.</p>
              <p>All rights reserved. | Licensed Money Lender</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}