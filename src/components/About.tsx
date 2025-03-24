import React from 'react';
import { Leaf, Brain, Heart, Shield, Droplets, FlaskConical } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-emerald-50 dark:bg-emerald-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Understanding Homeopathy</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Homeopathy is a natural form of medicine that uses highly diluted substances to trigger the body's natural healing mechanisms.
            It treats each person as a unique individual, focusing on their specific physical, mental, and emotional symptoms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="text-emerald-600 dark:text-emerald-400" size={28} />,
              title: "Holistic Treatment",
              description: "Homeopathy treats the whole person, considering physical symptoms alongside emotional and mental well-being for complete healing."
            },
            {
              icon: <Heart className="text-emerald-600 dark:text-emerald-400" size={28} />,
              title: "Natural Healing",
              description: "Using natural substances, homeopathy stimulates the body's self-healing abilities without harsh chemicals or side effects."
            },
            {
              icon: <Shield className="text-emerald-600 dark:text-emerald-400" size={28} />,
              title: "Preventive Care",
              description: "Beyond treating current conditions, homeopathy strengthens the immune system to prevent future health issues."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-emerald-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50 dark:hover:bg-emerald-700"
            >
              <div className="bg-emerald-100 dark:bg-emerald-600/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white dark:bg-emerald-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Science of Homeopathy</h3>
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
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/50 p-8 md:p-12">
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