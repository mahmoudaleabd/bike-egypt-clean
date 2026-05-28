import { Link } from 'react-router-dom'
import { Bike, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass border-t border-slate-700/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Bike className="h-8 w-8 text-accent-400 relative z-10" />
              </div>
              <span className="text-xl font-display font-bold gradient-text">
                Bike Egypt
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6">
              Your premier platform for cycling in Egypt. Find shops, trade bikes, and arrange transport services.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass hover:bg-slate-700/40 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-slate-400 hover:text-primary-400 transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass hover:bg-slate-700/40 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-slate-400 hover:text-accent-400 transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass hover:bg-slate-700/40 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-slate-400 hover:text-primary-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold text-slate-100 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/shops', label: 'Find Shops' },
                { to: '/marketplace', label: 'Marketplace' },
                { to: '/transport', label: 'Transport Services' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-primary-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-display font-bold text-slate-100 mb-6">
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-300 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-300 transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-300 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-300 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-bold text-slate-100 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@bikeegypt.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary-300 transition-colors text-sm group"
                >
                  <Mail className="h-5 w-5 text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>support@bikeegypt.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201000000000"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary-300 transition-colors text-sm group"
                >
                  <Phone className="h-5 w-5 text-accent-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+20 100 000 0000</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/30 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Bike Egypt. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Made with ❤️ for the Egyptian cycling community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
