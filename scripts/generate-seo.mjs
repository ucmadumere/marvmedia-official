import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_SITE_URL = "https://marvmedia.ng";
const DEFAULT_IMAGE = "/assets/images/logo/logo-marv.png";
const POST_CACHE_FILE = path.resolve("scripts/seo-posts-cache.json");

const staticPages = [
  ["/", "Creative Agency for African Brands | Marv Media", "Marv Media helps African entrepreneurs, thought leaders, and creatives grow through social media, branding, content production, and digital solutions.", 1.0],
  ["/about-us", "About Marv Media", "Discover Marv Media's journey from a phone-led creative idea to an African agency helping brands become seen, heard, and profitable.", 0.8],
  ["/services", "Creative and Digital Marketing Services", "Explore Marv Media's social media management, content production, branding, strategy, and web development services for growing brands.", 0.9],
  ["/services/social-media-management", "Social Media Management", "We help you grow and maintain a strong social media presence with strategy, content, community management, and reporting.", 0.8],
  ["/services/tech-solution", "Tech Solution", "Digital solutions designed to give your business an effective, reliable, and professional online presence.", 0.8],
  ["/services/content-creation-visual-production", "Content Creation & Visual Production", "Purposeful photography, video, and visual content that communicates your brand clearly and captures attention.", 0.8],
  ["/portfolio", "Creative Portfolio and Client Work", "Explore Marv Media's branding, content creation, social media, event marketing, and campaign work for ambitious brands.", 0.9],
  ["/portfolio/luxe-dental", "Luxe Dental Case Study", "Explore Marv Media's creative work and results for Luxe Dental.", 0.7],
  ["/portfolio/iky-anderson", "Iky Anderson Case Study", "Explore Marv Media's creative work and results for Iky Anderson.", 0.7],
  ["/portfolio/speed-meal-school", "Speed Meal School Case Study", "Explore Marv Media's creative work and results for Speed Meal School.", 0.7],
  ["/portfolio/jet-to-forever", "Jet to Forever Case Study", "Explore Marv Media's creative work and results for Jet to Forever.", 0.7],
  ["/portfolio/okoti-enterprises", "Okoti Enterprises Case Study", "Explore Marv Media's creative work and results for Okoti Enterprises.", 0.7],
  ["/portfolio/grandeur-signature-travel-tour", "Grandeur Signature Travel & Tour Case Study", "Explore Marv Media's creative work and results for Grandeur Signature Travel & Tour.", 0.7],
  ["/portfolio/cnn-call-to-earth-day", "CNN Call to Earth Day Case Study", "Explore Marv Media's creative work for CNN Call to Earth Day.", 0.7],
  ["/blog", "Creative Marketing Insights and Stories", "Read practical insights about social media, branding, content creation, entrepreneurship, and the creative industry from Marv Media.", 0.8],
  ["/pricing", "Service Packages and Pricing", "Compare Marv Media's social media, content creation, branding, and digital service packages for businesses and personal brands.", 0.7],
  ["/team", "Meet the Marv Media Team", "Meet the strategists, creators, managers, and partners behind Marv Media's creative ideas and visible results.", 0.6],
  ["/our-founder", "Marvel Iwezue, Founder of Marv Media", "Meet Marvel Iwezue, creative entrepreneur, project manager, mentor, and founder of Marv Media.", 0.7],
  ["/learn-with-marv", "Learn With Marv", "Explore upcoming practical learning resources and training from Marv Media for creatives, entrepreneurs, and growing brands.", 0.5],
  ["/marv-design", "Marv Design Space", "Discover Marv Design Space, Marv Media's upcoming destination for purposeful visual identities and creative design solutions.", 0.5],
  ["/faq", "Frequently Asked Questions", "Find answers about Marv Media's creative services, custom packages, payments, content production, and working with clients worldwide.", 0.6],
  ["/contact-us", "Contact Marv Media", "Contact Marv Media to discuss social media management, branding, content creation, digital strategy, or a custom creative project.", 0.8],
].map(([route, title, description, priority]) => ({ route, title, description, priority }));

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const escapeXml = escapeHtml;
const stripHtml = (value = "") => String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const fullTitle = (title) => title.includes("Marv Media") ? title : `${title} | Marv Media`;
const isoDate = (value) => {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString().slice(0, 10) : date.toISOString().slice(0, 10);
};

const postDescription = (post) => {
  if (post.excerpt) return stripHtml(post.excerpt).slice(0, 160);
  const block = post.content?.find((item) => ["p", "html"].includes(item?.type) && item.text);
  return block ? stripHtml(block.text).slice(0, 160) : "Read the latest article from Marv Media.";
};

const resolveImage = (value, apiBaseUrl, siteUrl) => {
  if (!value) return `${siteUrl}${DEFAULT_IMAGE}`;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("/uploads/") && apiBaseUrl) return `${apiBaseUrl}${value}`;
  return `${siteUrl}${value.startsWith("/") ? value : `/${value}`}`;
};

const organizationSchema = (siteUrl) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Marv Media",
  url: siteUrl,
  logo: `${siteUrl}${DEFAULT_IMAGE}`,
  sameAs: [
    "https://www.youtube.com/@marvmediang",
    "https://www.facebook.com/share/1Js8Lm71zg/",
    "https://www.instagram.com/marvmedia_ng",
  ],
});

