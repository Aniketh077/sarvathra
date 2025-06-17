import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ProductCard = ({ title, image, description }: { title: string; image: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const SheetMetalComponents = () => {
  const products = [
    {
      title: "Three Wheeler Clutch Bell",
      image: "/assets/Alfa-Clutch-Bell.jpg",
      description: "Manufactured with precision using high-quality steel, the Three Wheeler Clutch Bell is a crucial component in the transmission systems."
    },
    {
      title: "Sheet Metal Components",
      image: "/assets/sheetmetalcomponenets.jpg",
      description: "Custom-fabricated sheet metal components for diverse industrial applications. These parts are formed through cutting, bending, and assembling processes."
    },
    {
      title: "SS Drip Tray for Stoves",
      image: "/assets/SS-Drip-Tray.jpg",
      description: "This Stainless Steel Drip Tray is designed to collect spills and maintain cleanliness around gas stoves. Aesthetic and functional, it's a kitchen essential."
    },
    {
      title: "Gas Stove Body",
      image: "/assets/Gas-Stove-Body.jpg",
      description: "Fabricated from durable stainless steel, this gas stove body offers strength and appeal, providing a base for modern gas stoves."
    },
    {
      title: "Embossed Door Panel",
      image: "/assets/Embossed-Door-Panel.jpg",
      description: "These beautifully crafted embossed door panels bring an aesthetic appeal to interior and exterior doors with ornamental patterns."
    },
    {
      title: "Sheet Metal Parts",
      image: "/assets/Sheet-Metal-Parts.jpg",
      description: "General-purpose sheet metal parts tailored to customer specifications. They are produced using CNC, stamping, and welding processes."
    },
    {
      title: "Cylinder Trolly",
      image: "/assets/Cylinder-Trolly.jpg",
      description: "A sleek and sturdy stainless steel cylinder trolley equipped with smooth-rolling wheels for easy mobility."
    },
    {
      title: "Gusset",
      image: "/assets/Gusset.jpg",
      description: "A gusset is a triangular metal component used to reinforce angles or joints in structures."
    },
/*{
      title: "Alfa Clutch Bell",
      image: "/assets/Alfa-Clutch-Bell.jpg",
      description: "The Alfa Clutch Bell is engineered with high-precision machinery to deliver optimal performance in two-wheelers and three-wheelers. Manufactured using hardened steel, it ensures long-lasting durability and smooth clutch engagement."
    },*/
    {
      title: "Sheet Metal Parts",
      image: "/assets/Sheet-Metal-Part.jpg",
      description: "Our sheet metal parts are custom-fabricated using advanced CNC and stamping processes to suit various industrial and automotive applications. Built to precise dimensions, these parts are ideal for structural, electrical, and mechanical functions."
    },
    {
      title: "Stay ECU",
      image: "/assets/Stay-ECU.jpg",
      description: "The Stay ECU is a specialized mounting bracket designed to securely hold the Electronic Control Unit (ECU) in place within automotive vehicles. Made from corrosion-resistant metal, it ensures shock absorption and mechanical stability."
    },
    {
      title: "Solar Housingy",
      image: "/assets/Solar-Housing.jpg",
      description: "Our Solar Housing units are designed to protect and support solar components such as inverters, junction boxes, or batteries. Made from weather-resistant sheet metal or stainless steel, they are suitable for both rooftop and ground-mounted installations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sheet Metal Components - SARVATRA INDUSTRIES</title>
        <meta name="description" content="Explore our comprehensive range of precision-engineered sheet metal components including clutch bells, stove parts, panels, and custom fabrications." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 mb-12">
          <div className="absolute inset-0">
            <img
              src="/assets/sheetmetalcomponenets.jpg"
              alt="Sheet metal manufacturing"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Sheet Metal Components</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                Precision-engineered components for various industrial applications
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>

          {/* Manufacturing Capabilities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Processing Capabilities</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Precision Cutting</li>
                  <li>• CNC Punching</li>
                  <li>• Bending and Forming</li>
                  <li>• Welding and Assembly</li>
                  <li>• Surface Finishing</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Standards</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• ISO 9001:2015 Certified</li>
                  <li>• Precise Dimensional Control</li>
                  <li>• Material Traceability</li>
                  <li>• In-process Quality Checks</li>
                  <li>• Final Inspection Reports</li>
                  <li>• And more</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default SheetMetalComponents;