import React from 'react';
import StatsCard from '@/components/StatsCard';
import { Award, CheckCircle, Users, Building } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-quadro-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-quadro-dark mb-4">Компания в цифрах</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            За 10+ лет работы мы зарекомендовали себя как надежный поставщик и партнер для бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            value="10+" 
            label="Лет опыта работы" 
            icon={<Award size={24} />} 
          />
          <StatsCard 
            value="500+" 
            label="Реализованных проектов" 
            icon={<CheckCircle size={24} />} 
          />
          <StatsCard 
            value="100+" 
            label="Постоянных клиентов" 
            icon={<Users size={24} />} 
          />
          <StatsCard 
            value="20+" 
            label="Госзаказчиков по 44-ФЗ" 
            icon={<Building size={24} />} 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;