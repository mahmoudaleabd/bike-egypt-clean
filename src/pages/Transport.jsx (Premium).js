import { useState } from 'react'
import { Truck, MapPin, Calendar, Clock, Phone, Mail, CheckCircle, AlertCircle, Zap } from 'lucide-react'

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
      icon: '🚴'
    },
    {
      id: 2,
      title: 'Inter-city Transport',
      description: 'Transport between different cities',
      price: 'Starting from 300 EGP',
      duration: '1-2 days',
      icon: '🛣️'
    },
    {
      id: 3,
      title: 'Event Transport',
      description: 'Transport to cycling events and races',
      price: 'Starting from 200 EGP',
      duration: 'Flexible',
      icon: '🏆'
    },
    {
      id: 4,
      title: 'International Shipping',
      description: 'Ship bikes internationally',
      price: 'Starting from 2000 EGP',
      duration: '5-10 days',
      icon: '✈️'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900/50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Bike Transport Services
          </h1>
          <p className="text-slate-400 text-lg">
            Safe and reliable bike transport across Egypt and beyond
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {transportServices.map((service, index) => (
            <div
              key={service.id}
              className="card-hover group overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{service.description}</p>
              <div className="space-y-2 text-sm">
                <p className="text-accent-400 font-semibold">{service.price}</p>
                <p className="text-slate-500">{service.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="glass p-8 md:p-12 rounded-2xl mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-100 mb-8">
            Why Choose Our Transport Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: CheckCircle, title: 'Professional Handling', desc: 'Care with expertise' },
              { icon: Zap, title: 'Insurance Coverage', desc: 'Protected during transport' },
              { icon: CheckCircle, title: 'Real-time Tracking', desc: 'Monitor your bike' },
              { icon: Zap, title: 'Door-to-Door Service', desc: 'Convenient pickup & drop' },
              { icon: CheckCircle, title: 'Competitive Pricing', desc: 'Best rates in market' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Quick and reliable' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <item.icon className="h-6 w-6 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-100 mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Form Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="glass border border-slate-700/30 p-8 rounded-2xl animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-100 mb-8">
              Request Transport
            </h2>

            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-8 text-center animate-scale-in">
                <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">Request Submitted!</h3>
                <p className="text-emerald-200">
                  We'll contact you within 24 hours to confirm your transport request.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ahmed Mohamed"
                      className="input-glass w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+20 1xx xxx xxxx"
                      className="input-glass w-full"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ahmed@example.com"
                    className="input-glass w-full"
                    required
                  />
                </div>

                {/* Locations */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary-400" />
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      placeholder="123 Street, City"
                      className="input-glass w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent-400" />
                      Drop-off Location *
                    </label>
                    <input
                      type="text"
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleChange}
                      placeholder="456 Road, City"
                      className="input-glass w-full"
                      required
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary-400" />
                      Pickup Date *
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="input-glass w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent-400" />
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleChange}
                      className="input-glass w-full"
                      required
                    />
                  </div>
                </div>

                {/* Bike Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Bike Type *
                    </label>
                    <select
                      name="bikeType"
                      value={formData.bikeType}
                      onChange={handleChange}
                      className="input-glass w-full"
                      required
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
                    <label className="block text-sm font-semibold text-slate-200 mb-3">
                      Number of Bikes *
                    </label>
                    <input
                      type="number"
                      name="bikeCount"
                      value={formData.bikeCount}
                      onChange={handleChange}
                      className="input-glass w-full"
                      min="1"
                      max="10"
                      required
                    />
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    Special Instructions
                  </label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    placeholder="Any special requirements or instructions..."
                    className="input-glass w-full resize-none"
                    rows="4"
                  />
                </div>

                {/* Info Box */}
                <div className="glass border border-slate-700/30 p-4 rounded-lg flex gap-3">
                  <AlertCircle className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-300">
                    <p className="font-semibold mb-1">Important</p>
                    <p>Ensure your bike is clean and ready. Remove loose items and accessories.</p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-accent w-full group"
                >
                  <Truck className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Submit Transport Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Contact Details */}
            <div className="glass border border-slate-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-slate-100 mb-6">
                Need Help?
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:+201000000000"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-slate-700/40 transition-colors group"
                >
                  <Phone className="h-6 w-6 text-primary-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Phone</p>
                    <p className="text-lg font-semibold text-slate-100">+20 100 000 0000</p>
                  </div>
                </a>

                <a
                  href="mailto:support@bikee gypt.com"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-slate-700/40 transition-colors group"
                >
                  <Mail className="h-6 w-6 text-accent-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Email</p>
                    <p className="text-lg font-semibold text-slate-100">support@bikegypt.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Service Hours */}
            <div className="glass border border-slate-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary-400" />
                Service Hours
              </h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="glass border border-slate-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-slate-100 mb-4">
                Common Questions?
              </h3>
              <p className="text-slate-400 mb-6">
                Check our FAQ page for answers to common questions about bike transport, insurance, and delivery times.
              </p>
              <button className="btn btn-secondary w-full">
                Visit FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transport
