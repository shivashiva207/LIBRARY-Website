const nanLolo = document.getElementById('nan-lolo'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===============  MENU MENU ===============*/
if (navToggle) {
    navToggle.addEventListener('click',() =>{
        nanLolo.classList.add('show-menu')
    })
    
}
/*===============  MENU HIDDEN ===============*/
if (navClose) {
    navClose.addEventListener('click',() =>{
        nanLolo.classList.remove('show-menu')
    })
    
}
/*=============== REMOVE MENU MOBILE ===============*/
const hoMe = document.querySelectorAll('.ho-me')
const LinkAction = () =>{
    const nanLolo = document.getElementById('nan-lolo')
    // when we click on each nav__link, we remove the  show__menu
    nanLolo.classList.remove('show-menu')
}
hoMe.forEach(n => n.addEventListener('click',LinkAction))


/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () =>{
    const header = document.getElementById( 'header')
    this.scroll >= 50? header.classList.add('blur-header')
                     :header.classList.remove('blur-header')

}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
