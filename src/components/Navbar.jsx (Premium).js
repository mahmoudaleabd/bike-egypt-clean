import { Link, useLocation } from 'react-router-dom'
import { Bike, Store, ShoppingCart, Truck, Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home', icon: Bike },
    { path: '/shops', label: 'Shops', icon: Store },
    { path: '/marketplace', label: 'Marketplace', icon: ShoppingCart },
    { path: '/transport', label: 'Transport', icon: Truck },
  ]

  return (
    <nav className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-slate-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <Bike className="h-8 w-8 text-accent-400 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-display font-bold gradient-text hidden sm:inline">
              Bike Egypt
            </span>
            <span className="text-2xl font-display font-bold gradient-text sm:hidden">
              BE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                  transition-all duration-300 group relative
                  ${
                    isActive(path)
                      ? 'text-primary-300 bg-primary-500/10'
                      : 'text-slate-300 hover:text-primary-300'
                  }
                `}
              >
                <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{label}</span>
                
                {/* Underline animation */}
                {isActive(path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-700/30 transition-colors duration-300 text-slate-300 hover:text-primary-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 animate-spin" style={{ animationDuration: '300ms' }} />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="glass border-t border-slate-700/30 px-4 py-4 space-y-2">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg font-medium
                  transition-all duration-300
                  ${
                    isActive(path)
                      ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                      : 'text-slate-300 hover:bg-slate-700/20 hover:text-primary-300 border border-transparent'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
