import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";
import {
  getPublishedPosts,
  resolveBlogImageUrl,
  sortPostsNewestFirst,
} from "../utils/blogApi";

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await getPublishedPosts(controller.signal);
        setPosts(Array.isArray(data) ? data : []);
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError("We couldn't load the blog posts. Please try again later.");
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    loadPosts();
    return () => controller.abort();
  }, []);

  const sortedPosts = useMemo(() => sortPostsNewestFirst(posts), [posts]);
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const selectedPosts = sortedPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Seo
        title="Creative Marketing Insights and Stories"
        description="Read practical insights about social media, branding, content creation, entrepreneurship, and the creative industry from Marv Media."
        path="/blog"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]}
      />

      <Breadcrumb title="Blog" current="Blog" className="blog-hero" />
      <div className="section blog-index-section">
        <div className="container">
          {isLoading && (
            <div className="text-center" role="status">
              <p>Loading posts…</p>
            </div>
          )}

          {!isLoading && error && (
            <div className="text-center" role="alert">
              <h3>Unable to load posts</h3>
              <p>{error}</p>
            </div>
          )}

          {!isLoading && !error && sortedPosts.length === 0 && (
            <div className="text-center">
              <h3>No posts yet</h3>
              <p>Published articles will appear here.</p>
            </div>
          )}

          {!isLoading && !error && sortedPosts.length > 0 && (
            <div className="row blog-index-layout">
              <div className="col-lg-9">
                <div className="blog-index-toolbar">
                  <h3>Latest stories</h3>
                </div>
                <div className="row">
                  {selectedPosts.map((post, index) => {
                    return (
                    <div className="col-lg-4 col-md-6" key={post.id || post.slug}>
                      <article
                        className="blog-card wow fadeInUpX"
                        data-wow-delay={`0.${index + 1}s`}
                      >
                        {post.image && (
                          <Link className="blog-card-image" to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                              <img
                                src={resolveBlogImageUrl(post.image)}
                                alt=""
                                loading="lazy"
                              />
                          </Link>
                        )}
                        <div className="blog-card-content">
                          <div className="blog-card-meta">
                            <span>{post.date}</span>
                          </div>
                          <Link to={`/blog/${post.slug}`}>
                            <h2>{post.title}</h2>
                          </Link>
                          <Link
                            className="blog-card-link"
                            to={`/blog/${post.slug}`}
                          >
                            <span>Read article</span>
                            <span aria-hidden="true">
                              <svg className="blog-link-arrow" viewBox="0 0 16 16" focusable="false">
                                <path d="M4 12 12 4M6 4h6v6" />
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </article>
                    </div>
                  )})}
                </div>

                {totalPages > 1 && (
                  <div className="aximo-navigation site-pagination blog-index-pagination">
                    <nav className="navigation pagination" aria-label="Posts">
                      <div className="nav-links">
                        {Array.from({ length: totalPages }, (_, index) => {
                          const pageNumber = index + 1;
                          return currentPage === pageNumber ? (
                            <span
                              key={pageNumber}
                              aria-current="page"
                              className="page-numbers current"
                            >
                              {pageNumber}
                            </span>
                          ) : (
                            <button
                              key={pageNumber}
                              className="page-numbers"
                              onClick={() => handlePageChange(pageNumber)}
                              type="button"
                            >
                              {pageNumber}
                            </button>
                          );
                        })}

                      </div>
                    </nav>
                  </div>
                )}
              </div>

              <aside className="col-lg-3">
                <div className="blog-list-sidebar">
                  <h3>Recent posts</h3>
                  <div className="blog-list-recent">
                    {sortedPosts.slice(0, 4).map((post) => (
                      <article key={post.id || post.slug}>
                        {post.image && (
                          <Link className="blog-list-recent-image" to={`/blog/${post.slug}`} tabIndex="-1" aria-hidden="true">
                            <img src={resolveBlogImageUrl(post.image)} alt="" loading="lazy" />
                          </Link>
                        )}
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
