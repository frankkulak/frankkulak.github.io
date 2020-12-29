const month = index => index - 1; // just to make month indices of Dates more readable

export const EducationData = [
    {
        code: 'nu',
        name: 'Northeastern University',
        location: 'Boston, MA',
        degree: 'B.S. in Computer Science and Linguistics, minor in Psychology',
        graduation: 'exp. May 2021',
    }
];

export const ExperienceData = [
    {
        code: 'tjx',
        company: 'The TJX Companies',
        location: 'Framingham, MA',
        title: 'IT Engineer Co-op',
        description: [
            'Contributed to front and back end of T.J. Maxx, HomeGoods, and Marshalls mobile apps using Xamarin.Forms and .NET',
            'Developed dynamic web pages for use in mobile and web apps using HTML, CSS, JavaScript, jQuery, Bootstrap, and Blazor',
            'Collaborated with other developers using Agile to deliver critical bug fixes and features to increase customer satisfaction',
            'Utilized release-branching strategy to manage project versions with Git',
        ],
        dates: [
            {
                start: new Date(2019, month(7)), // Jul 2019
                end: new Date(2019, month(12)) // Dec 2019
            },
            {
                start: new Date(2020, month(7)), // Jul 2020
                end: new Date(2020, month(12)) // Dec 2019
            }
        ],
    },
    {
        code: 'tutor',
        company: 'Northeastern University',
        location: 'Boston, MA',
        title: 'Peer Tutor',
        description: [
            'Tutor linguistics and psychology courses in one-on-one sessions',
            'Conduct review sessions of up to 50 students for exam preparation',
            'Provide guidance for improving study habits and academic success'
        ],
        dates: [
            {
                start: new Date(2019, month(1)), // Jan 2019
                end: null, // Present
            }
        ],
    },
    {
        code: 'sfs',
        company: 'Northeastern University',
        location: 'Boston, MA',
        title: 'Office Assistant',
        description: [
            'Answered up to 15 calls per hour to assist students with financial aid questions',
            'Collaborated with financial aid counselors to resolve caller inquiries',
            'Performed data entry to achieve consistency between physical and digital documentation'
        ],
        dates: [
            {
                start: new Date(2017, month(9)), // Sep 2017
                end: new Date(2020, month(3)), // Mar 2020
            }
        ],
    },
    {
        code: 'mah',
        company: 'Mobile Apps for Hartford',
        location: 'Hartford, CT',
        title: 'Intern',
        description: [
            'Collaborated with other interns to develop Android application for CREC school system using MIT App Inventor 2',
            'Met with client from CREC schools on weekly basis to set expectations and ensure high quality of product',
            'Published completed application on Google Play store'
        ],
        dates: [
            {
                start: new Date(2016, month(7)), // Jul 2016
                end: new Date(2016, month(8)), // Aug 2016
            }
        ],
    }
];

export const SkillsData = [
    {
        title: 'web development',
        skills: [
            {
                title: 'HTML',
                description: null,
                rating: 9
            },
            {
                title: 'CSS',
                description: 'Sass, Bootstrap',
                rating: 8
            },
            {
                title: 'JavaScript',
                description: 'Vue.js, jQuery',
                rating: 8
            },
        ]
    },
    {
        title: 'app development',
        skills: [
            {
                title: 'Xamarin.Forms',
                description: 'C#, .NET',
                rating: 8
            },
        ]
    },
    {
        title: 'other',
        skills: [
            {
                title: 'Java',
                description: 'Swing, JUnit',
                rating: 7
            },
            {
                title: 'Python',
                description: 'Pandas, SpaCy',
                rating: 8
            },
            {
                title: 'Git',
                description: 'GitHub',
                rating: 9
            },
        ]
    }
];

export const ProjectsData = (function () {
    const links = {
        github: {
            text: 'GitHub',
            icon: 'fab fa-github'
        },
        web: {
            text: 'Webpage',
            icon: 'fas fa-globe'
        }
    };

    return [
        {
            name: 'frankkulak.com',
            id: 'site-main',
            start: new Date(2019, month(10)), // Oct 2019
            end: null, // Present
            category: `Website`,
            purpose: `Provides an interactive summary of my academic, professional, and personal achievements.`,
            technology: `BootstrapVue, Sass, GitHub Pages, Google Analytics`,
            links: [
                {
                    icon: links.github.icon,
                    text: links.github.text,
                    url: 'https://github.com/frankkulak/frankkulak.github.io'
                }
            ]
        },
        {
            name: 'mods.frankkulak.com',
            id: 'site-mods',
            start: new Date(2020, month(6)), // June 2020
            end: null, // Present
            category: `Website`,
            purpose: `Showcases the mods I have created for The Sims 4, and serves as a hub from which to download them.`,
            technology: `BootstrapVue, Sass, GitHub Pages, Google Analytics`,
            links: [
                {
                    icon: links.web.icon,
                    text: links.web.text,
                    url: 'https://mods.frankkulak.com'
                },
                {
                    icon: links.github.icon,
                    text: links.github.text,
                    url: 'https://github.com/frankkulak/mods-web'
                }
            ]
        },
        {
            name: 'Language Barriers',
            id: 'ts4mod-languagebarriers',
            start: new Date(2020, month(6)), // June 2020
            end: null, // Present
            category: `Sims 4 Mod`,
            purpose: `Enriches the player's experience by introducing different languages to the Sims universe, which makes the game more realistic and challenging.`,
            technology: `XML, Python, Sims 4 Studio`,
            links: [
                {
                    icon: links.web.icon,
                    text: links.web.text,
                    url: 'https://mods.frankkulak.com/#/ts4/languagebarriers'
                }
            ]
        }
    ];
})();