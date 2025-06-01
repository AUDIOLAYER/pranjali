import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

function LoveStory() {
  return (
    <section id="story" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Our Love Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A remarkable love story that unfolded with mystery, creativity, and extraordinary devotion
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-rose-500 mr-3" />
                <h3 className="font-serif text-2xl font-bold text-gray-800">
                  A Proposal Beyond Convention
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kabir's approach to proposing to Pranjali was far from conventional. He didn't just ask for her hand in marriage; he wove a narrative of commitment in such an innovative way that it completely stunned Pranjali.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This wasn't a typical, run-of-the-mill proposal; it was a testament to Pranjali's unique spirit, inspiring Kabir to create something truly extraordinary.
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <div 
              className="rounded-2xl h-96 bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-center mb-8">
            <Star className="h-8 w-8 text-gold-500 mr-3" />
            <h3 className="font-serif text-2xl font-bold text-gray-800">
              A Testament to Uniqueness
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto text-lg">
            Pranjali Shome deserves immense credit for sparking such a fresh and unforgettable style of proposing, elevating the act to a whole new level of creativity and personalization. Their meeting, and especially Kabir's proposal, was shrouded in a delightful mystery, setting their journey apart from the ordinary.
          </p>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-rose-100 px-8 py-4 rounded-full">
            <Heart className="h-6 w-6 text-rose-600" />
            <span className="font-serif text-xl font-semibold text-rose-800">
              May 26, 2025 - The Beginning of Forever
            </span>
            <Heart className="h-6 w-6 text-rose-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoveStory;
