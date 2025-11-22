import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { blogArticles } from '../data/mock';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Risorse & Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consigli pratici per far crescere la tua attività online
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {article.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#d4af37] font-semibold hover:gap-3 transition-all duration-300"
                >
                  Scopri di Più
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
