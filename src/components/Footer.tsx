import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Footer = () => {
  const position: [number, number] = [28.4089, 77.3178];

  const handleOpenMaps = () => {
    window.open(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.98981129468!2d77.2514669!3d28.389375700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbb65aaaaa91%3A0x483a7e0ac5ff8dda!2sSARVATRA%20INDUSTRIES%20(INDIA)%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1745503268581!5m2!1sen!2sin=${position[0]},${position[1]}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white p-4 rounded-lg inline-block mb-4">
              <img src="/assets/logo.png" alt="Sarvatra Industries" className="h-20 w-auto" />
            </div>
            <p className="text-gray-400">
              Leading manufacturer of precision engineering components and solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/facilities/press-shop" className="text-gray-400 hover:text-white">Facilities</Link>
              </li>
              <li>
                <Link to="/products/sheet-metal" className="text-gray-400 hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  Plot No. 45, Bhakri-pali Road, Near Jangra Generators Behind JAV Forging, Bhakripali Road, Faridabad-121001, Haryana, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={18} />
                <a href="tel:+919711172076" className="text-gray-400 hover:text-white">
                  +91 97111 72076
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a href="mailto:info@sarvatraindustries.com" className="text-gray-400 hover:text-white">
                sarvatraindustries@gmail.com
                </a>
              </li>
            </ul>
          </div>

{/* Map */}
<div>
  <h3 className="text-lg font-semibold mb-4">Location</h3>
  <div className="relative">
    <div className="w-full h-48 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.98981129468!2d77.2514669!3d28.389375700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbb65aaaaa91%3A0x483a7e0ac5ff8dda!2sSARVATRA%20INDUSTRIES%20(INDIA)%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1745503268581!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <button
      onClick={handleOpenMaps}
      className="absolute bottom-2 right-2 bg-white text-gray-800 px-3 py-1.5 rounded-md shadow-md flex items-center hover:bg-gray-100 transition-colors duration-200"
    >
      <ExternalLink size={16} className="mr-1" />
      Open in Maps
    </button>
  </div>
</div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/sarvatra-industries-india-private-limited/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Sarvatra Industries (India) Private Limited. All Rights Reserved. | Designed & Developed by <a href="https://www.linkedin.com/in/anikethvadthya/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Aniketh Vadthya</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;