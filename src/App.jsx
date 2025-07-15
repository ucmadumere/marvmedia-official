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
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Portfolio from './pages/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import NotFound from './pages/NotFound';
import Pricing from './pages/Pricing';
// import Aos from 'aos';

function App() {
  return (
    <>
      <Router>
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
