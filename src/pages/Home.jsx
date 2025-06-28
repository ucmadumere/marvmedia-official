import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProjectSlider from "../components/ProjectSlider";
import TeamSlider from "../components/TeamSlider";
import FAQAccordion from "../components/FAQAccordion";
import VideoStatsSection from "../components/VideoStatsSection";
import AutoSlider from "../components/AutoSlider";
import Testimonial from "../components/Testimonial";
import CallToActionButton from "../components/CallToActionButton";
// import usePageInit from "../hooks/usePageInIt";

export default function Home() {
    // usePageInit();
    return (
        <>
            <Helmet>
                <title>Home | Marvmedia</title>
                <meta name="description" content="Welcome to MarvMedia's homepage." />
            </Helmet>
            <div className="aximo-hero-section dark-bg">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="aximo-hero-content">
                                <h1>
                                    <span className="aximo-title-animation">
                                        This is &nbsp;<img src="/assets/images/v1/star.png" alt="" />
                                    </span>{" "} <br />
                                    Marv Media
                                </h1>

                                <p>
                                We are a creative agency helping African entrepreneurs, thought leaders, and creatives communicate with clarity, consistency, and confidence. 
                                </p>
                                {/* <div className="aximo-hero-user-wrap">
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
                                </div> */}
                                {/* <Link className="aximo-call-btn" to="/contact-us">
                                    Book a discovery call<i className="icon-call"></i>
                                </Link> */}
                                <CallToActionButton />
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
                            What We Do
                            <span className="aximo-title-animation">
                                {/* design solutions */}
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
                                        <h3>Social Media Management</h3>
                                        <p>
                                        We help you show up consistently with platform-tailored content, strategy, and community engagement that builds real connection.
                                        </p>
                                        {/* <Link className="aximo-icon" to="/service">
                                            <img src="/assets/images/icon/arrow-right.svg" alt="" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.2s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-branding"></i>
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3> Creative Content Production</h3>
                                        <p>
                                        From reels to campaigns and events, we produce scroll-stopping videos and visuals that tell your brand story.
                                        </p>
                                        {/* <Link className="aximo-icon" to="/service">
                                            <img src="/assets/images/icon/arrow-right.svg" alt="" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.3s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-web"></i>
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>Branding & Strategy</h3>
                                        <p>
                                        We craft creative brand identities and smart strategies that position you to stand out, sell more, and scale with purpose.
                                        </p>
                                        {/* <Link className="aximo-icon" to="/service">
                                            <img src="/assets/images/icon/arrow-right.svg" alt="" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="aximo-iconbox-wrap wow fadeInUpX" data-wow-delay="0.4s">
                                    <div className="aximo-iconbox-icon">
                                        <i className="icon-design-thinking"></i>
                                    </div>
                                    <div className="aximo-iconbox-data">
                                        <h3>Web & Tech Solutions</h3>
                                        <p>
                                        We design sleek websites and automate systems to help your brand run smoother, faster, and smarter online.
                                        </p>
                                        {/* <Link className="aximo-icon" to="/service">
                                            <img src="/assets/images/icon/arrow-right.svg" alt="" />
                                        </Link> */}
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
            <Testimonial />

            <AutoSlider />

            <TeamSlider />
        </>
    );
}
