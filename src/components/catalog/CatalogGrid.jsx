import React from 'react';
import './CatalogGrid.css';

const CatalogGrid = () => {
  const categories = [
    "Tennis Bracelets & Necklaces",
    "Women's Wedding Bands",
    "Eternity Wedding Bands",
    "Engagement Rings Catalog",
    "Earring",
    "Men's Wedding Band",
    "Head",
    "Engagement Ring Sets",
    "Men's Ring & Band Sets",
    "Fancy Ring",
    "Religious Pendants Catalog",
    "Pendants"
  ];

  // Placeholder images - in production, these would be actual jewelry product images
  const getImageUrl = (index) => {
    return `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center&auto=format&q=80`;
  };

  return (
    <section className="catalog-grid-section">
      <div className="container">
        <div className="catalog-grid">
          {categories.map((category, index) => (
            <div key={index} className="catalog-card">
              <div className="catalog-card-image">
                <img 
                  src={getImageUrl(index)} 
                  alt={category}
                  loading="lazy"
                />
              </div>
              <div className="catalog-card-label">
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogGrid;










