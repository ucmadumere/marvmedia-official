import { useEffect } from "react";
import AOS from "aos";
import WOW from "wowjs";

export default function usePageInit() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });

    // Refresh AOS on component update
    AOS.refresh();

    // Initialize WOW.js
    new WOW.WOW({ live: false }).init();
  }, []);
}
