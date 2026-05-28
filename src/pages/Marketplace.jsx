import { useState } from 'react'
import { Bike, MapPin, Phone, Calendar, DollarSign, Plus, Search, Filter, Heart, X } from 'lucide-react'

function Marketplace() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  const bikes = [
    {
      id: 1,
      title: 'Trek Domane AL 2 - Like New',
      price: 15000,
      location: 'Maadi, Cairo',
      date: '2024-05-20',
      type: 'road',
      condition: 'like-new',
      image: 'https://images.unsplash.com/photo-1485965120184-e224f7a1db7e?w=400&h=300&fit=crop',
      seller: 'Ahmed Mohamed',
      phone: '+20 122 345 6789',
      description: 'Excellent condition, only used for 6 months. Perfect for long rides.'
    },
    {
      id: 2,
      title: 'Giant Escape 3 - Good Condition',
      price: 8500,
      location: 'Nasr City, Cairo',
      date: '2024-05-18',
      type: 'hybrid',
      condition: 'good',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=300&fit=crop',
      seller: 'Sara Ali',
      phone: '+20 123 456 7890',
      description: 'Great commuter bike, well maintained with regular servicing.'
    },
    {
      id: 3,
      title: 'Specialized Rockhopper - Mountain Bike',
      price: 12000,
      location: 'Alexandria',
      date: '2024-05-15',
      type: 'mountain',
      condition: 'good',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      seller: 'Omar Hassan',
      phone: '+20 124 567 8901',
      description: 'Perfect for off-road adventures. Recently serviced with new brakes.'
    },
    {
      id: 4,
      title: 'Cannondale Synapse - Carbon Frame',
      price: 25000,
      location: 'Giza',
      date: '2024-05-12',
      type: 'road',
      condition: 'excellent',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&h=300&fit=crop',
      seller: 'Karim Ahmed',
      phone: '+20 125 678 9012',
      description: 'High-end road bike with carbon frame. Lightweight and fast.'
    },
    {
      id: 5,
      title: 'BMC Teammachine - Racing Bike',
      price: 35000,
      location: 'Mansoura',
      date: '2024-05-10',
      type: 'road',
      condition: 'like-new',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      seller: 'Mostafa Kamal',
      phone: '+20 126 789 0123',
      description: 'Professional racing bike, barely used. Comes with accessories.'
    },
    {
      id: 6,
      title: 'Scott Scale - XC Mountain Bike',
      price: 18000,
      location: 'Tanta',
      date: '2024-05-08',
      type: 'mountain',
      condition: 'good',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
      seller: 'Youssef Ibrahim',
      phone: '+20 127 890 1234',
      description: 'Cross-country mountain bike, great for trails and competitions.'
    }
  ]

  const filteredBikes = bikes.filter(bike => {
    const matchesFilter = filter === 'all' || bike.type === filter
    const matchesSearch = bike.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bike.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 animate-slide-up">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Bike Marketplace</h1>
            <p className="text-slate-400 text-lg">Buy and sell bikes with fellow enthusiasts</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="btn-primary flex items-center space-x-2 space-x-reverse"
          >
            <Plus className="h-5 w-5" />
            <span>Sell Your Bike</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="glass rounded-2xl p-6 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search bikes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                { value: 'all', label: 'All' },
                { value: 'road', label: 'Road' },
                { value: 'mountain', label: 'Mountain' },
                { value: 'hybrid', label: 'Hybrid' }
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setFilter(item.value)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    filter === item.value 
                      ? 'bg-gradient-to-r from-forest-600 to-forest-500 text-white shadow-lg shadow-forest-500/30' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bikes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBikes.map((bike, index) => (
            <div
              key={bike.id}
              className="glass rounded-2xl overflow-hidden card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={bike.image}
                  alt={bike.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <Heart className="h-5 w-5 text-white" />
                </button>
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                  bike.condition === 'like-new' || bike.condition === 'excellent'
                    ? 'bg-forest-500/80 text-white backdrop-blur-sm'
                    : 'bg-electric-500/80 text-white backdrop-blur-sm'
                }`}>
                  {bike.condition === 'like-new' ? 'Like New' : bike.condition === 'excellent' ? 'Excellent' : 'Good'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{bike.title}</h3>
                
                <div className="flex items-center space-x-2 space-x-reverse mb-3">
                  <DollarSign className="h-5 w-5 text-forest-400" />
                  <span className="text-2xl font-bold text-forest-400">{bike.price.toLocaleString()} EGP</span>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse text-slate-400 mb-2">
                  <MapPin className="h-4 w-4 text-electric-400" />
                  <span className="text-sm">{bike.location}</span>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse text-slate-400 mb-4">
                  <Calendar className="h-4 w-4 text-orange-400" />
                  <span className="text-sm">Listed {new Date(bike.date).toLocaleDateString('en-GB')}</span>
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{bike.description}</p>

                <div className="flex gap-2">
                  <a
                    href={`tel:${bike.phone}`}
                    className="flex-1 btn-primary flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Contact</span>
                  </a>
                  <button className="flex-1 btn-secondary">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBikes.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-slate-400 text-lg">No bikes found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Add Bike Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="glass rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Sell Your Bike</h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Bike Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Trek Domane AL 2 - Like New"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Price (EGP)</label>
                  <input
                    type="number"
                    placeholder="15000"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Bike Type</label>
                  <select className="input-field">
                    <option value="">Select type</option>
                    <option value="road">Road Bike</option>
                    <option value="mountain">Mountain Bike</option>
                    <option value="hybrid">Hybrid Bike</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Condition</label>
                  <select className="input-field">
                    <option value="">Select condition</option>
                    <option value="like-new">Like New</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="e.g., Maadi, Cairo"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+20 1xx xxx xxxx"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your bike..."
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Image URL</label>
                  <input
                    type="url"
                    placeholder="https://example.com/bike-image.jpg"
                    className="input-field"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  List My Bike
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Marketplace
