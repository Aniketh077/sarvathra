import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32"> {/* Increased height from h-24 to h-32 */}
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="block">
              <img src="./assets/logo.png" alt="SARVATRA INDUSTRIES (INDIA) PRIVATE LIMITED" className="h-24 w-auto" /> {/* Increased logo height from h-16 to h-24 */}
            </Link>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium">
                Facilities
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/facilities/press-shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Press Shop
                </Link>
                <Link to="/facilities/weld-shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Weld Shop
                </Link>
                <Link to="/facilities/tool-room" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Tool Room
                </Link>
                <Link to="/facilities/inspection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Inspection
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium">
                Products
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/products/sheet-metal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Sheet Metal Components
                </Link>
                <Link to="/products/gas-and-cooktop-parts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Gas & Cooktop Parts
                </Link>
                <Link to="/products/tools-and-fixtures" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Tools & Fixtures
                </Link>
                <Link to="/products/fabrication-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Fabrication Services
                </Link>
              </div>
            </div>
            <Link to="/machineries" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium">
              Machineries
            </Link>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
              About
            </Link>
            
            {/* Facilities Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleSection('facilities')}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium"
              >
                <span>Facilities</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${expandedSection === 'facilities' ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedSection === 'facilities' && (
                <div className="pl-6 space-y-1">
                  <Link to="/facilities/press-shop" className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm">
                    Press Shop
                  </Link>
                  <Link to="/facilities/weld-shop" className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm">
                    Weld Shop
                  </Link>
                  <Link to="/facilities/tool-room" className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm">
                    Tool Room
                  </Link>
                  <Link to="/facilities/inspection" className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm">
                    Inspection
                  </Link>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleSection('products')}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium"
              >
                <span>Products</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${expandedSection === 'products' ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedSection === 'products' && (
                <div className="pl-6 space-y-1">
                  <Link to="/products/sheet-metal" className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm">
                    Sheet Metal Components
                  </Link>
                  <Link to="/products/gas-and-cooktop-parts" className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm">
                    Gas & Cooktop Parts
                  </Link>
                  <Link to="/products/tools-and-fixtures" className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm">
                    Tools & Fixtures
                  </Link>
                  <Link to="/products/fabrication-services" className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm">
                    Fabrication Services
                  </Link>
                </div>
              )}
            </div>

            <Link to="/machineries" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base font-medium">
              Machineries
            </Link>
            <Link to="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;