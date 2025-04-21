import React from 'react';
import StatsCard from '@/components/StatsCard';
import { Calendar, CheckCircle, ShieldCheck, Users } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Quadro-tech в цифрах
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            За более чем 10-летний опыт работы мы реализовали сотни проектов разного масштаба
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            number="10+" 
            label="Лет на рынке"
            icon={<Calendar size={32} />}
          />
          <StatsCard 
            number="500+" 
            label="Реализованных проектов"
            icon={<CheckCircle size={32} />}
          />
          <StatsCard 
            number="50+" 
            label="Партнеров-производителей"
            icon={<ShieldCheck size={32} />}
          />
          <StatsCard 
            number="1000+" 
            label="Довольных клиентов"
            icon={<Users size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
