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
      id: "projects",
      title: "Projects",
    },
    {
      id: "work",
      title: "XP and Edu",
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
      title: "Freelancer",
      company_name: "Vissa Solutions Inc.",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Web App Development - UI/UX design, front-end, integrations, and cloud architecture.",
        "Other - Tutor, graphic designer, and food/grocery delivery driver.",
      ],
    },
    {
      title: "Product Manager Intern",
      company_name: "Blue Yonder Inc.",
      icon: blueyonder,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Nov 2022",
      points: [
        "Collaborated with engineering, design, and marketing teams to prioritize and address product backlogs for the Warehouse Management System (WMS).",
        "Built and maintained product requirement documents (PRD), epics, training material, and developed product marketing brochures that contributed to a 10% uplift in lead generation.",
        "Conducted user acceptance testing (UAT) for updates in receiving, storage, picking, packing, and shipping operations, identified critical bugs and mitigated potential issues pre-deployment - reduced support ticket volume by 7%.",
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
        "Launched 8 major releases of a workflow-based Loan Management System (LMS), covering strategy, market research, design, testing, launch planning, introduction phases, outbound marketing, backlog management, documentation, and support.",
        "Spearheaded the development and launch of a lite version of LMS - resulted in a 60% reduction in implementation time and generated $5M revenue.",
        "Built RESTful APIs with real-time validations for “Know-Your-Customer” (KYC) and loan processing - achieved a 93% reduction in loan turnaround time (2 weeks to 1 day).",
      ],
    },
    {
      title: "Financial Analyst Intern",
      company_name: "Piramal Capital and Housing Finance Ltd.",
      icon: piramal,
      iconBg: "#E6DEDD",
      date: "Jun 2019 - Aug 2019",
      points: [
        "Conducted in-depth financial analysis on the implications of India's Goods and Services Tax (GST) transition in warehousing operations, pinpointing optimal regions for warehouse centralization that promised a profitable net cash flow forecast.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Mojro Technologies",
      icon: mojro,
      iconBg: "#E6DEDD",
      date: "Jun 2018 - Aug 2018",
      points: [
        "Built dashboards with ElasticSearch, Kibana, and Google Maps APIs to offer real-time insights into route optimization and delivery tracking for fulfilment logistics service providers.",
        "Prepared documentation for PlanWyse dashboard integrations - reduced ticket volume by 5%.",
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
    {
      name: "This Website",
      description:
        "Whoa! Is this what inception is?",
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
      source_code_link: "https://kookoobear9.github.io/portfolio-website-sanjay-vissa/", 
    },
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