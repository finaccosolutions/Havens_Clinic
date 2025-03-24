import React from 'react';
import { Leaf, Brain, Heart, Shield, Droplets, FlaskConical } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-emerald-50 dark:bg-emerald-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Understanding Homeopathy</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Homeopathy is a natural form of medicine that uses highly diluted substances to trigger the body's natural healing mechanisms.
            It treats each person as a unique individual, focusing on their specific physical, mental, and emotional symptoms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <Brain className="text-emerald-600 dark:text-emerald-400" size={28} />,
              title: "Holistic Treatment",
              description: "Homeopathy treats the whole person, considering physical symptoms alongside emotional and mental well-being for complete healing.",
              gradient: "from-blue-500/20 to-emerald-500/20 dark:from-blue-600/40 dark:to-emerald-600/40",
              hoverGradient: "group-hover:from-blue-500/30 group-hover:to-emerald-500/30 dark:group-hover:from-blue-600/50 dark:group-hover:to-emerald-600/50",
              iconBg: "bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/50 dark:to-emerald-900/50"
            },
            {
              icon: <Heart className="text-rose-600 dark:text-rose-400" size={28} />,
              title: "Natural Healing",
              description: "Using natural substances, homeopathy stimulates the body's self-healing abilities without harsh chemicals or side effects.",
              gradient: "from-rose-500/20 to-amber-500/20 dark:from-rose-600/40 dark:to-amber-600/40",
              hoverGradient: "group-hover:from-rose-500/30 group-hover:to-amber-500/30 dark:group-hover:from-rose-600/50 dark:group-hover:to-amber-600/50",
              iconBg: "bg-gradient-to-br from-rose-100 to-amber-100 dark:from-rose-900/50 dark:to-amber-900/50"
            },
            {
              icon: <Shield className="text-violet-600 dark:text-violet-400" size={28} />,
              title: "Preventive Care",
              description: "Beyond treating current conditions, homeopathy strengthens the immune system to prevent future health issues.",
              gradient: "from-violet-500/20 to-fuchsia-500/20 dark:from-violet-600/40 dark:to-fuchsia-600/40",
              hoverGradient: "group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 dark:group-hover:from-violet-600/50 dark:group-hover:to-fuchsia-600/50",
              iconBg: "bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/50 dark:to-fuchsia-900/50"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-emerald-800 p-6 md:p-8 rounded-2xl shadow-lg group transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 overflow-hidden relative`}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} ${item.hoverGradient} transition-all duration-500 opacity-50`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`${item.iconBg} w-14 md:w-16 h-14 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  {item.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-transparent to-white/5 rounded-full transform group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <div className="bg-white dark:bg-emerald-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-6 md:p-12">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">The Science of Homeopathy</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Droplets className="text-emerald-600 dark:text-emerald-400" size={24} />,
                      title: "Like Cures Like",
                      description: "Substances that cause symptoms in healthy people can treat similar symptoms in sick people."
                    },
                    {
                      icon: <FlaskConical className="text-emerald-600 dark:text-emerald-400" size={24} />,
                      title: "Minimum Dose",
                      description: "Using the smallest possible amount of medication to trigger healing response."
                    },
                    {
                      icon: <Leaf className="text-emerald-600 dark:text-emerald-400" size={24} />,
                      title: "Natural Substances",
                      description: "Remedies derived from plants, minerals, and other natural sources."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="bg-emerald-100 dark:bg-emerald-600/30 p-3 rounded-full group-hover:bg-emerald-200 dark:group-hover:bg-emerald-600/50 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-base md:text-lg">{item.title}</h4>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/50 p-6 md:p-12">
                <img
                  src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?auto=format&fit=crop&q=80&w=800"
                  alt="Homeopathic Medicine"
                  className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;