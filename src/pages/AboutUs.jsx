import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";
import AutoSlider from "../components/AutoSlider";
import VideoStatsSection from "../components/VideoStatsSection";
import React from 'react';
import usePageInIt from "../hooks/usePageInit";
import SeoSection from "../components/SeoSection";
import CallToActionButton from "../components/CallToActionButton";
import CallToAction from "../components/CallToAction";


export default function AboutUs() {
    usePageInIt();
    return (
      <>
        <Helmet>
          <title>About Us | MarvMedia</title>
          <meta name="description" content="About us page" />
        </Helmet>

        <Breadcrumb title="About Us" current="About Us" />

        <VideoStatsSection />

        <div className="section aximo-section-padding6">
          <div className="container">
            <div className="aximo-section-title center title-description">
              <h2>
                <span className="aximo-title-animation">
                  Our Story
                  <span className="aximo-title-icon">
                    <img src="assets/images/v1/star2.png" alt="" />
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
                  <img src="assets/images/about/team1(1).jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.2s"
                >
                  <img src="assets/images/about/team2.jpg" alt="" />
                </div>
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.2s"
                >
                  <img src="assets/images/about/team6.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/images/about/team4.jpg" alt="" />
                  {/* <img src="assets/images/about/team5.jpg" alt="" /> */}
                </div>
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/images/about/team5.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-8">
                <div
                  className="aximo-story-thumb wow fadeInUpX"
                  data-wow-delay="0.4s"
                >
                  <img src="assets/images/about/team3.jpg" alt="" />
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
                    <img src="assets/images/v1/star2.png" alt="" />
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
                  name: "Andrew Mark",
                  role: "CEO & Founder",
                  img: "team1.png",
                },
                {
                  name: "Jack Taylor",
                  role: "Senior Designer",
                  img: "team2.png",
                },
                {
                  name: "Martine Joy",
                  role: "Project Manager",
                  img: "team3.png",
                },
                { name: "Adam Straw", role: "Web Developer", img: "team4.png" },
                {
                  name: "William Jack",
                  role: "Creative Director",
                  img: "team5.png",
                },
                { name: "Alex Tom", role: "UI/UX Designer", img: "team6.png" },
                {
                  name: "Robin Lesser",
                  role: "Chief Executive Officer",
                  img: "team7.png",
                },
                { name: "Sheikh David", role: "HR Director", img: "team8.png" },
              ].map(({ name, role, img }, index) => (
                <div className="col-xl-3 col-md-6" key={index}>
                  <div
                    className="aximo-team-wrap wow fadeInUpX"
                    data-wow-delay={`${index * 0.1}s`}
                  >
                    <div className="aximo-team-thumb">
                      <img src={`assets/images/team/${img}`} alt={name} />
                      <div className="aximo-social-icon team-social">
                        <ul>
                          <li>
                            <a
                              href="https://twitter.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://facebook.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-linkedin"></i>
                            </a>
                          </li>
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
              <CallToAction />
            </div>
          </div>
        </div>
      </>
    );
}
