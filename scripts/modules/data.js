const Data = (function () {
    const month = index => index - 1; // just to make month indices more readable
    return {
        education: [
            {
                code: 'nu',
                name: 'Northeastern University',
                location: 'Boston, MA',
                degree: 'B.S. in Computer Science and Linguistics, minor in Psychology',
                graduation: 'exp. May 2021',
                gpa: '3.78',
                honors: [
                    "Dean's list",
                    'Nomination for publication in <em>Northeastern University Working Papers in Linguistics</em> journal'
                ],
                subjects: [
                    {
                        name: 'computer science',
                        courses: [
                            {
                                code: 'CS',
                                number: '4500',
                                title: 'Software Development'
                            },
                            {
                                code: 'CS',
                                number: '4400',
                                title: 'Programming Languages'
                            },
                            {
                                code: 'CS',
                                number: '4120',
                                title: 'Natural Language Processing'
                            },
                            {
                                code: 'CS',
                                number: '3800',
                                title: 'Theory of Computation'
                            },
                            {
                                code: 'CS',
                                number: '3500',
                                title: 'Object-Oriented Design'
                            },
                            {
                                code: 'CS',
                                number: '3000',
                                title: 'Algorithms & Data'
                            },
                            {
                                code: 'CS',
                                number: '2510',
                                title: 'Fundamentals of Computer Science II'
                            },
                            {
                                code: 'CS',
                                number: '2500',
                                title: 'Fundamentals of Computer Science I'
                            },
                            {
                                code: 'CS',
                                number: '1800',
                                title: 'Discrete Structures'
                            }
                        ]
                    },
                    {
                        name: 'linguistics',
                        courses: [
                            {
                                code: 'LING',
                                number: '4654',
                                title: 'Seminar: Evolutionary Linguistics'
                            },
                            {
                                code: 'LING',
                                number: '3424',
                                title: 'Morphology'
                            },
                            {
                                code: 'LING',
                                number: '3422',
                                title: 'Phonology'
                            },
                            {
                                code: 'LING',
                                number: '3412',
                                title: 'Language & Culture'
                            },
                            {
                                code: 'LING',
                                number: '2350',
                                title: 'Linguistic Analysis'
                            },
                            {
                                code: 'LING',
                                number: '1150',
                                title: 'Introduction to Linguistics'
                            }
                        ]
                    },
                    {
                        name: 'psychology',
                        courses: [
                            {
                                code: 'PSYC',
                                number: '3464',
                                title: 'Psychology of Language'
                            },
                            {
                                code: 'PSYC',
                                number: '3400',
                                title: 'Personality'
                            },
                            {
                                code: 'PSYC',
                                number: '2320',
                                title: 'Statistics for Psychological Research'
                            }
                        ]
                    },
                    {
                        name: 'other',
                        courses: [
                            {
                                code: 'ENGW',
                                number: '3302',
                                title: 'Advanced Writing in the Technical Professions',
                                'ongoing': true
                            },
                            {
                                code: 'PHIL',
                                number: '1145',
                                title: 'Technology & Human Values'
                            },
                            {
                                code: 'ENGW',
                                number: '1111',
                                title: 'First Year Writing'
                            }
                        ]
                    },
                ]
            }
        ],
        experience: [
            {
                code: 'tjx',
                name: 'The TJX Companies',
                location: 'Framingham, MA',
                relevant: true,
                positions: [
                    {
                        title: 'IT Engineer Co-op',
                        description: [
                            'Developed front end of T.J.Maxx and HomeGoods mobile applications with Xamarin.Forms, HTML, CSS, and JavaScript using Bootstrap and jQuery',
                            'Collaborated with other developers using Agile to deliver critical features and bug fixes',
                            'Utilized release-branching strategy to manage project versions with Git',
                            'Maintained existing codebase built with MVVM architecture'
                        ],
                        start: new Date(2019, month(7)), // Jul 2019
                        end: new Date(2019, month(12)), // Dec 2019
                        seasonal: false
                    }
                ]
            },
            {
                code: 'nu',
                name: 'Northeastern University',
                location: 'Boston, MA',
                relevant: false,
                positions: [
                    {
                        title: 'Peer Tutor',
                        description: [
                            'Tutor linguistics and psychology courses in one-on-one sessions',
                            'Conduct review sessions of up to 50 students for exam preparation',
                            'Provide guidance and advice for improving study habits'
                        ],
                        start: new Date(2019, month(1)), // Jan 2019
                        end: null, // Present
                        seasonal: true
                    },
                    {
                        title: 'Office Assistant',
                        description: [
                            'Answered up to 15 calls per hour to assist students with financial aid questions',
                            'Collaborated with financial aid counselors to resolve caller inquiries',
                            'Performed data entry to achieve consistency between physical and digital documentation'
                        ],
                        start: new Date(2017, month(9)), // Sep 2017
                        end: new Date(2020, month(3)), // Mar 2020
                        seasonal: true
                    }
                ]
            },
            {
                code: 'sherwood',
                name: 'Sherwood Cleaners',
                location: 'Plainville, CT',
                relevant: false,
                positions: [
                    {
                        title: 'Cashier',
                        description: [
                            //'placeholder',
                            //'placeholder'
                            // todo
                        ],
                        start: new Date(2018, month(6)), // Jun 2018
                        end: new Date(2019, month(7)), // Jul 2019
                        seasonal: true
                    }
                ]
            },
            {
                code: 'barnes',
                name: 'Associated Spring',
                location: 'Bristol, CT',
                relevant: false,
                positions: [
                    {
                        title: 'Maintenance Worker',
                        description: [
                            //'placeholder',
                            //'placeholder'
                            // todo
                        ],
                        start: new Date(2017, month(6)), // Jun 2017
                        end: new Date(2017, month(8)), // Aug 2017
                        seasonal: false
                    }
                ]
            },
            {
                code: 'mah',
                name: 'Mobile Apps for Hartford',
                location: 'Hartford, CT',
                relevant: true,
                positions: [
                    {
                        title: 'Intern',
                        description: [
                            'Collaborated with other interns to develop Android application for CREC school system using MIT App Inventor 2',
                            'Met with client from CREC schools on weekly basis to set expectations and ensure high quality of product',
                            'Published completed application on the Google Play store'
                        ],
                        start: new Date(2016, month(7)), // Jul 2016
                        end: new Date(2016, month(8)), // Aug 2016
                        seasonal: false
                    }
                ]
            }
        ],
        skills: [
            {
                title: 'web development',
                skills: [
                    {
                        title: 'HTML',
                        description: 'HTML5, WebStorm, Visual Studio Code',
                        rating: 3
                    },
                    {
                        title: 'CSS',
                        description: 'CSS3, Sass, Bootstrap',
                        rating: 3
                    },
                    {
                        title: 'JavaScript',
                        description: 'ES6, jQuery, Vue.js, Node.js',
                        rating: 3
                    },
                ]
            },
            {
                title: 'app development',
                skills: [
                    {
                        title: 'Xamarin.Forms',
                        description: 'C#, Xamarin.Forms, .NET, Visual Studio',
                        rating: 4
                    },
                    {
                        title: 'Native iOS',
                        description: 'Swift, Xcode',
                        rating: 2
                    },
                ]
            },
            {
                title: 'other',
                skills: [
                    {
                        title: 'Java',
                        description: 'Java, Swing, JUnit, IntelliJ IDEA, Eclipse',
                        rating: 4
                    },
                    {
                        title: 'Python',
                        description: 'Python, SpaCy, Scikit-Learn, Pandas, PyCharm',
                        rating: 3
                    },
                    {
                        title: 'Racket',
                        description: 'Racket, DrRacket',
                        rating: 2
                    },
                    {
                        title: 'C/C++',
                        description: 'C, C++, CLion, Visual Studio Code',
                        rating: 1
                    },
                    {
                        title: 'Git',
                        description: 'Git, GitHub, GitHub Desktop',
                        rating: 4
                    },
                ]
            }
        ],
        projects: [
            {
                title: 'web',
                projects: [
                    {
                        name: 'frankkulak.com',
                        id: 'frankkulak.com',
                        start: new Date(2019, month(10)), // Oct 2019
                        end: null, // Present
                        description: 'This is the website you are currently viewing! It provides a summary of my education, experience, and projects. I built it with the help of Vue.js, jQuery, Bootstrap, and Sass. I actively maintain it and make updates often.',
                        links: [
                            {
                                icon: '<i class="fab fa-github"></i>',
                                text: 'view on GitHub',
                                url: 'https://github.com/frankkulak/frankkulak.github.io'
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
                        description: 'Block Dude is a game originally created for the TI-84 calculator. It involves a character that picks blocks up and puts them down in order to reach the exit. This project is a simplistic re-creation of it in Java, and it was done for my own practice with the MVC design pattern.',
                        links: [
                            {
                                icon: '<i class="fab fa-github"></i>',
                                text: 'view on GitHub',
                                url: 'https://github.com/frankkulak/blockdude-java'
                            }
                        ]
                    },
                    {
                        name: 'Blocky',
                        id: 'blocky-java',
                        start: new Date(2019, month(4)), // Apr 2019
                        end: new Date(2019, month(5)), // May 2019
                        description: 'Blocky is an original puzzle game in which the player swipes a block through obstacles to escape the board. This implementation is written in Java and utilizes the Swing library for an engaging user interface.',
                        links: [
                            {
                                icon: '<i class="fab fa-github"></i>',
                                text: 'view on GitHub',
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
                        name: '#JusticeForCowplants',
                        id: 'jfcp-ts4',
                        start: new Date(2020, month(6)), // June 2020
                        end: null, // Present
                        description: `This is a mod for The Sims 4 that allows you to give a custom name to a cowplant. It was inspired by Kayla Sims' videos on YouTube [<a href="https://youtu.be/SD8mn4pR2KE">video 1</a>] [<a href="https://youtu.be/Bpb0BhJ4Bng">video 2</a>].`,
                        links: [
                            {
                                icon: '<i class="fas fa-globe"></i>',
                                text: 'view on web',
                                url: 'https://mods.frankkulak.com/ts4/justiceforcowplants'
                            }
                        ]
                    },
                ]
            }
        ]
    };
})();