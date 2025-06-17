import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = "Hello, I have a question about Sarvatra Industries' products/services.";
    const whatsappUrl = `https://wa.me/919711172076?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-20 right-8 flex items-center gap-4 z-50">
      <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
        <p className="text-gray-700 font-medium">Have a Question? Connect with Us!</p>
      </div>
      <button
        onClick={handleClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton;