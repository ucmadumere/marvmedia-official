import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import portfolioData from "../data/portfolioData";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

export default function PortfolioDetails() {
  const { slug } = useParams();
  const project = portfolioData.find((item) => item.slug === slug);

  useEffect(() => {
    if (!project) return;

    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        setTimeout(() => window.instgrm.Embeds.process(), 300);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [project]);

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
        <meta name="description" content="Portfolio Detail" />
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
              <div className="col-lg-12">
                <div className="aximo-default-content m-right-gap">
                  <p dangerouslySetInnerHTML={{ __html: project.intro }} />

                  {/* Instagram Embed */}
                  {project.instagram && (
                    <div
                      style={{
                        margin: "2rem 0",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={project.instagram}
                        data-instgrm-version="14"
                        style={{
                          background: "#FFF",
                          border: 0,
                          borderRadius: "3px",
                          boxShadow:
                            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                          margin: "1px auto",
                          maxWidth: "540px",
                          minWidth: "326px",
                          padding: 0,
                          width: "100%",
                        }}
                      ></blockquote>
                    </div>
                  )}

                  <div className="aximo-resolve-project-wrap">
                    {/* {project.steps.map((step, index) => (
                      <div className="aximo-resolve-project-item" key={index}>
                        <h3>{step.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: step.desc }} />
                      </div>
                    ))} */}
                    {project.steps.map((step, index) => {
                      // Case 1: Instagram reel
                      if (step.instagram) {
                        return (
                          <div
                            key={index}
                            style={{
                              margin: "2rem 0",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                margin: "2rem 0",
                              }}
                            >
                              <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={step.instagram}
                                data-instgrm-version="14"
                                style={{
                                  maxWidth: "800px",
                                  width: "100%",
                                  border: 0,
                                  margin: 0,
                                  background: "transparent",
                                  boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                                  borderRadius: "12px",
                                  overflow: "hidden",
                                }}
                              ></blockquote>
                            </div>
                          </div>
                        );
                      }

                      // Case 2: Regular step (title + description)
                      return (
                        <div className="aximo-resolve-project-item" key={index}>
                          {step.title && <h3>{step.title}</h3>}
                          {step.desc && (
                            <p
                              dangerouslySetInnerHTML={{ __html: step.desc }}
                            />
                          )}
                        </div>
                      );
                    })}
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
