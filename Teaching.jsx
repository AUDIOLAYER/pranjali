import React from 'react';
import { BookOpen, Globe, Users, Award, Clock, Heart } from 'lucide-react';

function Teaching() {
  const teachingFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Teaching Biology, English, Environmental Science, Science, and Zoology with depth and clarity"
    },
    {
      icon: Users,
      title: "Multi-Grade Expertise",
      description: "Successfully instructing students from grades 6-12, adapting methods to different learning levels"
    },
    {
      icon: Globe,
      title: "Online Accessibility",
      description: "Offering online tutoring to make quality education accessible to students everywhere"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "M.Sc. from Calcutta University ensures strong subject matter expertise"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "English language proficiency courses designed to fit student schedules and needs"
    },
    {
      icon: Heart,
      title: "Passionate Dedication",
      description: "Committed to fostering comprehensive learning and student growth"
    }
  ];

  return (
    <section id="teaching" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Teaching Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to shaping young minds with passion, expertise, and innovative teaching methods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachingFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-6">
                Empowering Students Through Education
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Pranjali's teaching philosophy centers on making education accessible, engaging, and transformative. With her diverse subject expertise and commitment to student success, she creates learning environments where every student can thrive.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Her approach combines traditional teaching excellence with modern accessibility, offering both in-person and online instruction to reach students wherever they are in their educational journey.
              </p>
            </div>
            <div 
              className="rounded-xl h-80 bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-emerald-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Ready to Learn with Pranjali?
            </h3>
            <p className="text-emerald-100 mb-6 text-lg">
              Experience personalized education that adapts to your learning style and goals
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teaching;
