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

const ToolsAndFixtures = () => {
  const products = [
    {
      title: "MS Frame for Glass Top",
      image: "/assets/Tools-1.jpg",
    },
    {
      title: "PS Ring",
      image: "/assets/Tooling-2.jpg",
    },
    {
      title: "SS Drip Tray",
      image: "/assets/S-M-Tooling.jpg",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tools & Die - SARVATRA INDUSTRIES</title>
        <meta name="description" content="Premium quality tools, dies, and fixtures manufactured at SARVATRA INDUSTRIES. Specialized solutions for various manufacturing applications." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 mb-12">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
              alt="Industrial tooling"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Tools & Die</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                Precision-engineered solutions for manufacturing excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>

          {/* Capabilities Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• CAD/CAM Design</li>
                  <li>• 3D Modeling</li>
                  <li>• Prototype Development</li>
                  <li>• Design Optimization</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Manufacturing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• CNC Machining</li>
                  <li>• Wire EDM</li>
                  <li>• Precision Grinding</li>
                  <li>• Heat Treatment</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Control</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• CMM Inspection</li>
                  <li>• Material Testing</li>
                  <li>• Performance Testing</li>
                  <li>• Documentation</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Applications Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industries Served</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Automotive Manufacturing</li>
                  <li>• Sheet Metal Processing</li>
                  <li>• Appliance Manufacturing</li>
                  <li>• Industrial Equipment</li>
                  <li>• Special Purpose Machinery</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tool Types</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Progressive Dies</li>
                  <li>• Checking Fixtures</li>
                  <li>• Assembly Fixtures</li>
                  <li>• Press Tools</li>
                  <li>• Special Purpose Tools</li>
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

export default ToolsAndFixtures;