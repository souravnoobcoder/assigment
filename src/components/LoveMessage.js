import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import './LoveMessage.css';

const LoveMessage = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const loveMessages = [
    {
      title: "Dear Himani",
      content: "In your eyes, I found my home. In your smile, I found my peace. In your heart, I found my forever. You are not just my love, you are my everything.",
      author: "My Heart"
    },
    {
      title: "From School Days to Now",
      content: "Remember those school days when I used to admire you from afar? That one-sided love has grown into something deeper. Now I dream of us falling in love together, Himani.",
      author: "Your School Crush"
    },
    {
      title: "My Beautiful Himani",
      content: "You shine brighter than any star in the sky. Your beauty, inside and out, illuminates my world and makes every day worth living. I hope one day you'll see me the way I see you.",
      author: "Your Admirer"
    },
    {
      title: "A Love Story Waiting to Begin",
      content: "Looking at these photos, I'm reminded of why I fell in love with you, Himani. Your spirit, your smile, your kindness - everything about you is perfect. I hope this is just the beginning of our love story.",
      author: "Always & Forever"
    },
    {
      title: "My Heart's Desire",
      content: "Each moment captured in these photos is a treasure, but the greatest treasure would be knowing that you, Himani, could one day love me back. That's my heart's deepest wish.",
      author: "Your Devoted Love"
    },
    {
      title: "From Admiration to Love",
      content: "What started as a school crush has become so much more. I've loved you from afar for so long, Himani. Now I hope we can love each other together, side by side.",
      author: "Your Secret Admirer"
    },
    {
      title: "A Dream Come True",
      content: "I used to dream about you in school, and now I'm creating this for you. Maybe one day you'll dream about us together too, Himani. That would be my greatest dream come true.",
      author: "Your Dreamer"
    }
  ];

  const nextMessage = () => {
    setCurrentMessage((prev) => (prev + 1) % loveMessages.length);
  };

  const prevMessage = () => {
    setCurrentMessage((prev) => (prev - 1 + loveMessages.length) % loveMessages.length);
  };

  return (
    <div className="love-message">
      <motion.div 
        className="love-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Letters to Himani</h1>
        <p>Words can't express how much you mean to me, but I'll try anyway</p>
      </motion.div>

      <div className="message-container">
        <motion.div 
          className="message-card"
          key={currentMessage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="message-header">
            <FaQuoteLeft className="quote-icon" />
            <h2>{loveMessages[currentMessage].title}</h2>
            <FaQuoteRight className="quote-icon" />
          </div>
          
          <div className="message-content">
            <p>{loveMessages[currentMessage].content}</p>
          </div>
          
          <div className="message-footer">
            <span className="author">- {loveMessages[currentMessage].author}</span>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="message-navigation">
          <motion.button 
            className="nav-btn prev"
            onClick={prevMessage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ← Previous
          </motion.button>
          
          <div className="message-dots">
            {loveMessages.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentMessage ? 'active' : ''}`}
                onClick={() => setCurrentMessage(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
          
          <motion.button 
            className="nav-btn next"
            onClick={nextMessage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Next →
          </motion.button>
        </div>
      </div>

      <motion.div 
        className="love-stats"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="stat-item">
          <FaHeart className="stat-icon" />
          <h3>∞</h3>
          <p>Love for You</p>
        </div>
        <div className="stat-item">
          <FaStar className="stat-icon" />
          <h3>100%</h3>
          <p>Perfect in My Eyes</p>
        </div>
        <div className="stat-item">
          <FaHeart className="stat-icon" />
          <h3>24/7</h3>
          <p>Thinking of You</p>
        </div>
      </motion.div>

      <motion.div 
        className="floating-hearts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-heart"
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <FaHeart />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LoveMessage;


