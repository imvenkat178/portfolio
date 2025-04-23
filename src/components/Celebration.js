import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const Celebration = () => {
  const [showButton, setShowButton] = useState(() => {
    // Check if button was previously hidden
    const hidden = localStorage.getItem('celebrationHidden');
    return hidden !== 'true';
  });

  const hideButton = () => {
    setShowButton(false);
    localStorage.setItem('celebrationHidden', 'true');
  };

  const fireConfetti = () => {
    // Same confetti configuration as before
    const count = 200;
    const defaults = {
      origin: { x: 0.5, y: 1.0 },
      angle: 90,
      spread: 100,
      startVelocity: 30,
      gravity: 0.5,
      ticks: 100,
      zIndex: 1000,
      disableForReducedMotion: true
    };

    confetti({
      ...defaults,
      colors: ['#000000', '#FFD700'],
      shapes: ['circle', 'square']
    });

    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 50,
        angle: 120,
        spread: 70,
        colors: ['#000000', '#FFD700']
      });
    }, 250);

    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 50,
        angle: 60,
        spread: 70,
        colors: ['#000000', '#FFD700']
      });
    }, 500);
  };

  if (!showButton) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center">
      <button
        onClick={fireConfetti}
        className="text-3xl bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Celebrate"
      >
        🎉
      </button>
      <button
        onClick={hideButton}
        className="ml-2 bg-black text-white text-xs rounded-full h-6 w-6 flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="Close celebration"
      >
        ×
      </button>
    </div>
  );
};

export default Celebration;