import teamMembers from "../data/teamMembers";

export default function TeamSlider() {

    return (
        <>
            {/* Team Section */}
            <div className="section aximo-section-padding3">
                <div className="container">
                    <div className="aximo-section-title center">
                        <h2>
                            We are a team of
                            <span className="aximo-title-animation">
                                creatives
                                <span className="aximo-title-icon">
                                    {/* <img src="/assets/images/v1/star2.png" alt="star-icon" /> */}
                                </span>
                            </span>
                        </h2>
                    </div>

                    <div className="row">
                        {teamMembers.map((member, i) => (
                            <div className="col-6 col-md-6 col-xl-3 team-member-column" key={member.name}>
                                <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay={`${0.1 * (i + 1)}s`}>
                                    <div className="aximo-team-thumb">
                                        <img
                                          src={`/assets/images/team/${member.img}`}
                                          alt={member.name}
                                          width={member.width}
                                          height={member.height}
                                          loading="lazy"
                                          style={{ objectPosition: member.focus }}
                                        />
                                    </div>
                                    <div className="aximo-team-data">
                                        <h3>{member.name}</h3>
                                        <p>{member.role}</p>
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
