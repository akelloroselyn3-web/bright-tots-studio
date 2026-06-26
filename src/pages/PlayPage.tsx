import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, RefreshCcw, Star } from 'lucide-react';
import * as Sonner from 'sonner';

const cards = [
  { id: 1, content: '🍎', match: 'Apple' },
  { id: 2, content: '⚽', match: 'Ball' },
  { id: 3, content: '🐱', match: 'Cat' },
  { id: 4, content: '🐶', match: 'Dog' },
  { id: 5, content: '🐘', match: 'Elephant' },
  { id: 6, content: '🐟', match: 'Fish' },
];

const PlayPage: React.FC = () => {
  const [gameCards, setGameCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const doubled = [...cards.map(c => ({ ...c, type: 'icon', uniqueId: c.id * 2 })), 
                     ...cards.map(c => ({ ...c, content: c.match, type: 'text', uniqueId: c.id * 2 + 1 }))];
    const shuffled = doubled.sort(() => Math.random() - 0.5);
    setGameCards(shuffled);
    setFlipped([]);
    setSolved([]);
    setScore(0);
  };

  const handleClick = (uniqueId: number, id: number) => {
    if (disabled || flipped.includes(uniqueId) || solved.includes(id)) return;

    if (flipped.length === 0) {
      setFlipped([uniqueId]);
      return;
    }

    setFlipped([...flipped, uniqueId]);
    setDisabled(true);

    const firstUniqueId = flipped[0];
    const firstCard = gameCards.find(c => c.uniqueId === firstUniqueId);
    
    if (firstCard.id === id) {
      setSolved([...solved, id]);
      setFlipped([]);
      setDisabled(false);
      setScore(prev => prev + 10);
      Sonner.toast.success('Great Match! 🌟');
      
      if (solved.length + 1 === cards.length) {
        // Game complete
        const currentStars = parseInt(localStorage.getItem('stars') || '0');
        localStorage.setItem('stars', (currentStars + 5).toString());
      }
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  const isComplete = solved.length === cards.length;

  return (
    <div className="space-y-8 pb-12">
      <section className="text-center">
        <h1 className="text-4xl font-black text-slate-800 mb-2">Game Time!</h1>
        <p className="text-lg text-slate-600 font-medium">Match the pictures to the words!</p>
      </section>

      <div className="flex justify-between items-center max-w-2xl mx-auto px-4">
        <div className="clay-card py-2 px-6 bg-yellow-400 text-white border-yellow-600 flex items-center gap-2">
          <Star size={20} fill="white" />
          <span className="font-bold text-xl">{score}</span>
        </div>
        <button 
          onClick={initializeGame}
          className="clay-button bg-blue-500 text-white border-blue-700"
        >
          <RefreshCcw size={20} />
          Reset
        </button>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {gameCards.map((card) => {
          const isFlipped = flipped.includes(card.uniqueId) || solved.includes(card.id);
          return (
            <motion.button
              key={card.uniqueId}
              whileHover={!isFlipped ? { scale: 1.05 } : {}}
              whileTap={!isFlipped ? { scale: 0.95 } : {}}
              onClick={() => handleClick(card.uniqueId, card.id)}
              className={`aspect-square clay-card flex items-center justify-center transition-all duration-500 perspective-1000 ${isFlipped ? 'bg-white border-green-400' : 'bg-blue-400 border-blue-600'}`}
            >
              <div className="relative w-full h-full flex items-center justify-center font-bold text-2xl text-center p-2">
                {isFlipped ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={card.type === 'icon' ? 'text-5xl' : 'text-slate-800 break-words'}
                  >
                    {card.content}
                  </motion.span>
                ) : (
                  <span className="text-white text-4xl">?</span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          >
            <div className="clay-card p-12 bg-white text-center space-y-6 max-w-md w-full">
              <div className="w-32 h-32 bg-yellow-400 text-white rounded-full flex items-center justify-center mx-auto border-b-8 border-yellow-600">
                <Trophy size={64} />
              </div>
              <h2 className="text-4xl font-black text-slate-800">You Won!</h2>
              <p className="text-xl text-slate-600 font-medium">You matched all the cards! You earned 5 bonus stars! ⭐⭐⭐⭐⭐</p>
              <button
                onClick={initializeGame}
                className="w-full clay-button bg-green-500 text-white border-green-700"
              >
                Play Again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlayPage;
