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
                company: 'The TJX Companies',
                location: 'Framingham, MA',
                relevant: true,
                positions: [
                    {
                        title: 'IT Engineer Co-op',
                        description: [
                            'Developed front end for T.J.Maxx and HomeGoods mobile applications using Xamarin.Forms and HTML, CSS, and JavaScript',
                            'Collaborated with other developers using Agile to deliver critical features and bug fixes',
                            'Utilized release-branching strategy to manage project versions with Git, GitHub, and SourceTree',
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
                company: 'Northeastern University',
                location: 'Boston, MA',
                relevant: false,
                positions: [
                    {
                        title: 'Peer Tutor',
                        description: [
                            'placeholder',
                            'placeholder'
                            // todo
                        ],
                        start: new Date(2019, month(1)), // Jan 2019
                        end: new Date(), // Present
                        seasonal: true
                    },
                    {
                        title: 'Office Assistant',
                        description: [
                            'placeholder',
                            'placeholder'
                            // todo
                        ],
                        start: new Date(2017, month(9)), // Sep 2017
                        end: new Date(2020, month(3)), // Mar 2020
                        seasonal: true
                    }
                ]
            },
            {
                code: 'sherwood',
                company: 'Sherwood Cleaners',
                location: 'Plainville, CT',
                relevant: false,
                positions: [
                    {
                        title: 'Cashier',
                        description: [
                            'placeholder',
                            'placeholder'
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
                company: 'Associate Spring',
                location: 'Bristol, CT',
                relevant: false,
                positions: [
                    {
                        title: 'Maintenance Worker',
                        description: [
                            'placeholder',
                            'placeholder'
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
                company: 'Mobile Apps for Hartford',
                location: 'Hartford, CT',
                relevant: true,
                positions: [
                    {
                        title: 'Intern',
                        description: [
                            'Collaborated with other interns to develop Android application for CREC school system using MIT App Inventor 2',
                            'Met with client from CREC schools on weekly basis to set expectations and ensure high quality of application',
                            'Published mobile application on the Google Play store',
                            'Attended weekly presentations on topics such as software development, cyber security, and robotics'
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
                        description: 'HTML, WebStorm, Visual Studio Code',
                        rating: 3
                    },
                    {
                        title: 'CSS',
                        description: 'CSS, Sass, Bootstrap',
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
        ]
    };
})();