import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '../../pages/IndexPage/IndexPage';
import TimeVallee from '../../pages/Boutique/BoutiqueDiscover/TimeVallee/TimeVallee';
import Indiluxe from '../../pages/Boutique/BoutiqueDiscover/Indiluxe/Indiluxe';
import LeMill from '../../pages/Boutique/BoutiqueDiscover/LeMill/LeMill';
import LuxuryProductsPage from '../../pages/ProductsPages/LuxuryProductsPage/LuxuryProductsPage';
import ProductDetailingPage from '../../pages/OrderingPages/ProductDetailsPage/ProductDetailingPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/timevallee' element={<TimeVallee />} />
      <Route path='/indiluxe' element={<Indiluxe />} />
      <Route path='/lemill' element={<LeMill />} />
      <Route path='/luxury' element={<LuxuryProductsPage />} />
      <Route path='/order-product' element={<ProductDetailingPage />} />
    </Routes>
  );
};

export default AppRoutes;