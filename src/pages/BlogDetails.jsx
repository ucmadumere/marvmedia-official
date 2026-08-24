import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Seo from "../components/Seo";
import { absoluteUrl } from "../utils/seo";
import Breadcrumb from "../components/Breadcrumb";
import BlogComments from "../components/BlogComments";
import {
  getPublishedPostBySlug,
  getPublishedPosts,
  resolveBlogImageUrl,
  sortPostsNewestFirst,
} from "../utils/blogApi";

const getDescription = (post) => {
  const paragraph = post?.content?.find(
    (block) => ["p", "html"].includes(block.type) && block.text
  );
  if (!paragraph) return "Read the latest article from Marv Media.";
  return paragraph.text
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
};

const getReadingTime = (post) => {
  const words = (post?.content || [])
    .map((block) => block.text || (block.children || []).join(" "))
    .join(" ")
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
};

const getInstagramEmbedUrl = (value = "") => {
  try {
    const url = new URL(value.trim());
    if (!["instagram.com", "www.instagram.com"].includes(url.hostname.toLowerCase())) return "";
    const match = url.pathname.match(/^\/(p|reel|tv)\/([A-Za-z0-9_-]+)/);
    return match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed/captioned/` : "";
  } catch {
    return "";
  }
};

const ContentBlock = ({ block }) => {
  if (!block) return null;

  if (block.type === "html") {
    const sanitizedHtml = DOMPurify.sanitize(block.text || "", {
      USE_PROFILES: { html: true },
      ADD_TAGS: ["iframe"],
      ADD_ATTR: ["target", "rel", "data-instagram-url", "src", "title", "loading", "allowtransparency", "frameborder", "scrolling"],
    });
    const documentFragment = new DOMParser().parseFromString(
      sanitizedHtml,
      "text/html"
    );

    documentFragment.querySelectorAll("img").forEach((image) => {
      image.src = resolveBlogImageUrl(image.getAttribute("src") || "");
      image.loading = "lazy";
    });
    documentFragment.querySelectorAll("a").forEach((link) => {
      if (link.target === "_blank") link.rel = "noopener noreferrer";
    });
    documentFragment.querySelectorAll("iframe").forEach((iframe) => {
      const wrapper = iframe.closest("[data-instagram-url]");
      const embedUrl = getInstagramEmbedUrl(
        wrapper?.getAttribute("data-instagram-url") || iframe.getAttribute("src") || ""
      );
      if (!wrapper || !embedUrl) {
        iframe.remove();
        return;
      }
      wrapper.classList.add("instagram-embed");
      iframe.src = embedUrl;
      iframe.title = "Instagram post";
      iframe.loading = "lazy";
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("frameborder", "0");
    });

    return (
      <div
        className="blog-rich-content"
        dangerouslySetInnerHTML={{ __html: documentFragment.body.innerHTML }}
      />
    );
  }

  if (block.type === "p") {
    return <p style={{ lineHeight: "1.6", color: "#555" }}>{block.text}</p>;
  }

  if (block.type === "h1") return <h2>{block.text}</h2>;
  if (block.type === "h2") return <h2>{block.text}</h2>;
  if (block.type === "h3") return <h3>{block.text}</h3>;
  if (block.type === "h4") return <h4>{block.text}</h4>;
  if (block.type === "blockquote") return <blockquote>{block.text}</blockquote>;

  if (block.type === "ul") {
    return (
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "1.5rem",
          marginBottom: "1rem",
          color: "#7e7e7e",
        }}
      >
        {(block.children || []).map((item, index) => (
          <li
            key={index}
            style={{ marginBottom: "0.5rem", listStyleType: "disc" }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "image" || block.type === "img") {
    return (
      <div className="blog-inline-image">
        <img
          src={resolveBlogImageUrl(block.src)}
          alt={block.alt || ""}
          loading="lazy"
        />
      </div>
    );
  }

  if (block.type === "instagram") {
    const embedUrl = getInstagramEmbedUrl(block.url);
    if (!embedUrl) return null;
    return (
      <div className="instagram-embed">
        <iframe src={embedUrl} title="Instagram post" loading="lazy" scrolling="no" frameBorder="0" />
      </div>
    );
  }

  return null;
};

export default function BlogDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadPost = async () => {
      try {
        setIsLoading(true);
        setNotFound(false);
        setError("");

        const [postData, postsData] = await Promise.all([
          getPublishedPostBySlug(slug, controller.signal),
          getPublishedPosts(controller.signal),
        ]);

        setPost(postData);
        setRecentPosts(
          sortPostsNewestFirst(Array.isArray(postsData) ? postsData : [])
            .filter((item) => item.slug !== slug)
            .slice(0, 4)
        );
      } catch (requestError) {
        if (requestError.name === "AbortError") return;
        if (requestError.status === 404) setNotFound(true);
        else setError("We couldn't load this post. Please try again later.");
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    loadPost();
    return () => controller.abort();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="section aximo-section-padding2">
        <div className="container text-center" role="status">
          <p>Loading post…</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="section aximo-section-padding2">
        <div className="container text-center">
          <h2>404 - Blog Not Found</h2>
          <p>The blog post you're looking for does not exist.</p>
          <Link to="/blog" className="btn">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="section aximo-section-padding2">
        <div className="container text-center" role="alert">
          <h2>Unable to load post</h2>
          <p>{error}</p>
          <Link to="/blog" className="btn">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={post.title}
        description={getDescription(post)}
        path={`/blog/${post.slug}`}
        image={resolveBlogImageUrl(post.image)}
        type="article"
        publishedTime={post.createdAt}
        modifiedTime={post.updatedAt}
        tags={post.tags || []}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: getDescription(post),
          image: absoluteUrl(resolveBlogImageUrl(post.image)),
          datePublished: post.createdAt,
          dateModified: post.updatedAt,
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          publisher: { "@id": "https://marvmedia.ng/#organization" },
        }}
      />

      <Breadcrumb title="Blog" current={post.title} />
      <div className="section post-details-page blog-detail-section">
        <div className="container">
          <div className="row blog-detail-grid">
            <div className="col-lg-8">
              <article className="blog-article">
                <header className="blog-article-header">
                  <div className="blog-article-kicker">
                    <span>Marv Media Journal</span>
                  </div>
                  <h2 className="blog-post-title">{post.title}</h2>
                  <div className="blog-article-meta">
                    <span>{post.date}</span>
                    <span aria-label={`${getReadingTime(post)} minute read`}>{getReadingTime(post)} min read</span>
                  </div>
                </header>

                {post.image && (
                  <div className="blog-featured-image">
                    <img src={resolveBlogImageUrl(post.image)} alt={post.title} />
                  </div>
                )}

                <div className="entry-content blog-article-body">
                  {(post.content || []).map((block, index) => (
                    <ContentBlock key={index} block={block} />
                  ))}
                </div>

                <footer className="blog-article-footer">
                  <Link to="/blog" className="blog-back-link">
                    <span aria-hidden="true">←</span> Back to all articles
                  </Link>
                  {post.tags?.length > 0 && (
                    <div className="blog-tag-list" aria-label="Article tags">
                      {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
                    </div>
                  )}
                </footer>
                <BlogComments slug={post.slug} />
              </article>
            </div>

            <aside className="col-lg-4">
              <div className="blog-detail-sidebar">
                <div className="blog-sidebar-card">
                  <div className="blog-sidebar-heading">
                    <h3>Recent posts</h3>
                    <span aria-hidden="true">
                      <svg className="blog-link-arrow" viewBox="0 0 16 16" focusable="false">
                        <path d="M4 12 12 4M6 4h6v6" />
                      </svg>
                    </span>
                  </div>
                  {recentPosts.length > 0 ? (
                    <div className="blog-recent-list">
                    {recentPosts.map((item, index) => (
                      <article className="blog-recent-item" key={item.id || item.slug}>
                        <span className="blog-recent-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                        {item.image && (
                          <div className="blog-recent-thumb">
                            <Link to={`/blog/${item.slug}`}>
                              <img
                                src={resolveBlogImageUrl(item.image)}
                                alt={item.title}
                                loading="lazy"
                              />
                            </Link>
                          </div>
                        )}
                        <div className="blog-recent-copy">
                          <span>{item.date}</span>
                          <Link
                            to={`/blog/${item.slug}`}
                          >
                            {item.title}
                          </Link>
                        </div>
                      </article>
                    ))}
                    </div>
                  ) : (
                    <p>No other articles yet.</p>
                  )}
                  <Link className="blog-sidebar-button" to="/blog">View all articles <span aria-hidden="true">→</span></Link>
                  </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
