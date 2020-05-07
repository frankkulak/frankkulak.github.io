/* This code keeps track of whether the user is using a touchscreen or a mouse. This should also work for users of
* mixed devices (e.g. laptops with a touchscreen) and respond to whichever mode they're currently using. */

const mouseMode = 0;
const touchMode = 1;

let mode = undefined;
const setMode = newMode => {
    if (newMode === mode) return;
    mode = newMode;
    updateBody();
};

const updateBody = () => {
    const body = $('body');
    const mouseClass = 'mouse-mode';
    const touchClass = 'touch-mode';
    if (mode === mouseMode) {
        body.removeClass(touchClass);
        body.addClass(mouseClass);
    } else {
        body.removeClass(mouseClass);
        body.addClass(touchClass);
    }
};

let timeoutID = undefined;
let recentTouch = false;
document.addEventListener('touchstart', () => {
    console.log('touchstart noticed');
    if (timeoutID !== undefined) clearTimeout(timeoutID);
    recentTouch = true;
    setMode(touchMode);
    console.log(`mode: ${mode}`);
});

document.addEventListener('touchend', () => {
    console.log('touchend noticed');
    timeoutID = setTimeout(() => {
        recentTouch = false;
    }, 100);
});

document.addEventListener('mouseover', () => {
    console.log('mouseover noticed');
    if (!recentTouch) setMode(mouseMode);
    console.log(`mode: ${mode}`);
});
