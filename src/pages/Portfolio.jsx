import React, { useState } from "react";
import portfolioData from "../data/portfolioData";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";

const ITEMS_PER_PAGE = 6;

const getSrcSet = (image) =>
  image.endsWith(".webp")
    ? `${image.replace(/\.webp$/, "-800.webp")} 800w, ${image} 1600w`
    : undefined;

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(portfolioData.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = portfolioData.slice(start, start + ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Seo
        title="Creative Portfolio and Client Work"
        description="Explore Marv Media's branding, content creation, social media, event marketing, and campaign work for ambitious brands."
        path="/portfolio"
        image={portfolioData[0]?.mainImage}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]}
      />

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
                  <img
                    src={item.mainImage}
                    srcSet={getSrcSet(item.mainImage)}
                    sizes="(max-width: 991px) 100vw, 50vw"
                    width={item.mainImageWidth}
                    height={item.mainImageHeight}
                    loading="lazy"
                    alt={item.title}
                  />
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

          {totalPages > 1 && (
            <div className="aximo-navigation site-pagination">
              <nav className="navigation pagination" aria-label="Portfolio pages">
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
                        aria-label={`Go to portfolio page ${pageNumber}`}
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
      </div>
    </>
  );
}
