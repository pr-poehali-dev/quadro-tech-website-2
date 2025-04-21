import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 border-b bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://cdn.poehali.dev/files/36de80f3-ab10-4b1c-92f8-9dcaa83544d0.jpg" 
            alt="Quadro Tech Logo" 
            className="h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-quadro-teal transition-colors font-medium">
            Главная
          </Link>
          <Link to="/about" className="text-foreground hover:text-quadro-teal transition-colors font-medium">
            О компании
          </Link>
          <Link to="/services" className="text-foreground hover:text-quadro-teal transition-colors font-medium">
            Услуги
          </Link>
          <Link to="/projects" className="text-foreground hover:text-quadro-teal transition-colors font-medium">
            Проекты
          </Link>
          <Link to="/contacts" className="text-foreground hover:text-quadro-teal transition-colors font-medium">
            Контакты
          </Link>
          <Button variant="default">Связаться</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              О компании
            </Link>
            <Link 
              to="/services" 
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Услуги
            </Link>
            <Link 
              to="/projects" 
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Проекты
            </Link>
            <Link 
              to="/contacts" 
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
            <Button variant="default" className="w-full">Связаться</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
