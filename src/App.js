import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import LoveMessage from './components/LoveMessage';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('gallery');

  return (
    <div className="App">
      <Header onSectionChange={setCurrentSection} currentSection={currentSection} />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          {currentSection === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PhotoGallery />
            </motion.div>
          )}
          
          {currentSection === 'love' && (
            <motion.div
              key="love"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LoveMessage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;