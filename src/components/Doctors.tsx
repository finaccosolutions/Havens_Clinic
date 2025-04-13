import React from 'react';
import { Clock, Award, Stethoscope, GraduationCap } from 'lucide-react';

interface DoctorsProps {
  setShowBooking?: (value: boolean) => void;
}

const Doctors: React.FC<DoctorsProps> = ({ setShowBooking }) => {
  const handleBooking = (doctorId: string) => {
    if (setShowBooking) {
      setShowBooking(true);
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
              image: "https://havensclinic.com/files/Salahudheen.jpg",
              timing: "8:30 AM - 10:30 AM",
              experience: "10+ years experience",
              education: "Govt. Homoeopathic Medical college , Calicut"
            },
            {
              id: "dr-bhavya",
              name: "Dr. Bhavya Oralath",
              role: "Homeopathic Consultant",
              image: "https://havensclinic.com/files/Bhavya.jpeg",
              timing: "10:30 AM - 6:30 PM",
              experience: "8+ years experience",
              education: "Bhagawan buddha homoeopathic medical college and hospital"
            },
            {
              id: "dr-shahid",
              name: "Dr. Shahid Ullattil",
              role: "Homeopathic Consultant",
              image: "https://havensclinic.com/files/Shahid.jpg",
              timing: "6:30 PM - 8:30 PM",
              experience: "7+ years experience",
              education: "Govt. Homoeopathic Medical college , Calicut"
            }
          ].map((doctor, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden group transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-80">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{doctor.name}</h3>
                  <p className="text-lg text-emerald-600 dark:text-emerald-400">{doctor.role}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{doctor.timing}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300 min-h-[3rem]">
                    <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="leading-tight">{doctor.education}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => handleBooking(doctor.id)}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 text-lg font-medium"
                  >
                    <Stethoscope className="w-5 h-5" />
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;