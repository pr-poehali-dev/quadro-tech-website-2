export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const featuredProjects: Project[] = [
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
