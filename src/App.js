import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './Components/HomePage';
import DashboardPage from './Components/DashboardPage';
import ProductsPage from './Components/ProductsPage';
import OrdersPage from './Components/OrdersPage';
import CalendarPage from './Components/CalendarPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/calendar" element={<CalendarPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
