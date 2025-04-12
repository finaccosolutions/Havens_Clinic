import React from 'react';
import { Clock, Award, Stethoscope } from 'lucide-react';

interface DoctorsProps {
  setShowBooking?: (value: boolean) => void;
}

const Doctors: React.FC<DoctorsProps> = ({ setShowBooking }) => {
  const handleBooking = (doctorId: string) => {
    if (setShowBooking) {
      setShowBooking(true);
      // Store selected doctor in sessionStorage for the booking form
      sessionStorage.setItem('selectedDoctor', doctorId);
      window.history.pushState({}, '', '/book');
    }
  };

  return (
    <section id="doctors" className="py-16 md:py-20 bg-gradient-to-b from-white to-emerald-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-4">
            <Stethoscope className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Expert Care</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Expert Doctors</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our team of experienced homeopathic physicians is dedicated to providing you with the highest quality natural healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: "dr-salahudheen",
              name: "Dr. Salahudheen MP",
              role: "Senior Homeopathic Physician",
              image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
              timing: "8:30 AM - 10:30 AM",
              experience: "20+ years experience",
              gradient: "from-blue-500/20 to-emerald-500/20"
            },
            {
              id: "dr-bhavya",
              name: "Dr. Bhavya Oralath",
              role: "Fertility Specialist",
              image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
              timing: "10:30 AM - 6:30 PM",
              experience: "15+ years experience",
              gradient: "from-purple-500/20 to-pink-500/20"
            },
            {
              id: "dr-shahid",
              name: "Dr. Shahid Ullattil",
              role: "Homeopathic Consultant",
              image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
              timing: "6:30 PM - 8:30 PM",
              experience: "12+ years experience",
              gradient: "from-emerald-500/20 to-teal-500/20"
            }
          ].map((doctor, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden group transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 mix-blend-overlay"></div>
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
                  <p className="text-emerald-200">{doctor.role}</p>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>{doctor.timing}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>{doctor.experience}</span>
                </div>
                <button
                  onClick={() => handleBooking(doctor.id)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-5 h-5" />
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;