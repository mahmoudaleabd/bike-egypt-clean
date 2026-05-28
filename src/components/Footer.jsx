import { Link } from 'react-router-dom'
import { Bike, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="animate-slide-up">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-forest-500 to-electric-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Bike className="h-10 w-10 text-forest-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-2xl font-bold gradient-text">
                Bike Egypt
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Your premier platform for cycling in Egypt. Find shops, trade bikes, and arrange transport services.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-forest-400' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-electric-400' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-orange-400' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-light hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className={`h-5 w-5 text-slate-400 ${social.color} transition-colors`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-bold text-white mb-6">
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
                    className="text-slate-400 hover:text-forest-400 transition-colors text-sm hover:translate-x-2 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-bold text-white mb-6">
              About
            </h3>
            <ul className="space-y-3">
              {['About Us', 'How It Works', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-electric-400 transition-colors text-sm hover:translate-x-2 inline-block duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-bold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@bikeegypt.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-forest-400 transition-colors text-sm group"
                >
                  <Mail className="h-5 w-5 text-forest-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>support@bikeegypt.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201000000000"
                  className="flex items-center gap-3 text-slate-400 hover:text-electric-400 transition-colors text-sm group"
                >
                  <Phone className="h-5 w-5 text-electric-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+20 100 000 0000</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left animate-fade-in">
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
