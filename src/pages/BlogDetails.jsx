import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

export default function BlogDetails() {
  const { slug } = useParams();
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const post = blogData.find((item) => item.slug === slug);

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
            <div className="col-lg-8">
              <div className="post-thumbnail">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="single-post-content-wrap">
                <div className="post-meta">
                  <div className="post-date">{currentDate}</div>
                </div>
                <div className="entry-content">
                  <h3>{post.title}</h3>
                  {post.content.map((block, i) => {
                    if (block.type === "p") return <p key={i}>{block.text}</p>;
                    if (block.type === "h4")
                      return <h4 key={i}>{block.text}</h4>;
                    if (block.type === "h1")
                      return <h1 key={i}>{block.text}</h1>;
                    if (block.type === "blockquote")
                      return <blockquote key={i}>{block.text}</blockquote>
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
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
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
