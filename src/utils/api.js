const DEFAULT_API_BASE_URL = "http://localhost:5000/api";

const baseUrl =
  (import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL).replace(
    /\/+$/,
    ""
  );

export const API_URL = `${baseUrl}/contactform`;
export const API_URL_FOOTER = `${baseUrl}/contact`;
