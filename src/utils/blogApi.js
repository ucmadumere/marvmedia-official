const DEFAULT_PUBLIC_API_URL = "http://localhost:4000";

export const PUBLIC_API_URL = (
  import.meta.env.VITE_PUBLIC_API_URL || DEFAULT_PUBLIC_API_URL
).replace(/\/+$/, "");

const request = async (path, signal) => {
  const response = await fetch(`${PUBLIC_API_URL}${path}`, {
    headers: { Accept: "application/json" },
    signal,
  });

  if (!response.ok) {
    const error = new Error(`Blog API request failed with ${response.status}`);
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export const getPublishedPosts = (signal) =>
  request("/api/public/posts", signal);

export const getPublishedPostBySlug = (slug, signal) =>
  request(`/api/public/posts/${encodeURIComponent(slug)}`, signal);

export const resolveBlogImageUrl = (path) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith("/uploads/")) return `${PUBLIC_API_URL}${path}`;
  return path;
};

export const sortPostsNewestFirst = (posts) =>
  [...posts].sort((a, b) => {
    const aDate = new Date(a.createdAt || a.date).getTime() || 0;
    const bDate = new Date(b.createdAt || b.date).getTime() || 0;
    return bDate - aDate;
  });
