const skills = [
    {
        'title': 'web development',
        'skills': [
            {
                'title': 'HTML',
                'description': 'HTML5, WebStorm, Visual Studio Code',
                'rating': 3
            },
            {
                'title': 'CSS',
                'description': 'CSS3, Sass, Bootstrap',
                'rating': 3
            },
            {
                'title': 'JavaScript',
                'description': 'ES6, jQuery',
                'rating': 3
            },
        ]
    },
    {
        'title': 'app development',
        'skills': [
            {
                'title': 'Xamarin.Forms',
                'description': 'C#, Xamarin.Forms, .NET, Visual Studio',
                'rating': 4
            },
            {
                'title': 'Native iOS',
                'description': 'Swift, Xcode',
                'rating': 2
            },
        ]
    },
    {
        'title': 'other',
        'skills': [
            {
                'title': 'Java',
                'description': 'Java, Swing, JUnit, IntelliJ IDEA, Eclipse',
                'rating': 4
            },
            {
                'title': 'Python',
                'description': 'Python, SpaCy, Scikit-Learn, Pandas, PyCharm',
                'rating': 3
            },
            {
                'title': 'Racket',
                'description': 'Racket, DrRacket',
                'rating': 2
            },
            {
                'title': 'C/C++',
                'description': 'C, C++, CLion, Visual Studio Code',
                'rating': 1
            },
            {
                'title': 'Git',
                'description': 'Git, GitHub, GitHub Desktop',
                'rating': 4
            },
        ]
    }
];

function generateSkillBar(rating) {
    const totalCells = 5;
    const generateCell = index => {
        const ordering = index === 0 ? 'first' : index === totalCells - 1 ? 'last' : '';
        const fill = rating > index ? 'full' : '';
        return `<div class="skill-cell ${ordering} ${fill}"></div>`;
    };

    let output = '<div class="row skill-bar mx-auto">';
    for (let i = 0; i < totalCells; i++) output += generateCell(i);
    output += '</div>';
    return output;
}

function generateSkillSummary(skill) {
    const title = `<h5 class="my-auto">${skill.title}</h5>`;
    const skillBar = generateSkillBar(skill.rating);
    const description = `<p>${skill.description}</p>`;
    const table = `<table class="fill-width"><tr><td>${title}</td><td class="rating">${skillBar}</td></tr></table>`;
    return `<div>${table + description}</div>`;
}

let skillsContent = '';
let classIndex = 0;
skills.forEach(category => {
    const classToUse = classIndex === 0 ? 'first-category' : 'category';
    skillsContent += `<div><h5 class="${classToUse}">${category.title}</h5>`;
    category.skills.forEach(skill => {
        skillsContent += generateSkillSummary(skill);
    });
    skillsContent += '</div>';
    classIndex++;
});

$('#skills-content').html(skillsContent);