import { Helmet } from "react-helmet-async";
import { SITE_URL, absoluteUrl } from "../utils/seo";

const DEFAULT_IMAGE = "/assets/images/logo/logo-marv.png";

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
  tags = [],
  schema,
  breadcrumbs = [],
}) {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = title.includes("Marv Media")
    ? title
    : `${title} | Marv Media`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Marv Media",
      url: SITE_URL,
      logo: absoluteUrl(DEFAULT_IMAGE),
      description:
        "A creative agency helping African entrepreneurs, thought leaders, and creatives communicate with clarity, consistency, and confidence.",
      sameAs: [
        "https://www.youtube.com/@marvmediang",
        "https://www.facebook.com/share/1Js8Lm71zg/",
        "https://www.instagram.com/marvmedia_ng",
      ],
    },
  ];

  if (breadcrumbs.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }

  if (schema) schemas.push(schema);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content="Marv Media" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {tags.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
}
