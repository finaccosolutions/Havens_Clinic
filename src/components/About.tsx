import React from 'react';
import { Leaf, Brain, Heart, Shield, Droplets, FlaskConical, Sparkles, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Discover Natural Healing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-6">
            Understanding
            <span className="relative mx-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Homeopathy
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 leading-relaxed">
            At Havens Homeopathic & Infertility Clinic, we combine traditional homeopathic wisdom with modern medical understanding
            to provide comprehensive, natural healing solutions for various health conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              icon: <Brain className="text-emerald-600 dark:text-indigo-400" size={28} />,
              title: "Personalized Care",
              description: "Each treatment plan is uniquely tailored to your specific health needs, considering both physical and emotional well-being.",
              gradient: "from-blue-500/20 to-emerald-500/20 dark:from-indigo-600/40 dark:to-purple-600/40",
              hoverGradient: "group-hover:from-blue-500/30 group-hover:to-emerald-500/30 dark:group-hover:from-indigo-600/50 dark:group-hover:to-purple-600/50",
              iconBg: "bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-indigo-900/50 dark:to-purple-900/50"
            },
            {
              icon: <Heart className="text-rose-600 dark:text-pink-400" size={28} />,
              title: "Fertility Solutions",
              description: "Specialized homeopathic treatments for fertility enhancement, supporting natural conception and reproductive health.",
              gradient: "from-rose-500/20 to-amber-500/20 dark:from-pink-600/40 dark:to-purple-600/40",
              hoverGradient: "group-hover:from-rose-500/30 group-hover:to-amber-500/30 dark:group-hover:from-pink-600/50 dark:group-hover:to-purple-600/50",
              iconBg: "bg-gradient-to-br from-rose-100 to-amber-100 dark:from-pink-900/50 dark:to-purple-900/50"
            },
            {
              icon: <Shield className="text-violet-600 dark:text-violet-400" size={28} />,
              title: "Holistic Approach",
              description: "We treat the root cause of health issues, not just symptoms, promoting long-term wellness and vitality.",
              gradient: "from-violet-500/20 to-fuchsia-500/20 dark:from-violet-600/40 dark:to-indigo-600/40",
              hoverGradient: "group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 dark:group-hover:from-violet-600/50 dark:group-hover:to-indigo-600/50",
              iconBg: "bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/50 dark:to-indigo-900/50"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg group transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} ${item.hoverGradient} transition-all duration-500 opacity-50`}></div>
              
              <div className="relative z-10">
                <div className={`${item.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  {item.description}
                </p>
              </div>

              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-transparent to-white/5 rounded-full transform group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;