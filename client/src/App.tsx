import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/Sidebar';
import Home from './components/Home';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <SideBar />
        <Home />
      </div>
      <Footer />
    </React.Fragment>
  );
}

