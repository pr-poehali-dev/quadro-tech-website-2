import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-quadro-darkTeal to-quadro-teal text-white py-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Профессиональное оборудование для автосервисов
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-xl">
              Поставляем и обслуживаем оборудование для СТО от ведущих производителей уже более 10 лет
            </p>
            <div className="space-x-4">
              <Button className="bg-white text-quadro-teal hover:bg-gray-100">
                Получить консультацию
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Каталог оборудования <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Автосервисное оборудование" 
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 bg-quadro-dark/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;