import React from 'react';
import OfferBanner from '../components/OfferBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Home = () => {
  return (
    <div className="min-h-screen">
      <OfferBanner />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
