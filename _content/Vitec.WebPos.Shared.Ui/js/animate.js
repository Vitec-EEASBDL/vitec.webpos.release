import autoAnimate from './autoAnimate.js'; 

export function autoAnimateElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        console.log(`Initializing autoAnimate for element: ${elementId}`);

        autoAnimate(element, {
            duration: 170,
            easing: "ease-in-out",
            disrespectUserMotionPreference: false
        });

        console.log(`autoAnimate initialized on: ${elementId}`);
    } else {
        console.log(`Element with ID ${elementId} not found.`);
    }
}

window.autoAnimateElement = autoAnimateElement;
