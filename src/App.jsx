
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Business from './components/Business';
import Slide from './components/Slide';
import Product from './components/Product';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Outlet from './components/Outlet';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Business />
      <Outlet />
      <Product />
      <Slide />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
