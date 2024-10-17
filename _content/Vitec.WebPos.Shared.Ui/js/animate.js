import autoAnimate from './autoAnimate.js'; 

export function autoAnimateElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        autoAnimate(element, {
            duration: 170,
            easing: "ease-in-out",
            disrespectUserMotionPreference: false
        });
    } else {
        console.log(`Element with ID ${elementId} not found.`);
    }
}

window.autoAnimateElement = autoAnimateElement;
