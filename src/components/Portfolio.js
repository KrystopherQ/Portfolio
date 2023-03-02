import React, { useState } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import About from './pages/About';
import Footer from './Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <Hero />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Portfolio;