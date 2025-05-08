
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-10 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-playfair font-semibold tracking-tight">
            ZARA <span className="text-zara-lavender">MODELS</span>
          </h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-accent-foreground transition-colors">
            Главная
          </Link>
          <Link to="/requirements" className="text-sm font-medium hover:text-accent-foreground transition-colors">
            Требования
          </Link>
          <Link to="/portfolio" className="text-sm font-medium hover:text-accent-foreground transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-accent-foreground transition-colors">
            О нас
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Icon name="Mail" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
          <Button>Отправить фото</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
