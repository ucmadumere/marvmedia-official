// src/components/Preloader.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Preloader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trigger loading on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // duration of preloader (in ms)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="aximo-preloader-wrap">
      <div className="aximo-preloader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
