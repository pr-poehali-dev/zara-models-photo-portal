
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full py-4 px-6 md:px-10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-playfair font-semibold tracking-tight">
            ELITE <span className="text-model-primary">MODELS</span>
          </h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-model-primary transition-colors">
            Главная
          </Link>
          <Link to="/contest" className="text-sm font-medium hover:text-model-primary transition-colors">
            Конкурс
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-model-primary transition-colors">
            О школе
          </Link>
          <Link to="/courses" className="text-sm font-medium hover:text-model-primary transition-colors">
            Курсы
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-model-primary transition-colors">
            Контакты
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Мобильное меню */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" className="h-6 w-6" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <div className="flex flex-col gap-6 mt-6">
                  <Link to="/" className="text-lg font-medium hover:text-model-primary">
                    Главная
                  </Link>
                  <Link to="/contest" className="text-lg font-medium hover:text-model-primary">
                    Конкурс
                  </Link>
                  <Link to="/about" className="text-lg font-medium hover:text-model-primary">
                    О школе
                  </Link>
                  <Link to="/courses" className="text-lg font-medium hover:text-model-primary">
                    Курсы
                  </Link>
                  <Link to="/contacts" className="text-lg font-medium hover:text-model-primary">
                    Контакты
                  </Link>
                  
                  <div className="pt-4 border-t mt-4">
                    <Button className="w-full">
                      <Icon name="Phone" className="mr-2 h-4 w-4" />
                      Связаться
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Десктопные кнопки */}
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Icon name="Mail" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
          <Button className="hidden md:flex">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Позвонить
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
