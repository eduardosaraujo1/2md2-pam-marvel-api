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
        if (Math.abs(diff) > 100) {
            swipe(true);
        }
    });
}

loadSwipeHandler();
