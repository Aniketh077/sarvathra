import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Eye, CheckCircle, Award, Clock, FolderCheck } from 'lucide-react';

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - SARVATRA INDUSTRIES</title>
        <meta name="description" content="Learn about SARVATRA INDUSTRIES, our history, mission, vision, and commitment to quality manufacturing since 2009." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24">
          <div className="absolute inset-0">
            <img
              src="/assets/press-4.jpg"
              alt="Manufacturing facility"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                Excellence in manufacturing since 2009
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    M/s Sarvatra Industries is a professionally managed company mentored by Mr. Ompal Sharma and Mr. Dharmender Sharma. We have established ourselves as a leading manufacturer with a team of qualified and skilled manpower.
                  </p>
                  <p>
                    We believe in quality & maintain a perfect balance between quality and quantity. Our journey began in December 2009 as a partnership firm with modest beginnings - Two Power Press, One Surface Grinder & Two ARC Welding Machine.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
              src="/assets/about_2.jpg"
              alt="Modern factory interior"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "100+", label: "Products", icon: Award },
                { number: "30+", label: "Years of Experience", icon: Clock },
                { number: "10000+", label: "Completed Projects", icon: FolderCheck }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 text-center shadow-lg"
                >
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-8"
              >
                <Target className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be industry leaders in offering clients fully-customized sheet metal production and manufactured components. We produce high-quality parts, deliver them on time, and only make promises that we can keep. Our commitment is to fulfill every promise we make to our clients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-8"
              >
                <Eye className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Allowing our customers to discover new opportunities and broaden their perspectives to offer high-quality products at the best price.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>To enhance our standing for excellence, dependability, flexibility, and innovation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>To go above and beyond the expectations of our clients, partners, and personnel.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>To establish strategic alliances with clients and suppliers to gain a competitive edge.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are assisted by a team of dedicated professionals who have with them in-depth-process knowledge. Regular trainings are conducted to enhance their skills and knowledge.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
              src="/assets/about_1.jpg"
              alt="Team collaboration"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Professional Excellence</h3>
                <p className="text-gray-600">
                  Our team has the ability to work in the most challenging environment very efficiently, thereby increasing the company's performance. Their expertise helps us deliver quality assured and flawless range of Auto Parts, Sheet Metal, Fabrication and Precision Tubular Components to our customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-xl text-gray-600">
                What sets us apart from our competitors
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Well connected distribution system",
                "Ability to undertake bulk orders",
                "On-schedule delivery of consignment",
                "Reasonable market prices",
                "Customization as per requirements",
                "Superior quality products"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-800 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;