import React from 'react';
import 'vite/modulepreload-polyfill';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';
import About from '../pages/about/About';
import UserData from '../pages/userdata/UserData';
import Navbar from '../components/navbar/Navbar';
import './style.css';

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="user" element={<UserData />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
