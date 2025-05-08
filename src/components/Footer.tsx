
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-zara-dark text-white pt-12 pb-6 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">ZARA MODELS</h3>
            <p className="text-sm text-white/70 mb-4 max-w-xs">
              Модельное агентство, специализирующееся на поиске и развитии новых талантов для международной модной индустрии.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/requirements" className="text-sm text-white/70 hover:text-white transition-colors">
                  Требования
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-white/70 hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm text-white/70">
                <Icon name="MapPin" className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Москва, ул. Тверская, 1, офис 345</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white/70">
                <Icon name="Phone" className="h-5 w-5 shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white/70">
                <Icon name="Mail" className="h-5 w-5 shrink-0" />
                <span>info@zaramodels.ru</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white/70">
                <Icon name="Clock" className="h-5 w-5 shrink-0" />
                <span>Пн-Пт: 10:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-white/50 mb-4 md:mb-0">
            © 2025 ZARA MODELS. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-xs text-white/50 hover:text-white/70 transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-xs text-white/50 hover:text-white/70 transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
