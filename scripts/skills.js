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
Data.skills.forEach(category => {
    const classToUse = classIndex === 0 ? 'first-category' : 'category';
    skillsContent += `<div><h5 class="${classToUse}">${category.title}</h5>`;
    category.skills.forEach(skill => {
        skillsContent += generateSkillSummary(skill);
    });
    skillsContent += '</div>';
    classIndex++;
});

$('#skills-content').html(skillsContent);

// import Vue from 'vue';
//
// Vue.component('skills-content', {
//     template: `<div class="text-left">skills</div>`,
// });
//
// Vue.component('', {
//
// });
//
// Vue.component('', {
//
// });

