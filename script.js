'use strict';

const navbar = document.querySelector('.header-navbar');

const toggleNavBar = () => {
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('navbar_active');
        } else if (window.pageYOffset <= 50) {
            navbar.classList.remove('navbar_active');
        }
    }
}

toggleNavBar();