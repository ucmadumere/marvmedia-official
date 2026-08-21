const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://marvmedia.ng"
).replace(/\/+$/, "");

const absoluteUrl = (value) => {
  if (!value) return SITE_URL;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

export { SITE_URL, absoluteUrl };
