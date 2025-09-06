import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="footer-content">
        <motion.div 
          className="footer-heart"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart />
        </motion.div>
        
        <div className="footer-text">
          <h3>Made with Love</h3>
          <p>Every pixel, every line of code, every animation - all created with love for Himani</p>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Made with ❤️ for Himani Rathi</p>
      </div>
    </motion.footer>
  );
};

export default Footer;


