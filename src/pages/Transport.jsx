import { useState } from 'react'
import { Truck, MapPin, Calendar, Clock, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react'

function Transport() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    bikeType: '',
    bikeCount: 1,
    specialInstructions: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        pickupLocation: '',
        dropoffLocation: '',
        pickupDate: '',
        pickupTime: '',
        bikeType: '',
        bikeCount: 1,
        specialInstructions: ''
      })
    }, 3000)
  }

  const transportServices = [
    {
      id: 1,
      title: 'City Transport',
      description: 'Transport within the same city',
      price: 'Starting from 150 EGP',
      duration: 'Same day',
      icon: '🚴',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 2,
      title: 'Inter-city Transport',
      description: 'Transport between different cities',
      price: 'Starting from 300 EGP',
      duration: '1-2 days',
      icon: '🚚',
      color: 'from-electric-500 to-electric-600'
    },
    {
      id: 3,
      title: 'Event Transport',
      description: 'Transport to cycling events and races',
      price: 'Starting from 200 EGP',
      duration: 'Flexible',
      icon: '🏆',
      color: 'from-burnt-500 to-burnt-600'
    },
    {
      id: 4,
      title: 'International Shipping',
      description: 'Ship bikes internationally',
      price: 'Starting from 2000 EGP',
      duration: '5-10 days',
      icon: '✈️',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold text-white mb-2">Bike Transport Services</h1>
          <p className="text-slate-400 text-lg">Safe and reliable bike transport across Egypt</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Services Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-white mb-6">Our Services</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {transportServices.map((service, index) => (
                <div
                  key={service.id}
                  className="glass rounded-2xl p-6 card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 mb-3 text-sm">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-semibold`}>
                      {service.price}
                    </span>
                    <span className="text-slate-500 text-sm">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="glass rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Professional handling with care',
                  'Insurance coverage for your bike',
                  'Real-time tracking available',
                  'Door-to-door service',
                  'Competitive pricing'
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 space-x-reverse animate-slide-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Request Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Request Transport</h2>
              
              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center animate-scale-in">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-400 mb-2">Request Submitted!</h3>
                  <p className="text-slate-400">We'll contact you within 24 hours to confirm your transport request.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ahmed Mohamed"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+20 1xx xxx xxxx"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ahmed@example.com"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      <MapPin className="h-4 w-4 inline mr-1 text-green-400" />
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 123 Street, Maadi, Cairo"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      <MapPin className="h-4 w-4 inline mr-1 text-electric-400" />
                      Drop-off Location *
                    </label>
                    <input
                      type="text"
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 456 Road, Alexandria"
                      className="input-field"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Calendar className="h-4 w-4 inline mr-1 text-burnt-400" />
                        Pickup Date *
                      </label>
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Clock className="h-4 w-4 inline mr-1 text-red-400" />
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Bike Type *
                      </label>
                      <select
                        name="bikeType"
                        value={formData.bikeType}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select type</option>
                        <option value="road">Road Bike</option>
                        <option value="mountain">Mountain Bike</option>
                        <option value="hybrid">Hybrid Bike</option>
                        <option value="electric">E-Bike</option>
                        <option value="bmx">BMX</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Number of Bikes *
                      </label>
                      <input
                        type="number"
                        name="bikeCount"
                        value={formData.bikeCount}
                        onChange={handleChange}
                        required
                        min="1"
                        max="10"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any special requirements or instructions..."
                      className="input-field"
                    />
                  </div>

                  <div className="bg-electric-500/10 border border-electric-500/30 rounded-xl p-4">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <AlertCircle className="h-5 w-5 text-electric-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-slate-300">
                        <p className="font-semibold mb-1 text-electric-400">Important Information</p>
                        <p>Please ensure your bike is clean and ready for transport. Remove any loose items and accessories that could get lost during transport.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Truck className="h-5 w-5" />
                    <span>Submit Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="mt-6 glass rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
              <div className="space-y-3">
                <a
                  href="tel:+201000000000"
                  className="flex items-center space-x-3 space-x-reverse text-slate-400 hover:text-green-400 transition-colors group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>+20 100 000 0000</span>
                </a>
                <a
                  href="mailto:support@bikeegypt.com"
                  className="flex items-center space-x-3 space-x-reverse text-slate-400 hover:text-electric-400 transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>support@bikeegypt.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transport
