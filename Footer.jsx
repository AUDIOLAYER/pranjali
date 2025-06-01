import React from 'react';
import { Heart, BookOpen, GraduationCap } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-rose-400" />
              <span className="font-serif text-xl font-bold">Pranjali & Kabir</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Celebrating a love story beyond convention and a dedication to educational excellence in Kolkata.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-emerald-400" />
              Teaching Subjects
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Biology</li>
              <li>English</li>
              <li>Environmental Science</li>
              <li>Science</li>
              <li>Zoology</li>
              <li>English Language Proficiency</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-gold-400" />
              Education & Experience
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>M.Sc. from Calcutta University (2018)</li>
              <li>Grades 6-12 Teaching</li>
              <li>Online & In-person Tutoring</li>
              <li>Based in Kolkata, West Bengal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Pranjali Shome & Kabir Mondal. A beautiful journey of love and education.
            </p>
            <div className="flex justify-center items-center space-x-2">
              <Heart className="h-4 w-4 text-rose-400" />
              <span className="text-sm text-gray-500">
                May 26, 2025 - The Beginning of Forever
              </span>
              <Heart className="h-4 w-4 text-rose-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-900 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-500">
            AI-powered development by Biela.dev, powered by TeachMeCode® Institute
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
