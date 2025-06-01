import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="font-montserrat font-bold text-xl">DevStars</span>
          </div>
          <p className="font-inter text-gray-400">
            © 2024 DevStars. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
