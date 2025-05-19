import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'aos/dist/aos.css';
import 'animate.css/animate.min.css';
import "swiper/css";
import "swiper/css/pagination";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
