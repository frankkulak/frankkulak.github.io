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
            'Develop front end of T.J.Maxx, HomeGoods, and Marshalls mobile and web apps using Xamarin.Forms and Blazor',
            'Construct dynamic web pages with Bootstrap and jQuery for use in mobile and web apps',
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
            'Published completed application on the Google Play store'
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
                title: 'HTML, CSS, & JavaScript',
                description: 'Sass, Bootstrap, Vue.js, jQuery',
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
                rating: 7
            },
        ]
    },
    {
        title: 'other',
        skills: [
            {
                title: 'Java',
                description: 'Swing, JUnit',
                rating: 9
            },
            {
                title: 'Python',
                description: 'Pandas, SpaCy, Scikit-Learn, The Sims 4 Modding',
                rating: 8
            },
            {
                title: 'Git',
                description: 'GitHub, GitHub Desktop, SourceTree',
                rating: 9
            },
        ]
    }
];

export const ProjectsData = (function () {
    const links = {
        github: {
            text: 'view on GitHub',
            icon: 'fab fa-github'
        },
        web: {
            text: 'view on web',
            icon: 'fas fa-globe'
        }
    };

    return [
        {
            title: 'web',
            projects: [
                {
                    name: 'frankkulak.com',
                    id: 'frankkulak.com',
                    start: new Date(2019, month(10)), // Oct 2019
                    end: null, // Present
                    description: 'This is the website you are currently viewing. It provides a summary of my education, experience, and projects. It is built with BootstrapVue and Sass.',
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
                    id: 'mods.frankkulak.com',
                    start: new Date(2020, month(6)), // June 2020
                    end: null, // Present
                    description: 'This website showcases the mods I create for The Sims 4, and provides links to download them. It is built with BootstrapVue and Sass.',
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
                }
            ]
        },
        {
            title: 'java',
            projects: [
                {
                    name: 'Block Dude',
                    id: 'blockdude-java',
                    start: new Date(2019, month(4)), // Apr 2019
                    end: new Date(2019, month(12)), // Dec 2019
                    description: 'Block Dude is a puzzle game created by Brandon Sterner for the TI-84 calculator. This project is a simplistic re-creation of it in Java, and it was done for my own practice with the MVC design pattern.',
                    links: [
                        {
                            icon: links.github.icon,
                            text: links.github.text,
                            url: 'https://github.com/frankkulak/blockdude-java'
                        }
                    ]
                },
                {
                    name: 'Blocky',
                    id: 'blocky-java',
                    start: new Date(2019, month(4)), // Apr 2019
                    end: new Date(2019, month(5)), // May 2019
                    description: 'Blocky is an original puzzle game in which the player attempts to free their block from the game board. This implementation is written in Java and utilizes the Swing library for an engaging user interface.',
                    links: [
                        {
                            icon: links.github.icon,
                            text: links.github.text,
                            url: 'https://github.com/frankkulak/blocky-java'
                        }
                    ]
                }
            ]
        },
        {
            title: 'mods',
            projects: [
                {
                    name: 'The Sims 4',
                    id: 'ts4-mods',
                    start: new Date(2020, month(6)), // June 2020
                    end: null, // Present
                    description: `This project is a collection of mods that I have created for The Sims 4, which can be found on my modding website.`,
                    links: [
                        {
                            icon: links.web.icon,
                            text: links.web.text,
                            url: 'https://mods.frankkulak.com'
                        }
                    ]
                }
            ]
        }
    ];
})();