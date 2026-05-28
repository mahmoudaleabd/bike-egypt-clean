import { Link } from 'react-router-dom'
import { Store, ShoppingCart, Truck, MapPin, Clock, Star, ArrowRight, Zap, Shield, Users } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-forest-950"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-forest-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-burnt-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Your Cycling Companion in Egypt
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
              Find shops, buy & sell bikes, and get transport services - all in one place
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shops"
                className="btn-primary flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Store className="h-5 w-5" />
                <span>Find Shops</span>
              </Link>
              <Link
                to="/marketplace"
                className="btn-secondary flex items-center justify-center space-x-2 space-x-reverse"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Browse Marketplace</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white animate-slide-up">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Store,
                title: 'Nearby Shops',
                description: 'Discover bike shops near you for spare parts and maintenance services',
                link: '/shops',
                linkText: 'Explore Shops',
                color: 'from-forest-500 to-forest-600',
                delay: '0s'
              },
              {
                icon: ShoppingCart,
                title: 'Marketplace',
                description: 'Buy and sell bikes with fellow enthusiasts across Egypt',
                link: '/marketplace',
                linkText: 'Start Trading',
                color: 'from-electric-500 to-electric-600',
                delay: '0.2s'
              },
              {
                icon: Truck,
                title: 'Bike Transport',
                description: 'Request professional bike transport services across Egypt',
                link: '/transport',
                linkText: 'Book Transport',
                color: 'from-burnt-500 to-burnt-600',
                delay: '0.4s'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 card-hover animate-slide-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${feature.color.split('-')[0]}-500/30`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="text-forest-400 font-semibold flex items-center space-x-2 space-x-reverse hover:text-forest-300 group"
                >
                  <span>{feature.linkText}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '150+', label: 'Bike Shops', icon: Store, color: 'text-forest-400' },
              { value: '500+', label: 'Active Users', icon: Users, color: 'text-electric-400' },
              { value: '1000+', label: 'Bikes Listed', icon: ShoppingCart, color: 'text-burnt-400' },
              { value: '27', label: 'Governorates', icon: MapPin, color: 'text-red-400' }
            ].map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-slate-400 flex items-center justify-center gap-2">
                  <stat.icon className="h-4 w-4" />
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white animate-slide-up">
            Why Choose Bike Egypt?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast & Easy',
                description: 'Find what you need in seconds with our intuitive platform'
              },
              {
                icon: Shield,
                title: 'Trusted Sellers',
                description: 'Verified shops and sellers with ratings and reviews'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Join thousands of cyclists across Egypt'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className="h-12 w-12 text-forest-400 mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-forest-600 to-electric-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Ride?</h2>
            <p className="text-xl mb-8 text-white/80">
              Join thousands of cyclists across Egypt
            </p>
            <Link
              to="/marketplace"
              className="bg-white text-forest-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 inline-block shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
