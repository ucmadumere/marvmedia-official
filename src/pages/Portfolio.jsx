import React, { useState } from "react";
import portfolioData from "../data/portfoliodata";
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
          <div className="aximo-navigation">
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
          </div>
        </div>
      </div>
    </>
  );
}
