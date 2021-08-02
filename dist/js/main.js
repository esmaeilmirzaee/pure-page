const menuBtn = document.querySelector('.menu__btn');
const menuBtnBurger = document.querySelector('.menu__btn_burger');
const nav = document.querySelector('nav');
const menuNav = document.querySelector('.menu__nav');
const navItems = document.querySelectorAll('.menu__nav_item');

let showMenu = false;
menuBtn.addEventListener('click', () => {
    if (!showMenu) {
        document.body.scroll = 'no';
        menuBtnBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach((item) => item.classList.add('open'));

        showMenu = true;
    } else {
        menuBtnBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach((item) => item.classList.remove('open'));
        document.body.scroll = 'yes';

        showMenu = false;
    }
});
