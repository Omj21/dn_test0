import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  // Placeholder reviews - in production, these would come from Google Reviews API
  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      text: 'Excellent quality and service. Denova Casting delivered exactly what we needed for our jewelry store.',
      date: '2 weeks ago'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Professional team and outstanding craftsmanship. Highly recommend their services.',
      date: '1 month ago'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'The custom jewelry we ordered exceeded our expectations. Great communication throughout the process.',
      date: '3 weeks ago'
    }
  ];

  const averageRating = 5.0;
  const reviewCount = 52;

  return (
    <section className="reviews-section section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">Denova Casting - Full service Jewelry Manufacturer</h2>
          <div className="reviews-summary">
            <div className="rating-display">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <span className="rating-number">{averageRating}</span>
            </div>
            <p className="review-count">{reviewCount} Google reviews</p>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-name">{review.name}</div>
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star-small">★</span>
                  ))}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-date">{review.date}</div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <a
            href="https://www.google.com/search?q=Empire+Casting+House+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Write a review
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;









