import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(`New Contact Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Preferred Doctor: ${formData.doctor}\n` +
      `Message: ${formData.message}`
    );

    // Open default email client
    window.location.href = `mailto:info@havensclinic.com?subject=${subject}&body=${body}`;

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `*New Contact Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Preferred Doctor:* ${formData.doctor}\n` +
      `*Message:* ${formData.message}`
    );

    // Open WhatsApp in new tab
    window.open(`https://wa.me/919946007001?text=${whatsappMessage}`, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      doctor: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-emerald-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Get in Touch</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about our treatments? We're here to help. Reach out to us for appointments or any queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true }
                ].map((field) => (
                  <div key={field.id} className="group">
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      required={field.required}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-emerald-400 dark:hover:border-emerald-500"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-emerald-400 dark:hover:border-emerald-500"
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="group">
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Preferred Doctor
                </label>
                <select
                  id="doctor"
                  required
                  value={formData.doctor}
                  onChange={(e) => setFormData(prev => ({ ...prev, doctor: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-emerald-400 dark:hover:border-emerald-500"
                >
                  <option value="">Select a Doctor</option>
                  <option value="Dr. Salahudheen MP">Dr. Salahudheen MP</option>
                  <option value="Dr. Bhavya Oralath">Dr. Bhavya Oralath</option>
                  <option value="Dr. Shahid Ullattil">Dr. Shahid Ullattil</option>
                </select>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-emerald-400 dark:hover:border-emerald-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-medium shadow-lg text-sm md:text-base"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6 md:p-8 h-full transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-emerald-800 dark:text-emerald-300">Contact Information</h3>
              
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    icon: <Phone className="text-emerald-700 dark:text-emerald-400" size={24} />,
                    title: "Phone",
                    info: ["+91 9946007001", "0483 2714400"]
                  },
                  {
                    icon: <Mail className="text-emerald-700 dark:text-emerald-400" size={24} />,
                    title: "Email",
                    info: ["info@havensclinic.com"]
                  },
                  {
                    icon: <MapPin className="text-emerald-700 dark:text-emerald-400" size={24} />,
                    title: "Location",
                    info: [
                      "Pallipuraya, Omanoor, Kondotty,",
                      "Malappuram, Kerala, India-673645"
                    ]
                  },
                  {
                    icon: <Clock className="text-emerald-700 dark:text-emerald-400" size={24} />,
                    title: "Consultation Hours",
                    info: [
                      "Dr. Salahudheen MP: 8:30 AM - 10:30 AM",
                      "Dr. Bhavya Oralath: 10:30 AM - 6:30 PM",
                      "Dr. Shahid Ullattil: 6:30 PM - 8:30 PM"
                    ]
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="bg-emerald-200/50 dark:bg-gray-600 p-3 rounded-full group-hover:bg-emerald-300/50 dark:group-hover:bg-gray-500 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-200 transition-colors text-base md:text-lg">{item.title}</h4>
                      {item.info.map((line, i) => (
                        <p key={i} className="text-sm md:text-base text-emerald-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-white transition-colors">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-emerald-200 dark:border-gray-600">
                <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-4 text-base md:text-lg">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    {
                      icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                      href: "#"
                    },
                    {
                      icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                      href: "#"
                    },
                    {
                      icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                      href: "#"
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-emerald-200/50 dark:bg-gray-600 p-3 rounded-full hover:bg-emerald-300/50 dark:hover:bg-gray-500 transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-5 h-5 text-emerald-700 dark:text-emerald-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={social.icon} />
                      </svg>
                    </a>
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

export default Contact;