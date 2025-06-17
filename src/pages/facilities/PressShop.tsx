import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Factory, Settings, Shield, Clock } from 'lucide-react';

const PressShop = () => {
  return (
    <>
      <Helmet>
        <title>Press Shop Facility - SARVATRA INDUSTRIES</title>
        <meta name="description" content="Advanced pressing and forming capabilities at SARVATRA INDUSTRIES. State-of-the-art press shop equipped with modern machinery." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1565514020179-026b92b2d0b5?auto=format&fit=crop&w=2000&q=80"
              alt="Press Shop Facility"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Press Shop Facility
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-12">
                State-of-the-art pressing and forming capabilities for precision-engineered components
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Factory className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Modern Facility</h3>
                  <p className="text-blue-100 text-sm text-center">Advanced manufacturing equipment</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Settings className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Precision</h3>
                  <p className="text-blue-100 text-sm text-center">High accuracy production</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Shield className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Quality</h3>
                  <p className="text-blue-100 text-sm text-center">ISO 9001:2015 certified</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Clock className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
                  <p className="text-blue-100 text-sm text-center">Quick turnaround time</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                At SARVATRA INDUSTRIES, our press shop is equipped with state-of-the-art machinery and operated by skilled technicians to deliver precision-engineered components.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Capabilities</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li>• High-precision metal stamping</li>
                    <li>• Progressive die stamping</li>
                    <li>• Deep drawing operations</li>
                    <li>• Metal forming and bending</li>
                    <li>• High-volume production capacity</li>
                    <li>• And more</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Machineries</h2>
                  <ul className="space-y-3 text-gray-600">
                        <li>• High Speed Stamping Press 220 Ton One (Up to 350SPM), Imported</li>
    <li>• High Speed Stamping Press 125 Ton One (Up to 450SPM), Taiwan</li>
    <li>• Power Press H-Type 120 Ton One</li>
    <li>• Power Press H-Type 100 Ton One</li>
    <li>• Power Press C-Type 75 Ton Two (Pneumatic)</li>
    <li>• Power Press C-Type 80 Ton One (Pneumatic)</li>
    <li>• Power Press C-Type 40 Ton One (Pneumatic)</li>
    <li>• Power Press C-Type 50 Ton Two</li>
    <li>• Power Press C-Type 30 Ton Seven</li>
    <li>• Power Press C-Type 20 Ton Five</li>
    <li>• Power Press C-Type 10 Ton Four</li>
    <li>• Power Press C-Type 05 Ton Three</li>
    <li>• Laser Cutting Machine (One 3KW)</li>
    <li>• Press Brake (One - 110Ton)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Quality Assurance</h2>
              <p className="text-gray-600 mb-6">
                Our press shop maintains stringent quality control measures throughout the production process. Each component undergoes thorough inspection to ensure it meets our high standards and customer specifications.
              </p>

              <div className="bg-blue-50 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Process Control</h4>
                    <p className="text-gray-600">Advanced process monitoring and control systems ensure consistent quality across production runs.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tooling Excellence</h4>
                    <p className="text-gray-600">In-house tool room support for quick maintenance and modifications.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Material Expertise</h4>
                    <p className="text-gray-600">Capability to work with various materials including mild steel, stainless steel, and special alloys.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Production Efficiency</h4>
                    <p className="text-gray-600">Optimized workflow and automated processes for high-volume production.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Applications</h2>
              <p className="text-gray-600 mb-6">
                Our press shop serves various industries including automotive, appliance manufacturing, and industrial equipment sectors. We specialize in producing:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Automotive components and brackets</li>
                <li>Home appliance parts</li>
                <li>Industrial machinery components</li>
                <li>Custom metal stampings</li>
                <li>Sheet metal assemblies</li>
                <li>And more</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PressShop;