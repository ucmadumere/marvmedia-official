export default function ContactInfoSection() {
  const contactItems = [
    {
      icon: "call2.svg",
      label: "Call us",
      lines: ["+234 907 511 5148"],
      link: "tel:+2349075115148",
    },
    {
      icon: "email.svg",
      label: "Email us",
      lines: ["support@marvmedia.ng"],
      link: "mailto:support@marvmedia.ng",
    },
    {
      icon: "map.svg",
      label: "Office address",
      lines: ["4132 Thornridge City, New York."],
      link: null,
    },
  ];

  return (
    <div className="aximo-contact-info-section">
      <div className="container">
        <div className="aximo-contact-info-title">
          <h2>
            <span className="aximo-title-animation">
              Contact Information
              <span className="aximo-title-icon">
                <img src="/assets/images/v1/star2.png" alt="star" />
              </span>
            </span>
          </h2>
        </div>

        <div className="row">
          {contactItems.map((item, index) => {
            const InfoBox = (
              <div className="aximo-contact-info-box" key={index}>
                <div className="aximo-contact-info-icon">
                  <img src={`/assets/images/icon/${item.icon}`} alt={item.label} />
                </div>
                <div className="aximo-contact-info-data">
                  <span>{item.label}</span>
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            );

            return (
              <div className="col-xl-4 col-md-6" key={index}>
                {item.link ? <a href={item.link}>{InfoBox}</a> : InfoBox}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
