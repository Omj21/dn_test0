import React from 'react';
import './DetailedContent.css';

const DetailedContent = () => {
  const serviceDetails = [
    {
      id: "cad-design",
      title: "Jewelry CAD Design",
      paragraphs: [
        "At Denova Casting, our <strong>CAD Design</strong> service represents the perfect fusion of artistic vision and cutting-edge technology. Our in-house team of experienced CAD designers works directly with you to transform your ideas into precise digital models.",
        "Whether you have detailed specifications or just a concept, our designers will guide you through the entire process. We utilize advanced <strong>jewelry design software</strong> to create accurate 3D models that capture every detail of your vision, including stone sizes, dimensions, and intricate design elements.",
        "Our collaborative approach ensures that your ideal jewelry masterpiece is brought to life with precision and attention to detail. We provide multiple revision cycles to ensure your design meets all requirements before moving to production."
      ],
      image: "/images/cad-design.jpg"
    },
    {
      id: "printing",
      title: "Jewelry Printing: From Prototyping to Production",
      paragraphs: [
        "Our <strong>3D Printing</strong> service utilizes state-of-the-art printers capable of handling your STL files with exceptional precision. This technology allows for rapid prototyping and precise production of intricate jewelry designs that would be challenging to create through traditional methods.",
        "We support various printing materials and technologies to ensure the best results for your specific project requirements. From initial prototyping to final production pieces, our printing capabilities deliver consistent quality and detail accuracy.",
        "This service is ideal for complex designs, custom pieces, and rapid iteration during the design development phase."
      ],
      image: "/images/printing.jpg"
    },
    {
      id: "casting",
      title: "Jewelry Casting: The Cornerstone of Quality",
      paragraphs: [
        "Our <strong>Casting</strong> department specializes in both 14K and 18K gold in Pink, White, and Yellow variations, as well as Platinum. We maintain strict quality controls throughout the casting process to ensure consistent results and material integrity.",
        "Our casting techniques preserve the fine details of your CAD designs while ensuring structural integrity and durability. We handle everything from small individual pieces to larger production runs, maintaining quality standards regardless of volume.",
        "The combination of precise casting technology and expert craftsmanship ensures that your jewelry pieces meet the highest standards of quality and finish."
      ],
      image: "/images/casting.jpg"
    },
    {
      id: "tumbling",
      title: "Tumbling and Pre-Polishing Excellence",
      paragraphs: [
        "Our <strong>Tumbling</strong> service is a critical step in preparing your pieces for the next stages of production. We carefully process all pieces according to your finish specifications, ensuring proper preparation before stone setting.",
        "This process removes casting residue, smooths surfaces, and prepares the metal for subsequent finishing operations. We adjust our tumbling parameters based on your specific finish requirements, whether you need a matte finish, satin finish, or preparation for high polish.",
        "Proper tumbling ensures that your jewelry pieces have the foundation needed for exceptional final results."
      ],
      image: "/images/tumbling.jpg"
    },
    {
      id: "jeweler",
      title: "Master Jewelry Preparation",
      paragraphs: [
        "Our <strong>Jeweler</strong> team consists of skilled polishers who ensure that every piece is properly prepared before advancing to the next production stage. Their expertise in metal finishing creates the perfect foundation for subsequent operations.",
        "This preparation work includes surface refinement, edge finishing, and ensuring all components are ready for assembly or stone setting. Our team understands the critical importance of proper preparation in achieving flawless final results.",
        "Each piece receives individual attention to ensure it meets our exacting standards before proceeding to the next phase of production."
      ],
      image: "/images/jeweler.jpg"
    },
    {
      id: "pre-polish",
      title: "Pre-Polish: Precision Cleaning and Assembly",
      paragraphs: [
        "Our <strong>Pre-Polish</strong> service is performed by our team of master jewelers who ensure that every piece is cleaned and assembled to your quality standards. This critical stage prepares the jewelry for final polishing and quality control.",
        "The pre-polish process includes thorough cleaning, component assembly verification, and preliminary surface preparation. Our master jewelers bring decades of experience to ensure that every detail meets your specifications.",
        "This attention to detail at the pre-polish stage ensures that the final product will meet or exceed your expectations."
      ],
      image: "/images/pre-polish.jpg"
    },
    {
      id: "diamond-supply",
      title: "Diamond Supply and Stone Sourcing",
      paragraphs: [
        "Our <strong>Diamond Supply</strong> service features an in-house Diamond Concierge who can source center stones or supply your melee and color stone needs. We maintain relationships with trusted suppliers to ensure access to high-quality stones at competitive prices.",
        "Whether you need a single center stone or hundreds of melee stones, our concierge service handles all aspects of sourcing, selection, and quality verification. We can assist with both natural and lab-grown diamonds, as well as a wide variety of colored gemstones.",
        "This comprehensive stone supply service streamlines your procurement process and ensures consistent quality across all your jewelry projects."
      ],
      image: "/images/diamond-supply.jpg"
    },
    {
      id: "setting",
      title: "Precision Stone Setting Services",
      paragraphs: [
        "Our <strong>Setting</strong> department is staffed by skilled setters capable of handling everything from a single stone to hundreds of stones in complex arrangements. Our setters are trained in all major setting techniques, including prong, bezel, channel, pave, and invisible settings.",
        "We maintain strict quality controls during the setting process to ensure stones are secure, properly aligned, and protected. Our setters work with precision tools and techniques to achieve perfect stone placement every time.",
        "Whether your design calls for a single center stone or intricate multi-stone arrangements, our setting team delivers consistent, professional results."
      ],
      image: "/images/setting.jpg"
    },
    {
      id: "complete-polish",
      title: "Complete Polish: The Final Touch",
      paragraphs: [
        "Our <strong>Complete Polish</strong> department ensures that your product is polished to perfection. This final finishing step brings out the full brilliance and luster of your jewelry pieces, creating the stunning appearance your customers expect.",
        "Our polish team uses various techniques and compounds to achieve different finish levels, from mirror-bright high polish to satin and brushed finishes. Every piece receives individual attention to ensure consistent quality throughout.",
        "The complete polish process is the final step that transforms your jewelry from a finished piece into a stunning work of art ready for presentation to your customers."
      ],
      image: "/images/complete-polish.jpg"
    },
    {
      id: "quality-control",
      title: "Quality Control: White Glove Service",
      paragraphs: [
        "Our <strong>Quality Control</strong> department operates as a white glove service, ensuring that every completed piece is thoroughly inspected for imperfections before your job is finalized. This final inspection is critical to maintaining the high standards that both we and our clients expect.",
        "Our QC process includes visual inspection, measurement verification, stone security checks, and finish quality assessment. Any issues identified are immediately addressed before the piece leaves our facility.",
        "This rigorous quality control process gives you confidence that every piece delivered meets the highest standards of craftsmanship and quality."
      ],
      image: "/images/quality-control.jpg"
    },
    {
      id: "photo-render-services",
      title: "Photo and Render Services for Marketing",
      paragraphs: [
        "Our <strong>Photo/Render Services</strong> provide professional marketing imagery for your jewelry pieces. Through our creative studio partnership at www.empirecreativestudio.com, we offer comprehensive photography and 3D rendering services.",
        "These services help you showcase your jewelry in the best possible light, whether for catalogs, websites, social media, or print advertising. Our photographers and digital artists understand how to capture the beauty and detail of fine jewelry.",
        "High-quality product imagery is essential for effective marketing, and our photo and render services ensure your jewelry is presented in its best form."
      ],
      image: "/images/photo-render.jpg"
    },
    {
      id: "ready-pickup",
      title: "Ready Pickup: Seamless Delivery Process",
      paragraphs: [
        "Our <strong>Ready Pickup</strong> service ensures a smooth and organized delivery process. When your order is complete, you'll receive both an email notification and a phone call from your preferred pickup location, confirming that your items are ready for collection.",
        "We understand the importance of clear communication throughout the production process, and our pickup notification system keeps you informed every step of the way. We coordinate with your preferred pickup location to ensure a convenient and efficient handoff.",
        "Thank you for choosing Denova Casting. We look forward to building your Empire together, and we're committed to making every aspect of working with us as smooth and professional as possible."
      ],
      image: "/images/ready-pickup.jpg"
    }
  ];

  return (
    <section className="detailed-content-section">
      <div className="detailed-content-container">
        <h2 className="content-section-heading">Wholesale jewelry manufacturing services</h2>
        
        <div className="intro-overview">
          <p>
            Denova Casting offers comprehensive wholesale jewelry manufacturing services designed to meet the needs of retailer jewelers. Our full-service approach combines advanced technology with traditional craftsmanship to deliver exceptional results. From initial design through final quality control, we provide every service needed to bring your jewelry visions to life.
          </p>
        </div>

        <div className="service-detail-blocks">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className="service-detail-block" id={service.id}>
              {index % 3 === 0 && service.image && (
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <h3 className="service-detail-title">{service.title}</h3>
              {service.paragraphs.map((paragraph, pIndex) => (
                <p 
                  key={pIndex} 
                  className="service-detail-paragraph"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              {index % 3 === 2 && service.image && (
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedContent;



