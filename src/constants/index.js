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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    blueyonder,
    starbucks,
    omp,
    tamu,
    finvolv,
    piramal,
    mojro,
    rvce,
    carrent,
    underconstruction,
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
      title: "Solution Consultant",
      company_name: "OMP USA",
      icon: omp,
      iconBg: "#FFFFFF",
      date: "May 2024 - Present",
      points: [],
    },
    {
      title: "Freelancer",
      company_name: "Vissa Solutions Inc.",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "May 2023 - Apr 2024",
      points: [],
    },
    {
      title: "Teaching Assistant",
      company_name: "Texas A&M University",
      icon: tamu,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - May 2023",
      points: [],
    },
    {
      title: "Product Manager",
      company_name: "Blue Yonder Inc.",
      icon: blueyonder,
      iconBg: "#FFFFFF",
      date: "Jan 2022 - Dec 2022",
      points: [],
    },
    {
      title: "Master of Engineering in Industrial Engineering",
      company_name: "Texas A&M University",
      icon: tamu,
      iconBg: "#FFFFFF",
      date: "Aug 2021 - May 2023",
      points: [],
    },
    {
      title: "Product Manager",
      company_name: "Finvolv",
      icon: finvolv,
      iconBg: "#142736",
      date: "Jan 2020 - Jul 2021",
      points: [],
    },
    {
      title: "Finance Intern",
      company_name: "Piramal Capital and Housing Finance Ltd.",
      icon: piramal,
      iconBg: "#FFFFFF",
      date: "Jun 2019 - Aug 2019",
      points: [],
    },
    {
      title: "Product Intern",
      company_name: "Mojro Technologies",
      icon: mojro,
      iconBg: "#FFFFFF",
      date: "Jun 2018 - Aug 2018",
      points: [],
    },
    {
      title: "Bachelor of Engineering in Industrial Engineering",
      company_name: "RV College of Engineering",
      icon: rvce,
      iconBg: "#FFFFFF",
      date: "Aug 2016 - Aug 2020",
      points: [],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Sanjay quickly grasps complex concepts and shows a strong work ethic. His attention to detail and collaborative approach enable him to drive his responsibilities with minimal oversight.",
      name: "Joe Kozenski",
      designation: "Product Director",
      company: "Blue Yonder",
      //image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I have great confidence in his ability to add value in product roles, seeking to build customer-centric and profitable digital solutions.",
      name: "Maninder Singh",
      designation: "Product Owner",
      company: "Finvolv",
      //image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I'm confident in Sanjay's ability to contribute value in any product role, as he consistently strives to create customer-centric and profitable digital solutions.",
      name: "Mohd Ammar Wasim",
      designation: "Product Manager",
      company: "Finvolv",
      //image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "He is ever keen to honing new skills and pays utmost attention to even the minute details. ",
      name: "Sathwik Ramaprasad",
      designation: "Product Manager",
      company: "Henkel",
      //image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Flappy Box",
      description:
        "A minimalist version of the famous 'Flappy Bird' game",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://kookoobear9.github.io/flappyBird/",
    },
    {
      name: "Chess",
      description:
        "Check mate!  (Desktop Only)",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
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
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "3js",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://kookoobear9.github.io/portfolio-website-sanjay-vissa/", 
    },
    {
      name: "Forever trying to build something",
      description:
        "There will be more projects here soon. Stay tuned!",
      tags: [
        {
          name: "place",
          color: "blue-text-gradient",
        },
        {
          name: "holder",
          color: "green-text-gradient",
        },
        {
          name: "text",
          color: "pink-text-gradient",
        },
      ],
      image: underconstruction,
      source_code_link: "https://github.com/kookoobear9",
    },
  ];

  
  export { services, technologies, experiences, testimonials, projects, userFirst };
