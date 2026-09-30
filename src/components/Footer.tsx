import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p>© 2026 ToyStore. Учебный проект интернет-магазина.</p>
        <p className="footer__text">Сделано на React + TypeScript</p>
      </div>
    </footer>
  );
};