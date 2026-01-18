import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-goldcs/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-goldcslight to-goldcs mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Feel free to reach out to us for any inquiries about membership, events, or collaborations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-goldcs/10 p-3 rounded-xl group-hover:bg-goldcs/20 transition-colors border border-goldcs/20">
                    <Mail className="text-goldcs" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email</h4>
                    <p className="text-gray-400">sltcieeecs@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-goldcs/10 p-3 rounded-xl group-hover:bg-goldcs/20 transition-colors border border-goldcs/20">
                    <MapPin className="text-goldcs" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Address</h4>
                    <p className="text-gray-400">
                      Sri Lanka Technological Campus (SLTC)<br />
                      Padukka, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 glass-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2965901550665!2d80.09251909999999!3d6.8550095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25391a58a7e1b%3A0x4c8a0db782adf312!2sIEEE%20Computer%20Society%20of%20SLTC!5e0!3m2!1sen!2slk!4v1768739581945!5m2!1sen!2slk"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SLTC Map Location"
                    className="grayscale-0 hover:grayscale transition-all duration-500"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-goldcs focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-goldcs focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-goldcs focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-goldcs focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-goldcs to-goldcsdark text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-goldcs/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
