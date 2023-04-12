const month = (index) => index - 1; // just to make month indices of Dates more readable

export const EducationData = [
  {
    code: "nu",
    name: "Northeastern University",
    location: "Boston, MA",
    degree:
      "Bachelor of Science in Computer Science and Linguistics, minor in Psychology",
    gpa: "3.83",
    honors: "Magna cum laude",
    dates: "Sept. 2017 – May 2021",
  },
];

export const ExperienceData = [
  {
    code: "tjx",
    company: "The TJX Companies",
    location: "Framingham, MA",
    title: "Engineer II",
    hide: false,
    description: [
      "Contribute to front end of T.J. Maxx, Marshalls, and HomeGoods mobile applications using Xamarin.Forms and Flutter",
      "Architect secure ASP.NET web APIs following clean architecture to enable customer-facing front end solutions",
      "Assemble and deploy internal web-based testing tools using Svelte and Node.js to drive efficiency for QA team",
      "Collaborate with other developers using Agile to deliver critical bug fixes and features to increase customer satisfaction",
    ],
    dates: [
      {
        start: new Date(2021, month(6)), // June 2021
        end: null, // Present
      },
    ],
  },
  {
    code: "tjx-coop",
    company: "The TJX Companies",
    location: "Framingham, MA",
    title: "IT Engineer Co-op",
    hide: true,
    description: [
      "Contributed to front and back end of T.J. Maxx, HomeGoods, and Marshalls mobile apps using Xamarin.Forms",
      "Developed dynamic web pages for use in mobile and web apps using HTML, CSS, JavaScript, jQuery, Bootstrap, and Blazor",
      "Collaborated with other developers using Agile to deliver critical bug fixes and features to increase customer satisfaction",
      "Utilized release-branching strategy to manage project versions with Git",
    ],
    dates: [
      {
        start: new Date(2019, month(7)), // Jul 2019
        end: new Date(2019, month(12)), // Dec 2019
      },
      {
        start: new Date(2020, month(7)), // Jul 2020
        end: new Date(2020, month(12)), // Dec 2019
      },
    ],
  },
  {
    code: "tutor",
    company: "Northeastern University",
    location: "Boston, MA",
    title: "Peer Tutor",
    hide: true,
    description: [
      "Tutor linguistics and psychology courses in one-on-one sessions",
      "Conduct review sessions of up to 50 students for exam preparation",
      "Provide guidance for improving study habits and academic success",
    ],
    dates: [
      {
        start: new Date(2019, month(1)), // Jan 2019
        end: new Date(2021, month(4)), // Apr 2021
      },
    ],
  },
  {
    code: "sfs",
    company: "Northeastern University",
    location: "Boston, MA",
    title: "Office Assistant",
    hide: true,
    description: [
      "Answered up to 15 calls per hour to assist students with financial aid questions",
      "Collaborated with financial aid counselors to resolve caller inquiries",
      "Performed data entry to achieve consistency between physical and digital documentation",
    ],
    dates: [
      {
        start: new Date(2017, month(9)), // Sep 2017
        end: new Date(2020, month(3)), // Mar 2020
      },
    ],
  },
  {
    code: "mah",
    company: "Mobile Apps for Hartford",
    location: "Hartford, CT",
    hide: true,
    title: "Intern",
    description: [
      "Collaborated with other interns to develop Android application for CREC school system using MIT App Inventor 2",
      "Met with client from CREC schools on weekly basis to set expectations and ensure high quality of product",
      "Published completed application on Google Play store",
    ],
    dates: [
      {
        start: new Date(2016, month(7)), // Jul 2016
        end: new Date(2016, month(8)), // Aug 2016
      },
    ],
  },
];

export const SkillsData = [
  {
    title: "mobile app development",
    skills: [
      {
        title: "Flutter",
        description: "Dart",
        rating: 8,
      },
      {
        title: "Xamarin.Forms",
        description: "C#, .NET",
        rating: 6,
      },
    ],
  },
  {
    title: "web development",
    skills: [
      {
        title: "Front End",
        description: "Svelte, Vue.js, Sass/SCSS",
        rating: 8,
      },
      {
        title: "Back End",
        description: "Node.js, ASP.NET, Azure",
        rating: 5,
      },
    ],
  },
  {
    title: "programming languages",
    skills: [
      {
        title: "JavaScript/TypeScript",
        description: null,
        rating: 9,
      },
      {
        title: "Dart",
        description: null,
        rating: 9,
      },
      {
        title: "Python",
        description: null,
        rating: 8,
      },
      {
        title: "C#",
        description: null,
        rating: 8,
      },
      {
        title: "Swift",
        description: null,
        rating: 5,
      },
      {
        title: "Java",
        description: null,
        rating: 4,
      },
    ],
  },
  {
    title: "other software",
    skills: [
      {
        title: "Git/GitHub",
        description: null,
        rating: 9,
      },
    ],
  },
];

export const ProjectsData = (function() {
  const links = {
    github: {
      text: "GitHub",
      icon: "fab fa-github",
    },
    web: {
      text: "Webpage",
      icon: "fas fa-globe",
    },
  };

  return [
    {
      name: "frankkmods.com",
      id: "site-mods",
      start: new Date(2020, month(6)), // June 2020
      end: null, // Present
      category: `Website`,
      purpose: `Showcases the mods and modding tools I have created for The Sims 4, and serves as a hub from which to download them.`,
      technology: `Svelte, TypeScript, Tailwind, SCSS`,
      links: [
        {
          icon: links.web.icon,
          text: links.web.text,
          url: "https://frankkmods.com",
        },
        {
          icon: links.github.icon,
          text: links.github.text,
          url: "https://github.com/frankkulak/mods-web",
        },
      ],
    },
    {
      name: "Sims 4 Toolkit",
      id: "node-s4tk",
      start: new Date(2021, month(11)), // June 2020
      end: null, // Present
      category: `Node.js Library`,
      purpose: `Open-source library that powers web-based tools for modding The Sims 4.`,
      technology: `TypeScript, Node.js`,
      links: [
        {
          icon: links.web.icon,
          text: links.web.text,
          url: "https://sims4toolkit.com",
        },
        {
          icon: links.github.icon,
          text: links.github.text,
          url: "https://github.com/sims4toolkit",
        },
      ],
    },
    {
      name: "Language Barriers",
      id: "ts4mod-languagebarriers",
      start: new Date(2020, month(6)), // June 2020
      end: null, // Present
      category: `Sims 4 Mod`,
      purpose: `Enriches the player's experience by introducing different languages to the Sims universe, which makes the game more realistic and challenging.`,
      technology: `XML, Python`,
      links: [
        {
          icon: links.web.icon,
          text: links.web.text,
          url: "https://mods.frankkulak.com/#/ts4/languagebarriers",
        },
      ],
    },
  ];
})();
