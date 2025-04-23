// src/components/TypingAnimation.js
import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = ['SOFTWARE ENGINEER', 'FULL STACK DEVELOPER'];
  
  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];
      
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      
      // Control typing speed
      if (isDeleting) {
        setTypingSpeed(80); // Faster when deleting
      } else {
        setTypingSpeed(150); // Normal speed when typing
      }
      
      // When finished typing full text
      if (!isDeleting && text === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1000);
      } 
      // When completely deleted
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);
  
  return (
    <span className="block text-5xl font-mono font-bold leading-tight mb-4">
      {text}
      <span className="border-r-2 border-black animate-pulse">&nbsp;</span>
    </span>
  );
};

export default TypingAnimation;