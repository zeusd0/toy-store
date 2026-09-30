import React from 'react';
import type { Product } from '../types/store';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={product.imageUrl} alt={product.title} className="product-card__image" />
        {!product.inStock && <span className="product-card__badge product-card__badge--out">Нет в наличии</span>}
      </div>

      <div className="product-card__content">
        <div className="product-card__meta">
          <span className="product-card__age">{product.ageFrom}+ лет</span>
          <span className="product-card__rating">★ {product.rating}</span>
        </div>

        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>

        <div className="product-card__footer">
          <div className="product-card__price-block">
            <span className="product-card__price">{product.price} ₽</span>
            {product.oldPrice && <span className="product-card__old-price">{product.oldPrice} ₽</span>}
          </div>

          <button 
            className="product-card__btn" 
            disabled={!product.inStock}
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            {product.inStock ? 'В корзину' : 'Закончился'}
          </button>
        </div>
      </div>
    </div>
  );
};