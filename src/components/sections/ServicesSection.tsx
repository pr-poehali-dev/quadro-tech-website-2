import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Truck, BookOpen, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-quadro-dark mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Комплексные решения для автосервисов любого масштаба
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="p-3 bg-quadro-lightGray inline-block rounded-full text-quadro-teal mb-4">
              <Settings size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-quadro-dark">Оборудование для СТО</h3>
            <p className="text-gray-600 mb-4">
              Поставляем профессиональное оборудование для обслуживания легковых и грузовых автомобилей
            </p>
            <Button variant="ghost" className="text-quadro-teal hover:text-quadro-darkTeal hover:bg-quadro-lightGray p-0">
              Подробнее <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="p-3 bg-quadro-lightGray inline-block rounded-full text-quadro-teal mb-4">
              <Truck size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-quadro-dark">Комплексное оснащение</h3>
            <p className="text-gray-600 mb-4">
              Проектирование и полное оснащение автосервисов под ключ с учетом всех технических требований
            </p>
            <Button variant="ghost" className="text-quadro-teal hover:text-quadro-darkTeal hover:bg-quadro-lightGray p-0">
              Подробнее <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="p-3 bg-quadro-lightGray inline-block rounded-full text-quadro-teal mb-4">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-quadro-dark">Оснащение учебных центров</h3>
            <p className="text-gray-600 mb-4">
              Специализированное оборудование для программ "Профессионалитет" и "WorldSkills"
            </p>
            <Button variant="ghost" className="text-quadro-teal hover:text-quadro-darkTeal hover:bg-quadro-lightGray p-0">
              Подробнее <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;