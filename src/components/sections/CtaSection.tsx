import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-quadro-teal text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
          Готовы оснастить ваш автосервис профессиональным оборудованием?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
          Свяжитесь с нами для консультации и получения коммерческого предложения
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-quadro-teal hover:bg-gray-100">
            Связаться с нами
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Скачать каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
