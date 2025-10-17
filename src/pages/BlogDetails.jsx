import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";
import { useEffect } from "react";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogData.find((item) => item.slug === slug);
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (!post) return;

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
  }, [post]);


  

  if (!post) {
    return (
      <div className="section aximo-section-padding2">
        <div className="container text-center">
          <h2>404 - Blog Not Found</h2>
          <p>The blog post you're looking for does not exist.</p>
          <Link to="/" className="btn">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog Detail | MarvMedia</title>
        <meta name="description" content="Blog post" />
      </Helmet>

      <Breadcrumb title="Blog" current="Blog" />
      <div className="section post-details-page aximo-section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {/* <div className="post-thumbnail">
                <img src={post.image} alt={post.title} />
              </div> */}
              <div
                className="post-thumbnail"
                style={{
                  width: "100%",
                  height: "350px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  backgroundColor: "#f8f8f8",
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // no cropping!
                    borderRadius: "12px",
                  }}
                />
              </div>

              <div className="single-post-content-wrap">
                <div className="post-meta">
                  <div className="post-date">{post.date}</div>
                </div>
                <div className="entry-content">
                  <h3>{post.title}</h3>
                  {post.content.map((block, i) => {
                    if (block.type === "p") return (
                      <p
                        key={i}
                        dangerouslySetInnerHTML={{ __html: block.text }}
                        style={{ lineHeight: "1.6", color: "#555" }}
                      >
                        {/* {block.text} */}
                      </p>
                    );
                    if (block.type === "h4")
                      return <h4 key={i}>{block.text}</h4>;
                    if (block.type === "h1")
                      return <h1 key={i}>{block.text}</h1>;
                    if (block.type === "blockquote")
                      return <blockquote key={i}>{block.text}</blockquote>;
                    if (block.type === "ul") {
                      return (
                        <ul
                          key={i}
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "1.5rem",
                            marginBottom: "1rem",
                            color: "#7e7e7e", // optional if you want black text
                          }}
                        >
                          {block.children.map((item, idx) => (
                            <li
                              key={idx}
                              style={{
                                marginBottom: "0.5rem",
                                listStyleType: "disc",
                              }}
                              dangerouslySetInnerHTML={{ __html: item }}
                            >
                              {/* {item} */}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "html")
                      return (
                        <div
                          key={i}
                          dangerouslySetInnerHTML={{ __html: block.text }}
                        ></div>
                      );
                      if (block.type === "instagram") {
                        return (
                          <div
                            key={i}
                            style={{
                              margin: "1.5rem 0",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <blockquote
                              className="instagram-media"
                              data-instgrm-permalink={block.url}
                              data-instgrm-version="14"
                              style={{
                                // background: "#FFF",
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
                        );
                      }

                    if (block.type === "image" || block.type === "img")
                      return (
                        <div
                          key={i}
                          style={{
                            margin: "1.5rem 0",
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={block.src}
                            alt={block.alt || "Post image"}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "400px",
                              height: "100%",
                              borderRadius: "10px",
                            }}
                          />
                        </div>
                      );
                    return null;
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="right-sidebar">
                <div className="widget aximo_recent_posts_Widget">
                  <h3 className="wp-block-heading">Recent Posts:</h3>
                  {blogData.slice(0, 3).map((item, i) => (
                    <div className="post-item" key={i}>
                      <div className="post-thumb">
                        <Link to={`/blog/${item.slug}`}>
                          <img src={item.image} alt={item.title} />
                        </Link>
                      </div>
                      <div className="post-text">
                        <div className="post-date">{item.date}</div>
                        <Link className="post-title" to={`/blog/${item.slug}`}>
                          {item.title.slice(0, 40)}...
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
