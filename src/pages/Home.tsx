import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types/store';
import './Home.css';

interface HomeProps {
  onAddToCart?: (product: Product) => void; // Добавили знак ? (сделали опциональным)
}

export const Home: React.FC<HomeProps> = ({ onAddToCart = () => {} }) => {
  const popularProducts = PRODUCTS.filter((p) => p.isPopular);

  return (
    <div className="home-page">
      {/* Главный промо-баннер */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Мир ярких эмоций и качественных игрушек</h1>
          <p className="hero__subtitle">Развивающие игры, конструкторы и любимые мягкие друзья для детей всех возрастов.</p>
          <Link to="/catalog" className="hero__btn">
            Перейти в каталог
          </Link>
        </div>
      </section>

      {/* Популярные категории */}
      <section className="home-section">
        <h2 className="home-section__title">Категории игрушек</h2>
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} to={`/catalog?category=${cat.id}`} className="category-card">
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Популярные товары */}
      <section className="home-section">
        <h2 className="home-section__title">Хиты продаж</h2>
        <div className="products-grid">
          {popularProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};