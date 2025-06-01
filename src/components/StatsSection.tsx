import React from "react";

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-white">
            DevStars в цифрах
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-montserrat">
                150+
              </div>
              <p className="text-red-100 font-inter">Проектов завершено</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-montserrat">
                7
              </div>
              <p className="text-red-100 font-inter">Лет опыта</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-montserrat">
                50+
              </div>
              <p className="text-red-100 font-inter">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-montserrat">
                24/7
              </div>
              <p className="text-red-100 font-inter">Техническая поддержка</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
