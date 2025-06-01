import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="font-montserrat font-bold text-4xl text-center mb-16 text-black">
          Отзывы клиентов
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">👨‍💼</span>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-black">
                  Алексей Петров
                </h4>
                <p className="font-inter text-gray-600 text-sm">
                  Генеральный директор, ТехноРитейл
                </p>
              </div>
            </div>
            <p className="font-inter text-gray-700 leading-relaxed mb-4">
              "DevStars создали для нас CRM-систему, которая увеличила
              эффективность отдела продаж на 40%. Профессиональная команда,
              соблюдение сроков, отличная поддержка."
            </p>
            <div className="flex text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">👩‍💼</span>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-black">
                  Мария Козлова
                </h4>
                <p className="font-inter text-gray-600 text-sm">
                  IT-директор, МегаПром
                </p>
              </div>
            </div>
            <p className="font-inter text-gray-700 leading-relaxed mb-4">
              "Внедрение ERP-системы от DevStars полностью автоматизировало наши
              производственные процессы. Рекомендуем как надежного партнера в
              области B2B разработки."
            </p>
            <div className="flex text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
