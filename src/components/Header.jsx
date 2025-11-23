import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servizi', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Processo', href: '#process' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contatti', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-white shadow-md py-3' 
            : 'top-12 bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0f172a] to-[#d4af37] bg-clip-text text-transparent">
                WebLab
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 hover:text-[#d4af37] font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <a
              href="https://wa.me/3883765466?text=Ciao!%20Voglio%20approfittare%20dell%27offerta%20limitata%20e%20richiedere%20la%20bozza%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              🔥 Offerta Attiva
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-40 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 hover:text-[#d4af37] font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/3883765466?text=Ciao!%20Voglio%20approfittare%20dell%27offerta%20limitata%20e%20richiedere%20la%20bozza%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4"
            >
              🔥 Offerta Attiva
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
