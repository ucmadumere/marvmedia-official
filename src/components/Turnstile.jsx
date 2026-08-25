import { useEffect, useRef } from "react";
import {
  TURNSTILE_ENABLED,
  TURNSTILE_SITE_KEY,
} from "../utils/turnstile";

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

export default function Turnstile({ onTokenChange, resetKey = 0, action }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!TURNSTILE_ENABLED || !containerRef.current) return undefined;
    let widgetId;
    let cancelled = false;

    loadTurnstile()
      .then(() => {
        if (cancelled || !containerRef.current) return;
        widgetId = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          ...(action ? { action } : {}),
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
  }, [action, onTokenChange, resetKey]);

  if (!TURNSTILE_ENABLED) return null;
  return <div ref={containerRef} className="mb-3" />;
}
