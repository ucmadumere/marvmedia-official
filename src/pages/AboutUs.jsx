import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";
import AutoSlider from "../components/AutoSlider";
import VideoStatsSection from "../components/VideoStatsSection";
import usePageInIt from "../hooks/usePageInit";
import SeoSection from "../components/SeoSection";

export default function AboutUs() {
  usePageInIt();
  return (
    <>
        <Seo
          title="About Marv Media"
          description="Discover Marv Media's journey from a phone-led creative idea to an African agency helping brands become seen, heard, and profitable."
          path="/about-us"
          image="/assets/images/about/team1(1).webp"
          breadcrumbs={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about-us" }]}
        />

        <Breadcrumb title="About Us" current="About Us" />

        <VideoStatsSection />

        <div className="section aximo-section-padding6">
          <div className="container">
            <div className="aximo-section-title center title-description">
              <h2>
                <span className="aximo-title-animation">
                  Our Story
                  <span className="aximo-title-icon">
                    {/* <img src="assets/images/v1/star2.png" alt="" /> */}
                  </span>
                </span>
              </h2>
              <p>
                Our story started simply: just a person and an Android phone.
                But then, that one person became two, two became four, then
                eight, and we are still on that path of natural growth today.We
                ran on pure passion and were thrilled to see our clients
                succeed.{" "}
              </p>
              <p>
                We went from that one phone to a studio full of professional
                gadgets, with each piece marking a new step in our journey.
                Looking back, it's wild how that initial idea has grown into a
                long line of happy clients and successful campaigns. It just
                goes to show that something truly big can come from a very
                modest, humble beginning.
              </p>
              <p>
                Our journey is a testament to what you can build with pure hard
                work and a true desire to connect. We truly believe that content
                can redefine a brand's entire trajectory, and we've built the
                systems to make that powerful transformation a reality.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.1s"
                >
                  <img
                    src="/assets/images/about/team1(1).webp"
                    srcSet="/assets/images/about/team1(1)-800.webp 800w, /assets/images/about/team1(1).webp 1067w"
                    sizes="(max-width: 991px) 100vw, 66vw"
                    width="1067"
                    height="744"
                    loading="lazy"
                    alt="Marv Media team"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="/assets/images/about/team2.webp"
                    srcSet="/assets/images/about/team2-800.webp 800w, /assets/images/about/team2.webp 1200w"
                    sizes="(max-width: 991px) 100vw, 33vw"
                    width="1200"
                    height="837"
                    loading="lazy"
                    alt="Marv Media team at work"
                  />
                </div>
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="/assets/images/about/team6.webp"
                    srcSet="/assets/images/about/team6-800.webp 800w, /assets/images/about/team6.webp 1200w"
                    sizes="(max-width: 991px) 100vw, 33vw"
                    width="1200"
                    height="800"
                    loading="lazy"
                    alt="Marv Media studio session"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.3s"
                >
                  <img
                    src="/assets/images/about/team4.webp"
                    srcSet="/assets/images/about/team4-800.webp 800w, /assets/images/about/team4.webp 1200w"
                    sizes="(max-width: 991px) 100vw, 33vw"
                    width="1200"
                    height="800"
                    loading="lazy"
                    alt="Marv Media creative team"
                  />
                </div>
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.3s"
                >
                  <img
                    src="/assets/images/about/team5.webp"
                    srcSet="/assets/images/about/team5-800.webp 800w, /assets/images/about/team5.webp 1200w"
                    sizes="(max-width: 991px) 100vw, 33vw"
                    width="1200"
                    height="800"
                    loading="lazy"
                    alt="Marv Media production team"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.4s"
                >
                  <img
                    src="/assets/images/about/team3.webp"
                    srcSet="/assets/images/about/team3-800.webp 800w, /assets/images/about/team3.webp 1600w"
                    sizes="(max-width: 991px) 100vw, 66vw"
                    width="1600"
                    height="1067"
                    loading="lazy"
                    alt="Marv Media team gathering"
                  />
                </div>
              </div>
            </div>

            <div className="aximo-story-content">
              <div className="row">
                <div className="col-lg-6">
                  <h3>Our core vision</h3>
                  <p>
                    Leading Africa's creative space with digital solutions that
                    inspire impact.
                  </p>
                  {/* <p>Our team consists of experienced designers, developers. We have a wide variety of skills and backgrounds, allowing us to tackle projects of all sizes and complexities. We believe in the power of imagination and innovation.</p> */}
                </div>
                <div className="col-lg-6">
                  <h3>Our main mission</h3>
                  <p>
                    Empowering brands to be seen, heard, and profitable with
                    strategic content and creative marketing while nurturing a
                    dynamic creative force.
                  </p>
                  {/* <p>We are committed to creating designs that inspire, connect & our clients in the marketplace. Our focus is on understanding our clients' unique needs and delivering designs that not only meet but exceed their expectations.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <AutoSlider />
        <SeoSection />

        <div className="section aximo-section-padding3 pt-0">
          <div className="container">
            <div className="aximo-section-title center">
              <h2>
                Meet the team
                <span className="aximo-title-animation">
                  {/* creative people */}
                  <span className="aximo-title-icon">
                    {/* <img src="assets/images/v1/star2.png" alt="" /> */}
                  </span>
                </span>
              </h2>
              <p className="mt-4">
                We’re a lean but powerful team of content creators, designers,
                strategists, and managers. We believe in collaborative creation,
                open communication, and excellence in execution. Each team
                member brings expertise and energy to every project, ensuring
                the <em>Marv Effect</em> is felt in every deliverable.
              </p>
            </div>
            <div className="row">
              {/* Team members */}
              {[
                {
                  name: "Marvel Iwezue",
                  role: "Founder",
                  img: "marv2.webp",
                  width: 800,
                  height: 1200,
                },
                {
                  name: "Salome",
                  role: "Social Media Executive",
                  img: "sally.webp",
                  width: 800,
                  height: 1200,
                },
                {
                  name: "Abigail",
                  role: "Social Media Executive",
                  img: "abigail.webp",
                  width: 800,
                  height: 1200,
                },
                {
                  name: "Saviour",
                  role: "Partnership & Programs",
                  img: "saviour.webp",
                  width: 800,
                  height: 1200,
                },
                {
                  name: "Increase",
                  role: "Intern",
                  img: "increase.webp",
                  width: 800,
                  height: 827,
                },
                { name: "PSI", role: "Recruitment Partner", img: "psi.png" },
                {
                  name: "Gabriel",
                  role: "Legal Adviser",
                  img: "gabriel.webp",
                  width: 800,
                  height: 1067,
                },
                {
                  name: "Ugochukwu",
                  role: "Technical Partner",
                  img: "team7.webp",
                  width: 800,
                  height: 800,
                },
              ].map(({ name, role, img, width, height }, index) => (
                <div className="col-xl-3 col-md-6" key={index}>
                  <div
                    className="aximo-team-wrap wow fadeInUpX"
                    data-wow-delay={`${index * 0.1}s`}
                  >
                    <div className="aximo-team-thumb">
                      <img
                        src={`/assets/images/team/${img}`}
                        alt={name}
                        width={width}
                        height={height}
                        loading="lazy"
                      />
                      <div className="aximo-social-icon team-social">
                        <ul>
                          {/* <li>
                            <a
                              href="https://twitter.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-twitter"></i>
                            </a>
                          </li> */}
                          {/* <li>
                            <a
                              href="https://facebook.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-facebook"></i>
                            </a>
                          </li> */}
                          {/* <li>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-instagram"></i>
                            </a>
                          </li> */}
                          {/* <li>
                            <a
                              href="https://www.linkedin.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-linkedin"></i>
                            </a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="aximo-team-data">
                      <a href="/single-team">
                        <h3>{name}</h3>
                      </a>
                      <p>{role}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* <CallToAction /> */}
            </div>
          </div>
        </div>
    </>
  );
}
