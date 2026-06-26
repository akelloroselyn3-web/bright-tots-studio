import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Home, Info, BookOpen, Gamepad2, Star, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const learnerName = localStorage.getItem('learnerName') || 'Learner';

  const handleLogout = () => {
    localStorage.removeItem('learnerName');
    localStorage.removeItem('regNumber');
    localStorage.removeItem('learningAid');
    navigate('/login');
  };

  const navItems = [
    { to: '/', icon: <Home size={24} />, label: 'Home', color: 'bg-blue-400' },
    { to: '/learn', icon: <BookOpen size={24} />, label: 'Learn', color: 'bg-yellow-400' },
    { to: '/play', icon: <Gamepad2 size={24} />, label: 'Play', color: 'bg-green-400' },
    { to: '/reflect', icon: <Star size={24} />, label: 'Reflect', color: 'bg-purple-400' },
    { to: '/about', icon: <Info size={24} />, label: 'About', color: 'bg-pink-400' },
  ];

  return (
    <div className="min-h-screen bg-app-playful flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b-4 border-slate-100 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f83ad7be-f0f4-4ae6-aa6c-ab9470749e16/mascot-owl-7d12a8f9-1782480466009.webp" 
                alt="Mascot"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 hidden sm:block">KidsLearn</h1>
          </div>

          <nav className="flex items-center gap-2 sm:gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `
                  flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-2 rounded-xl transition-all
                  ${isActive ? `${item.color} text-white shadow-lg -translate-y-1` : 'text-slate-600 hover:bg-slate-50'}
                `}
              >
                {item.icon}
                <span className="text-xs sm:text-sm font-bold">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-xs text-slate-500">Welcome,</span>
              <span className="text-sm font-bold text-slate-800">{learnerName}!</span>
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm p-4 text-center text-slate-500 text-sm">
        <p>© 2025 KidsLearn App - Made with ❤️ for ages 5-6</p>
      </footer>
    </div>
  );
};

export default MainLayout;
