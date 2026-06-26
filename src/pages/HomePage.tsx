import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Star, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const learnerName = localStorage.getItem('learnerName') || 'Explorer';

  const actions = [
    { to: "/learn", icon: <BookOpen size={48} />, label: "Start Learning", color: "bg-yellow-400", border: "border-yellow-600", description: "Fun phonics & flashcards!" },
    { to: "/play", icon: <Play size={48} />, label: "Let's Play", color: "bg-green-400", border: "border-green-600", description: "Games & activities!" },
    { to: "/reflect", icon: <Star size={48} />, label: "My Progress", color: "bg-purple-400", border: "border-purple-600", description: "See your stars!" },
    { to: "/about", icon: <Info size={48} />, label: "About App", color: "bg-pink-400", border: "border-pink-600", description: "Learn about us!" },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-400 shadow-xl"
        >
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f83ad7be-f0f4-4ae6-aa6c-ab9470749e16/mascot-owl-7d12a8f9-1782480466009.webp" 
            alt="Mascot"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-800">
          Hello, <span className="text-blue-500">{learnerName}!</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium">
          Ready for a fun adventure today?
        </p>
      </section>

      <div className="flex justify-center">
        <Link to="/learn" className="clay-button bg-blue-500 text-white border-blue-700 px-12 py-4 text-2xl hover:bg-blue-600 group">
          Continue Learning
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action, idx) => (
          <motion.div
            key={action.to}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link 
              to={action.to}
              className={`block clay-card p-8 group hover:scale-105 transition-transform`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-24 h-24 ${action.color} ${action.border} border-b-8 rounded-3xl flex items-center justify-center text-white shadow-lg`}>
                  {action.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-800">{action.label}</h2>
                  <p className="text-slate-500 text-lg font-medium">{action.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ArrowRight: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default HomePage;
