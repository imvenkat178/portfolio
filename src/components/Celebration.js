// src/components/Celebration.js
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const Celebration = () => {
  const [showButton, setShowButton] = useState(true);

  // Function to make the celebration button visible again
  const revealButton = () => {
    setShowButton(true);
  };

  // Expose the function to the window object so it can be called from anywhere
  useEffect(() => {
    // Explicitly set this global function to make the celebration reappear
    window.revealCelebration = revealButton;
    
    // Cleanup function
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
      startVelocity: 70, // Even higher initial velocity
      gravity: 0.3, // Lower gravity for higher flight
      ticks: 400, // More ticks for longer animation
      zIndex: 2000, // Higher z-index to ensure it shows above everything
      disableForReducedMotion: true,
      shapes: ['circle', 'square'],
      colors: ['#000000', '#FFD700'] // Black and gold
    };

    // First big burst
    confetti({
      ...defaults,
      particleCount: 200 // More particles
    });

    // Second wave - left burst
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 120,
        angle: 120,
        origin: { x: 0.3, y: 1.0 } // From left side
      });
    }, 150);

    // Third wave - right burst
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 120,
        angle: 60,
        origin: { x: 0.7, y: 1.0 } // From right side
      });
    }, 300);

    // Fourth wave - center again for lasting effect with higher velocity
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 100,
        startVelocity: 90,
        gravity: 0.25
      });
    }, 450);
    
    // Final high burst
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 80,
        startVelocity: 100,
        gravity: 0.2
      });
    }, 600);
  };

  if (!showButton) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[9999] flex items-center">
      <button
        onClick={fireConfetti}
        className="text-4xl bg-white rounded-full p-3 shadow-xl hover:bg-gray-100 transition-colors"
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
        aria-label="Celebrate"
      >
        🎉
      </button>
      <button
        onClick={() => setShowButton(false)}
        className="ml-2 bg-black text-white text-sm rounded-full h-7 w-7 flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="Close celebration"
      >
        ×
      </button>
    </div>
  );
};

export default Celebration;