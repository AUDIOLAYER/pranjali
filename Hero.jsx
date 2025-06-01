import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Pranjali & Kabir
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light">
            A Love Story Beyond Convention
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">May 26, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Kolkata, West Bengal</span>
            </div>
          </div>

          <div className="animate-float">
            <a
              href="#story"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover Our Journey
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
