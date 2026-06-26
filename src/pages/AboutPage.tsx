import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Star, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-800">About KidsLearn</h1>
        <p className="text-xl text-slate-600 font-medium">
          Created to make learning magical for ages 5-6!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="clay-card p-8 space-y-4">
          <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center">
            <Heart size={28} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            We believe that every child deserves a fun, engaging, and safe space to explore the world of letters, sounds, and play.
          </p>
        </div>

        <div className="clay-card p-8 space-y-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center">
            <Shield size={28} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Safe & Secure</h2>
          <p className="text-slate-600 leading-relaxed">
            Designed specifically for early learners with no ads, no trackers, and age-appropriate content.
          </p>
        </div>

        <div className="clay-card p-8 space-y-4">
          <div className="w-12 h-12 bg-yellow-100 text-yellow-500 rounded-2xl flex items-center justify-center">
            <Star size={28} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Interactive</h2>
          <p className="text-slate-600 leading-relaxed">
            Using multimedia and interactive games to keep little minds curious and excited.
          </p>
        </div>

        <div className="clay-card p-8 space-y-4">
          <div className="w-12 h-12 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center">
            <Users size={28} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">For Everyone</h2>
          <p className="text-slate-600 leading-relaxed">
            Whether you are a visual, auditory, or kinesthetic learner, we have something for you!
          </p>
        </div>
      </div>

      <section className="clay-card p-12 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-black mb-4">Ready to go back?</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.history.back()}
          className="clay-button bg-white text-blue-500 border-slate-200"
        >
          Go Back
        </motion.button>
      </section>
    </div>
  );
};

export default AboutPage;
