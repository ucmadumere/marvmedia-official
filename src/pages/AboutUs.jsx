import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";
import AutoSlider from "../components/AutoSlider";
import VideoStatsSection from "../components/VideoStatsSection";
import React from 'react';
import usePageInit from "../hooks/usePageInIt";

export default function AboutUs() {
    usePageInit();
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
                        <p>What started as a solo freelance journey became a creative agency birthed from lived experience, growth, and grit. </p> 
                        <p>Marv Media was founded by a creative who understands the trenches?from unpaid internships to working with top brands. We've helped individuals transition from freelancers to full-fledged agency owners, and businesses go from content chaos to clarity.</p> 
                        <p>We believe content can transform a brand?s entire trajectory?and we?ve built systems that make that transformation possible.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.1s">
                                <img src="assets/images/about/story1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.2s">
                                <img src="assets/images/about/story2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.3s">
                                <img src="assets/images/about/story3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="aximo-story-thumb wow fadeInUpX" data-wow-delay="0.4s">
                                <img src="assets/images/about/story4.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="aximo-story-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Our core vision</h3>
                                <p>Leading Africa's creative space with digital solutions that inspire impact.</p>
                                {/* <p>Our team consists of experienced designers, developers. We have a wide variety of skills and backgrounds, allowing us to tackle projects of all sizes and complexities. We believe in the power of imagination and innovation.</p> */}
                            </div>
                            <div className="col-lg-6">
                                <h3>Our main mission</h3>
                                <p>Empowering brands to be seen, heard, and profitable with strategic content and creative marketing while nurturing a dynamic creative force.</p>
                                {/* <p>We are committed to creating designs that inspire, connect & our clients in the marketplace. Our focus is on understanding our clients' unique needs and delivering designs that not only meet but exceed their expectations.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AutoSlider />

            <div className="section aximo-section-padding3">
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
                        <p className="mt-4">We’re a lean but powerful team of content creators, designers, strategists, and managers. We believe in collaborative creation, open communication, and excellence in execution. Each team member brings expertise and energy to every project, ensuring the Marv Effect is felt in every deliverable.</p>
                    </div>
                    <div className="row">
                        {/* Team members */}
                        {[
                            { name: "Andrew Mark", role: "CEO & Founder", img: "team1.png" },
                            { name: "Jack Taylor", role: "Senior Designer", img: "team2.png" },
                            { name: "Martine Joy", role: "Project Manager", img: "team3.png" },
                            { name: "Adam Straw", role: "Web Developer", img: "team4.png" },
                            { name: "William Jack", role: "Creative Director", img: "team5.png" },
                            { name: "Alex Tom", role: "UI/UX Designer", img: "team6.png" },
                            { name: "Robin Lesser", role: "Chief Executive Officer", img: "team7.png" },
                            { name: "Sheikh David", role: "HR Director", img: "team8.png" },
                        ].map(({ name, role, img }, index) => (
                            <div className="col-xl-3 col-md-6" key={index}>
                                <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay={`${index * 0.1}s`}>
                                    <div className="aximo-team-thumb">
                                        <img src={`assets/images/team/${img}`} alt={name} />
                                        <div className="aximo-social-icon team-social">
                                            <ul>
                                                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="icon-twitter"></i></a></li>
                                                <li><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></a></li>
                                                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a></li>
                                                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin"></i></a></li>
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
                    </div>
                </div>
            </div>
        </>
    );
}
