document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('#toggler');
    const labels = document.querySelectorAll('.nav--mobile .nav__btn');
    const links = document.querySelectorAll('.nav--mobile .nav__link');

    for(label of labels) {
        label.addEventListener('click', () => {
            document.body.classList.toggle('open-menu');
        });
    }

    for(link of links) {
        link.addEventListener('click', () => {
            labels[0].click();
        });
    }

    matchMedia('(min-width: 992px)').addListener(function() {
        if(this.matches) {
            document.body.classList.remove('open-menu');
            checkbox.checked = false;
        }
    });
});