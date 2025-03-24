import React from 'react';
import { Clock } from 'lucide-react';

interface DoctorsProps {
  setShowBooking: (value: boolean) => void;
}

const doctors = [
  {
    name: 'Dr. Salahudheen MP',
    specialization: 'Senior Homeopathic Physician',
    timing: '8:30 AM - 10:30 AM',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80'
  },
  {
    name: 'Dr. Bhavya Oralath',
    specialization: 'Fertility Specialist',
    timing: '10:30 AM - 6:30 PM',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80'
  },
  {
    name: 'Dr. Shahid Ullattil',
    specialization: 'Homeopathic Consultant',
    timing: '6:30 PM - 8:30 PM',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80'
  }
];

const Doctors: React.FC<DoctorsProps> = ({ setShowBooking }) => {
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBooking(true);
    window.history.pushState({}, '', '/book');
  };

  return (
    <section id="doctors" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-6">Meet Our Expert Doctors</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our team of experienced homeopathic physicians is dedicated to providing personalized care and natural healing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-96">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-indigo-200 mb-3">{doctor.specialization}</p>
                  <div className="flex items-center gap-2 text-slate-100">
                    <Clock size={16} />
                    <span>{doctor.timing}</span>
                  </div>
                  <button 
                    onClick={handleBookClick}
                    className="mt-4 w-full bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-400 transition-colors"
                  >
                    Book Appointment
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