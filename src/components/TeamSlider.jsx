export default function TeamSlider() {
    const teamMembers = [
      { name: "Marvel Iwezue ", title: "Founder", img: "marv2.webp", width: 800, height: 1200 },
      {
        name: "Salome",
        title: "Social Media Executive",
        img: "sally.webp",
        width: 800,
        height: 1200,
      },
      {
        name: "Abigail",
        title: "Social Media Executive",
        img: "abigail.webp",
        width: 800,
        height: 1200,
      },
      {
        name: "Saviour",
        title: "Partnership & Programs",
        img: "saviour.webp",
        width: 800,
        height: 1200,
      },
      {
        name: "Increase",
        title: "Intern",
        img: "increase.webp",
        width: 800,
        height: 827,
      },
      {
        name: "PSI",
        title: "Recruitment Partner",
        img: "psi.png",
      },
      { name: "Gabriel", title: "Legal Adviser", img: "gabriel.webp", width: 800, height: 1067 },
      { name: "Ugochukwu", title: "Technical Partner", img: "ucai.webp", width: 800, height: 1067 },
    ];

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
                            <div className="col-xl-3 col-md-6" key={i}>
                                <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay={`${0.1 * (i + 1)}s`}>
                                    <div className="aximo-team-thumb">
                                        <img
                                          src={`/assets/images/team/${member.img}`}
                                          alt={member.name}
                                          width={member.width}
                                          height={member.height}
                                          loading="lazy"
                                        />
                                    </div>
                                    <div className="aximo-team-data">
                                        <h3>{member.name}</h3>
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
