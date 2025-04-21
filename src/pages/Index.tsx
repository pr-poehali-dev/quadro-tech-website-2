import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import StatsCard from '@/components/StatsCard';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight, Calendar, CheckCircle, LucideBuilding, ShieldCheck, Tool, Truck, Users } from 'lucide-react';

const featuredProjects = [
  {
    id: '1',
    title: 'Поставка оборудования для автосервисной сети',
    description: 'Комплексное оснащение 12 станций технического обслуживания современным диагностическим и ремонтным оборудованием.',
    image: '/placeholder.svg',
    tags: ['44-ФЗ', 'Диагностика', 'Легковые авто']
  },
  {
    id: '2',
    title: 'Оснащение учебного центра WorldSkills',
    description: 'Поставка и монтаж комплексного решения для обучения специалистов автосервиса по международным стандартам.',
    image: '/placeholder.svg',
    tags: ['WorldSkills', 'Обучение', 'Стенды']
  },
  {
    id: '3',
    title: 'Модернизация грузового автопарка',
    description: 'Установка диагностических систем и гидравлического оборудования для обслуживания тяжелой техники.',
    image: '/placeholder.svg',
    tags: ['Грузовые авто', 'Гидравлика', 'Диагностика']
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
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
                  Каталог оборудования
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Автосервисное оборудование" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Services Section */}
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
            <div className="p-8 border rounded-lg text-center hover-scale">
              <div className="w-16 h-16 mx-auto mb-6 bg-quadro-teal/10 rounded-full flex items-center justify-center">
                <Tool size={28} className="text-quadro-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Подбор оборудования</h3>
              <p className="text-gray-600">
                Помогаем подобрать оптимальное оборудование под ваши задачи и бюджет
              </p>
            </div>
            <div className="p-8 border rounded-lg text-center hover-scale">
              <div className="w-16 h-16 mx-auto mb-6 bg-quadro-teal/10 rounded-full flex items-center justify-center">
                <Truck size={28} className="text-quadro-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Поставка и монтаж</h3>
              <p className="text-gray-600">
                Организуем доставку, установку и запуск оборудования в эксплуатацию
              </p>
            </div>
            <div className="p-8 border rounded-lg text-center hover-scale">
              <div className="w-16 h-16 mx-auto mb-6 bg-quadro-teal/10 rounded-full flex items-center justify-center">
                <LucideBuilding size={28} className="text-quadro-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Работа с госзаказчиками</h3>
              <p className="text-gray-600">
                Полное сопровождение проектов по 44-ФЗ и 223-ФЗ, программам "Профессионалитет"
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="mt-4">
              Все услуги <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Реализованные проекты
              </h2>
              <p className="text-gray-600 max-w-xl">
                Ознакомьтесь с нашими кейсами по оснащению автосервисов
              </p>
            </div>
            <Button>
              Все проекты <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/36de80f3-ab10-4b1c-92f8-9dcaa83544d0.jpg" 
                alt="Quadro Tech Logo" 
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mt-4">
                Профессиональное оборудование для автосервисов с 2013 года
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Подбор оборудования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поставка и монтаж</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сервисное обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Работа с госзаказчиками</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>г. Москва, ул. Примерная, д. 123</li>
                <li>info@quadro-tech.ru</li>
                <li>+7 (800) 123-45-67</li>
                <li className="pt-2">
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2023 Quadro-tech. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
