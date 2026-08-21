import { useEffect, useRef } from "react";

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;
let scriptPromise;

const loadTurnstile = () => {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-marv-turnstile="true"]');
    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.marvTurnstile = "true";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return scriptPromise;
};

export default function Turnstile({ onTokenChange, resetKey = 0 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return undefined;
    let widgetId;
    let cancelled = false;

    loadTurnstile()
      .then(() => {
        if (cancelled || !containerRef.current) return;
        widgetId = window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          callback: onTokenChange,
          "expired-callback": () => onTokenChange(""),
          "error-callback": () => onTokenChange(""),
          theme: "auto",
        });
      })
      .catch(() => onTokenChange(""));

    return () => {
      cancelled = true;
      if (widgetId !== undefined && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [onTokenChange, resetKey]);

  if (!SITE_KEY) return null;
  return <div ref={containerRef} className="mb-3" />;
}
