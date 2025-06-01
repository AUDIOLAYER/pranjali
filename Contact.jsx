import React from 'react';
import { Mail, Phone, MapPin, Clock, BookOpen, Heart } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Kolkata, West Bengal, India",
      color: "rose"
    },
    {
      icon: BookOpen,
      title: "Teaching Subjects",
      details: "Biology, English, Environmental Science, Science, Zoology",
      color: "emerald"
    },
    {
      icon: Clock,
      title: "Teaching Mode",
      details: "In-person & Online Tutoring Available",
      color: "gold"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with Pranjali for educational opportunities or to learn more about her teaching approach
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-rose-500 mr-3" />
                <h3 className="font-serif text-2xl font-bold text-gray-800">
                  About Pranjali & Kabir
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pranjali Shome is not only a dedicated educator but also a woman whose unique spirit inspired an extraordinary love story. Her marriage to Kabir Mondal on May 26, 2025, marked the beginning of a beautiful journey together.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As she continues her passion for education in Kolkata, Pranjali remains committed to shaping young minds while building a life filled with love and purpose.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-start">
                      <div className={`bg-${info.color}-100 p-3 rounded-lg mr-4 flex-shrink-0`}>
                        <Icon className={`h-6 w-6 text-${info.color}-600`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">
              Educational Inquiry
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject of Interest
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="biology">Biology</option>
                  <option value="english">English</option>
                  <option value="environmental-science">Environmental Science</option>
                  <option value="science">Science</option>
                  <option value="zoology">Zoology</option>
                  <option value="english-proficiency">English Language Proficiency</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Tell us about your learning goals or questions"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
