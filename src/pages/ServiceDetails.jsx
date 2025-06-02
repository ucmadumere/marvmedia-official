import { useParams } from "react-router-dom";
import services from "../data/services";
import Breadcrumb from "../components/Breadcrumb";
import Testimonial from "../components/Testimonial";

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    if (!service) return <div>Service not found</div>;

    return (
        <>
            <Breadcrumb title="Service Details" path={[{ name: "Home", link: "/" }, { name: service.title }]} />

            <div className="section aximo-section-padding2 pb-0">
                <div className="container">
                    <div className="aximo-service-details-wrap">
                        <div className="aximo-service-details-thumb wow fadeInUpX" data-wow-delay="0.1s">
                            <img src={`/assets/images/service/${service.img}`} alt={service.title} />
                        </div>

                        <div className="row">
                            <div className="col-lg-8">
                                <div className="aximo-default-content">
                                    <h2 className="aximo-title-animation">
                                        {service.subtitle.split(" ").slice(0, 3).join(" ")}{" "}
                                        <span className="aximo-title-icon">
                                            <img src="/assets/images/v1/star2.png" alt="star" />
                                        </span>
                                        <br />
                                        {service.subtitle.split(" ")[3]}
                                        {service.subtitle.split(" ")[4]}
                                    </h2>


                                    {service.content.map((text, i) => (
                                        <p key={i}>{text}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="aximo-user-interface">
                                    <h3>1/ User Interface (UI):</h3>
                                    <ul>{service.userInterface.map((point, i) => <li key={i}>{point}</li>)}</ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="aximo-user-interface">
                                    <h3>2/ User Experience (UX):</h3>
                                    <ul>{service.userExperience.map((point, i) => <li key={i}>{point}</li>)}</ul>
                                </div>
                            </div>
                        </div>

                        <div className="aximo-faq-wrap">
                            <div className="row">
                                <div className="col-lg-5 offset-lg-1 order-lg-1">
                                    <div className="aximo-service-details-thumb2 wow fadeInRight" data-wow-delay="0.1s">
                                        <img src={`/assets/images/service/${service.img2}`} alt="process" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="aximo-default-content">
                                        <h2>
                                            <span className="aximo-title-animation">
                                                {service.approach.title}
                                                <span className="aximo-title-icon">
                                                    <img src="/assets/images/v1/star2.png" alt="star" />
                                                </span>
                                            </span>
                                        </h2>
                                        <p>{service.approach.header}</p>
                                    </div>

                                    <div className="aximo-our-approach">
                                        {service.approach.steps.map((step, i) => (
                                            <div className="aximo-iconbox-wrap5" key={i}>
                                                <div className="aximo-iconbox-icon5">
                                                    <i className={step.icon}></i>
                                                </div>
                                                <div className="aximo-iconbox-data5">
                                                    <h3>{step.title}</h3>
                                                    <ul>
                                                        {step.points.map((pt, idx) => (
                                                            <li key={idx}>{pt}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Testimonial />
        </>
    );
}
