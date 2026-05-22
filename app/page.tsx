'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, Star, Gem, Coffee, Users } from 'lucide-react'

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [bookingOpen, setBookingOpen] = useState(false)

  const slides = [
    {
      title: "India's First Luxury Salon & Café",
      subtitle: 'Where world-class beauty meets refined indulgence',
      description: 'Discover premium salon artistry paired with a sophisticated café experience, all under one extraordinary roof.',
      cta: 'Book Your Slot',
    },
    {
      title: 'World-Class Salon Experiences',
      subtitle: 'with Premium Brands',
      description: 'Luxury begins with quality. Our expert stylists use internationally trusted brands to deliver bespoke beauty services tailored just for you.',
      cta: 'View Gallery',
    },
    {
      title: 'A Café Designed for',
      subtitle: 'Pause, Pleasure & Indulgence',
      description: 'Relax in the most aesthetic salon café. Savor handcrafted coffee and gourmet bites while enjoying a serene, luxurious environment.',
      cta: 'Explore Menu',
    },
    {
      title: 'Experience It.',
      subtitle: 'Feel the Luxury. Live Salone.',
      description: 'More than a salon visit, Salone is a sensory escape where beauty, comfort, and sophistication merge to create unforgettable moments.',
      cta: 'Learn More',
    },
  ]

  const services = [
    { icon: <Gem className="w-8 h-8" />, title: 'Hair Services', description: 'Premium cuts, coloring, and treatments' },
    { icon: <Star className="w-8 h-8" />, title: 'Beauty Treatments', description: 'Facial, makeup, and skincare expertise' },
    { icon: <Coffee className="w-8 h-8" />, title: 'Artisan Café', description: 'Handcrafted beverages and gourmet bites' },
    { icon: <Users className="w-8 h-8" />, title: 'Private Sessions', description: 'Exclusive treatments and consultations' },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Gem className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-serif font-bold">SALONE</h1>
              <p className="text-xs text-muted-foreground">SALON • CAFÉ</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setBookingOpen(true)}
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors text-sm font-semibold"
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden pt-20">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src="/salon-hero.jpg"
              alt="Salone Salon"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-3xl mx-auto px-6 text-center">
                <div className="inline-block px-4 py-2 rounded-full border border-primary mb-6">
                  <span className="text-sm text-primary">Premium Beauty & Wellness Studio</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white leading-tight">
                  {slide.title}
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {slide.subtitle}
                  </span>
                </h1>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors font-semibold flex items-center gap-2"
                  >
                    {slide.cta}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors flex items-center justify-center text-white"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors flex items-center justify-center text-white"
        >
          →
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-primary w-8' : 'bg-primary/40'}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 right-8 text-center text-white/70">
          <p className="text-sm mb-2">SCROLL DOWN</p>
          <div className="animate-bounce text-2xl">↓</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-2">OUR OFFERINGS</p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              World-Class Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the perfect blend of salon expertise and café indulgence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-lg hover:border-primary transition-colors group bg-card/50 backdrop-blur"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold mb-2">ABOUT SALONE</p>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Redefining Luxury & Wellness
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At Salone, we believe beauty and wellness go beyond treatments—they&apos;re an experience. Our carefully curated space brings together world-class salon artistry with sophisticated café culture.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every detail, from our premium product selection to our serene ambiance, is designed to provide you with an unforgettable sensory escape.
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors font-semibold"
              >
                Experience Salone
              </button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/cafe-ambiance.jpg"
                alt="Salone Café"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-2">WHY CHOOSE US</p>
            <h2 className="text-4xl font-serif font-bold">
              Excellence in Every Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { num: '01', title: 'Expert Team', desc: 'Award-winning stylists with international expertise' },
              { num: '02', title: 'Premium Products', desc: 'Only the finest brands from around the world' },
              { num: '03', title: 'Bespoke Services', desc: 'Personalized treatments tailored to your needs' },
              { num: '04', title: 'Luxury Ambiance', desc: 'Serene spaces designed for ultimate relaxation' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-4xl font-serif font-bold text-primary/30 flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-primary text-sm font-semibold mb-4">READY TO EXPERIENCE LUXURY?</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Book Your Appointment Today
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Reserve your spot at Salone and step into a world of beauty, wellness, and indulgence.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors font-semibold text-lg"
          >
            Book Your Slot
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary border-t border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Gem className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-serif font-bold">SALONE</h3>
              </div>
              <p className="text-muted-foreground">Luxury salon & café experience</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>📍 123 Luxury Avenue, City</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📧 hello@salone.com</li>
                <li>🕐 Mon-Sun: 10AM - 8PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 Salone. All rights reserved. Crafted with elegance.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg max-w-md w-full p-8">
            <h3 className="text-2xl font-serif font-bold mb-4">Book Your Appointment</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <select className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors">
                <option>Select Service</option>
                <option>Hair Styling</option>
                <option>Beauty Treatment</option>
                <option>Café Experience</option>
              </select>
              <input
                type="date"
                className="w-full px-4 py-2 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors font-semibold"
              >
                Confirm Booking
              </button>
              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="w-full px-6 py-2 rounded-full border border-border hover:bg-secondary transition-colors font-semibold"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
