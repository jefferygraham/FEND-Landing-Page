/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navBarList = document.querySelector('#navbar__list');
const navItems = document.querySelectorAll('[data-nav]');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// build the nav
buildNav = (elements) => {
    for (let element of elements) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', `#${element.id}`);
        a.classList.add('menu__link');
        a.appendChild(document.createTextNode(element.dataset.nav));
        li.appendChild(a);
        navBarList.append(li);
    }
}


// Add class 'active' to section when near top of viewport
addActive = (elements) => {
    for (let element of elements) {
        console.log(element.getBoundingClientRect().top);
        if (element.getBoundingClientRect().top < 1 && element.getBoundingClientRect().top > -1) {
            element.classList.add('your-active-class');
        }
        else {
            element.classList.remove('your-active-class');
        }
    }
}


// Scroll to anchor ID using scrollTO event

scrollToSection = (elem) => {
    elem.scrollIntoView({
        behavior: 'smooth'
    });
}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
buildNav(navItems);

// Scroll to section on link click
navBarList.addEventListener('click', elem => {
    elem.preventDefault();
    const anchorId = elem.target.hash;
    const anchorElement = document.querySelector(`${anchorId}`);
    scrollToSection(anchorElement);
});

// Set sections as active
window.addEventListener('scroll', elem => {
    addActive(sections);
})