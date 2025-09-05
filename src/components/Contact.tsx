import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with custom ERPNext solutions? 
            Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm available for consulting, custom ERPNext development, 
                and full-time opportunities. Let's discuss your project requirements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">solidadkimeu@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300">+254712560024</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-300">Nairobi, Kenya</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-700">
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/solidad-kimeu-b1a578270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-lg 
                           transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/solidad1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-lg 
                           transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project requirements, timeline, and how I can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 
                         hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-lg 
                         transition-all duration-300 flex items-center justify-center space-x-2 
                         hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Call-to-Action Banner */}
        <div className="mt-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Scale Your Business?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need ERPNext customization, API integrations, or complete business automation, 
            I'm here to help you build solutions that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg 
                             font-semibold transition-colors duration-300">
              Schedule Consultation
            </button>
            <a
                href="/Solidad_Kimeu_Resume.pdf"
                download
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                Download Resume
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;