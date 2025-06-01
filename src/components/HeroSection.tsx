import React from "react";
import HeroVisual from "@/components/HeroVisual";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            Разработка ПО для
            <span className="text-gradient block">B2B бизнеса</span>
          </h1>
          <p className="font-inter text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Создаем масштабируемые решения для автоматизации бизнес-процессов,
            CRM-системы и корпоративные платформы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-inter font-semibold text-lg">
              Обсудить проект
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-inter font-semibold text-lg">
              Портфолио
            </button>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
};

export default HeroSection;
