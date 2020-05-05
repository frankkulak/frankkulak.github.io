// --------------------------------------------------------------------------------
// Experience duration

// Experience IDs and their start/end dates
// IMPORTANT: Months are off by 1 (Jan = 0, Feb = 1, etc.)
const experiences = {
    // co-ops and internships
    'tjx': {
        'start': new Date(2019, 6), // Jul 2019
        'end': new Date(2019, 11) // Dec 2019
    },
    'mah': {
        'start': new Date(2016, 6), // Jul 2016
        'end': new Date(2016, 7) // Aug 2016
    },
    // part-time work
    'nututor': {
        'start': new Date(2019, 0), // Jan 2019
        'end': new Date() // Present
    },
    'sherwood': {
        'start': new Date(2018, 5), // Jun 2018
        'end': new Date(2019, 6) // Jul 2019
    },
    'sfs': {
        'start': new Date(2017, 8), // Sep 2017
        'end': new Date(2020, 2) // Mar 2020
    },
    'barnes': {
        'start': new Date(2017, 5), // Jun 2017
        'end': new Date(2017, 7) // Aug 2017
    },
    // volunteer work
    'berlab': {
        'start': new Date(2018, 0), // Jan 2018
        'end': new Date(2018, 11) // Dec 2018
    },
    'lgr': {
        'start': new Date(2017, 9), // Oct 2017
        'end': new Date(2017, 10) // Nov 2017
    },
    'csp': {
        'start': new Date(2016, 7), // Aug 2016
        'end': new Date(2017, 10) // Jun 2017
    },
    'hstutor': {
        'start': new Date(2014, 8), // Sep 2014
        'end': new Date(2017, 5) // Jun 2017
    },
    'dc': {
        'start': new Date(2011, 9), // Oct 2011
        'end': new Date(2016, 11) // Dec 2016
    },
};

// Returns a formatted string for the span between two dates (e.g. "Jan. 2019 - Dec. 2019").
const experienceSpan = (startDate, endDate) => {
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
    const formatDate = date => `${months[date.getMonth()]} ${date.getFullYear()}`;
    const present = new Date();

    // formatting and return start and end dates
    const formattedStart = startDate.getFullYear() === endDate.getFullYear() ?
        months[startDate.getMonth()] : formatDate(startDate);
    const formattedEnd = endDate.getMonth() === present.getMonth() && endDate.getFullYear() === present.getFullYear() ?
        'Present' : formatDate(endDate);
    return `${formattedStart} - ${formattedEnd}`;
};

// Returns a formatted string for the duration between two dates (e.g. "1 yr 6 mos").
const experienceDuration = (startDate, endDate) => {
    // find number of full years between the dates
    let years = endDate.getFullYear() - startDate.getFullYear();
    if (startDate.getMonth() > endDate.getMonth()) years--;

    // find number of full months between the dates (includes start and end month, and excludes full years in-between)
    let months = (endDate.getMonth() - startDate.getMonth());
    if (months < 0) months = 12 + months;
    months++;

    // determine abbreviations to use for years and months
    const yearAbbr = years === 1 ? 'yr' : 'yrs';
    const monthAbbr = months === 1 ? 'mo' : 'mos';

    // format & return output string
    if (years === 0) {
        return `${months} ${monthAbbr}`;
    } else if (months === 0) {
        return `${years} ${yearAbbr}`;
    } else {
        return `${years} ${yearAbbr} ${months} ${monthAbbr}`;
    }
};

// Sets the inner HTML of each experience span/duration element.
Object.keys(experiences).forEach(id => {
    const {start, end} = experiences[id];
    document.getElementById(`expspn-${id}`).innerHTML = experienceSpan(start, end);
    document.getElementById(`expdur-${id}`).innerHTML = experienceDuration(start, end);
});

// --------------------------------------------------------------------------------
// Auto-scrolling

$('.card').on('shown.bs.collapse', function () {
    let card = $(this).closest('.card');
    let navbarOffset = $('#navbar').height() * 1.5;
    console.log(navbarOffset);
    $('html,body').animate({
        scrollTop: card.offset().top - navbarOffset
    }, 500);
});

// --------------------------------------------------------------------------------
// Dark mode

const themeKey = 'fk-theme';

const setTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(themeKey, theme);
};

const themeCheckbox = $('input[name=theme]');
themeCheckbox.change(function() {
    if($(this).is(':checked')) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

const storedTheme = localStorage.getItem(themeKey);
if (storedTheme !== null) {
    themeCheckbox.prop("checked", storedTheme === 'dark');
    setTheme(storedTheme);
}
