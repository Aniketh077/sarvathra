import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Wrench, Ruler, Cog, Target } from 'lucide-react';

const ToolRoom = () => {
  return (
    <>
      <Helmet>
        <title>Tool Room Facility - SARVATRA INDUSTRIES</title>
        <meta name="description" content="In-house tooling solutions and maintenance capabilities at SARVATRA INDUSTRIES. Advanced tool room equipped with precision machinery and skilled technicians." />
      </Helmet>

      <div className="pt-24 pb-16">
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1581093450021-a7360e9a6b5?auto=format&fit=crop&w=2000&q=80"
              alt="Tool Room Facility"
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
                Tool Room Facility
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-12">
                State-of-the-art tooling solutions for manufacturing excellence
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Wrench className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Precision Tools</h3>
                  <p className="text-blue-100 text-sm text-center">Advanced machinery</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Ruler className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Accuracy</h3>
                  <p className="text-blue-100 text-sm text-center">Precise measurements</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Cog className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Maintenance</h3>
                  <p className="text-blue-100 text-sm text-center">Regular upkeep</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg"
                >
                  <Target className="w-12 h-12 text-blue-200 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-blue-100 text-sm text-center">Custom solutions</p>
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
                SARVATRA INDUSTRIES' tool room is equipped with advanced machinery and skilled technicians to provide comprehensive tooling solutions and maintenance services.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Capabilities</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Tool Design and Development</li>
                    <li>• Die Manufacturing</li>
                    <li>• Fixture Creation</li>
                    <li>• Tool Maintenance</li>
                    <li>• Precision Machining</li>
                    <li>• And more</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Machineries</h2>
                  <ul className="space-y-3 text-gray-600">
                       
    <li>• Wirecut (Electronica Sprintcut) 300*400 Working Area: One</li>
    <li>• SODICK - AQ750L - 750-X*500-Y*400-Z: One</li>
    <li>• VMC – BFW 1050*600 Working Area: One</li>
    <li>• Surface Grinder Hydraulic - KENT (1500*600), Taiwan: One</li>
    <li>• Surface Grinder - ELB (1500*370), US: One</li>
    <li>• M1TR Seiki (Table Size - 4No.): One</li>
    <li>• Lathe - 6': One</li>
    <li>• Surface Grinder 12"x24": One</li>
    <li>• Surface Grinder 10"x20": One</li>
    <li>• Drill Machine 1": Two</li>
    <li>• Tapping Arm M3-M16: One</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Services Offered</h2>
              <p className="text-gray-600 mb-6">
                Our tool room provides comprehensive services including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Custom tool design and manufacturing</li>
                <li>Progressive die development</li>
                <li>Jig and fixture creation</li>
                <li>Tool maintenance and repair</li>
                <li>Precision component manufacturing</li>
              </ul>

              <div className="bg-blue-50 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Expertise</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Design Capabilities</h4>
                    <p className="text-gray-600">Advanced CAD/CAM systems for tool design and optimization.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Manufacturing Excellence</h4>
                    <p className="text-gray-600">High-precision machining and assembly capabilities.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quality Control</h4>
                    <p className="text-gray-600">Rigorous testing and validation of all tooling solutions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Maintenance Support</h4>
                    <p className="text-gray-600">Regular tool maintenance and emergency repair services.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Applications</h2>
              <p className="text-gray-600 mb-6">
                Our tool room supports various manufacturing processes including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Sheet metal stamping</li>
                <li>Precision machining</li>
                <li>Assembly operations</li>
                <li>Quality inspection</li>
                <li>Product development</li>
                <li>And more</li>
                
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ToolRoom;