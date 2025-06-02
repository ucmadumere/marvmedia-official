import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Preloader from './components/Preloader';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import ServiceDetails from './pages/ServiceDetails';
import ContactUs from './pages/ContactUs';
// import Aos from 'aos';

function App() {
  return (
    <>
    <Router>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
