import React from 'react';
import { Leaf, Brain, Heart, Shield, Droplets, FlaskConical } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Understanding Homeopathy</h2>
          <p className="text-lg text-gray-600">
            Homeopathy is a natural form of medicine that uses highly diluted substances to trigger the body's natural healing mechanisms.
            It treats each person as a unique individual, focusing on their specific physical, mental, and emotional symptoms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Brain className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Treatment</h3>
            <p className="text-gray-600">
              Homeopathy treats the whole person, considering physical symptoms alongside emotional and mental well-being for complete healing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Healing</h3>
            <p className="text-gray-600">
              Using natural substances, homeopathy stimulates the body's self-healing abilities without harsh chemicals or side effects.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Preventive Care</h3>
            <p className="text-gray-600">
              Beyond treating current conditions, homeopathy strengthens the immune system to prevent future health issues.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Science of Homeopathy</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Droplets className="text-emerald-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Like Cures Like</h4>
                      <p className="text-gray-600">Substances that cause symptoms in healthy people can treat similar symptoms in sick people.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <FlaskConical className="text-emerald-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Minimum Dose</h4>
                      <p className="text-gray-600">Using the smallest possible amount of medication to trigger healing response.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Leaf className="text-emerald-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Natural Substances</h4>
                      <p className="text-gray-600">Remedies derived from plants, minerals, and other natural sources.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 p-8 md:p-12">
                <img
                  src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?auto=format&fit=crop&q=80"
                  alt="Homeopathic Medicine"
                  className="rounded-xl shadow-lg"
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