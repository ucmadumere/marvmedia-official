import { useParams, Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

export default function PortfolioDetails() {
  const { slug } = useParams();
  const project = portfolioData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="section aximo-section-padding2 text-center">
        <h2>404 - Project Not Found</h2>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Marvmedia | Portfolio Detail</title>
        <meta name="description" content="Faq" />
      </Helmet>

      <Breadcrumb title="Portfolio Detail" current="Portfolio Detail" />
      <div className="aximo-project-single-section">
        <div className="container">
          <div className="aximo-project-single-thumb">
            <img src={project.mainImage} alt={project.title} />
          </div>

          <div className="aximo-project-info-wrap">
            <div className="aximo-project-info">
              <h3>Client:</h3>
              <p>{project.client}</p>
            </div>
            <div className="aximo-project-info">
              <h3>Date:</h3>
              <p>{project.date}</p>
            </div>
            <div className="aximo-project-info">
              <h3>Duration:</h3>
              <p>{project.duration}</p>
            </div>
          </div>

          <div className="aximo-project-single-wrap">
            <div className="row">
              <div className="col-lg-4 order-lg-2">
                <div className="aximo-project-single-thumb2">
                  <img src={project.sideImage} alt={project.title} />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="aximo-default-content m-right-gap">
                  <h2>
                    How we did it{" "}
                    <span className="aximo-title-animation">
                      <span className="aximo-title-icon">
                        <img src="/assets/images/v1/star2.png" alt="star" />
                      </span>
                    </span>
                  </h2>
                  <p>{project.intro}</p>
                  <div className="aximo-resolve-project-wrap">
                    {project.steps.map((step, index) => (
                      <div className="aximo-resolve-project-item" key={index}>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
