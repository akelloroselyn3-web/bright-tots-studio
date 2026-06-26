import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Video, Type, CreditCard, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const phonicsData: Record<string, { word: string, image: string, sound: string }> = {
  A: { word: 'Apple', image: '🍎', sound: 'ah-pul' },
  B: { word: 'Ball', image: '⚽', sound: 'baw-l' },
  C: { word: 'Cat', image: '🐱', sound: 'kat' },
  D: { word: 'Dog', image: '🐶', sound: 'dog' },
  E: { word: 'Elephant', image: '🐘', sound: 'el-uh-funt' },
  F: { word: 'Fish', image: '🐟', sound: 'fish' },
  G: { word: 'Grapes', image: '🍇', sound: 'grayps' },
  H: { word: 'Hat', image: '👒', sound: 'hat' },
  I: { word: 'Igloo', image: '❄️', sound: 'ig-loo' },
  J: { word: 'Juice', image: '🧃', sound: 'joos' },
  K: { word: 'Kite', image: '🪁', sound: 'kite' },
  L: { word: 'Lion', image: '🦁', sound: 'ly-un' },
  M: { word: 'Monkey', image: '🐒', sound: 'mung-kee' },
  N: { word: 'Nose', image: '👃', sound: 'nohz' },
  O: { word: 'Orange', image: '🍊', sound: 'or-unj' },
  P: { word: 'Panda', image: '🐼', sound: 'pan-dah' },
  Q: { word: 'Queen', image: '👸', sound: 'kween' },
  R: { word: 'Rabbit', image: '🐰', sound: 'rab-it' },
  S: { word: 'Sun', image: '☀️', sound: 'sun' },
  T: { word: 'Tiger', image: '🐯', sound: 'ty-gur' },
  U: { word: 'Umbrella', image: '☂️', sound: 'um-brel-ah' },
  V: { word: 'Van', image: '🚐', sound: 'van' },
  W: { word: 'Watch', image: '⌚', sound: 'woch' },
  X: { word: 'X-ray', image: '🩻', sound: 'eks-ray' },
  Y: { word: 'Yo-yo', image: '🪀', sound: 'yoh-yoh' },
  Z: { word: 'Zebra', image: '🦓', sound: 'zee-bruh' },
};

const LearnPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'phonics' | 'flashcards' | 'multimedia'>('phonics');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [flashcardIdx, setFlashcardIdx] = useState(0);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-8 pb-12">
      <section className="text-center">
        <h1 className="text-4xl font-black text-slate-800 mb-2">Learning Zone</h1>
        <p className="text-lg text-slate-600 font-medium">Pick an activity and let's go!</p>
      </section>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { id: 'phonics', label: 'Click & Sound', icon: <Type size={20} />, color: 'bg-blue-500' },
          { id: 'flashcards', label: 'Flashcards', icon: <CreditCard size={20} />, color: 'bg-yellow-500' },
          { id: 'multimedia', label: 'Music & Video', icon: <Music size={20} />, color: 'bg-green-500' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`clay-button ${activeTab === tab.id ? `${tab.color} text-white` : 'bg-white text-slate-600 border-slate-100'}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'phonics' && (
          <motion.div
            key="phonics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
              {alphabet.map((letter) => (
                <motion.button
                  key={letter}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setSelectedLetter(letter);
                    speak(letter);
                  }}
                  className={`aspect-square clay-card flex items-center justify-center text-3xl font-black transition-colors ${selectedLetter === letter ? 'bg-blue-100 border-blue-400 text-blue-600' : 'text-slate-700'}`}
                >
                  {letter}
                </motion.button>
              ))}
            </div>

            {selectedLetter && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="clay-card p-8 bg-blue-50 flex flex-col items-center text-center gap-4"
              >
                <div className="text-8xl">{phonicsData[selectedLetter].image}</div>
                <div>
                  <h3 className="text-4xl font-black text-slate-800">{selectedLetter} is for {phonicsData[selectedLetter].word}</h3>
                  <button 
                    onClick={() => speak(phonicsData[selectedLetter].word)}
                    className="mt-4 flex items-center gap-2 mx-auto text-blue-600 font-bold hover:underline"
                  >
                    <Volume2 size={24} />
                    Listen to Sound
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {activeTab === 'flashcards' && (
          <motion.div
            key="flashcards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="w-full max-w-sm aspect-[3/4] clay-card p-12 bg-white flex flex-col items-center justify-between text-center relative overflow-hidden">
              <div className="absolute top-4 left-4 text-2xl font-black text-slate-200">
                {flashcardIdx + 1} / {alphabet.length}
              </div>
              
              <div className="text-[120px] mt-8">
                {phonicsData[alphabet[flashcardIdx]].image}
              </div>
              
              <div className="space-y-4">
                <h2 className="text-6xl font-black text-slate-800">
                  {phonicsData[alphabet[flashcardIdx]].word}
                </h2>
                <button 
                  onClick={() => speak(phonicsData[alphabet[flashcardIdx]].word)}
                  className="w-16 h-16 rounded-full bg-yellow-400 text-white border-b-4 border-yellow-600 flex items-center justify-center mx-auto hover:bg-yellow-500 transition-colors"
                >
                  <Volume2 size={32} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                disabled={flashcardIdx === 0}
                onClick={() => setFlashcardIdx(prev => prev - 1)}
                className="clay-button bg-white text-slate-600 disabled:opacity-50"
              >
                <ChevronLeft size={24} />
                Previous
              </button>
              <button
                disabled={flashcardIdx === alphabet.length - 1}
                onClick={() => setFlashcardIdx(prev => prev + 1)}
                className="clay-button bg-yellow-500 text-white border-yellow-700"
              >
                Next
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === 'multimedia' && (
          <motion.div
            key="multimedia"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="clay-card p-6 space-y-4">
              <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Video size={64} className="text-white" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800" 
                  alt="Phonics Song"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Alphabet Song</h3>
                  <p className="text-slate-500 font-medium text-sm">A, B, C, D...</p>
                </div>
                <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
                  <Play fill="white" size={20} className="ml-1" />
                </button>
              </div>
            </div>

            <div className="clay-card p-6 space-y-4">
              <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center overflow-hidden relative group">
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Music size={64} className="text-white" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800" 
                  alt="Number Song"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Counting 1-10</h3>
                  <p className="text-slate-500 font-medium text-sm">Sing along!</p>
                </div>
                <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
                  <Play fill="white" size={20} className="ml-1" />
                </button>
              </div>
            </div>

            <div className="md:col-span-2 clay-card p-8 bg-green-50">
               <h3 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                 <Video className="text-green-600" />
                 More Phonics Videos
               </h3>
               <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                 {[1, 2, 3, 4, 5].map(i => (
                   <div key={i} className="min-w-[200px] aspect-video bg-white rounded-xl border-2 border-slate-100 shadow-sm flex items-center justify-center cursor-pointer hover:border-green-400 transition-colors">
                     <Play size={24} className="text-slate-300" />
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Play: React.FC<{ size?: number, fill?: string, className?: string }> = ({ size = 24, fill = 'none', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export default LearnPage;
