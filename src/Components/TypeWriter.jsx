import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ textArray, speed, scrollAt }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [textPosition, setTextPosition] = useState(0);
  const [contents, setContents] = useState('');
  const typewriterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTypingFinished, setIsTypingFinished] = useState(false); // New state to track typing completion

  useEffect(() => {
    const typewriter = () => {
      let newContents = '';
      let row = Math.max(0, textIndex - scrollAt);

      while (row < textIndex) {
        newContents += textArray[row++] + '<br />';
      }

      setContents(newContents + textArray[textIndex].substring(0, textPosition) + '_');

      if (textPosition === textArray[textIndex].length) {
        setTextPosition(0);
        setTextIndex((prevIndex) => prevIndex + 1);
      } else {
        setTextPosition((prevPos) => prevPos + 1);
      }

      // Check if typing is finished
      if (textIndex === textArray.length - 1 && textPosition === textArray[textIndex].length) {
        setIsTypingFinished(true);
      }
    };

    const timer = setTimeout(() => {
      if (textIndex !== textArray.length && isVisible) {
        typewriter();
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [textArray, textIndex, textPosition, speed, scrollAt, isVisible]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set isVisible to true when typewriter becomes visible
        }
      });
    }, options);

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="typewriter">
      <div ref={typewriterRef} id="typedtext" dangerouslySetInnerHTML={{ __html: contents }} />
      {isTypingFinished && (
        <motion.div
          initial={{ x: 20 }}
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 2 }}
          className="salute"
        >
          <span>I fart you, <br>
          </br> Nick</span>
        </motion.div>
      )}
    </div>
  );
};

export default Typewriter;

