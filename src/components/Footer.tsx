
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-model-dark text-white pt-16 pb-6 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-playfair font-semibold mb-4">ELITE MODELS</h3>
            <p className="text-sm text-white/70 mb-6 max-w-xs">
              Ведущая модельная школа, открывающая новые имена в мире моды и помогающая талантливым людям
              реализовать свой потенциал в модельной индустрии.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-model-primary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-model-primary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-model-primary transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-model-primary transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-model-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/contest" className="text-sm text-white/70 hover:text-model-primary transition-colors">
                  Конкурс
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-model-primary transition-colors">
                  О школе
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-white/70 hover:text-model-primary transition-colors">
                  Курсы
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-sm text-white/70 hover:text-model-primary transition-colors">
                  Результаты
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-white/70">
                <Icon name="MapPin" className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Москва, ул. Модельная, 15, офис 307</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white/70">
                <Icon name="Phone" className="h-5 w-5 shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white/70">
                <Icon name="Mail" className="h-5 w-5 shrink-0" />
                <span>info@elite-models.ru</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-white/70">
                <Icon name="Clock" className="h-5 w-5 shrink-0" />
                <span>Пн-Пт: 10:00 - 19:00</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-4">Подписаться на новости</h3>
            <p className="text-sm text-white/70 mb-4">
              Получайте информацию о новых конкурсах, мастер-классах и событиях модельной школы.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button>
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-white/50 mb-4 md:mb-0">
            © 2025 ELITE MODELS. Все права защищены.
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
