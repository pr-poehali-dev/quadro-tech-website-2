import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-quadro-darkTeal to-quadro-teal text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Нужна консультация специалиста?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          Свяжитесь с нами для получения профессиональной консультации 
          по подбору оборудования для вашего автосервиса
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-white text-quadro-teal hover:bg-gray-100 min-w-[200px]">
            <MessageSquare size={18} className="mr-2" /> Написать нам
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 min-w-[200px]">
            Позвонить
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;