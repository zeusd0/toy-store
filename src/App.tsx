import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import type { Product } from './types/store';

export const App: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  const handleAddToCart = (product: Product) => {
    setCartCount((prev) => prev + 1);
    alert(`Товар "${product.title}" добавлен в корзину!`);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header cartCount={cartCount} />
        
        <main className="container" style={{ flex: 1, paddingTop: '30px', paddingBottom: '30px' }}>
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;