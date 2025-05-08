
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80')"
        }}
      />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold text-white leading-tight mb-6">
            Ваш шанс стать <span className="text-model-primary">моделью</span> под руководством Маккайды Аллы
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
            Объявляем результаты конкурса на бесплатное обучение в модельной школе ZARA MODELS
            с профессиональным преподавателем.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-model-primary hover:bg-model-accent text-white">
              Результаты конкурса
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать о курсах
            </Button>
          </div>
          
          <div className="mt-16 flex items-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white">
              <p className="font-medium mb-1">Следующее объявление результатов:</p>
              <p className="text-xl font-semibold">23 августа 2025, 15:00 (МСК)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
