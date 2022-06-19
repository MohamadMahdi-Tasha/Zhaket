// Codes By Mahdi Tasha
// Variables
const headerSearchBtn = document.getElementById('dv-header-search-btn');
const headerSearchInput = document.getElementById('dv-header-search-input');

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