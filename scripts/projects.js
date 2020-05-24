const getButtonId = projectType => `#projects-${projectType}-button`;
const getCardsId = projectType => `#${projectType}-projects`;

function onProjectButtonClicked(projectType, first = false) {
    if (!first) {
        // if not initial load, then deselect previous category
        $(getButtonId(selectedProject)).removeClass('selected');
        $(getCardsId(selectedProject)).hide();
    }

    $(getButtonId(projectType)).addClass('selected');
    $(getCardsId(projectType)).show();
    selectedProject = projectType;
}

let selectedProject = 'web';
onProjectButtonClicked(selectedProject, true);