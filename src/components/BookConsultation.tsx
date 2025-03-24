import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Check, ArrowLeft, MessageCircle } from 'lucide-react';

const doctors = [
  {
    id: 'dr-salahudheen',
    name: 'Dr. Salahudheen MP',
    timing: '8:30 AM - 10:30 AM',
    slots: ['8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM']
  },
  {
    id: 'dr-bhavya',
    name: 'Dr. Bhavya Oralath',
    timing: '10:30 AM - 6:30 PM',
    slots: ['10:30 AM', '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM']
  },
  {
    id: 'dr-shahid',
    name: 'Dr. Shahid Ullattil',
    timing: '6:30 PM - 8:30 PM',
    slots: ['6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM']
  }
];

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    date: '',
    timeSlot: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.doctor) newErrors.doctor = 'Please select a doctor';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.timeSlot) newErrors.timeSlot = 'Please select a time slot';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Prepare WhatsApp message
      const selectedDoctorInfo = doctors.find(d => d.id === formData.doctor);
      const message = `*New Appointment Request*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Email:* ${formData.email || 'Not provided'}%0A` +
        `*Doctor:* ${selectedDoctorInfo?.name}%0A` +
        `*Date:* ${formData.date}%0A` +
        `*Time:* ${formData.timeSlot}%0A` +
        `*Notes:* ${formData.notes || 'No additional notes'}`;

      // Send to WhatsApp
      window.open(`https://wa.me/919946007001?text=${message}`, '_blank');

      // Send email if provided
      if (formData.email) {
        const emailSubject = 'New Appointment Request - Havens Clinic';
        const emailBody = `New appointment request from ${formData.name}.\n\n` +
          `Details:\n` +
          `Doctor: ${selectedDoctorInfo?.name}\n` +
          `Date: ${formData.date}\n` +
          `Time: ${formData.timeSlot}\n` +
          `Phone: ${formData.phone}\n` +
          `Notes: ${formData.notes || 'No additional notes'}`;

        window.location.href = `mailto:www.haven@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      }

      setIsSubmitted(true);
    }
  };

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const doctorId = e.target.value;
    const doctor = doctors.find(d => d.id === doctorId) || null;
    setSelectedDoctor(doctor);
    setFormData(prev => ({ ...prev, doctor: doctorId, timeSlot: '' }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Booking Request Sent!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Your consultation request has been sent via WhatsApp. We will contact you shortly to confirm your appointment.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft size={20} />
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Book Your Consultation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Schedule your appointment with our experienced homeopathic physicians
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Select Doctor *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      value={formData.doctor}
                      onChange={handleDoctorChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.doctor ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300`}
                    >
                      <option value="">Select a doctor</option>
                      {doctors.map(doctor => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.name} ({doctor.timing})
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.doctor && <p className="text-red-500 text-sm mt-1">{errors.doctor}</p>}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Select Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.date ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300`}
                    />
                  </div>
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Select Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData(prev => ({ ...prev, timeSlot: e.target.value }))}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.timeSlot ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300`}
                      disabled={!selectedDoctor}
                    >
                      <option value="">Select a time slot</option>
                      {selectedDoctor?.slots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                  {errors.timeSlot && <p className="text-red-500 text-sm mt-1">{errors.timeSlot}</p>}
                </div>
              </div>
            </div>

            <div className="mt-6 group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Additional Notes (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="Any specific concerns or questions?"
                ></textarea>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-medium shadow-lg"
              >
                <Calendar size={20} />
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919946007001"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default BookConsultation;