import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import WhatsAppButton from "./components/WhatsAppButton";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const FAQ = lazy(() => import("./pages/FAQ"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioDetails = lazy(() => import("./pages/PortfolioDetails"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Team = lazy(() => import("./pages/Team"));
const OurFounder = lazy(() => import("./pages/OurFounder"));
const LearnWithMarv = lazy(() => import("./pages/LearnWithMarv"));
const MarvDesign = lazy(() => import("./pages/MarvDesign"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="section aximo-section-padding2" role="status">
      <div className="container text-center">
        <p>Loading page…</p>
      </div>
    </div>
  );
}

function RouteFocus() {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => document.getElementById("main-content")?.focus());
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <RouteFocus />
      <Preloader />
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/our-founder" element={<OurFounder />} />
          <Route path="/learn-with-marv" element={<LearnWithMarv />} />
          <Route path="/marv-design" element={<MarvDesign />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
