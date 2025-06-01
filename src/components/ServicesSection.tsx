import React from "react";
import Icon from "@/components/ui/icon";
import HeroVisual from "@/components/HeroVisual";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl text-center mb-4 text-black">
            Наши услуги
          </h2>
          <p className="font-inter text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Полный цикл разработки от анализа требований до внедрения и
            поддержки
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                <Icon name="Building2" size={32} className="text-red-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4 text-black">
                CRM системы
              </h3>
              <p className="font-inter text-gray-600 mb-6">
                Разработка систем управления взаимоотношениями с клиентами для
                автоматизации продаж и маркетинга
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm font-inter text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                  Управление лидами
                </li>
                <li className="flex items-center text-sm font-inter text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                  Аналитика продаж
                </li>
                <li className="flex items-center text-sm font-inter text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                  Интеграции с сервисами
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                <Icon name="Settings" size={32} className="text-red-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4 text-black">
                ERP решения
              </h3>
              <p className="font-inter text-gray-600 mb-6">
                Комплексная автоматизация бизнес-процессов предприятия для
                повышения эффективности
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm font-inter text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                  Управление ресурсами
                </li>
                <li className="flex items-center text-sm font-inter text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                  Складской учет
                </li>
                <li className="flex items-center text-sm font-inter text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                  Финансовая отчетность
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4 text-black">
                Веб-платформы
              </h3>
              <p className="font-inter text-gray-600 mb-6">
                Создание корпоративных порталов и веб-приложений для внутреннего
                использования
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm font-inter text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                  Корпоративные порталы
                </li>
                <li className="flex items-center text-sm font-inter text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                  Документооборот
                </li>
                <li className="flex items-center text-sm font-inter text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                  Системы отчетности
                </li>
              </ul>
            </div>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
};

export default ServicesSection;
