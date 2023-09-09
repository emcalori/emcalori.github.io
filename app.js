const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
const aboutMeButton = document.querySelector('#aboutMeButton');

aboutMeButton.addEventListener('click', () => {
    const aboutMe = document.querySelector('#about_me');

    if (getComputedStyle(aboutMe).display === 'none') {
        aboutMe.style.display = 'flex';
    } 
})

const closeAboutMeButton = document.querySelector('#closeAboutMeButton');

closeAboutMeButton.addEventListener('click', () => {
    const aboutMe = document.querySelector('#about_me');

    if (getComputedStyle(aboutMe).display === 'flex') {
        aboutMe.style.display = 'none';
    } 
})