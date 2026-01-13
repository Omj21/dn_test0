import React, { useState } from 'react';
import './JewelryCollections.css';

const JewelryCollections = () => {
  const [activeCategory, setActiveCategory] = useState('Remount');
  
  const categories = ['Remount', 'Hidden Halo', 'Solitaire'];
  
  const videos = {
    'Remount': '/ER2128.mp4',
    'Hidden Halo': '/Er2139.webm',
    'Solitaire': '/Er2141.webm'
  };

  return (
    <section className="jewelry-collections section">
      <div className="jewelry-collections-container">
        <h2 className="section-heading">JEWELRY COLLECTIONS</h2>
        <p className="collections-subheading">View by Category</p>
        
        <div className="category-selector">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="collections-video-display">
          <video
            key={activeCategory}
            className="collection-video"
            autoPlay
            loop
            muted
            playsInline
            aria-label={`${activeCategory} collection video`}
          >
            <source src={videos[activeCategory]} type={videos[activeCategory].endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="featured-collection-image">
          <img
            src="/Ready-to-Cast Jewelry Collection.webp"
            alt="Ready-to-Cast Jewelry Collection"
            className="collection-featured-image"
          />
        </div>
      </div>
    </section>
  );
};

export default JewelryCollections;









