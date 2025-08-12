// src/data/serviceData.js
const services = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    desc: "We excel in fashion, lifestyle, education, food, medical and non-profit niches. Transform your online presence with page revamps, bio optimization, and aesthetic feed building.",
    subtitle: "Social Media Management",
    img: "service-single.png",
    img2: "service-single2.png",
    content: [
      "Whether you’re a solo founder, a budding startup, or a rapidly scaling business, our services are designed to meet you exactly where you are and propel you toward your growth goals.",
    ],
    sub: "With our full social media management, you get:",
    userInterface: [
      "Weekly content plan",
      "Feed design + copy",
      "Reels and video content",
      "Engagement and reports",
      "Monthly strategy call",
      "Key aspects: layout, colors, typography, icons.",
    ],
    subtitle2: "Social Media Page Management",
    sub1: "Content Creation & Visual Production",
    userExperience: [
      "Monthly content shoots",
      "Reels + short-form video",
      "Carousel design",
      "Caption writing",
      "Personal brand consulting",
    ],
    sub2: "Content Creation & Visual Production",
    contentStrategy: [
      "Audit your current content",
      "Identify your Target Audience",
      "Refine your brand voice",
      "Build out content pillars",
      "Create a custom strategy that works for YOU",
    ],

    pricing: [
      {
        tier: "Page Launch",
        monthly: "40,000",
        yearly: "480,000",

        features: [
          "Account opening and set-up",
          "Bio optimization",
          "Highlight cover designs",
          "Page linking",
        ],
      },
      {
        tier: "Page Revamp",
        monthly: "30,000",
        yearly: "360,000",
        features: ["Bio optimization ", "Highlight cover designs "],
      },
      {
        tier: "Social Media Audit",
        monthly: "30,000",
        yearly: "360,000",
        features: [],
      },
    ],
    pricing1: [
      {
        monthly: "40 (monthly)",

        features: [
          "2 platforms (Instagram/Pinterest/TikTok/LinkedIn)",
          "Brand MoodBoard",
          "Content calendar",
          "Copywriting (captions)",
          "Graphics design",
          "Trend research",
          "Strategic call",
          "Story engagement and management",
          "Page monitoring and engagement",
          "Content Curation",
          "4 posts weekly",
          "Reports & Analytics",
        ],
      },
      {
        monthly: "130",
        features: [
          "2 platforms (Instagram/Pinterest/TikTok/LinkedIn)",
          "Brand MoodBoard",
          "Content Calendar",
          "Copywriting (captions)",
          "Graphics design",
          "Trend research",
          "Strategic call",
          "Story engagement and management",
          "Page monitoring and engagement",
          "Content Curation",
          "4 posts weekly",
          "Reports & Analytics",
        ],
      },
    ],
  },

  {
    slug: "tech-solution",
    title: "Tech Solutions",
    subtitle: "Tech Solutions",
    desc: "We create user-centric websites that showcase your brand identity. Plus, we offer web maintenance & support to keep your site running smoothly and updated.",
    img: "service-single.png",
    img2: "service-single2.png",
    content: [""],
    userInterface: [""],
    pricing: [
      {
        tier: "Web Design and Development",
        monthly: "450,000 +",
      },
      {
        tier: "Landing Page Design",
        monthly: "100,000",
      },
    ],
  },
  {
    slug: "content-creation-visual-production",
    title: "Content Creation & Visual Production",
    subtitle: "",
    desc: "We produce high-quality visuals that reveal your brand in HD. From scripts and mood boards to directing brand photoshoots, we handle it all.",
    img: "service-single.png",
    img2: "service-single2.png",
    content: [""],
    userInterface: [""],
    pricing: [
      {
        tier: "Thought Leaders Package",
        monthly: "150,000",

        features: ["4 talking head videos", "3 reels", "2 B-rolls"],
      },
      {
        tier: "Product Photography Package",
        monthly: "100,000",
        features: ["2 Product/service videos ", "10 Pictures"],
      },
      {
        tier: "Cinematography Services",
        monthly: "Quotation on request",
        features: ["Brand Shoot", "Event Coverage", "Campaign Creatives"],
      },
      {
        tier: "Events Reels Creation",
        monthly: "100,000 +",
        features: [
          "Events Highlight",
          "Testimonials/Goodwill message",
          "5 Social Media Challenges/Transition ",
        ],
      },
      {
        tier: "Creative Assistance",
        monthly: "10,000 per hour",
      },
    ],
  },
  {
    slug: "",
    title: "Strategy Development",
    subtitle: "",
    desc: "Build a resilient digital marketing strategy with us. We help you stay relevant and excel in the digital space with tailored strategies for your projects.",
    img: "service-single.png",
    img2: "service-single2.png",
    content: [""],
    userInterface: [""],
    userExperience: [""],
    approach: {
      title: "Our Approach",
      header: "The working approach of graphic designing",
      steps: [
        {
          icon: "icon-search",
          title: "Research and Competitor Analysis",
          points: ["Understand target users and analyze competitors."],
        },
        {
          icon: "icon-design-tools",
          title: "User Interface Implementation",
          points: ["Translate design into code or final assets."],
        },
        {
          icon: "icon-start-up",
          title: "Launch and Post-Launch",
          points: ["Launch product and iterate from user feedback."],
        },
      ],
    },
  },
  {
    slug: "",
    title: "Graphics Designing",
    subtitle: "",
    desc: "From logos to brand designs, we bring your innovative ideas to life. Our exceptional graphics effectively sell your brand to your audience.",
    img: "service-single.png",
    img2: "service-single2.png",
    content: [""],
  },
  {
    slug: "",
    title: "Merchandising ",
    subtitle: "Merchandising",
    desc: "We design and produce custom merchandise and corporate gifts that align with your brand, perfect for promotional events or employee incentives.",
    img: "service-single.png",
    img2: "service-single2.png",
    content: [
      "We design and produce custom merchandise and corporate gifts that align with your brand, perfect for promotional events or employee incentives.",
    ],
    // userInterface: [
    //   "Graphic design refers to the visual elements and overall look of a product.",
    //   "Graphic design designers create a visually appealing and consistent design.",
    //   "Key aspects: layout, colors, typography, icons.",
    // ],
    // userExperience: [
    //   "UX focuses on the user’s experience and how easy it is to achieve their goals.",
    //   "UX designers use research and testing to improve user satisfaction.",
    // ],
  },
  // Add more services here
];

export default services;
