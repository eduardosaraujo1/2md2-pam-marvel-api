function swipe(page) {
    const main = document.querySelector('main');
    if (page === 1) {
        main.scroll({
            left: 0,
            behavior: 'smooth',
        });
    } else {
        main.scroll({
            left: main.scrollWidth,
            behavior: 'smooth',
        });
    }
}

const requestBtn = document.querySelector('#btn-form-submit');
requestBtn.addEventListener('click', requestBtnOnClick);
