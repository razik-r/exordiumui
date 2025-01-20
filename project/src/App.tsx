import React from 'react';
import { Menu, X, Instagram, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/30 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <img src="https://images.unsplash.com/photo-1636819488537-a9b1e5655e58?auto=format&fit=crop&q=80&w=100" 
                     alt="Logo" 
                     className="h-8 w-8 rounded-full" />
                <span className="text-xl font-bold">EXORDIUM</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#events" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Events</a>
                <a href="#workshops" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Workshops</a>
                <a href="#talks" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Talks</a>
                <a href="#contact" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block hover:bg-indigo-700 px-3 py-2 rounded-md text-base font-medium transition-colors">Home</a>
              <a href="#events" className="block hover:bg-indigo-700 px-3 py-2 rounded-md text-base font-medium transition-colors">Events</a>
              <a href="#workshops" className="block hover:bg-indigo-700 px-3 py-2 rounded-md text-base font-medium transition-colors">Workshops</a>
              <a href="#talks" className="block hover:bg-indigo-700 px-3 py-2 rounded-md text-base font-medium transition-colors">Talks</a>
              <a href="#contact" className="block hover:bg-indigo-700 px-3 py-2 rounded-md text-base font-medium transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              EXORDIUM 2024
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Join us for an extraordinary journey through technology, innovation, and learning. 
              Experience workshops, talks, and competitions that will shape your future.
            </p>
            <a href="#events" 
               className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Explore Events
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1470" 
                   alt="Hackathon" 
                   className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tech Hackathon</h3>
                <p className="text-gray-300">48-hour coding challenge to build innovative solutions.</p>
                <a href="#" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">Learn more →</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1470" 
                   alt="Workshop" 
                   className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI Workshop</h3>
                <p className="text-gray-300">Hands-on workshop on artificial intelligence and machine learning.</p>
                <a href="#" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">Learn more →</a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1470" 
                   alt="Conference" 
                   className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tech Talks</h3>
                <p className="text-gray-300">Inspiring talks from industry leaders and innovators.</p>
                <a href="#" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-indigo-400" />
                  <span>contact@exordium.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-indigo-400" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-indigo-400" />
                  <span>123 Tech Street, Innovation City</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-indigo-400 transition-colors"><Instagram className="h-6 w-6" /></a>
                  <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="h-6 w-6" /></a>
                  <a href="#" className="hover:text-indigo-400 transition-colors"><Github className="h-6 w-6" /></a>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 EXORDIUM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;