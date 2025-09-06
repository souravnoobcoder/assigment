import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Photo data with your actual images and romantic descriptions
  const photos = [
    {
      id: 1,
      src: '/images/WhatsApp Image 2025-09-06 at 17.16.34.jpeg',
      alt: 'Black and white selfie with pink heart filters',
      description: 'Even in black and white, your beauty melts my heart. You are my forever love.',
      category: 'Love • Cutie'
    },
    {
      id: 2,
      src: '/images/WhatsApp Image 2025-09-06 at 17.16.35 (1).jpeg',
      alt: 'Brightly lit selfie',
      description: 'You are the dream I never want to wake up from. My heart belongs only to you.',
      category: 'My Love • Gorgeous'
    },
    {
      id: 3,
      src: '/images/WhatsApp Image 2025-09-06 at 17.16.35.jpeg',
      alt: 'Portrait with gentle smile',
      description: 'Your smile is my sunshine, my reason to keep going. I adore you endlessly.',
      category: 'Angel • Love'
    },
    {
      id: 4,
      src: '/images/WhatsApp Image 2025-09-06 at 17.19.55.jpeg',
      alt: 'Celebration moment',
      description: 'You are the brightest star in my universe. My love for you grows stronger every day.',
      category: 'Queen • Love'
    },
    {
      id: 5,
      src: '/images/WhatsApp Image 2025-09-06 at 17.19.56 (1).jpeg',
      alt: 'Smiling outdoors',
      description: 'Your smile is my peace, my happiness, my everything. I can’t imagine life without you.',
      category: 'Cutie • Love'
    },
    {
      id: 6,
      src: '/images/WhatsApp Image 2025-09-06 at 17.19.56.jpeg',
      alt: 'Holding a book',
      description: 'Every little thing about you makes me fall in love with you again and again.',
      category: 'My Heart • Gorgeous'
    },
    {
      id: 7,
      src: '/images/WhatsApp Image 2025-09-06 at 17.19.57.jpeg',
      alt: 'Joyful smile',
      description: 'Your joy is more beautiful than anything in this world. You are my forever angel.',
      category: 'Angel • Love'
    },
    {
      id: 8,
      src: '/images/WhatsApp Image 2025-09-06 at 17.19.58.jpeg',
      alt: 'Farewell moment',
      description: 'Every moment with you feels like magic. You make love eternal for me.',
      category: 'Princess • Love'
    },
    {
      id: 9,
      src: '/images/WhatsApp Image 2025-09-06 at 17.20.00.jpeg',
      alt: 'Heart sticker selfie',
      description: 'You are my comfort, my safe place, my love forever.',
      category: 'Cutie • Love'
    },
    {
      id: 10,
      src: '/images/WhatsApp Image 2025-09-06 at 17.20.05.jpeg',
      alt: 'Smiling with pure heart',
      description: 'Your kindness and love make this world a better place. I am blessed to have you.',
      category: 'Queen • My Love'
    },
    {
      id: 11,
      src: '/images/WhatsApp Image 2025-09-06 at 17.20.41.jpeg',
      alt: 'Laughing joyfully',
      description: 'Your laughter is my favorite music. You make my heart dance with happiness.',
      category: 'Love • Angel'
    },
    {
      id: 12,
      src: '/images/WhatsApp Image 2025-09-06 at 17.20.42.jpeg',
      alt: 'Smiling outdoors',
      description: 'You bloom brighter than any star. You are my eternal love.',
      category: 'Princess • Beautiful'
    },
    {
      id: 13,
      src: '/images/WhatsApp Image 2025-09-06 at 17.20.43.jpeg',
      alt: 'Smiling portrait',
      description: 'Your beauty takes my breath away every time. You are my forever queen.',
      category: 'Gorgeous • My Heart'
    },
    {
      id: 14,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.11.jpeg',
      alt: 'Gentle smile',
      description: 'Your beauty and love are like poetry to my soul.',
      category: 'Angel • Love'
    },
    {
      id: 15,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.13 (1).jpeg',
      alt: 'Bright smile',
      description: 'You are my queen, my love, my everything. I cherish you endlessly.',
      category: 'Queen • Love'
    },
    {
      id: 16,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.13.jpeg',
      alt: 'Magical smile',
      description: 'You light up the darkness in my life. My world shines because of you.',
      category: 'Magical • My Love'
    },
    {
      id: 17,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.21.jpeg',
      alt: 'Charming smile',
      description: 'You are elegance, beauty, and love all in one. I adore you with all my heart.',
      category: 'Gorgeous • Love'
    },
    {
      id: 18,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.29.jpeg',
      alt: 'Mirror selfie',
      description: 'Your beauty reflects like an angel. You are my dream come true.',
      category: 'Cutie • My Heart'
    },
    {
      id: 19,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.30.jpeg',
      alt: 'Smiling sweetly',
      description: 'Your smile is the reason I believe in love. You are my sweetest blessing.',
      category: 'Princess • Love'
    },
    {
      id: 20,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.31.jpeg',
      alt: 'Laughing with joy',
      description: 'Your laughter makes my soul alive. I love you endlessly.',
      category: 'Joy • Angel'
    },
    {
      id: 21,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.37.jpeg',
      alt: 'Radiant smile',
      description: 'You look divine, like a blessing sent only for me. You are my forever love.',
      category: 'Queen • Love'
    },
    {
      id: 22,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.40.jpeg',
      alt: 'Smiling softly',
      description: 'You make my life brighter with just one smile. My love for you is infinite.',
      category: 'My Heart • Gorgeous'
    },
    {
      id: 23,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.44.jpeg',
      alt: 'Happy moment',
      description: 'You light up the night with your happiness. My soul is yours forever.',
      category: 'Angel • Cutie'
    },
    {
      id: 24,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.53.jpeg',
      alt: 'Smiling beautifully',
      description: 'Your beauty is unmatched, and your love is priceless. You are my everything.',
      category: 'Princess • My Love'
    },
    {
      id: 25,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.56.jpeg',
      alt: 'Joyful smile',
      description: 'You are the most beautiful gift in my life. My love for you will never end.',
      category: 'Beautiful • Angel'
    },
    {
      id: 26,
      src: '/images/WhatsApp Image 2025-09-06 at 17.23.59.jpeg',
      alt: 'Bright moment',
      description: 'Even in the simplest moments, you are the center of my world.',
      category: 'Love • My Heart'
    },
    {
      id: 27,
      src: '/images/WhatsApp Image 2025-09-06 at 17.24.02.jpeg',
      alt: 'Radiant beauty',
      description: 'You are my goddess, my queen, my endless love.',
      category: 'Queen • Gorgeous'
    },
    {
      id: 28,
      src: '/images/WhatsApp Image 2025-09-06 at 17.24.06.jpeg',
      alt: 'Happy smile',
      description: 'Your happiness is my greatest treasure. I live to see you smile.',
      category: 'Cutie • Angel'
    },
    {
      id: 29,
      src: '/images/WhatsApp Image 2025-09-06 at 17.24.11.jpeg',
      alt: 'Confident smile',
      description: 'You are my strength, my happiness, and my forever love.',
      category: 'Love • My Heart'
    },
    {
      id: 30,
      src: '/images/WhatsApp Image 2025-09-06 at 17.24.13.jpeg',
      alt: 'Gentle smile',
      description: 'You and your smile make the world beautiful for me.',
      category: 'Princess • Love'
    },
    {
      id: 31,
      src: '/images/WhatsApp Image 2025-09-06 at 17.24.14.jpeg',
      alt: 'Bright smile',
      description: 'You are my sunshine on every path of life. I adore you forever.',
      category: 'Angel • My Love'
    },
    {
      id: 32,
      src: '/images/WhatsApp Image 2025-09-06 at 17.24.15.jpeg',
      alt: 'Sweet smile',
      description: 'You make every moment unforgettable. My heart is always yours.',
      category: 'Cutie • Love'
    },
    {
      id: 33,
      src: '/images/WhatsApp Image 2025-09-06 at 17.24.25.jpeg',
      alt: 'Playful smile',
      description: 'You bring joy into my life in ways I can’t describe. You are my angel.',
      category: 'Angel • Beautiful'
    },
    {
      id: 34,
      src: '/images/WhatsApp Image 2025-09-06 at 17.24.28.jpeg',
      alt: 'Lovely smile',
      description: 'Your love is my greatest blessing. I am forever yours.',
      category: 'My Heart • Love'
    },
    {
      id: 35,
      src: '/images/WhatsApp Image 2025-09-06 at 17.24.30.jpeg',
      alt: 'Cozy smile',
      description: 'You are my comfort, my happiness, and my eternal love.',
      category: 'Cutie • Queen'
    }
  ];
  

  const openLightbox = (photo, index) => {
    setSelectedImage(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(photos[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(photos[prevIndex]);
  };

  return (
    <div className="photo-gallery">
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>My Beautiful Himani</h1>
        <p>Every moment with you is a treasure worth capturing</p>
      </motion.div>

      <motion.div 
        className="gallery-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="photo-card"
            onClick={() => openLightbox(photo, index)}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="photo-container">
              <img src={photo.src} alt={photo.alt} />
              <div className="photo-overlay">
                <FaHeart className="heart-icon" />
                <span className="category">{photo.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeLightbox}>
                <FaTimes />
              </button>
              
              <button className="nav-button prev" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              
              <button className="nav-button next" onClick={nextImage}>
                <FaChevronRight />
              </button>
              
              <img src={selectedImage.src} alt={selectedImage.alt} />
              
              <div className="lightbox-info">
                <h3>{selectedImage.category}</h3>
                <p>{selectedImage.description}</p>
                <span className="photo-counter">
                  {currentIndex + 1} of {photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
