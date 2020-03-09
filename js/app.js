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
checkLocations = (elements) => {
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



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// build the nav
for (let item of navItems) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', `#${item.id}`);
    a.classList.add('menu__link');
    a.appendChild(document.createTextNode(item.dataset.nav));
    li.appendChild(a);
    navBarList.append(li);
}

// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event
navBarList.addEventListener('click', elem => {
    elem.preventDefault();
    const anchorId = elem.target.hash;
    const anchorElement = document.querySelector(`${anchorId}`);
    anchorElement.scrollIntoView({
        behavior: 'smooth'
    });
    checkLocations(sections);
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active