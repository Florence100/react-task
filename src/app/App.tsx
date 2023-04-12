import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';
import About from '../pages/about/About';
import UserData from '../pages/userdata/UserData';
import Navbar from '../components/navbar/Navbar';
// import Provider from 'react-redux';
import './style.css';

export function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="user" element={<UserData />} />
      </Routes>
    </div>
    // </Provider>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
