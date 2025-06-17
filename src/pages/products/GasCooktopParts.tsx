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

const GasCooktopParts = () => {
  const products = [
    {
      title: "MS Frame for Glass Top",
      image: "/assets/MS-Frame-for-Glass-Top.jpg",
      description: "Crafted from high-grade mild steel, this frame is designed to provide robust support and a sleek finish for glass top gas stoves. Its sturdy construction ensures long-term durability and alignment for precise burner fitting."
    },
   /* {
      title: "PS Ring",
      image: "/assets/PS-Ring.jpg",
      description: "This Pressed Steel (PS) Ring is precision-engineered to support cookware on gas stoves, ensuring stability and heat distribution. Made for durability and high-heat resistance in domestic and commercial kitchens."
    },*/
    {
      title: "SS Drip Tray",
      image: "/assets/SS-Drip-Tray.jpg",
      description: "The Stainless Steel Drip Tray is designed to collect spills and drips from cooking, helping maintain cleanliness and hygiene in kitchen environments. Rust-resistant and easy to clean, it's both functional and stylish."
    },
    {
      title: "Pan Support Ring",
      image: "/assets/Pan.jpg",
      description: "Constructed from heavy-duty stainless steel, the Pan Support Ring provides a stable platform for pots and pans during cooking. It ensures uniform support, heat safety, and is compatible with various gas stove models."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gas & Cooktop Parts - SARVATRA INDUSTRIES</title>
        <meta name="description" content="High-quality gas stove and cooktop parts manufactured at SARVATRA INDUSTRIES. Premium components including MS frames, PS rings, drip trays, and pan supports." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 mb-12">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=2000&q=80"
              alt="Gas stove manufacturing"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Gas & Cooktop Parts</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                Premium quality components for modern cooking appliances
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

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Materials</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium grade stainless steel</li>
                  <li>• Durable MS construction</li>
                  <li>• Heat-resistant components</li>
                  <li>• Corrosion-resistant finish</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Excellence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Precision engineering</li>
                  <li>• Ergonomic design</li>
                  <li>• Perfect fitment</li>
                  <li>• Easy maintenance</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Standards</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• BIS certified</li>
                  <li>• Heat safety tested</li>
                  <li>• Quality inspected</li>
                  <li>• Durability tested</li>
                  <li>• And more</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Manufacturing Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Production Capabilities</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Advanced stamping technology</li>
                  <li>• Precision welding processes</li>
                  <li>• Automated assembly lines</li>
                  <li>• Quality control at every stage</li>
                  <li>• Surface treatment facilities</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 100% quality inspection</li>
                  <li>• Dimensional accuracy checks</li>
                  <li>• Material testing</li>
                  <li>• Performance validation</li>
                  <li>• Durability testing</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default GasCooktopParts;