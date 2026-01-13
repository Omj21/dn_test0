import React from 'react';
import './CustomJewelrySection.css';

const CustomJewelrySection = () => {
  return (
    <section className="custom-jewelry section">
      <div className="custom-jewelry-container">
        <h2 className="section-heading">Custom Jewelry: What we do?</h2>
        <p className="custom-jewelry-intro">
          Denova Casting welcomes you to the unique world of custom jewelry manufacturing. 
          We combine traditional craftsmanship with modern technology to create exceptional pieces 
          that reflect your vision and exceed your expectations.
        </p>
        
        <div className="custom-jewelry-subsection">
          <div className="subsection-content">
            <h3 className="subsection-heading">Learn More</h3>
            <p>
              At Denova Casting, we offer comprehensive custom jewelry services that cover 
              every aspect of the manufacturing process. From initial design consultation to final 
              finishing and polishing, our expert team guides you through each step of creating 
              your unique piece.
            </p>
            <p>
              Our custom jewelry services include CAD design, 3D modeling, rapid prototyping, 
              casting, stone setting, and finishing. We work with a wide range of precious metals 
              including gold, platinum, and silver, and we can incorporate diamonds, gemstones, 
              and other materials to bring your design to life.
            </p>
            <p>
              Whether you're a retail jeweler looking to offer unique pieces to your customers, 
              or an individual seeking a one-of-a-kind creation, we have the expertise and resources 
              to make your vision a reality. Our commitment to quality and attention to detail ensures 
              that every custom piece meets our exacting standards.
            </p>
            <p>
              We understand that custom jewelry is deeply personal, and we treat each project with 
              the care and respect it deserves. Our experienced designers and craftspeople work closely 
              with you to understand your needs, preferences, and budget, ensuring that the final piece 
              exceeds your expectations.
            </p>
          </div>
        </div>

        <div className="custom-jewelry-subsection with-image">
          <div className="subsection-image-wrapper">
            <img
              src="/3D-Services.jpg"
              alt="Jewelry CAD Design Services"
              className="subsection-image"
            />
          </div>
          <div className="subsection-content">
            <h3 className="subsection-heading">Jewelry CAD Design</h3>
            <p>
              Our state-of-the-art CAD (Computer-Aided Design) capabilities allow us to create precise, 
              detailed 3D models of your jewelry designs before manufacturing begins. This process ensures 
              accuracy, allows for design refinement, and gives you a clear visualization of the final piece.
            </p>
            <p>
              Our skilled CAD designers use industry-leading software to transform your concepts into 
              detailed digital models. These models can be viewed from any angle, allowing you to see 
              exactly how your piece will look and feel. Once approved, the digital model is used to 
              create a physical prototype through 3D printing, which you can examine and approve before 
              moving to production.
            </p>
            <p>
              The CAD design process enables us to make adjustments quickly and efficiently, saving time 
              and ensuring that the final piece matches your vision precisely. Whether you have a detailed 
              sketch, a rough idea, or just a concept, our CAD designers can bring it to life.
            </p>
          </div>
        </div>

        <div className="custom-jewelry-banner">
          <a
            href="https://empirecreativestudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="creative-studio-banner-link"
          >
            <img
              src="/empire-creative-studio-banner.jpg"
              alt="Empire Creative Studio - Photo, Render, Video Service"
              className="creative-studio-banner-image"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomJewelrySection;









