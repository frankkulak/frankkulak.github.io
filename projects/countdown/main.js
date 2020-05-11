const startDate = new Date("05/04/2020");
const endDate = new Date("06/18/2020");
const today = new Date();
const timeSinceStart = today.getTime() - startDate.getTime();
const totalTime = endDate.getTime() - startDate.getTime();

// populating label text
const timeRemaining = totalTime - timeSinceStart;
const daysRemaining = (timeRemaining / 1000) / 86400;
$('#progress-label').html(`Days remaining: ${Math.round(daysRemaining)}`);

// populating progress bar
const progressString = `${Math.floor((timeSinceStart / totalTime) * 100)}%`;
const progressBar = $('#progress-bar');
progressBar.width(progressString);
progressBar.html(progressString);