import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search, CheckCircle, Scale, FileCheck } from 'lucide-react';

const Inspection = () => {
  return (
    <>
      <Helmet>
        <title>Quality Inspection Facility - SARVATRA INDUSTRIES</title>
        <meta name="description" content="Rigorous quality control and inspection processes at SARVATRA INDUSTRIES. Advanced measurement and testing equipment for precise quality assurance." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=2000&q=80"
              alt="Inspection Facility"
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
                Quality Inspection Facility
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-12">
                Advanced measurement and testing for superior quality assurance
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Search className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Precision</h3>
                  <p className="text-blue-100 text-sm text-center">Advanced testing</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <CheckCircle className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Quality</h3>
                  <p className="text-blue-100 text-sm text-center">Strict standards</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Scale className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Accuracy</h3>
                  <p className="text-blue-100 text-sm text-center">Precise measurements</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <FileCheck className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                  <p className="text-blue-100 text-sm text-center">Complete records</p>
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
                At SARVATRA INDUSTRIES, our quality inspection facility ensures that every product meets the highest standards of precision and reliability through comprehensive testing and verification processes.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Inspection Equipment</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Coordinate Measuring Machines (CMM)</li>
                    <li>• Digital Micrometers</li>
                    <li>• Surface Roughness Testers</li>
                    <li>• Vision Inspection Systems</li>
                    <li>• Material Testing Equipment</li>
                    <li>• And more</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quality Processes</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li>• First Article Inspection</li>
                    <li>• In-process Quality Checks</li>
                    <li>• Final Product Verification</li>
                    <li>• Documentation and Reporting</li>
                    <li>• Non-conformance Management</li>
                    <li>• And more</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Quality Management System</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive quality management system includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>ISO 9001:2015 certified processes</li>
                <li>Statistical Process Control (SPC)</li>
                <li>Advanced measurement techniques</li>
                <li>Calibration management</li>
                <li>Quality documentation system</li>
              </ul>

              <div className="bg-blue-50 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inspection Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dimensional Inspection</h4>
                    <p className="text-gray-600">High-precision measurement of critical dimensions and tolerances.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Surface Quality</h4>
                    <p className="text-gray-600">Advanced surface finish and texture analysis.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Material Testing</h4>
                    <p className="text-gray-600">Comprehensive material property verification and testing.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                    <p className="text-gray-600">Detailed inspection reports and certificates.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Quality Assurance Benefits</h2>
              <p className="text-gray-600 mb-6">
                Our rigorous inspection processes ensure:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Consistent product quality</li>
                <li>Reduced defect rates</li>
                <li>Improved customer satisfaction</li>
                <li>Compliance with industry standards</li>
                <li>Traceability of quality data</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Inspection;