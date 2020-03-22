function setView() {
  setExperienceDurations();
}

function setExperienceDurations() {
  // co-ops & internships
  document.getElementById('expdur-tjx').innerHTML = employmentDuration(new Date(2019, 6), new Date(2019, 11)); // July - Dec. 2019
  document.getElementById('expdur-mah').innerHTML = employmentDuration(new Date(2016, 6), new Date(2016, 7)); // July - Aug. 2016
  // part-time work
  document.getElementById('expdur-tutoring').innerHTML = employmentDuration(new Date(2019, 0), new Date()); // Jan. 2019 - Present
  document.getElementById('expdur-sherwood').innerHTML = employmentDuration(new Date(2018, 5), new Date(2019, 6)); // June 2018 - July 2019
  document.getElementById('expdur-sfs').innerHTML = employmentDuration(new Date(2017, 8), new Date(2020, 3)); // Sept. 2017 - Mar. 2020
  document.getElementById('expdur-barnes').innerHTML = employmentDuration(new Date(2017, 5), new Date(2017, 7)); // June - Aug. 2017
  // volunteer work
  document.getElementById('expdur-berentlab').innerHTML = employmentDuration(new Date(2018, 0), new Date(2018, 11)); // Jan. - Dec. 2018
  document.getElementById('expdur-lgr').innerHTML = employmentDuration(new Date(2017, 9), new Date(2017, 10)); // Oct. - Nov. 2017
  document.getElementById('expdur-mobilecsp').innerHTML = employmentDuration(new Date(2016, 7), new Date(2017, 5)); // Aug. 2016 - June. 2017
  document.getElementById('expdur-nhstutor').innerHTML = employmentDuration(new Date(2014, 8), new Date(2017, 5)); // Sept. 2014 - June 2017
  document.getElementById('expdur-dischal').innerHTML = employmentDuration(new Date(2011, 9), new Date(2016, 11)); // Oct. 2011 - Dec. 2016
}

function yearsBetween(startDate, endDate) {
  let years = endDate.getFullYear() - startDate.getFullYear();
  if (startDate.getMonth() > endDate.getMonth()) {
    return years - 1;
  } else {
    return years;
  }
}

function monthsBetween(startDate, endDate) {
  // intentionally not adding (years * 12) because I need to use years and months in employmentDuration()
  let months = (endDate.getMonth() - startDate.getMonth());
  if (months < 0) months = 12 + months;
  return months + 1;
}

function employmentDuration(startDate, endDate) {
  let years = yearsBetween(startDate, endDate);
  let yearAbbr = years == 1 ? 'yr' : 'yrs';
  let months = monthsBetween(startDate, endDate);
  let monthAbbr = months == 1 ? 'mo' : 'mos';
  if (years == 0) {
    return `${months} ${monthAbbr}`;
  } else if (months == 0) {
    return `${years} ${yearAbbr}`;
  } else {
    return `${years} ${yearAbbr} ${months} ${monthAbbr}`;
  }
}

setView();