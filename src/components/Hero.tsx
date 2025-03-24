import React from 'react';
import { Star, Leaf, Droplets, Heart, FlaskConical, Tablets, ShieldPlus } from 'lucide-react';

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
    <section id="home" className="relative">
      {/* Full-width background image with overlay */}
      <div className="absolute inset-0 z-0 h-[85vh] md:h-[85vh]">
        <img
          src="https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80"
          alt="Homeopathy Medicine Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-emerald-600/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 md:py-24 min-h-[85vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white space-y-6 md:space-y-8">
              <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full hover:bg-emerald-500/30 transition-colors">
                <span className="text-emerald-200 font-medium">Welcome to Havens</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in">
                  Discover the Power of
                  <span className="text-emerald-300 hover:text-emerald-200 transition-colors"> Natural Healing</span>
                </h1>
                <p className="text-base md:text-lg text-emerald-50/90 leading-relaxed animate-slide-up">
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

              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-2xl border border-emerald-500/20 hover:bg-white/15 transition-all duration-300">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    { value: "15k+", label: "Happy Patients" },
                    { value: "25+", label: "Years Experience" },
                    { value: "98%", label: "Success Rate" },
                    { value: "4.9", label: "Rating", stars: true }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <h3 className="text-2xl md:text-3xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors mb-2">{stat.value}</h3>
                      {stat.stars ? (
                        <div className="flex justify-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={14} className="fill-emerald-300 text-emerald-300 group-hover:fill-emerald-200 group-hover:text-emerald-200 transition-colors" />
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm md:text-base text-emerald-100 group-hover:text-emerald-50 transition-colors">{stat.label}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Homeopathy Section */}
            <div className="lg:ml-auto hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-emerald-500/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8">Why Choose Homeopathy?</h2>
                <div className="grid gap-4 md:gap-6">
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
                    <div key={index} className="flex items-start gap-4 group hover:bg-emerald-500/20 p-4 rounded-xl transition-all duration-300">
                      <div className="bg-emerald-500/20 p-3 rounded-full group-hover:bg-emerald-500/30 transition-colors group-hover:scale-110 transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-white transition-colors">{item.title}</h3>
                        <p className="text-sm text-emerald-100 group-hover:text-white transition-colors">{item.description}</p>
                      </div>
                    </div>
                  ))}
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