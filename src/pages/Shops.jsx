import { useState } from 'react'
import { MapPin, Phone, Star, Clock, Wrench, Package, Search, Filter } from 'lucide-react'

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
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=300&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1485965120184-e224f7a1db7e?w=400&h=300&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&h=300&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop'
    }
  ]

  const filteredShops = shops.filter(shop => {
    const matchesFilter = filter === 'all' || shop.services.includes(filter)
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shop.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold text-white mb-2">Bike Shops & Services</h1>
          <p className="text-slate-400 text-lg">Find nearby shops for spare parts and maintenance</p>
        </div>

        {/* Search and Filter */}
        <div className="glass rounded-2xl p-6 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search shops or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                { value: 'all', label: 'All', icon: Filter },
                { value: 'maintenance', label: 'Maintenance', icon: Wrench },
                { value: 'spare-parts', label: 'Spare Parts', icon: Package }
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setFilter(item.value)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 space-x-reverse ${
                    filter === item.value 
                      ? 'bg-gradient-to-r from-forest-600 to-forest-500 text-white shadow-lg shadow-forest-500/30' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Shops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map((shop, index) => (
            <div
              key={shop.id}
              className="glass rounded-2xl overflow-hidden card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-forest-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {shop.distance}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{shop.name}</h3>
                <div className="flex items-center space-x-2 space-x-reverse text-slate-400 mb-3">
                  <MapPin className="h-4 w-4 text-forest-400" />
                  <span className="text-sm">{shop.location}</span>
                </div>
                
                <div className="flex items-center space-x-2 space-x-reverse mb-3">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Star className="h-4 w-4 fill-blue-400 text-blue-400" />
                    <span className="font-semibold text-white">{shop.rating}</span>
                  </div>
                  <span className="text-slate-500 text-sm">({shop.reviews} reviews)</span>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse text-slate-400 mb-4">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">{shop.hours}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {shop.services.includes('maintenance') && (
                    <span className="bg-forest-500/20 text-forest-400 px-3 py-1 rounded-full text-xs font-medium border border-forest-500/30">
                      <Wrench className="h-3 w-3 inline mr-1" />
                      Maintenance
                    </span>
                  )}
                  {shop.services.includes('spare-parts') && (
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
                      <Package className="h-3 w-3 inline mr-1" />
                      Spare Parts
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a
                    href={`tel:${shop.phone}`}
                    className="flex-1 btn-primary flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </a>
                  <button className="flex-1 btn-secondary">
                    Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredShops.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-slate-400 text-lg">No shops found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shops
