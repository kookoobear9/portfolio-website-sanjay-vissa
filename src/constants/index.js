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
        "Develop full-stack web applications - UI/UX design, front-end and back-end development, and integrations..",
        "Design and implement cloud architecture, optimizing web application deployment and scalability on AWS.",
      ],
    },
    {
      title: "Product Manager Intern",
      company_name: "Blue Yonder Inc.",
      icon: blueyonder,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Nov 2022",
      points: [
        "Developed and maintained product requirement documents (PRD), epics, user stories, training content and marketing brochures to streamline the development process and improve product awareness.",
        "Conducted user acceptance testing (UAT) for new features and system updates, identifying critical bugs and mitigating potential issues pre-deployment.",
        "Collaborated with engineering, design, and marketing teams to prioritize and address product backlogs for 3 feature releases.",
      ],
    },
    {
      title: "Master of Engineering in Industrial Engineering",
      company_name: "Texas A&M University",
      icon: tamu,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - May 2023",
      points: [
        "Coursework - Advanced Statistics, Operations Research, Supply Chain, Quantitative Risk Analysis, Human Factors Engineering, Economics, Lean Engineering, Project Management.",
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
        "Managed the end-to-end product lifecycle of LMS, collaborating with leadership on vision and strategy, while guiding cross-functional agile teams to align development with business objectives and groom backlogs, culminating in the delivery of 8 major version releases.",
        "Spearheaded the launch of LMS Lite, a streamlined version of the LMS, resulting in a 60% reduction in implementation time and generating $5M in additional revenue within the first year.",
        "Built RESTful APIs with real-time validations for KYC and loan processing, achieving a reduction in loan turnaround time from 2 weeks to 1 day.",
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
        "Built dashboards with ElasticSearch, Kibana, and Google Maps APIs to offer real-time insights into route optimization, and delivery tracking for logistics service providers. ",
        "Crafted technical documentation to allow developers to integrate dashboards into Mojro PlanWyse platform.",
      ],
    },
    {
      title: "Bachelor of Engineering in Industrial Engineering",
      company_name: "RV College of Engineering",
      icon: rvce,
      iconBg: "#E6DEDD",
      date: "Aug 2016 - Aug 2020",
      points: [
        "Coursework - Supply Chain Engineering, Operations Research, Statistical Modelling, Manufacturing Processes, Inventory Strategy, Product Design, Finance, Accounting, Marketing, Internet of Things, Intro to Neural Networks.",
        "Activities - Head of Finances, Industrial Engineers Association.",
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
      name: "Flappy Bird",
      description:
        "A minimalist version of the famous 'Flappy Bird' game",
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
      source_code_link: "https://kookoobear9.github.io/flappyBird/",
    },
    {
      name: "Chess",
      description:
        "Check mate!",
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
      source_code_link: "https://kookoobear9.github.io/Minimalist-Chess/",
    },
    // {
    //   name: "Build",
    //   description:
    //     "Track build progress, troubleshoot bottlenecks, and document.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Ask",
    //   description:
    //     "Elicit feedback to improve the product and drive growth metrics.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];

  
  export { services, technologies, experiences, testimonials, projects, userFirst };