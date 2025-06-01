import React from 'react';
import { GraduationCap, MapPin, Calendar, Users } from 'lucide-react';

function AboutPranjali() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "M.Sc. from Calcutta University",
      description: "Earned in 2018, demonstrating academic excellence",
      color: "emerald"
    },
    {
      icon: Users,
      title: "Multi-Grade Teaching",
      description: "Instructs students from grades 6-12 across multiple subjects",
      color: "rose"
    },
    {
      icon: MapPin,
      title: "Based in Kolkata",
      description: "Serving the educational community in West Bengal",
      color: "gold"
    },
    {
      icon: Calendar,
      title: "Experienced Educator",
      description: "Dedicated to student growth with proven teaching experience",
      color: "emerald"
    }
  ];

  const subjects = [
    "Biology", "English", "Environmental Science", "Science", "Zoology", "English Language Proficiency"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            About Pranjali Shome
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated educator, inspiring minds and shaping futures in Kolkata
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <div 
              className="rounded-2xl h-96 bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="animate-slide-up">
            <h3 className="font-serif text-3xl font-bold text-gray-800 mb-6">
              A Respected Educator
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Beyond her captivating love story, Pranjali Shome is a respected educator based in Kolkata, West Bengal, India. She is a versatile teacher, instructing students from grades six to twelve in a wide array of subjects.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Pranjali also offers English language proficiency courses, further demonstrating her commitment to fostering comprehensive learning and making her expertise accessible to a broader audience.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              With her passion for education, Pranjali continues to shape young minds and inspire the next generation of learners.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${achievement.color}-100 mb-4`}>
                  <Icon className={`h-6 w-6 text-${achievement.color}-600`} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
          <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">
            Subjects & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {subjects.map((subject, index) => (
              <span
                key={index}
                className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-medium text-sm"
              >
                {subject}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 text-lg">
            Offering both in-person and online tutoring to reach students everywhere
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPranjali;
