// Codes By Mahdi Tasha
// Variables
const mobileNavListToggler = document.querySelectorAll('.dv-mobile-nav-list-toggler');
const mobileNavToggler = document.getElementById('dv-nav-toggle-btn');
const mobileNav = document.getElementById('dv-mobile-nav');
const mobileNavDarkBg = document.getElementById('dv-mobile-nav-dark-bg');

// A Function That Gets State And Sets Attribute Of 'mobileNav', 'mobileNavDarkBg', Elements To Its Given State.
// Which Is True By Default
function setAttrOfNavAndBgOnState(state = 'true') {
    mobileNav.setAttribute('data-opened', state);
    mobileNavDarkBg.setAttribute('data-opened', state);
}

// Adding Event Listener That Listens To CLick And Calls 'setAttrOfNavAndBgOnState' With Their State.
mobileNavToggler.addEventListener('click', () => {setAttrOfNavAndBgOnState('true')})
mobileNavDarkBg.addEventListener('click', () => {setAttrOfNavAndBgOnState('false');})

// Adding Event Listener On Each Btn With Class Of 'dv-mobile-nav-list-toggler' That Makes A Local Variable
// And Adds 1 To It Each Time OnClick Then Checks If From Calculation Of Its Value divided By 2 , Doesn't Remain 0
// Then It Sets Attribute Of 'data-opened' To 'True' Otherwise To  'false'.
mobileNavListToggler.forEach((toggler) => {
    let tapsOnToggler = 0;
    toggler.addEventListener('click', () => {
        tapsOnToggler ++;
        (tapsOnToggler % 2 !== 0) ?
            toggler.setAttribute('data-opened', 'true') :
            toggler.setAttribute('data-opened', 'false');
    })
})