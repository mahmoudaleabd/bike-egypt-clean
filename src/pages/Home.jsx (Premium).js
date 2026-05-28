import { Link } from 'react-router-dom'
import { Store, ShoppingCart, Truck, ArrowRight, Zap, Shield, Users } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background gradient and effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/50 via-slate-950 to-slate-900">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-primary mb-8">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-semibold">Welcome to the Future of Cycling</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 gradient-text">
              Your Cycling Companion in Egypt
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover bike shops, trade bikes with enthusiasts, and get professional transport services — all in one premium platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
              <Link
                to="/shops"
                className="btn btn-primary group"
              >
                <Store className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Find Shops</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/marketplace"
                className="btn btn-accent group"
              >
                <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Browse Marketplace</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary-400" />
                <span>Secure & Trusted</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent-400" />
                <span>Community-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Everything You Need
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive ecosystem for bike enthusiasts in Egypt
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Shops */}
            <div className="card-hover group animate-slide-up">
              {/* Icon Background */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <Store className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-100 mb-3">Nearby Shops</h3>
              <p className="text-slate-400 mb-6">
                Discover bike shops near you for spare parts and professional maintenance services
              </p>

              {/* Link */}
              <Link
                to="/shops"
                className="link-underline inline-flex items-center gap-2"
              >
                <span>Explore Shops</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Feature 2: Marketplace */}
            <div className="card-hover group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {/* Icon Background */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/30 to-primary-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-slate-900 font-bold" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-100 mb-3">Marketplace</h3>
              <p className="text-slate-400 mb-6">
                Buy and sell bikes with fellow enthusiasts across Egypt with secure transactions
              </p>

              {/* Link */}
              <Link
                to="/marketplace"
                className="link-underline inline-flex items-center gap-2"
              >
                <span>Start Trading</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Feature 3: Transport */}
            <div className="card-hover group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Icon Background */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-100 mb-3">Bike Transport</h3>
              <p className="text-slate-400 mb-6">
                Request professional and reliable bike transport services across all of Egypt
              </p>

              {/* Link */}
              <Link
                to="/transport"
                className="link-underline inline-flex items-center gap-2"
              >
                <span>Book Transport</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="glass p-8 rounded-2xl text-center group hover:shadow-glass-lg transition-all duration-300 animate-scale-in">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                150+
              </div>
              <div className="text-slate-400 font-medium">Bike Shops</div>
            </div>

            {/* Stat 2 */}
            <div className="glass p-8 rounded-2xl text-center group hover:shadow-glass-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-slate-400 font-medium">Active Users</div>
            </div>

            {/* Stat 3 */}
            <div className="glass p-8 rounded-2xl text-center group hover:shadow-glass-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-slate-400 font-medium">Bikes Listed</div>
            </div>

            {/* Stat 4 */}
            <div className="glass p-8 rounded-2xl text-center group hover:shadow-glass-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                27
              </div>
              <div className="text-slate-400 font-medium">Governorates</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-100">
            Ready to Ride?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of cyclists across Egypt on a platform built for the cycling community, by cyclists
          </p>

          <Link
            to="/marketplace"
            className="btn btn-primary inline-flex group"
          >
            <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Get Started Now</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
