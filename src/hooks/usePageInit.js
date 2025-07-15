import { useEffect } from "react";
import AOS from "aos";

export default function usePageInit() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();

    import("wowjs").then((module) => {
      const WOW = module.default;
      new WOW().init();
    });
  }, []);
}
