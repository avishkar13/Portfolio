import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';

function AnimatedRoutes() {
  const location = useLocation();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setInitialLoad(false); // Set initial load state to false after the first render
  }, []);

  const transitionProps = {
    initial: {
      x: -200, // Start slightly off the left
      y: 200, // Start from bottom (adjust as necessary)
      opacity: 0,
      rotateX: 90, // Rotate on X axis to simulate folding
      rotateY: -45, // Rotate on Y axis to simulate folding from left bottom
      scale: 0.8, // Slightly smaller scale to add perspective
      transformOrigin: "bottom left", // Pivot point of the fold
    },
    animate: {
      x: 0, // End position at the center
      y: 0, // End position at the center
      opacity: 1,
      rotateX: 0, // No rotation when fully in view
      rotateY: 0, // No Y rotation when fully in view
      scale: 1, // Normal scale
      transformOrigin: "center", // Center pivot when fully in view
    },
    exit: {
      x: 200, // Move to the right during exit
      y: -200, // Move upward during exit
      opacity: 0,
      rotateX: -90, // Fold out on X axis
      rotateY: 45, // Fold out on Y axis to simulate unfolding from right top
      scale: 0.8, // Shrink when exiting
      transformOrigin: "top right", // Fold from the top right corner
    },
    transition: { duration: 1, ease: 'easeInOut' },
  };
  
  
  return (
    <Routes location={location}>
      <Route
        path="/"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <Home />
          </motion.div>
        }
      />
      <Route
        path="/about"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <About />
          </motion.div>
        }
      />
      <Route
        path="/skills"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <Skills />
          </motion.div>
        }
      />
      <Route
        path="/projects"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <Projects />
          </motion.div>
        }
      />
      <Route
        path="/contact"
        element={
          <motion.div key={location.key} {...transitionProps}>
            <Contact />
          </motion.div>
        }
      />
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  </StrictMode>
);
