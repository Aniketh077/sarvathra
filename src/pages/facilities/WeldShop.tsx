import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Flame, Shield, Users, Gauge } from 'lucide-react';

const WeldShop = () => {
  return (
    <>
      <Helmet>
        <title>Weld Shop Facility - SARVATRA INDUSTRIES</title>
        <meta name="description" content="State-of-the-art welding facilities for superior joint quality at SARVATRA INDUSTRIES. Advanced welding technologies and skilled technicians." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
              alt="Weld Shop Facility"
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
                Weld Shop Facility
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-12">
                Advanced welding technologies for superior quality and precision
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Flame className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Advanced Tech</h3>
                  <p className="text-blue-100 text-sm text-center">Multiple welding processes</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Shield className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Quality</h3>
                  <p className="text-blue-100 text-sm text-center">Certified processes</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Users className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                  <p className="text-blue-100 text-sm text-center">Skilled welders</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Gauge className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Precision</h3>
                  <p className="text-blue-100 text-sm text-center">Accurate results</p>
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
                SARVATRA INDUSTRIES combines advanced welding technologies with skilled craftsmanship to deliver superior quality welded components and assemblies.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welding Processes</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li>• MIG/MAG Welding</li>
                    <li>• TIG Welding</li>
                    <li>• Spot Welding</li>
                    <li>• Arc Welding</li>
                    <li>• Resistance Welding</li>
                    <li>• And more</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Capabilities</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Precision welding of various materials</li>
                    <li>• Complex assembly welding</li>
                    <li>• Custom fabrication</li>
                    <li>• Automated welding systems</li>
                    <li>• Prototype development</li>
                    <li>• And more</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Quality Standards</h2>
              <p className="text-gray-600 mb-6">
                Our welding facility maintains the highest quality standards through:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Certified welders with extensive experience</li>
                <li>Regular quality inspections and testing</li>
                <li>Advanced weld monitoring systems</li>
                <li>Strict adherence to international welding standards</li>
                <li>Comprehensive documentation and traceability</li>
              </ul>

              <div className="bg-blue-50 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specialized Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Custom Fabrication</h4>
                    <p className="text-gray-600">Tailored welding solutions for unique project requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Assembly Integration</h4>
                    <p className="text-gray-600">Seamless integration of welded components into larger assemblies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Material Expertise</h4>
                    <p className="text-gray-600">Experience with various metals and alloys including steel, aluminum, and stainless steel.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quality Testing</h4>
                    <p className="text-gray-600">Comprehensive weld testing and inspection capabilities.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Industries Served</h2>
              <p className="text-gray-600 mb-6">
                Our welding expertise serves various sectors including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Automotive manufacturing</li>
                <li>Industrial equipment</li>
                <li>Construction and infrastructure</li>
                <li>Agricultural machinery</li>
                <li>Custom fabrication projects</li>
                <li>And more</li>

              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WeldShop;