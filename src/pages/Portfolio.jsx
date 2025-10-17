import React, { useState } from "react";
import portfolioData from "../data/portfolioData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

const ITEMS_PER_PAGE = 6;

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(portfolioData.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = portfolioData.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      <Helmet>
        <title>Marvmedia | FAQ</title>
        <meta name="description" content="Faq" />
      </Helmet>

      <Breadcrumb title="Portfolio" current="Portfolio" />
      <div className="section aximo-project-page aximo-section-padding5">
        <div className="aximo-section-title center pt-4">
          <h3>A work that speaks for itself</h3>
          <p>
            We’ve helped over 50 brands transform their online presence. From
            compelling content to impactful campaigns, here are some highlights
            from our journey.
          </p>
        </div>
        <div className="container">
          <div className="row">
            {currentItems.map((item, i) => (
              <div className="col-lg-6" key={item.id}>
                <div
                  className="aximo-project-thumb wow fadeInUpX"
                  data-wow-delay={`${0.1 * (i + 1)}s`}
                >
                  <img src={item.mainImage} alt={item.title} />
                  <div className="aximo-project-wrap">
                    <div className="aximo-project-data">
                      <Link to={`/portfolio/${item.slug}`}>
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.summary}</p>
                    </div>
                    <Link
                      className="aximo-project-icon"
                      to={`/portfolio/${item.slug}`}
                    >
                      {/* Your SVG icon here */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* <div className="aximo-navigation">
            <nav className="navigation pagination">
              <div className="nav-links">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`page-numbers ${
                      currentPage === index + 1 ? "current" : ""
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </nav>
          </div> */}

          {/* new */}
          <div
            className="aximo-navigation"
            style={{ textAlign: "center", marginTop: "30px" }}
          >
            <nav
              className="navigation pagination"
              aria-label="Posts"
              style={{ display: "inline-block" }}
            >
              <div
                className="nav-links"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {/* Previous Button */}
                {currentPage > 1 && (
                  <button
                    className="prev page-numbers"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    aria-label="Previous Page"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/assets/images/icon/arrow-right8.svg"
                      alt="Previous"
                      style={{
                        width: "18px",
                        height: "18px",
                        transform: "rotate(180deg)",
                      }}
                    />
                  </button>
                )}

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => {
                  const isCurrent = currentPage === index + 1;
                  return (
                    <button
                      key={index}
                      className={`page-numbers ${isCurrent ? "current" : ""}`}
                      onClick={() => setCurrentPage(index + 1)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "6px 10px",
                        fontSize: "15px",
                        color: isCurrent ? "#fff" : "#000",
                        backgroundColor: isCurrent ? "#08FAA4" : "transparent",
                        borderRadius: "6px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {index + 1}
                    </button>
                  );
                })}

                {/* Next Button */}
                {currentPage < totalPages && (
                  <button
                    className="next page-numbers"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    aria-label="Next Page"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/assets/images/icon/arrow-right8.svg"
                      alt="Next"
                      style={{ width: "18px", height: "18px" }}
                    />
                  </button>
                )}
              </div>
            </nav>
          </div>

          {/* new */}
        </div>
      </div>
    </>
  );
}
