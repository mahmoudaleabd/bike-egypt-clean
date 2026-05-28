import { useState } from 'react'
import { MapPin, Phone, Calendar, DollarSign, Plus, Search, Filter, Heart, X, Zap } from 'lucide-react'

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
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c8a6d62?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1576435726409-aa90e0da1a24?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1532298996011-933d06a7f189?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c8a6d62?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1575570236322-c0a82c1cdc81?w=600&h=400&fit=crop',
      seller: 'Youssef Ibrahim',
      phone: '+20 127 890 1234',
      description: 'Cross-country mountain bike, great for trails and competitions.'
    }
  ]

  const filteredBikes = bikes.filter(bike => {
    const matchesFilter = filter === 'all' || bike.type === filter
    const matchesSearch =
      bike.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bike.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900/50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Bike Marketplace
            </h1>
            <p className="text-slate-400 text-lg">
              Buy and sell bikes with fellow enthusiasts
            </p>
          </div>

          <button
            onClick={() => setShowAddForm(true)}
            className="btn btn-accent group animate-slide-up flex-shrink-0"
          >
            <Plus className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Sell Your Bike</span>
          </button>
        </div>

        {/* Search & Filter Section */}
        <div className="glass p-6 md:p-8 rounded-2xl mb-12 animate-slide-up">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search bikes by name or location..."
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
              All Types
            </button>

            {['road', 'mountain', 'hybrid'].map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`badge transition-all duration-300 capitalize ${
                  filter === type
                    ? 'badge-primary ring-2 ring-primary-400'
                    : 'glass hover:bg-slate-700/40'
                }`}
              >
                {type} Bike
              </button>
            ))}
          </div>
        </div>

        {/* Bikes Grid */}
        {filteredBikes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBikes.map((bike, index) => (
              <div
                key={bike.id}
                className="card-hover group overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 z-10 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  {/* Image */}
                  <img
                    src={bike.image}
                    alt={bike.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Condition Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                        bike.condition === 'like-new' || bike.condition === 'excellent'
                          ? 'badge-success'
                          : bike.condition === 'good'
                          ? 'badge-warning'
                          : 'badge-primary'
                      }`}
                    >
                      <Zap className="h-3 w-3" />
                      {bike.condition === 'like-new'
                        ? 'Like New'
                        : bike.condition.charAt(0).toUpperCase() + bike.condition.slice(1)}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute bottom-4 right-4 z-20 bg-slate-900/50 hover:bg-slate-800 p-2 rounded-full backdrop-blur-sm transition-colors duration-300">
                    <Heart className="h-5 w-5 text-accent-400" />
                  </button>

                  {/* Featured Badge */}
                  {index === 0 && (
                    <div className="absolute bottom-4 left-4 z-20 glass px-3 py-1 rounded-full text-xs font-semibold text-accent-400 flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary-300 transition-colors duration-300 line-clamp-2">
                    {bike.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700/30">
                    <DollarSign className="h-5 w-5 text-accent-400" />
                    <span className="text-2xl font-bold text-accent-400">
                      {bike.price.toLocaleString()}
                    </span>
                    <span className="text-slate-500 text-sm">EGP</span>
                  </div>

                  {/* Location & Date */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-slate-400">
                      <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                      <span className="text-sm">{bike.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Calendar className="h-4 w-4 text-primary-400 flex-shrink-0" />
                      <span className="text-sm">
                        Listed {new Date(bike.date).toLocaleDateString('en-GB')}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {bike.description}
                  </p>

                  {/* Seller Info */}
                  <div className="glass p-4 rounded-lg mb-6">
                    <p className="text-xs text-slate-500 mb-2">Seller</p>
                    <p className="text-sm font-semibold text-slate-100">{bike.seller}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={`tel:${bike.phone}`}
                      className="btn btn-primary flex-1 text-sm group/btn"
                    >
                      <Phone className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      <span>Call</span>
                    </a>
                    <button className="btn btn-secondary flex-1 text-sm">
                      Message
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
              No bikes found matching your criteria
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </div>

      {/* Sell Your Bike Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="glass border border-slate-700/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 glass border-b border-slate-700/30 px-6 md:px-8 py-6 flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-100">
                Sell Your Bike
              </h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-2 hover:bg-slate-700/30 rounded-lg transition-colors text-slate-400 hover:text-slate-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Bike Title *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Trek Domane AL 2 - Like New"
                      className="input-glass w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Price (EGP) *
                    </label>
                    <input
                      type="number"
                      placeholder="15000"
                      className="input-glass w-full"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Bike Type *
                    </label>
                    <select className="input-glass w-full">
                      <option value="">Select type</option>
                      <option value="road">Road Bike</option>
                      <option value="mountain">Mountain Bike</option>
                      <option value="hybrid">Hybrid Bike</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Condition *
                    </label>
                    <select className="input-glass w-full">
                      <option value="">Select condition</option>
                      <option value="like-new">Like New</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    Location *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Maadi, Cairo"
                    className="input-glass w-full"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+20 1xx xxx xxxx"
                      className="input-glass w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="input-glass w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Describe your bike, condition, features, etc..."
                    className="input-glass w-full resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    Image URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/bike-image.jpg"
                    className="input-glass w-full"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-slate-700/30">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="btn btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-accent flex-1">
                    <Plus className="h-5 w-5" />
                    <span>List My Bike</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Marketplace
