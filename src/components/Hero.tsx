import React from 'react';
import { Droplets, Heart, FlaskConical, ShieldPlus } from 'lucide-react';

interface HeroProps {
  setShowBooking: (value: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setShowBooking }) => {
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBooking(true);
    window.history.pushState({}, '', '/book');
  };

  return (
    <section id="home" className="relative bg-emerald-900 min-h-[85vh]">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80')] bg-cover bg-center"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-emerald-600/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 md:py-24 min-h-[85vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left side - Main Content */}
            <div className="text-white space-y-6 md:space-y-8">
              <div className="inline-block px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full hover:bg-emerald-500/30 transition-colors">
                <span className="text-emerald-200 font-medium">Welcome to Havens</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  Discover the Power of
                  <span className="text-emerald-300 hover:text-emerald-200 transition-colors"> Natural Healing</span>
                </h1>
                <p className="text-base md:text-lg text-emerald-50/90 leading-relaxed">
                  At Havens Homeopathic & Infertility Clinic, we believe in the body's natural ability to heal itself. 
                  Our treatments work in harmony with your body's healing mechanisms, providing gentle yet effective solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/book"
                  onClick={handleBookClick}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-emerald-500/50 text-center text-sm md:text-base"
                >
                  Book Consultation
                </a>
                <a 
                  href="/#about"
                  className="border-2 border-emerald-300 text-emerald-300 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-emerald-300 hover:text-emerald-900 transition-all duration-300 hover:scale-105 transform text-center text-sm md:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right side - Why Choose Homeopathy */}
            <div className="lg:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why Choose Homeopathy?</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Droplets className="text-emerald-300" size={24} />,
                    title: "Natural Treatment",
                    description: "Gentle, natural remedies that work with your body"
                  },
                  {
                    icon: <Heart className="text-emerald-300" size={24} />,
                    title: "Holistic Approach",
                    description: "Treats the whole person, not just symptoms"
                  },
                  {
                    icon: <FlaskConical className="text-emerald-300" size={24} />,
                    title: "No Side Effects",
                    description: "Safe and gentle healing process"
                  },
                  {
                    icon: <ShieldPlus className="text-emerald-300" size={24} />,
                    title: "Long-term Health",
                    description: "Builds natural immunity and resilience"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02] border border-emerald-500/20 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-500/20 p-3 rounded-full group-hover:bg-emerald-500/30 transition-colors group-hover:scale-110 transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-emerald-100">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;