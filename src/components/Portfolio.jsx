
import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { portfolioProjects } from '../data/mock';
import { Dialog, DialogContent } from './ui/dialog';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Progetti Realizzati
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            7 demo completi che dimostrano la mia versatilità.<br />
            Tocca le card per esplorare i progetti in dettaglio.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover (desktop) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <Eye className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold text-lg">Vedi il Sito Live →</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-100 to-[#d4af37]/20 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Button */}
                <button className="lg:hidden w-full bg-gradient-to-r from-[#0f172a] to-[#d4af37] text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  Esplora il Demo Live
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[96vw] sm:max-w-7xl w-full h-[92vh] sm:h-[95vh] p-0 gap-0 m-2 sm:m-0">
          {selectedProject && (
            <div className="flex flex-col h-full">
              {/* Modal Header - Sticky bar with project name and close button */}
              <div className="flex items-center justify-between px-6 py-3 bg-[#0f172a] text-white border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold">{selectedProject.name}</h3>
                  <span className="text-sm text-gray-400">Demo Live</span>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Chiudi demo"
                  title="Chiudi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Modal Content - iframe fullscreen */}
              <div className="flex-1 relative bg-white overflow-hidden">
                <iframe
                  src={selectedProject.demoUrl}
                  title={selectedProject.name}
                  className="w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
