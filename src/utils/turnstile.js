const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

export const TURNSTILE_ENABLED =
  import.meta.env.PROD && Boolean(siteKey);

export const TURNSTILE_SITE_KEY = siteKey;
