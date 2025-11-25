
import React, { useState, useEffect } from 'react';
import { Eye, X } from 'lucide-react';
import { portfolioProjects } from '../data/mock';
import { Dialog, DialogContent } from './ui/dialog';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    
    // Blocca solo lo scroll senza spostare il body
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  };

  const closeModal = () => {
    // Ripristina lo scroll - il body è già nella posizione corretta
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Progetti Realizzati
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            7 demo completi che dimostrano la mia versatilità. Clicca per esplorare.
          </p>
        </div>

        {/* Portfolio Grid - Responsive 1-2-3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {portfolioProjects.map((project) => (
            <LazyPortfolioCard key={project.id} project={project} openModal={openModal} />
          ))}
        </div>
      </div>

      {/* Modal - Responsive modal for mobile and desktop */}
      <Dialog open={isModalOpen} onOpenChange={(open) => {
        if (!open) closeModal();
      }}>
        <DialogContent className="max-w-[96vw] sm:max-w-[90vw] w-full h-[90vh] sm:h-[85vh] p-0 gap-0 !top-[50%] !left-[50%] !translate-x-[-50%] !translate-y-[-50%]">
          {selectedProject && (
            <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden">
              {/* Modal Header - Sticky */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-3.5 bg-[#0f172a] text-white border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <h3 className="text-xs sm:text-base md:text-lg font-bold truncate">{selectedProject.name}</h3>
                  <span className="hidden sm:inline text-xs text-gray-400 whitespace-nowrap">Demo Live</span>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0 ml-2"
                  aria-label="Chiudi demo"
                  title="Chiudi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content - iframe */}
              <div className="flex-1 relative bg-white overflow-auto">
                <iframe
                  src={selectedProject.demoUrl}
                  title={selectedProject.name}
                  className="w-full h-full border-0"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

const LazyPortfolioCard = ({ project, openModal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img && img.dataset.src) {
              img.src = img.dataset.src;
              img.onload = () => setImageLoaded(true);
              observer.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={() => openModal(project)}
    >
      {/* Image with lazy loading */}
      <div className="relative h-48 sm:h-64 overflow-hidden bg-gray-200">
        <img
          ref={imageRef}
          data-src={project.image}
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${
            imageLoaded ? 'blur-none' : 'blur-sm'
          }`}
        />
        {/* Overlay on hover (desktop) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <Eye className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
            <p className="font-semibold text-xs sm:text-base">Vedi il Sito Live →</p>
          </div>
        </div>
      </div>

      {/* Content - Responsive padding */}
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-blue-100 to-[#d4af37]/20 text-gray-700 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden w-full bg-gradient-to-r from-[#0f172a] to-[#d4af37] text-white py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-base flex items-center justify-center gap-2 min-h-11 transition-all hover:shadow-lg">
          <Eye className="w-4 h-4" />
          Esplora il Demo Live
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
