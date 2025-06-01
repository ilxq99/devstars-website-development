import React from "react";
import Icon from "@/components/ui/icon";

const TechStackSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl text-center mb-4 text-black">
            Технологический стек
          </h2>
          <p className="font-inter text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Используем проверенные технологии для создания надежных и
            масштабируемых решений
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                React JS
              </h3>
              <p className="font-inter text-gray-600 text-sm">
                Современные пользовательские интерфейсы
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors">
                <Icon name="Server" size={32} className="text-green-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                Node JS
              </h3>
              <p className="font-inter text-gray-600 text-sm">
                Серверная разработка
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-200 transition-colors">
                <Icon name="Database" size={32} className="text-indigo-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                PostgreSQL
              </h3>
              <p className="font-inter text-gray-600 text-sm">
                Надежная база данных
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors">
                <Icon name="Code2" size={32} className="text-purple-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                PHP
              </h3>
              <p className="font-inter text-gray-600 text-sm">
                Веб-разработка и CMS
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-emerald-200 transition-colors">
                <Icon name="Zap" size={32} className="text-emerald-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                Django
              </h3>
              <p className="font-inter text-gray-600 text-sm">
                Мощный Python фреймворк
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
