import React from 'react';
import { Star, Leaf, Droplets, Heart, FlaskConical, Tablets, ShieldPlus } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      {/* Full-width background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80"
          alt="Homeopathy Medicine Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-600/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full mb-6">
                <span className="text-emerald-200 font-medium">Welcome to Havens</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover the Power of
                <span className="text-emerald-300"> Natural Healing</span>
              </h1>
              <p className="text-lg text-emerald-50/90 mb-8 leading-relaxed">
                At Havens Homeopathic & Infertility Clinic, we believe in the body's natural ability to heal itself. 
                Our treatments work in harmony with your body's healing mechanisms, providing gentle yet effective solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-full hover:bg-emerald-400 transition-colors font-medium">
                  Book Consultation
                </button>
                <button className="border-2 border-emerald-300 text-emerald-300 px-8 py-4 rounded-full hover:bg-emerald-300 hover:text-emerald-900 transition-all font-medium">
                  Learn More
                </button>
              </div>

              {/* Why Homeopathy Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
                <h2 className="text-2xl font-semibold text-emerald-200 mb-6">Why Choose Homeopathy?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/20 p-3 rounded-full">
                      <Droplets className="text-emerald-300" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-200">Natural Treatment</h3>
                      <p className="text-sm text-emerald-100/70">Gentle, natural remedies that work with your body</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/20 p-3 rounded-full">
                      <Heart className="text-emerald-300" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-200">Holistic Approach</h3>
                      <p className="text-sm text-emerald-100/70">Treats the whole person, not just symptoms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/20 p-3 rounded-full">
                      <FlaskConical className="text-emerald-300" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-200">No Side Effects</h3>
                      <p className="text-sm text-emerald-100/70">Safe and gentle healing process</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/20 p-3 rounded-full">
                      <ShieldPlus className="text-emerald-300" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-200">Long-term Health</h3>
                      <p className="text-sm text-emerald-100/70">Builds natural immunity and resilience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="lg:ml-auto">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-emerald-500/20">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-emerald-300 mb-2">15k+</h3>
                    <p className="text-emerald-100">Happy Patients</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-emerald-300 mb-2">25+</h3>
                    <p className="text-emerald-100">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-emerald-300 mb-2">98%</h3>
                    <p className="text-emerald-100">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-emerald-300 mb-2">4.9</h3>
                    <div className="flex justify-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} className="fill-emerald-300 text-emerald-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;