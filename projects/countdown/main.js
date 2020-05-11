const startDate = new Date("05/04/2020");
const endDate = new Date("06/18/2020");
const today = new Date();
const timeSinceStart = today.getTime() - startDate.getTime();
const totalTime = endDate.getTime() - startDate.getTime();

// populating label text
const timeRemaining = totalTime - timeSinceStart;
const days = (timeRemaining / 1000) / 86400;
const wholeDays = Math.floor(days);
const hours = (days - wholeDays) * 24;
const wholeHours = Math.floor(hours);
const minutes = (hours - wholeHours) * 60;
const wholeMinutes = Math.floor(minutes);
$('#progress-label').html(`${wholeDays}d ${wholeHours}h ${wholeMinutes}m`);

// populating progress bar
const percentComplete = Math.floor((timeSinceStart / totalTime) * 100);
const progressString = `${percentComplete}%`;
const progressBar = $('#progress-bar');
progressBar.width(progressString);
progressBar.html(progressString);