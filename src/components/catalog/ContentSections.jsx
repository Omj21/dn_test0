import React from 'react';
import './ContentSections.css';

const ContentSections = () => {
  const sections = [
    {
      id: 1,
      title: "Effortless Ordering Process with Online Catalog",
      paragraphs: [
        "Our online <strong>Catalog</strong> provides retail jewelers with a streamlined ordering experience that saves time and reduces errors. With our intuitive digital platform, you can browse thousands of products, view detailed specifications, and place orders 24/7 from anywhere. The <strong>catalogs</strong> are organized by category, making it easy to find exactly what you need for your inventory.",
        "Each product in our <strong>Catalog</strong> includes high-resolution images, detailed descriptions, pricing information, and availability status. This comprehensive approach ensures that retail jewelers have all the information needed to make informed purchasing decisions. Our online <strong>catalogs</strong> are updated in real-time, so you always see current inventory and pricing.",
        "The ordering process is designed with efficiency in mind. Retail jewelers can create wish lists, save favorite items, and track order history through our secure online portal. Our <strong>Catalog</strong> system integrates seamlessly with your business operations, helping you manage inventory and fulfill customer orders more effectively."
      ],
      imagePosition: 'left'
    },
    {
      id: 2,
      title: "Collections Included in the Catalog",
      paragraphs: [
        "Our extensive <strong>Catalog</strong> features diverse collections from premier <strong>jewelry manufacturers</strong>, covering every category a retail jeweler might need. From classic engagement rings to contemporary fashion pieces, our <strong>catalogs</strong> showcase products that appeal to a wide range of customer preferences and price points.",
        "Each collection in our <strong>Catalog</strong> is carefully curated to represent the best offerings from trusted <strong>jewelry manufacturers</strong>. We work directly with these manufacturers to ensure quality, authenticity, and competitive pricing. Retail jewelers can confidently select items from our <strong>catalogs</strong> knowing they're getting premium products that will satisfy their customers.",
        "The collections are regularly updated with new arrivals and seasonal offerings, keeping our <strong>Catalog</strong> fresh and relevant. Whether you're looking for traditional designs or modern styles, our <strong>catalogs</strong> provide the variety needed to build a successful jewelry inventory."
      ],
      imagePosition: 'right'
    },
    {
      id: 3,
      title: "Quality Assurance and Manufacturer Partnerships",
      paragraphs: [
        "We maintain strict quality standards for all products featured in our <strong>Catalog</strong>. Our partnerships with reputable <strong>jewelry manufacturers</strong> ensure that every item meets industry benchmarks for craftsmanship and materials. Retail jewelers can trust that products from our <strong>catalogs</strong> will meet their customers' expectations.",
        "Our relationships with leading <strong>jewelry manufacturers</strong> allow us to offer exclusive pieces and competitive pricing in our <strong>Catalog</strong>. These partnerships are built on mutual respect and shared commitment to excellence, resulting in <strong>catalogs</strong> that consistently deliver value to retail jewelers.",
        "Quality control is integrated into every step of our <strong>Catalog</strong> process. From initial product selection to final delivery, we work closely with <strong>jewelry manufacturers</strong> to ensure consistency and reliability. This attention to detail makes our <strong>catalogs</strong> a trusted resource for retail jewelers nationwide."
      ],
      imagePosition: 'left'
    },
    {
      id: 4,
      title: "Comprehensive Product Information in Every Catalog",
      paragraphs: [
        "Each item in our <strong>Catalog</strong> includes comprehensive product information to help retail jewelers make informed decisions. Detailed specifications, material composition, sizing options, and pricing are clearly presented in our <strong>catalogs</strong>, eliminating guesswork and reducing the need for additional inquiries.",
        "Our <strong>Catalog</strong> system is designed to provide transparency and clarity. Retail jewelers can access complete product details, including certifications, care instructions, and warranty information. This thorough approach makes our <strong>catalogs</strong> more than just product listings—they're comprehensive resources for building your inventory.",
        "The information in our <strong>Catalog</strong> is regularly reviewed and updated to ensure accuracy. We understand that retail jewelers need reliable data to serve their customers effectively, which is why our <strong>catalogs</strong> prioritize detailed, accurate product information."
      ],
      imagePosition: 'right'
    },
    {
      id: 5,
      title: "Customization Options Available Through Catalog",
      paragraphs: [
        "Many products in our <strong>Catalog</strong> offer customization options, allowing retail jewelers to create unique pieces for their customers. Our <strong>catalogs</strong> clearly indicate which items can be personalized, along with available customization choices such as metal types, stone selections, and sizing variations.",
        "The customization process is straightforward and well-documented in our <strong>Catalog</strong>. Retail jewelers can see all available options, pricing for customizations, and estimated production times. This transparency helps you set accurate expectations with your customers when ordering from our <strong>catalogs</strong>.",
        "Our partnerships with skilled <strong>jewelry manufacturers</strong> enable us to offer extensive customization capabilities in our <strong>Catalog</strong>. Whether it's engraving, stone replacement, or design modifications, our <strong>catalogs</strong> provide the flexibility retail jewelers need to meet diverse customer requests."
      ],
      imagePosition: 'left'
    },
    {
      id: 6,
      title: "Seasonal Updates and New Arrivals in Catalog",
      paragraphs: [
        "Our <strong>Catalog</strong> is continuously updated with seasonal collections and new arrivals from top <strong>jewelry manufacturers</strong>. Retail jewelers can stay current with the latest trends and styles by regularly checking our <strong>catalogs</strong> for fresh inventory. These updates ensure your store always has access to in-demand pieces.",
        "Seasonal updates to our <strong>Catalog</strong> are strategically timed to align with retail cycles and consumer buying patterns. Our <strong>catalogs</strong> feature holiday collections, bridal season offerings, and fashion-forward pieces that help retail jewelers capitalize on peak selling periods.",
        "New arrivals are prominently featured in our <strong>Catalog</strong>, making it easy for retail jewelers to discover the latest products from our partner <strong>jewelry manufacturers</strong>. These regular updates keep our <strong>catalogs</strong> dynamic and relevant, providing ongoing value to your business."
      ],
      imagePosition: 'right'
    },
    {
      id: 7,
      title: "Bulk Ordering Benefits for Retail Jewelers",
      paragraphs: [
        "Our <strong>Catalog</strong> supports bulk ordering with volume discounts that help retail jewelers maximize profitability. The <strong>catalogs</strong> clearly display pricing tiers, making it easy to see how order quantities affect per-unit costs. This transparency helps you plan inventory purchases strategically.",
        "Bulk orders through our <strong>Catalog</strong> often include additional benefits such as priority processing, extended payment terms, and dedicated account support. Retail jewelers who regularly order from our <strong>catalogs</strong> can take advantage of these incentives to improve their business operations.",
        "We work with <strong>jewelry manufacturers</strong> to negotiate favorable terms for bulk purchases, passing these savings along to retail jewelers through our <strong>Catalog</strong> pricing. This approach makes our <strong>catalogs</strong> particularly valuable for stores with high inventory turnover or multiple locations."
      ],
      imagePosition: 'left'
    },
    {
      id: 8,
      title: "Customer Support and Catalog Assistance",
      paragraphs: [
        "Our team provides dedicated support to help retail jewelers navigate and utilize our <strong>Catalog</strong> effectively. Whether you need help finding specific products, understanding customization options, or placing orders, our knowledgeable staff is available to assist. We're committed to making our <strong>catalogs</strong> as user-friendly as possible.",
        "Customer support extends beyond just answering questions about our <strong>Catalog</strong>. We offer training sessions, product recommendations, and inventory planning assistance to help retail jewelers get the most value from our <strong>catalogs</strong>. This comprehensive support ensures you can leverage our resources to grow your business.",
        "Regular communication keeps retail jewelers informed about updates to our <strong>Catalog</strong>, new products from <strong>jewelry manufacturers</strong>, and special promotions. We believe that well-informed customers make better purchasing decisions, which is why we prioritize clear communication about our <strong>catalogs</strong>."
      ],
      imagePosition: 'right'
    }
  ];

  const getImageUrl = (index) => {
    return `https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=400&fit=crop&crop=center&auto=format&q=80`;
  };

  return (
    <section className="content-sections">
      {sections.map((section) => (
        <div key={section.id} className="content-section">
          <div className="container">
            <div className={`content-wrapper ${section.imagePosition === 'left' ? 'image-left' : 'image-right'}`}>
              <div className="content-image">
                <img 
                  src={getImageUrl(section.id)} 
                  alt={section.title}
                  loading="lazy"
                />
              </div>
              <div className="content-text">
                <h2 className="content-title">{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="content-paragraph"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContentSections;










