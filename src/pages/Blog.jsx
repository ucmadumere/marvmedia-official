import { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

export default function Blog() {
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Sort blogData by date (newest first)
  const sortedPosts = [...blogData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = sortedPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>Blog | MarvMedia</title>
        <meta name="description" content="Blog post" />
      </Helmet>

      <Breadcrumb title="Blog" current="Blog" />
      <div className="section aximo-section-padding2">
        <div className="container">
          <div className="row">
            {/* Main Blog Posts */}
            <div className="col-lg-8">
              <div className="row">
                {selectedPosts.map((post, i) => (
                  <div className="col-xl-6" key={i}>
                    <div
                      className="single-post-item wow fadeInUpX"
                      data-wow-delay={`0.${i + 1}s`}
                    >
                      <div className="post-thumbnail">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <div className="post-date">{currentDate}</div>
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <h3 className="entry-title">{post.title}</h3>
                        </Link>
                        <Link
                          className="post-read-more"
                          to={`/blog/${post.slug}`}
                        >
                          Read more{" "}
                          <img
                            src="/assets/images/icon/arrow-right.svg"
                            alt="arrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="aximo-navigation">
                <nav className="navigation pagination" aria-label="Posts">
                  <div className="nav-links">
                    {Array.from({ length: totalPages }, (_, i) => {
                      const pageNum = i + 1;
                      return currentPage === pageNum ? (
                        <span
                          key={i}
                          aria-current="page"
                          className="page-numbers current"
                        >
                          {pageNum}
                        </span>
                      ) : (
                        <a
                          key={i}
                          className="page-numbers"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(pageNum);
                          }}
                        >
                          {pageNum}
                        </a>
                      );
                    })}

                    {currentPage < totalPages && (
                      <a
                        className="next page-numbers"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }}
                      >
                        <img
                          src="/assets/images/icon/arrow-right8.svg"
                          alt="next"
                        />
                      </a>
                    )}
                  </div>
                </nav>
              </div>
            </div>

            {/* Sidebar (Recent Posts) */}
            <div className="col-lg-4">
              <div className="right-sidebar">
                <div className="widget aximo_recent_posts_Widget">
                  <h3 className="wp-block-heading">Recent Posts:</h3>
                  {sortedPosts.slice(0, 3).map((post, i) => (
                    <div className="post-item" key={i}>
                      <div className="post-thumb">
                        <Link to={`/blog/${post.slug}`}>
                          <img src={post.image} alt={post.title} />
                        </Link>
                      </div>
                      <div className="post-text">
                        <div className="post-date">{post.date}</div>
                        <Link className="post-title" to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
