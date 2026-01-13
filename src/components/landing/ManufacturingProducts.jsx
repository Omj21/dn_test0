import React from 'react';
import './ManufacturingProducts.css';

const ManufacturingProducts = () => {
  const productCategories = [
    {
      name: 'Engagement Rings',
      image: '/ER2185-Half-Bezel.png',
      description: 'We offer a large selection of ready-made models and also offer customizable engagement rings for the most exceptional experience.',
      link: '/catalog/engagement-rings'
    },
    {
      name: 'Bracelets and Necklaces',
      image: '/Tennis-Necklace-NC300.png',
      description: 'Our sophisticated professionals are ready to bring any vision to life when it comes to both bracelets and necklaces.',
      link: '/catalog/bracelets-necklaces'
    },
    {
      name: 'Earring',
      image: '/EAR160.png',
      description: 'Stud Earrings or timeless Hoop Earrings, we have what you need. Our earring catalog offers a variety of diamond cuts, including Princess, Round, Emerald, Oval, and Cushion.',
      link: '/catalog/earrings'
    }
  ];

  return (
    <section className="manufacturing-products section">
      <div className="manufacturing-products-container">
        <h2 className="section-heading">Jewelry Manufacturing: Our Products</h2>
        <p className="manufacturing-products-description">
          Discover our comprehensive range of jewelry manufacturing services and products. From engagement rings 
          to bracelets, necklaces, and earrings, we provide exceptional quality and craftsmanship for every piece.
        </p>
        
        <div className="product-categories-grid">
          {productCategories.map((category, index) => (
            <div key={index} className="product-category-card">
              <a href={category.link} className="category-card-link">
                <div className="category-image-wrapper">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="category-image"
                  />
                </div>
                <h3 className="category-title">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <span className="category-link-text">Browse Catalogue →</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProducts;









