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
            'Develop front end for T.J.Maxx, HomeGoods, and Marshalls mobile apps using Xamarin.Forms',
            'Construct dynamic web pages with Bootstrap and jQuery for use in mobile and web apps',
            'Contribute to back-end projects created with C#/.NET to support mobile and web apps',
            'Collaborate with other developers using Agile to deliver critical bug fixes and features',
            'Utilize release-branching strategy to manage project versions with Git',
        ],
        dates: [
            {
                start: new Date(2019, month(7)), // Jul 2019
                end: new Date(2019, month(12)) // Dec 2019
            },
            {
                start: new Date(2020, month(7)), // Jul 2020
                end: null // Present
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
                title: 'HTML, CSS, JavaScript',
                description: 'Sass, Bootstrap, Vue.js, jQuery',
                rating: 7
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
            {
                title: 'iOS',
                description: 'Swift, SwiftUI',
                rating: 6
            }
        ]
    },
    {
        title: 'game development',
        skills: [
            {
                title: 'Sims 4 Modding',
                description: 'XML, Python',
                rating: 8
            },
        ]
    },
    {
        title: 'other',
        skills: [
            {
                title: 'Java',
                description: 'Swing',
                rating: 8
            },
            {
                title: 'Python',
                description: 'Pandas, SpaCy, Scikit-Learn',
                rating: 9
            },
            {
                title: 'Git',
                description: 'GitHub, GitHub Pages',
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
            purpose: `Provides an interactive and comprehensive summary of my academic, professional, and personal achievements.`,
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