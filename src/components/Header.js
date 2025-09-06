import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCamera } from 'react-icons/fa';
import './Header.css';

const Header = ({ onSectionChange, currentSection }) => {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="header-content">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHeart className="heart-icon" />
          <span className="logo-text">Himani</span>
        </motion.div>
        
        <nav className="navigation">
          <motion.button
            className={`nav-button ${currentSection === 'gallery' ? 'active' : ''}`}
            onClick={() => onSectionChange('gallery')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCamera className="nav-icon" />
            <span>Gallery</span>
          </motion.button>
          
          <motion.button
            className={`nav-button ${currentSection === 'love' ? 'active' : ''}`}
            onClick={() => onSectionChange('love')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHeart className="nav-icon" />
            <span>My Heart</span>
          </motion.button>
        </nav>
      </div>
      
      <div className="floating-hearts">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-heart"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <FaHeart />
          </motion.div>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
