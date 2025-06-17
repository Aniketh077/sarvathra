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

const FabricationServices = () => {
  const products = [
    {
      title: "Cooler Motor Stamping",
      image: "/assets/1.jpg",
      description: "Precision-crafted stampings used in cooler motors to ensure efficient airflow and reliable cooling performance."
    },
    {
      title: "Mixi Motor Stamping",
      image: "/assets/2.jpg",
      description: "High-precision stampings designed specifically for mixer grinder motors, offering enhanced torque and operational durability."
    },
    {
      title: "RO Motor Armature",
      image: "/assets/3.jpg",
      description: "Engineered armatures for RO system motors, built for smooth operation, corrosion resistance, and extended lifespan."
    },
    {
      title: "Alternator Stamping",
      image: "/assets/4.jpg",
      description: "Laminated electrical stampings optimized for alternators, ensuring low core loss and improved energy conversion."
    },
    {
      title: "Motor Lamination",
      image: "/assets/5.jpg",
      description: "Premium motor laminations made from high-grade electrical steel to reduce eddy current losses and boost efficiency."
    },
    /*{
      title: "Mixi Motor Stamping",
      image: "/assets/6.jpg",
      description: "Durable stamped components tailored for high-speed mixer motors, ensuring strength, balance, and vibration resistance."
    }*/
    
  ];

  return (
    <>
      <Helmet>
        <title>Fabrication Services - SARVATRA INDUSTRIES</title>
        <meta name="description" content="Expert fabrication services including motor stampings, laminations, and custom components at SARVATRA INDUSTRIES. Precision engineering for various applications." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 mb-12">
          <div className="absolute inset-0">
            <img
              src="/assets/3.jpg"
              alt="Industrial fabrication"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Fabrication Services & Motor Stamping</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                Precision engineering for motor components and industrial applications
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
            className="bg-gray-50 rounded-xl p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Stamping Process</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-speed stamping</li>
                  <li>• Progressive die stamping</li>
                  <li>• Precision blanking</li>
                  <li>• Multi-stage forming</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Materials</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Electrical steel</li>
                  <li>• Silicon steel</li>
                  <li>• Cold rolled steel</li>
                  <li>• Special alloys</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Control</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dimensional inspection</li>
                  <li>• Material testing</li>
                  <li>• Performance validation</li>
                  <li>• Documentation</li>
                  <li>• And more</li>
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
                  <li>• Electric Motor Manufacturing</li>
                  <li>• Home Appliance Industry</li>
                  <li>• Automotive Sector</li>
                  <li>• Industrial Equipment</li>
                  <li>• Power Generation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Applications</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Electric Motors</li>
                  <li>• Alternators</li>
                  <li>• Cooling Systems</li>
                  <li>• Water Treatment Systems</li>
                  <li>• Home Appliances</li>
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

export default FabricationServices;