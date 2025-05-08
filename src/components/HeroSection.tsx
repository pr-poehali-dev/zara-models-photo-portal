
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Заглушка для motion пока не установим framer-motion
  const MotionDiv: any = ({ children, ...props }: any) => (
    <div className="animate-fade-in" {...props}>{children}</div>
  );

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1512985692252-708aee97a599?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')",
          filter: "brightness(0.6)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold text-white leading-tight mb-4">
            Откройте свой путь в мир моды и стиля
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
            Модельное агентство ZARA MODELS ищет новые таланты. Отправьте свои фотографии и станьте частью нашей команды профессионалов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Отправить фотографии
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать требования
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;
