import { useState } from 'react'
import { MapPin, Phone, Star, Clock, Wrench, Package, Search, Filter, Flame, MapPinIcon } from 'lucide-react'

function Shops() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const shops = [
    {
      id: 1,
      name: 'Cairo Bike Center',
      location: 'Nasr City, Cairo',
      phone: '+20 122 345 6789',
      rating: 4.8,
      reviews: 156,
      services: ['maintenance', 'spare-parts'],
      hours: '9:00 AM - 9:00 PM',
      distance: '2.5 km',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c8a6d62?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Alex Bicycle Shop',
      location: 'Smouha, Alexandria',
      phone: '+20 123 456 7890',
      rating: 4.6,
      reviews: 89,
      services: ['maintenance', 'spare-parts'],
      hours: '10:00 AM - 8:00 PM',
      distance: '5.2 km',
      image: 'https://images.unsplash.com/photo-1576435726409-aa90e0da1a24?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Giza Bike Works',
      location: 'Dokki, Giza',
      phone: '+20 124 567 8901',
      rating: 4.9,
      reviews: 234,
      services: ['maintenance'],
      hours: '8:00 AM - 10:00 PM',
      distance: '3.8 km',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Mansoura Cycles',
      location: 'Mansoura City',
      phone: '+20 125 678 9012',
      rating: 4.5,
      reviews: 67,
      services: ['spare-parts'],
      hours: '9:00 AM - 7:00 PM',
      distance: '120 km',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Tanta Bike Repair',
      location: 'Tanta Center',
      phone: '+20 126 789 0123',
      rating: 4.7,
      reviews: 112,
      services: ['maintenance'],
      hours: '8:30 AM - 9:30 PM',
      distance: '90 km',
      image: 'https://images.unsplash.com/photo-1605352029938-8be51351e54c?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Luxury Bikes Egypt',
      location: 'Maadi, Cairo',
      phone: '+20 127 890 1234',
      rating: 4.9,
      reviews: 312,
      services: ['maintenance', 'spare-parts'],
      hours: '10:00 AM - 10:00 PM',
      distance: '8.1 km',
      image: 'https://images.unsplash.com/photo-1488208465698-7ed3730d5c38?w=600&h=400&fit=crop'
    }
  ]

  const filteredShops = shops.filter(shop => {
    const matchesFilter = filter === 'all' || shop.services.includes(filter)
    const matchesSearch =
      shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900/50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Bike Shops & Services
          </h1>
          <p className="text-slate-400 text-lg">
            Find nearby shops for spare parts and professional maintenance
          </p>
        </div>

        {/* Search & Filter Section */}
        <div className="glass p-6 md:p-8 rounded-2xl mb-12 animate-slide-up">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search shops or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-glass w-full pl-12"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`badge transition-all duration-300 ${
                filter === 'all'
                  ? 'badge-primary ring-2 ring-primary-400'
                  : 'glass hover:bg-slate-700/40'
              }`}
            >
              <span>All Services</span>
            </button>

            <button
              onClick={() => setFilter('maintenance')}
              className={`badge transition-all duration-300 flex items-center gap-2 ${
                filter === 'maintenance'
                  ? 'badge-primary ring-2 ring-primary-400'
                  : 'glass hover:bg-slate-700/40'
              }`}
            >
              <Wrench className="h-4 w-4" />
              <span>Maintenance</span>
            </button>

            <button
              onClick={() => setFilter('spare-parts')}
              className={`badge transition-all duration-300 flex items-center gap-2 ${
                filter === 'spare-parts'
                  ? 'badge-primary ring-2 ring-primary-400'
                  : 'glass hover:bg-slate-700/40'
              }`}
            >
              <Package className="h-4 w-4" />
              <span>Spare Parts</span>
            </button>
          </div>
        </div>

        {/* Shops Grid */}
        {filteredShops.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.map((shop, index) => (
              <div
                key={shop.id}
                className="card-hover group overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 z-10 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  {/* Image */}
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full p-3 shadow-elevation-2 group-hover:shadow-elevation-3 transition-shadow duration-300">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-slate-900 text-slate-900" />
                      <span className="font-bold text-slate-900 text-sm">{shop.rating}</span>
                    </div>
                  </div>

                  {/* Distance Badge */}
                  {shop.distance && (
                    <div className="absolute bottom-4 left-4 z-20 glass px-3 py-1 rounded-full text-xs font-semibold text-primary-300 flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      {shop.distance}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  {/* Name */}
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary-300 transition-colors duration-300">
                    {shop.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-start gap-3 mb-4 text-slate-400">
                    <MapPin className="h-4 w-4 text-primary-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{shop.location}</p>
                      <p className="text-xs text-slate-500">{shop.distance} away</p>
                    </div>
                  </div>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-700/30">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-slate-100">{shop.rating}</span>
                    </div>
                    <span className="text-xs text-slate-500">({shop.reviews} reviews)</span>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3 mb-4 text-slate-400">
                    <Clock className="h-4 w-4 text-primary-400 flex-shrink-0" />
                    <span className="text-sm">{shop.hours}</span>
                  </div>

                  {/* Service Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {shop.services.includes('maintenance') && (
                      <span className="badge badge-primary flex items-center gap-1">
                        <Wrench className="h-3 w-3" />
                        Maintenance
                      </span>
                    )}
                    {shop.services.includes('spare-parts') && (
                      <span className="badge badge-accent flex items-center gap-1">
                        <Package className="h-3 w-3" />
                        Spare Parts
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={`tel:${shop.phone}`}
                      className="btn btn-primary flex-1 text-sm group/btn"
                    >
                      <Phone className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      <span>Call</span>
                    </a>
                    <button
                      onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(shop.location)}`)}
                      className="btn btn-secondary flex-1 text-sm group/btn"
                    >
                      <MapPinIcon className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      <span>Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Filter className="h-16 w-16 text-slate-700 mx-auto mb-4 opacity-50" />
            <p className="text-slate-400 text-lg font-medium">
              No shops found matching your criteria
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shops
