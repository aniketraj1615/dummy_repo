import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import NavBar from './NavBar';

export default function HomePage() {
  return (
    <div className="home-page">
        {/* <NavBar></NavBar> */}
      <h1>Welcome to the Simplified ERP System</h1>
      <p>
        Dummy Setup for project assignment
      </p>

      <div className="actions">
        <h2>Actions</h2>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link> Provides an overview of the system's features.
          </li>
          <li>
            <Link to="/products">Products Management</Link> Manage product listings.
          </li>
          <li>
            <Link to="/orders">Orders Management</Link> View and handle orders.
          </li>
          <li>
            <Link to="/calendar">Orders Calendar View</Link> Calendar displaying orders.
          </li>
        </ul>
      </div>
    </div>
  );
};

;
