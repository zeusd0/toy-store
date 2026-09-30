import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Sparkles } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <Sparkles className="header__logo-icon" size={28} />
          <span>ToyStore</span>
        </Link>

        <nav className="header__nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}>
            Главная
          </NavLink>
          <NavLink to="/catalog" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}>
            Каталог
          </NavLink>
        </nav>

        <Link to="/cart" className="header__cart-btn">
          <ShoppingBag size={22} />
          <span className="header__cart-title">Корзина</span>
          {cartCount > 0 && <span className="header__cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
};