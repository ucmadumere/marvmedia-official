import { Link } from "react-router-dom";
import ProjectSlider from "../components/ProjectSlider";
import TeamSlider from "../components/TeamSlider";
import FAQAccordion from "../components/FAQAccordion";
import VideoStatsSection from "../components/VideoStatsSection";
import AutoSlider from "../components/AutoSlider";
import usePageInit from "../hooks/usePageInIt";

export default function Home() {
    usePageInit();
    return (
        <>
            <div className="aximo-hero-section dark-bg">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="aximo-hero-content">
                                <h1>
                                    <span className="aximo-title-animation">
                                        A creative <img src="/assets/images/v1/star.png" alt="" />
                                    </span>{" "}
                                    design studio
                                </h1>

                                <p>
                                    We're a creative design studio specializing in meeting the needs of the new
                                    generation. We offer innovative and cutting-edge design solutions to help our
                                    clients stand out in today's fast-paced world.
                                </p>
                                <div className="aximo-hero-user-wrap">
                                    <div className="aximo-hero-user-thumb">
                                        <div className="aximo-hero-user-thumb-item wow fadeInUpX" data-wow-delay="0s">
                                            <img src="/assets/images/v1/user1.png" alt="" />
                                        </div>
                                        <div className="aximo-hero-user-thumb-item wow fadeInUpX" data-wow-delay="0.25s">
                                            <img src="/assets/images/v1/user3.png" alt="" />
                                        </div>
                                        <div className="aximo-hero-user-thumb-item wow fadeInUpX" data-wow-delay="0.4s">
                                            <img src="/assets/images/v1/user2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="aximo-hero-user-data">
                                        <p>Believed by more than a thousand people</p>
                                    </div>
                                </div>
                                <Link className="aximo-call-btn" to="/contact-us">
                                    Book a free consultation <i className="icon-call"></i>
                                </Link>
                                <div className="aximo-hero-shape">
                                    <img src="/assets/images/v1/shape1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="aximo-hero-thumb" data-aos="fade-left" data-aos-delay="200">
                                <img src="/assets/images/v1/hero-thumb.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section aximo-section-padding4">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            We provide effective
                            <span className="aximo-title-animation">
                                design solutions
                                <span className="aximo-title-icon">
                                    <img src="/assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="aximo-service-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.1s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-design-tools"></i>
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>UI/UX Design</h3>
                                        <p>
                                            Focusing on user interface (UI) and user experience (UX) design to enhance the
                                            usability and accessibility of digital products & apps.
                                        </p>
                                        <Link className="aximo-icon" to="/service">
                                            <img src="/assets/images/icon/arrow-right.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.2s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-branding"></i>
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>Graphic Design</h3>
                                        <p>
                                            Creating visual elements such as logos, branding materials, brochures, and
                                            other marketing collateral.
                                        </p>
                                        <Link className="aximo-icon" to="/service">
                                            <img src="/assets/images/icon/arrow-right.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.3s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-web"></i>
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>Web Design</h3>
                                        <p>
                                            Designing and developing websites to ensure they are visually appealing,
                                            user-friendly, and functional.
                                        </p>
                                        <Link className="aximo-icon" to="/service">
                                            <img src="/assets/images/icon/arrow-right.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.4s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-design-thinking"></i>
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>Motion Graphics</h3>
                                        <p>
                                            Creating animated graphics and videos for various purposes including
                                            marketing, branding, and entertainment.
                                        </p>
                                        <Link className="aximo-icon" to="/service">
                                            <img src="/assets/images/icon/arrow-right.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <VideoStatsSection />

            <ProjectSlider />

            <FAQAccordion />

            {/* Testimonials Section */}
            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            Clients are always{" "}
                            <span className="aximo-title-animation">
                                satisfied with us
                                <span className="aximo-title-icon">
                                    <img src="/assets/images/v1/star2.png" alt="" />
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="row">
                        {[
                            {
                                name: "William Jack",
                                title: "Founder@XYZ",
                                img: "t_thumb1.png",
                                heading: "Super customer service!",
                                text: `Excellent customer service and I was really impressed and happy with my purchase especially 
          as it was a last minute order which got to me in time, and when it arrived I was very happy with the design.`,
                                delay: "0.1s",
                            },
                            {
                                name: "Smith Align",
                                title: "Businessman",
                                img: "t_thumb2.png",
                                heading: "Exceptional creativity and vision",
                                text: `Working with Mthemeus was a game-changer for our brand. Their creativity breathed new life 
          into our visuals. The logo perfectly captures our essence.`,
                                delay: "0.2s",
                            },
                            {
                                name: "Milano Joe",
                                title: "Creative Director",
                                img: "t_thumb3.png",
                                heading: "Innovative and professional",
                                text: `Their team is not only incredibly talented but also highly professional. 
          They listened and brought our ideas to life better than we imagined.`,
                                delay: "0.3s",
                            },
                            {
                                name: "Danial Mark",
                                title: "Marketing Director",
                                img: "t_thumb4.png",
                                heading: "Transformed our brand",
                                text: `Our partnership with Mthemeus transformed our brand. 
          Their branding and design work elevated our presence to a new level.`,
                                delay: "0.4s",
                            },
                        ].map((testimonial, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className="aximo-testimonial-wrap wow fadeInUpX" data-wow-delay={testimonial.delay}>
                                    <div className="aximo-testimonial-rating">
                                        <ul>
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i}>
                                                    <i className="icon-star"></i>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="aximo-testimonial-data">
                                        <h3>{testimonial.heading}</h3>
                                        <p>{testimonial.text}</p>
                                    </div>
                                    <div className="aximo-testimonial-author">
                                        <div className="aximo-testimonial-author-thumb">
                                            <img src={`/assets/images/v1/${testimonial.img}`} alt={testimonial.name} />
                                        </div>
                                        <div className="aximo-testimonial-author-data">
                                            <p>
                                                {testimonial.name} <span>{testimonial.title}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AutoSlider />

            <TeamSlider />
        </>
    );
}
