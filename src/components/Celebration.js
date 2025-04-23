// src/components/Celebration.js
import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const Celebration = () => {
  const [showButton, setShowButton] = useState(true);

  // Function to make the celebration button visible again
  const revealButton = () => {
    setShowButton(true);
  };

  // Expose the function to the window object so it can be called from anywhere
  React.useEffect(() => {
    window.revealCelebration = revealButton;
    return () => {
      delete window.revealCelebration;
    };
  }, []);

  const fireConfetti = () => {
    // Create a more intense confetti display
    const defaults = {
      origin: { x: 0.5, y: 1.0 }, // Bottom center
      angle: 90,
      spread: 120, // Wider spread
      startVelocity: 60, // Higher initial velocity to go further up
      gravity: 0.4, // Slightly reduced gravity so confetti stays in air longer
      ticks: 300, // More ticks for longer animation
      zIndex: 1000,
      disableForReducedMotion: true,
      shapes: ['circle', 'square'],
      colors: ['#000000', '#FFD700'] // Black and gold
    };

    // First big burst
    confetti({
      ...defaults,
      particleCount: 150 // More particles
    });

    // Second wave - left burst
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 100,
        angle: 120,
        origin: { x: 0.3, y: 1.0 } // From left side
      });
    }, 150);

    // Third wave - right burst
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 100,
        angle: 60,
        origin: { x: 0.7, y: 1.0 } // From right side
      });
    }, 300);

    // Fourth wave - center again for lasting effect
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 80,
        startVelocity: 45
      });
    }, 450);
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
        onClick={() => setShowButton(false)}
        className="ml-2 bg-black text-white text-xs rounded-full h-6 w-6 flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="Close celebration"
      >
        ×
      </button>
    </div>
  );
};

export default Celebration;