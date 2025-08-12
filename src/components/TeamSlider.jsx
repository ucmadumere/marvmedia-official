import { Link } from "react-router-dom";

export default function TeamSlider() {
    const teamMembers = [
      { name: "Marvel Iwezue ", title: "Founder", img: "team1.png" },
      {
        name: "Salome",
        title: "Social Media Executive",
        img: "sally.jpg",
      },
      {
        name: "Abigail",
        title: "Social Media Executive",
        img: "abigail.jpg",
      },
      {
        name: "Saviour",
        title: "Partnership & Programs",
        img: "saviour.png",
      },
      {
        name: "Increase",
        title: "Intern",
        img: "increase.png",
      },
      {
        name: "PSI",
        title: "Recruitment Partner",
        img: "psi.png",
      },
      { name: "Gabriel", title: "Legal Adviser", img: "gabriel.png" },
      { name: "Ugochukwu", title: "Technical Partner", img: "team4.png" },
    ];

    return (
        <>
            {/* Team Section */}
            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            We have a team of
                            <span className="aximo-title-animation">
                                creative people
                                <span className="aximo-title-icon">
                                    {/* <img src="/assets/images/v1/star2.png" alt="star-icon" /> */}
                                </span>
                            </span>
                        </h2>
                    </div>

                    <div className="row">
                        {teamMembers.map((member, i) => (
                            <div className="col-xl-3 col-md-6" key={i}>
                                <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay={`${0.1 * (i + 1)}s`}>
                                    <div className="aximo-team-thumb">
                                        <img src={`/assets/images/team/${member.img}`} alt={member.name} />
                                        <div className="aximo-social-icon team-social">
                                            <ul>
                                                {["linkedin"].map((platform, index) => (
                                                    <li key={index}>
                                                        <a href="#">
                                                            <i className={`icon-${platform}`}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="aximo-team-data">
                                        <Link to="/single-team">
                                            <h3>{member.name}</h3>
                                        </Link>
                                        <p>{member.title}</p>
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
