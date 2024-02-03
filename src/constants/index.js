import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    blueyonder,
    starbucks,
    tamu,
    finvolv,
    piramal,
    mojro,
    rvce,
    carrent,
    jobit,
    tripguide,
    threejs,
    improveScale,
    raiseEfficiencies, 
    augmentDecisions, 
    promoteCollaboration,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Product Manager",
      icon: web,
    },
    {
      title: "UI-UX Designer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: creator,
    },
  ];

  const userFirst = [
    {
      title: "Improve Scale",
      icon: improveScale,
    },
    {
      title: "Raise Efficiencies",
      icon: raiseEfficiencies,
    },
    {
      title: "Augment Decisions",
      icon: augmentDecisions,
    },
    {
      title: "Promote Collaboration",
      icon: promoteCollaboration,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Developer",
      company_name: "Vissa Solutions Inc.",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Product Manager Intern",
      company_name: "Blue Yonder Inc.",
      icon: blueyonder,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Nov 2022",
      points: [
        "Drove 3 feature releases and provided recommendations to improve solution quality in enterprise warehouse applications.",
        "Compiled market insights and customer feedback to refine and update product roadmaps, documentation and user stories.",
        "Created solution outline for complex warehouse picking use-cases for a major EU-based electronics distributor.",
        "Designed marketing brochures for Luminate AI and extended warehouse applications to improve product messaging.",
      ],
    },
    {
      title: "Master of Engineering in Industrial Engineering",
      company_name: "Texas A&M University",
      icon: tamu,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - May 2023",
      points: [
        "Coursework - Advanced Statistics, Operations Research, Supply Chain, Human Factors Engineering, Lean Engineering.",
        "Activities - Operations Research Teaching Assistant.",
      ],
    },
    {
      title: "Product Manager",
      company_name: "Finvolv",
      icon: finvolv,
      iconBg: "#142736",
      date: "Jan 2020 - Jul 2021",
      points: [
        "Managed 8 releases of the Loan Management System (LMS), optimized product roadmaps and ensured timely project delivery.",
        "Led cross-functional projects to improve and optimize LMS functionalities for financial institutions, adding $5M of revenue.",
        "Launched a streamlined and cost-effective, lite version of the LMS for smaller banks – accelerating implementations by 60%.",
        "Created and refined high-fidelity wireframes for new products and features, adhering to user-centric design principles.",
        "Developed APIs to enable seamless data retrieval from government and financial bureaus, expediting KYC and loan approvals.",
        "Built and configured customized LMS workflows, provided maintenance and support based on customer requirements.",
      ],
    },
    {
      title: "Financial Analyst Intern",
      company_name: "Piramal Capital and Housing Finance Ltd.",
      icon: piramal,
      iconBg: "#E6DEDD",
      date: "Jun 2019 - Aug 2019",
      points: [
        "Analyzed financial impacts of warehouse consolidation vs. retention post-GST, presented insights for decision-making.",
        "Built reusable templates in Excel to determine the viability of consolidation projects using Discounted Cash Flow models.",
      ],
    },
    {
      title: "Product Analyst Intern",
      company_name: "Mojro Technologies",
      icon: mojro,
      iconBg: "#E6DEDD",
      date: "Jun 2018 - Aug 2018",
      points: [
        "Designed dashboards with ElasticSearch and Kibana to detect truck trip data outliers, enabling effective course-corrections.",
        "Produced technical documentation to facilitate training, simplifying the onboarding process for new features.",
      ],
    },
    {
      title: "Bachelor of Engineering in Industrial Engineering",
      company_name: "RV College of Engineering",
      icon: rvce,
      iconBg: "#E6DEDD",
      date: "Aug 2016 - Aug 2020",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Discover",
      description:
        "Identify market needs, market size and solution gaps.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Plan",
      description:
        "Mobilize teams to develop solution outline, assign priorities, and allocate tasks.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Build",
      description:
        "Track build progress, troubleshoot bottlenecks, and document.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ask",
      description:
        "Elicit feedback to improve the product and drive growth metrics.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  
  export { services, technologies, experiences, testimonials, projects, userFirst };