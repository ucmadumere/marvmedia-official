const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

export const TURNSTILE_ENABLED = Boolean(siteKey);

export const TURNSTILE_SITE_KEY = siteKey;
