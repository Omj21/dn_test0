import React from 'react';
import './ProductsSection.css';

const ProductsSection = () => {
  const featuredSections = [
    {
      type: 'with-subcategories',
      image: '/Tennis Bracelets and Necklaces Series.webp',
      subcategories: [
        'Bracelet Series - BR300',
        'Necklace Series - NC364',
        'Round Series',
        'Princess Series',
        'V Split Series',
        'Combination Series'
      ]
    },
    {
      type: 'simple',
      image: '/Eternity Bands and Womens Wedding Bands Catalog.webp',
      link: '/catalog'
    },
    {
      type: 'with-subcategories',
      image: '/Engagement Rings and Sets.webp',
      subcategories: [
        'Engagement Ring Sets - ERS2017',
        'Engagement Rings - ER2274',
        'Diamond Series',
        'Two Tone Series',
        'Fancy Carved Series',
        'Plain Series'
      ]
    },
    {
      type: 'simple',
      image: "/Men's Rings and Men's Wedding Bands Series.webp",
      link: '/wedding-band-diamond'
    }
  ];

  return (
    <section className="products-section section">
      <div className="products-section-container">
        <h2 className="section-heading">Large Collection of Ready-to-Cast Jewelry</h2>
        <p className="products-section-description">
          With an ever-changing landscape of jewelry trends and customer preferences, Denova Casting 
          maintains a comprehensive collection of ready-to-cast jewelry designs. Our extensive catalog ensures 
          that you can find the perfect pieces for your inventory, from classic timeless designs to contemporary 
          styles that reflect current market demands.
        </p>
        <div className="products-section-cta">
          <a href="/collection" className="btn-primary">
            Explore collection
          </a>
        </div>

        <div className="featured-sections">
          {featuredSections.map((section, index) => (
            <div key={index} className="featured-section-item">
              {section.type === 'with-subcategories' ? (
                <>
                  <div className="featured-section-image-wrapper">
                    <img
                      src={section.image}
                      alt={`${section.subcategories[0]} collection`}
                      className="featured-section-image"
                    />
                    <div className="featured-section-overlay">
                      <div className="subcategories-list">
                        {section.subcategories.map((subcat, idx) => (
                          <div key={idx} className="subcategory-item">{subcat}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <a href={section.link} className="featured-section-link">
                  <img
                    src={section.image}
                    alt="Product collection"
                    className="featured-section-image"
                  />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;









