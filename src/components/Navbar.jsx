import { Link } from 'react-router-dom'
import { Bike, Store, ShoppingCart, Truck, Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="glass sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 space-x-reverse group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-forest-500 to-blue-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Bike className="h-10 w-10 text-forest-400 relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-2xl font-bold gradient-text">Bike Egypt</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse">
            {[
              { to: '/', icon: Bike, label: 'Home' },
              { to: '/shops', icon: Store, label: 'Shops' },
              { to: '/marketplace', icon: ShoppingCart, label: 'Marketplace' },
              { to: '/transport', icon: Truck, label: 'Transport' }
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-light border-t border-white/10 animate-slide-down">
          <div className="px-4 py-4 space-y-2">
            {[
              { to: '/', icon: Bike, label: 'Home' },
              { to: '/shops', icon: Store, label: 'Shops' },
              { to: '/marketplace', icon: ShoppingCart, label: 'Marketplace' },
              { to: '/transport', icon: Truck, label: 'Transport' }
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center space-x-3 space-x-reverse p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 text-forest-400" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
