import React, { useEffect, useState } from 'react';
import { ArrowRight, Award, Users, Factory, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: '/assets/tube-bender-2819137_1920.jpg',
      alt: 'Tube Bender Machine'
    },
    {
      src: '/assets/worker-5736096_1920.jpg',
      alt: 'Industrial Worker'
    },
    {
      src: '/assets/Laser.jpg',
      alt: 'Laser Cutting Machine'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="pt-20">
      {/* Hero Section - Improved Typography */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full backdrop-blur-sm" />
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/10 rounded-lg backdrop-blur-sm" />
          <div className="absolute top-1/3 right-10 w-12 h-12 bg-blue-400/30 rounded-full backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Refined Typography */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Award className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-white text-sm font-medium">ISO 9001:2015 Certified</span>
              </div>

              {/* Main Heading - Smaller and More Elegant */}
              <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
                  SARVATRA INDUSTRIES
                </h1>
                <p className="text-lg md:text-xl text-blue-200 font-medium">
                  (INDIA) PRIVATE LIMITED
                </p>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Engineering Excellence
                  </span>
                </h2>
              </div>

              {/* Description - Refined Size */}
              <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-2xl">
                Leading manufacturer of precision sheet metal components, gas stove parts, tools & dies, and motor stampings with over 30+ years of engineering excellence.
              </p>

              {/* CTA Buttons - Smaller and More Refined */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/machineries"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <Factory className="mr-2 w-4 h-4" />
                  Explore Our Machineries
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Content - Stats Cards with Smaller Text */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-blue-300" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">100+</div>
                  <div className="text-blue-200 text-xs">Products</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-300" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">30+</div>
                  <div className="text-blue-200 text-xs">Years Experience</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Factory className="w-5 h-5 text-purple-300" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">10000+</div>
                  <div className="text-blue-200 text-xs">Projects Completed</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-yellow-300" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">ISO</div>
                  <div className="text-blue-200 text-xs">Certified</div>
                </div>
              </div>

              {/* Feature Highlights - Smaller Text */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                <h3 className="text-white font-semibold mb-3 text-base">Why Choose Us?</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-blue-100">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-xs">Advanced Manufacturing Technology</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-xs">ISO 9001:2015 Quality Standards</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-xs">On-Time Delivery Guarantee</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                    <span className="text-xs">Custom Engineering Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - Improved Typography */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <img
                src="./assets/company image.jpg"
                alt="Sarvatra Industries Facility"
                className="rounded-lg shadow-xl w-full"
                loading="lazy"
              />
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                WELCOME TO SARVATRA INDUSTRIES (INDIA) PRIVATE LIMITED
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                M/s Sarvatra Industries is a professionally managed company mentored by Mr. Ompal Sharma and Mr. Dharmender Sharma
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We have a team of qualified and skilled manpower. We believe in quality & maintain a perfect balance between quality and quantity.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Established Sarvatra Industries in Dec. 2009 as partnership firm with Two Power Press, One Surface Grinder & Two ARC Welding Machine.</li>
                <li>• Engage in the business of Auto Parts, Fabrication Parts, Cook top Parts and various types of Sheet Metal components.</li>
                <li>• We have in house Tool Room with all the Latest Machines & manufacture Tools & fixtures for Sheet Metal components.</li>
                <li>• Constitution was changed from Partnership to Private limited Company in October 2021</li>
                <li>• Sarvatra Industries India Pvt. Ltd. is certified ISO 9001 : 2015 and Preparing for IATF certification.</li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Read More
                <ArrowRight className="ml-2" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Facilities Section - Refined Typography */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Quality Facilities & Instruments</h2>
            <p className="text-base text-gray-600">
              Our state-of-the-art quality control equipment ensures precision and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">Measurement Instruments</h3>
              <div className="grid grid-cols-2 gap-5">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Digital Height Gauge
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Digital Varnier Caliper
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Digital Micro Meter
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Bevel Protecter
                  </li>
                </ul>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Filler Gauge
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Surface Plate
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Dft Meter
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Bore Gauze
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">Certifications</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Certification ISO</h4>
                  <img
                    src="/assets/iso.webp"
                    alt="ISO 9001:2015 Certification"
                    className="mx-auto h-24 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Certification BIS</h4>
                  <img
                    src="/assets/bis.png"
                    alt="Bureau of Indian Standards Certification"
                    className="mx-auto h-24 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section - Removed Extra Padding */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Facilities</h2>
            <p className="text-base text-gray-600">
              State-of-the-art manufacturing facilities equipped with advanced machinery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Press Shop",
                image: "/assets/press-shop.jpg",
                description: "Advanced pressing and forming capabilities for precision components",
                link: "/facilities/press-shop"
              },
              {
                title: "Weld Shop",
                image: "/assets/weldshop.jpg",
                description: "State-of-the-art welding facilities for superior joint quality",
                link: "/facilities/weld-shop"
              },
              {
                title: "Inspection",
                image: "/assets/inspection.jpg",
                description: "Rigorous quality control and inspection processes",
                link: "/facilities/inspection"
              },
              {
                title: "Tool Room",
                image: "/assets/toolroom.jpeg",
                description: "In-house tooling solutions and maintenance capabilities",
                link: "/facilities/tool-room"
              }
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-40">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{facility.description}</p>
                  <Link
                    to={facility.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Learn More
                    <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Refined Typography */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">We Provide</h2>
            <p className="text-base text-gray-600">
              Delivering excellence through precision engineering and quality manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Fabrication Services",
                description: "We are offering world-class fabrication services for various types of industrial components. These services are backed by qualified engineers and technical staff who are well-versed with the latest computer modeling.",
                bgColor: "bg-emerald-600",
                image: "/assets/fabrication.jpg",
                link: "/products/fabrication-services"
              },
              {
                title: "Sheet Metal Components",
                description: "We are a reputed name in the industry engaged in providing sheet metal components to a large number of clients in the market. These sheet metal components are made of high grade raw material that is procured from reliable.",
                bgColor: "bg-blue-600",
                image: "/assets/sheet-metal.jpg",
                link: "/products/sheet-metal"
              },
              {
                title: "Tools and Fixtures",
                description: "We offer a wide variety of tools and fixtures that are suitable to be used in mass production. These fixtures are capable in effectively holding the objects in place and clamping them to the host machine.",
                bgColor: "bg-gray-900",
                image: "/assets/tools.jpg",
                link: "/products/tools-and-fixtures"
              },
              {
                title: "Gas and Cooktop Parts",
                description: "We offer Gas and Cooktop Parts that is well known for quality, durability and allied attributes. These are provided as enameling coated and powder coated for the convenience.",
                bgColor: "bg-rose-600",
                image: "/assets/gas-parts.jpg",
                link: "/products/gas-and-cooktop-parts"
              }
            ].map((product, index) => (
              <div
                key={index}
                className={`${product.bgColor} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <p className="text-white/90 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  <Link
                    to={product.link}
                    className="inline-flex items-center text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section - Refined Typography */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Machineries",
                description: "Advanced machinery and equipment for precision manufacturing.",
                link: "/machineries"
              },
              {
                title: "Contact Us",
                description: "Get in touch with our team for inquiries and support.",
                link: "/contact"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;