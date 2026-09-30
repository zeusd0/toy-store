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

export interface CartItem {
  product: Product;
  quantity: number;
}