const breadcrumbSchema = (page, siteUrl) => {
  if (page.route === "/") return null;
  const isDetail = page.route.split("/").filter(Boolean).length > 1;
  const parent = page.route.startsWith("/blog/") ? ["Blog", "/blog"]
    : page.route.startsWith("/services/") ? ["Services", "/services"]
      : page.route.startsWith("/portfolio/") ? ["Portfolio", "/portfolio"] : null;
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }];
  if (isDetail && parent) items.push({ "@type": "ListItem", position: 2, name: parent[0], item: `${siteUrl}${parent[1]}` });
  items.push({ "@type": "ListItem", position: items.length + 1, name: page.title, item: `${siteUrl}${page.route}` });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
};

const headMarkup = (page, { siteUrl, apiBaseUrl }) => {
  const canonical = `${siteUrl}${page.route === "/" ? "/" : page.route}`;
  const title = fullTitle(page.title);
  const image = resolveImage(page.image, apiBaseUrl, siteUrl);
  const schemas = [organizationSchema(siteUrl), breadcrumbSchema(page, siteUrl), page.schema].filter(Boolean);
  return `
    <!-- build-time-seo:start -->
    <meta name="description" content="${escapeHtml(page.description)}" data-rh="true" />
    <link rel="canonical" href="${escapeHtml(canonical)}" data-rh="true" />
    <meta property="og:site_name" content="Marv Media" data-rh="true" />
    <meta property="og:type" content="${page.type || "website"}" data-rh="true" />
    <meta property="og:title" content="${escapeHtml(title)}" data-rh="true" />
    <meta property="og:description" content="${escapeHtml(page.description)}" data-rh="true" />
    <meta property="og:url" content="${escapeHtml(canonical)}" data-rh="true" />
    <meta property="og:image" content="${escapeHtml(image)}" data-rh="true" />
    <meta name="twitter:card" content="summary_large_image" data-rh="true" />
    <meta name="twitter:title" content="${escapeHtml(title)}" data-rh="true" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" data-rh="true" />
    <meta name="twitter:image" content="${escapeHtml(image)}" data-rh="true" />
    ${page.publishedTime ? `<meta property="article:published_time" content="${escapeHtml(page.publishedTime)}" data-rh="true" />` : ""}
    ${page.modifiedTime ? `<meta property="article:modified_time" content="${escapeHtml(page.modifiedTime)}" data-rh="true" />` : ""}
    <script type="application/ld+json" data-rh="true">${JSON.stringify(schemas).replaceAll("<", "\\u003c")}</script>
    <!-- build-time-seo:end -->`;
};

const renderHtml = (template, page, options) => template
  .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(fullTitle(page.title))}</title>`)
  .replace("</head>", `${headMarkup(page, options)}\n  </head>`);

async function getPosts(apiBaseUrl) {
  if (!apiBaseUrl) return [];
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(`${apiBaseUrl}/api/public/posts`, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(12000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const posts = Array.isArray(payload) ? payload : Array.isArray(payload.posts) ? payload.posts : [];
      await writeFile(POST_CACHE_FILE, `${JSON.stringify(posts, null, 2)}\n`);
      return posts;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    }
  }

  try {
    const cachedPosts = JSON.parse(await readFile(POST_CACHE_FILE, "utf8"));
    console.warn(`[seo] CMS unavailable (${lastError.message}); using ${cachedPosts.length} cached posts.`);
    return cachedPosts;
  } catch {
    console.warn(`[seo] CMS posts unavailable (${lastError.message}) and no cache exists; generating static SEO files only.`);
    return [];
  }
}

export async function generateSeoFiles({ apiBaseUrl, siteUrl = DEFAULT_SITE_URL } = {}) {
  const cleanSiteUrl = (siteUrl || DEFAULT_SITE_URL).replace(/\/+$/, "");
  const cleanApiUrl = (apiBaseUrl || "").replace(/\/+$/, "");
  const distDirectory = path.resolve("dist");
  const template = await readFile(path.join(distDirectory, "index.html"), "utf8");
  const posts = await getPosts(cleanApiUrl);
  const blogPages = posts.filter((post) => post?.slug && post.status !== "draft").map((post) => {
    const route = `/blog/${post.slug}`;
    const description = post.seoDescription || postDescription(post);
    const image = resolveImage(post.image, cleanApiUrl, cleanSiteUrl);
    return {
      route,
      title: post.seoTitle || post.title,
      description,
      image,
      type: "article",
      priority: 0.7,
      lastmod: post.updatedAt || post.createdAt,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description,
        image,
        datePublished: post.createdAt,
        dateModified: post.updatedAt,
        mainEntityOfPage: `${cleanSiteUrl}${route}`,
        publisher: { "@id": `${cleanSiteUrl}/#organization` },
      },
    };
  });
  const pages = [...staticPages, ...blogPages];

  for (const page of pages) {
    const outputDirectory = page.route === "/" ? distDirectory : path.join(distDirectory, page.route.slice(1));
    await mkdir(outputDirectory, { recursive: true });
    await writeFile(path.join(outputDirectory, "index.html"), renderHtml(template, page, { siteUrl: cleanSiteUrl, apiBaseUrl: cleanApiUrl }));
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${escapeXml(`${cleanSiteUrl}${page.route === "/" ? "/" : page.route}`)}</loc><lastmod>${isoDate(page.lastmod)}</lastmod><priority>${page.priority.toFixed(1)}</priority></url>`).join("\n")}
</urlset>\n`;
  await writeFile(path.join(distDirectory, "sitemap.xml"), sitemap);
  console.log(`[seo] Generated metadata for ${pages.length} routes (${blogPages.length} CMS posts) and sitemap.xml.`);
}
