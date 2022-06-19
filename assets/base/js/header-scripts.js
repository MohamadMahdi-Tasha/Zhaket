// Codes By Mahdi Tasha
// Variables
const headerSearchBtn = document.getElementById('dv-header-search-btn');
const headerSearchInput = document.getElementById('dv-header-search-input');
const header = document.getElementById('dv-header');

// Adding Event Listener On Headers Search Button That
// Listens To Click And Focuses To headerSearchInput And Shows It And Hides Search Button
headerSearchBtn.addEventListener('click', () => {
    headerSearchInput.focus();
    headerSearchInput.setAttribute('data-opened', 'true');
    headerSearchBtn.setAttribute('data-opened', 'false');
})

// Adding Event Listener On Header Search Input That Listens To Blur(Not Focused) And Hides It And Shows Search Button
headerSearchInput.addEventListener('blur', () => {
    headerSearchInput.setAttribute('data-opened', 'false');
    headerSearchBtn.setAttribute('data-opened', 'true');
})

// Adding Event Listener On Window That Listens To Scroll And Checks If Height From Top Is More Or Less Than 50 Then Add
// Class Of 'dv-scrolled' To Header . Otherwise Removes The CLassName.
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {header.classList.add('dv-scrolled');}
    else {header.classList.remove('dv-scrolled');}
})