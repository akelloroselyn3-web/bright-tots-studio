import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Hash, HelpCircle, ArrowRight } from 'lucide-react';
import * as Sonner from 'sonner';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    regNumber: '',
    learningAid: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.regNumber) {
      Sonner.toast.error('Please enter your name and registration number!');
      return;
    }
    
    localStorage.setItem('learnerName', formData.name);
    localStorage.setItem('regNumber', formData.regNumber);
    localStorage.setItem('learningAid', formData.learningAid);
    
    Sonner.toast.success(`Welcome, ${formData.name}!`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-app-playful flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md clay-card p-8 bg-white/95"
      >
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-400 bg-yellow-50">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f83ad7be-f0f4-4ae6-aa6c-ab9470749e16/mascot-owl-7d12a8f9-1782480466009.webp" 
              alt="Mascot"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Hi There! 👋</h1>
          <p className="text-slate-500 mt-2 font-medium">Let's get ready to learn and play!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
              <User size={18} className="text-blue-500" />
              What is your name?
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-blue-400 focus:ring-0 transition-all outline-none text-lg font-medium"
              placeholder="e.g. Alex"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
              <Hash size={18} className="text-yellow-500" />
              Your Registration Number
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-yellow-400 focus:ring-0 transition-all outline-none text-lg font-medium"
              placeholder="e.g. 12345"
              value={formData.regNumber}
              onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
              <HelpCircle size={18} className="text-green-500" />
              Learning Aid (Optional)
            </label>
            <select
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-green-400 focus:ring-0 transition-all outline-none text-lg font-medium appearance-none"
              value={formData.learningAid}
              onChange={(e) => setFormData({ ...formData, learningAid: e.target.value })}
            >
              <option value="">Choose one...</option>
              <option value="Visual">Pictures & Videos</option>
              <option value="Auditory">Songs & Sounds</option>
              <option value="Kinesthetic">Games & Activities</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full clay-button bg-blue-500 text-white border-blue-700 hover:bg-blue-600 mt-4"
          >
            Continue
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => { localStorage.setItem('learnerName', 'Guest'); navigate('/'); }}
            className="text-slate-400 hover:text-blue-500 font-bold transition-colors underline underline-offset-4"
          >
            Continue as Guest
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
