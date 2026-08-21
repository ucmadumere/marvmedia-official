// src/components/Preloader.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Preloader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Trigger loading on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, prefersReducedMotion ? 50 : 1000);

    return () => clearTimeout(timer);
  }, [location.pathname, prefersReducedMotion]);

  if (!loading) return null;

  return (
    <div className="aximo-preloader-wrap" role="status" aria-live="polite" aria-label="Loading page">
      <span className="visually-hidden">Loading page</span>
      <div className="aximo-preloader" aria-hidden="true">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
