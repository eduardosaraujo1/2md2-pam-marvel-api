function swipe(bool) {
    const content = document.querySelector('.content');
    if (bool == undefined) {
        content.classList.toggle('swiped');
    } else if (bool) {
        content.classList.add('swiped');
    } else {
        content.classList.remove('swiped');
    }
}

let touchStartPosX = 0;
let touchEndPosX = 0;
function loadSwipeHandler() {
    document.addEventListener('touchstart', (event) => {
        touchStartPosX = event.changedTouches[0].screenX;
    });
    document.addEventListener('touchend', (event) => {
        touchEndPosX = event.changedTouches[0].screenX;
        const diff = touchEndPosX - touchStartPosX;
        if (diff < -100) {
            swipe(true);
        }
    });
}

function load() {
    loadSwipeHandler();
}

load();

function getAllFormElements() {
    // Get all input, select, and textarea elements
    const elements = document
        .querySelector('form')
        .querySelectorAll('input, select, textarea');
    const array = Array.from(elements);
    const data = array.map((e) => {
        return e.name;
    });

    return [...new Set(data)];
}
