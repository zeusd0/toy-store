import type { Product, CategoryInfo } from '../types/store';
export type Category = 'wooden' | 'soft' | 'constructors' | 'board-games' | 'educational';

export interface CategoryInfo {
  id: Category;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: Category;
  rating: number;
  imageUrl: string;
  isPopular?: boolean;
  inStock: boolean;
  ageFrom: number;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'wooden', title: 'Деревянные игрушки', description: 'Экологичные и безопасные игрушки из натурального дерева' },
  { id: 'soft', title: 'Мягкие игрушки', description: 'Плюшевые друзья для обнимашек и сна' },
  { id: 'constructors', title: 'Конструкторы', description: 'Развивают логику, пространственное мышление и фантазию' },
  { id: 'board-games', title: 'Настольные игры', description: 'Веселые игры для всей семьи и компании друзей' },
  { id: 'educational', title: 'Развивающие', description: 'Сортеры, головоломки и наборы для творчества' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Деревянный паровозик с вагонами',
    description: 'Яркий деревянный поезд с деталями различной формы. Помогает изучать цвета и геометрические фигуры.',
    price: 1490,
    oldPrice: 1890,
    category: 'wooden',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    inStock: true,
    ageFrom: 2,
  },
  {
    id: '2',
    title: 'Плюшевый мишка Тедди',
    description: 'Мягкий классический медвежонок из гипоаллергенных материалов. Высота 35 см.',
    price: 1200,
    category: 'soft',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    inStock: true,
    ageFrom: 0,
  },
  {
    id: '3',
    title: 'Конструктор "Космическая станция"',
    description: 'Набор из 450 деталей для сборки исследовательской станции и ровера.',
    price: 3200,
    oldPrice: 3990,
    category: 'constructors',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    inStock: true,
    ageFrom: 6,
  },
  {
    id: '4',
    title: 'Настольная игра "Лесные приключения"',
    description: 'Увлекательное семейное путешествие по сказочному лесу с простыми правилами.',
    price: 990,
    category: 'board-games',
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    inStock: true,
    ageFrom: 5,
  },
  {
    id: '5',
    title: 'Деревянный сортер "Геометрия"',
    description: 'Развивающий сортер с деталями разных форм и цветов для развития мелкой моторики.',
    price: 890,
    category: 'educational',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    inStock: true,
    ageFrom: 1,
  },
  {
    id: '6',
    title: 'Мягкий зайчик с длинными ушками',
    description: 'Очаровательный зайчонок пастельно-розового цвета. Идеальный подарок для малыша.',
    price: 1350,
    category: 'soft',
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    inStock: false,
    ageFrom: 0,
  },
];