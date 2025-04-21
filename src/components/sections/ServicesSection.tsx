import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Tool, Truck, LucideBuilding } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Наши услуги
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Предлагаем полный комплекс услуг от подбора до установки и сервисного обслуживания
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Tool size={28} />} 
            title="Подбор оборудования" 
            description="Помогаем подобрать оптимальное оборудование под ваши задачи и бюджет"
          />
          <ServiceCard 
            icon={<Truck size={28} />} 
            title="Поставка и монтаж" 
            description="Организуем доставку, установку и запуск оборудования в эксплуатацию"
          />
          <ServiceCard 
            icon={<LucideBuilding size={28} />} 
            title="Работа с госзаказчиками" 
            description="Полное сопровождение проектов по 44-ФЗ и 223-ФЗ, программам 'Профессионалитет'"
          />
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="mt-4">
            Все услуги <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-8 border rounded-lg text-center hover-scale">
      <div className="w-16 h-16 mx-auto mb-6 bg-quadro-teal/10 rounded-full flex items-center justify-center">
        <span className="text-quadro-teal">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServicesSection;
