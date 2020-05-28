const Util = (function () {
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

    function formatDateSpanHTML({start, end}) {
        if (start === undefined || end === undefined) throw "illegal object format for formatDateSpanHTML";

        const startMonth = months[start.getMonth()];
        const startYear = start.getFullYear();

        if (end == null) return `${startMonth} ${startYear}<span class="nowrap"> – Present</span>`;

        const endMonth = months[end.getMonth()];
        const endYear = end.getFullYear();

        if (startYear === endYear) {
            return `<span class="nowrap">${startMonth} – ${endMonth}</span> ${endYear}`;
        } else {
            return `${startMonth} ${startYear}<span class="nowrap"> – ${endMonth} ${endYear}</span>`;
        }
    }

    return {
        formatDateSpanHTML: formatDateSpanHTML
    }
})();