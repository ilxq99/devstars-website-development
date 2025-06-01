import React from "react";
import Icon from "@/components/ui/icon";

const HeroVisual = () => {
  return (
    <div className="relative flex items-center justify-center mt-12">
      {/* Central dashboard mockup */}
      <div className="relative bg-gray-800 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
        <div className="w-80 h-48 bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            </div>
            <span className="text-white text-sm font-inter">DevStars CRM</span>
          </div>

          {/* Dashboard content */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} className="text-white" />
                <span className="text-white text-xs">Продажи</span>
              </div>
              <span className="text-green-300 text-xs font-semibold">+24%</span>
            </div>

            <div className="bg-white bg-opacity-20 rounded p-2">
              <div className="flex justify-between items-end space-x-1">
                <div className="bg-white bg-opacity-60 w-4 h-8 rounded-sm"></div>
                <div className="bg-white bg-opacity-80 w-4 h-12 rounded-sm"></div>
                <div className="bg-white w-4 h-16 rounded-sm"></div>
                <div className="bg-white bg-opacity-70 w-4 h-10 rounded-sm"></div>
                <div className="bg-white bg-opacity-90 w-4 h-14 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -left-8 bg-white rounded-full p-3 shadow-lg animate-pulse">
        <Icon name="Zap" size={20} className="text-red-600" />
      </div>

      <div className="absolute top-8 -right-6 bg-white rounded-full p-3 shadow-lg animate-bounce">
        <Icon name="Target" size={20} className="text-red-600" />
      </div>

      <div className="absolute -bottom-6 left-4 bg-white rounded-full p-3 shadow-lg animate-pulse">
        <Icon name="Shield" size={20} className="text-red-600" />
      </div>
    </div>
  );
};

export default HeroVisual;
