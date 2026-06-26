import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, TrendingUp, Calendar } from 'lucide-react';

const ReflectPage: React.FC = () => {
  const learnerName = localStorage.getItem('learnerName') || 'Explorer';
  const stars = parseInt(localStorage.getItem('stars') || '15'); // Default some stars for visual

  const stats = [
    { label: 'Total Stars', value: stars, icon: <Star className="text-yellow-500" />, color: 'bg-yellow-50' },
    { label: 'Words Learned', value: 26, icon: <Award className="text-blue-500" />, color: 'bg-blue-50' },
    { label: 'Games Played', value: 4, icon: <TrendingUp className="text-green-500" />, color: 'bg-green-50' },
    { label: 'Day Streak', value: 2, icon: <Calendar className="text-purple-500" />, color: 'bg-purple-50' },
  ];

  return (
    <div className="space-y-12 pb-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-800">My Star Board</h1>
        <p className="text-xl text-slate-600 font-medium">Look at how much you've learned, {learnerName}!</p>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`clay-card p-6 text-center ${stat.color}`}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              {stat.icon}
            </div>
            <div className="text-3xl font-black text-slate-800">{stat.value}</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <section className="clay-card p-8 space-y-6">
        <h2 className="text-2xl font-black text-slate-800 border-b-4 border-slate-50 pb-4">Recent Achievements</h2>
        <div className="space-y-4">
          {[
            { title: 'Super Phonics!', description: 'You clicked all letters from A to Z!', time: '2 hours ago', icon: '🗣️' },
            { title: 'Match Master', description: 'You completed the matching game in record time!', time: 'Yesterday', icon: '🧩' },
            { title: 'Great Listener', description: 'You listened to the Alphabet Song 3 times!', time: 'Yesterday', icon: '🎧' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border-2 border-slate-100"
            >
              <div className="text-4xl">{item.icon}</div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium">{item.description}</p>
              </div>
              <div className="text-xs font-bold text-slate-400">{item.time}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="inline-block"
        >
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f83ad7be-f0f4-4ae6-aa6c-ab9470749e16/mascot-owl-7d12a8f9-1782480466009.webp" 
            alt="Mascot"
            className="w-24 h-24"
          />
        </motion.div>
        <p className="mt-4 text-slate-600 font-bold italic">"Keep up the great work! You are a superstar!"</p>
      </div>
    </div>
  );
};

export default ReflectPage;
