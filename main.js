const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

//cuando le doy al menu se activa la open class
menuToggler.addEventListener('click', function(){
    body.classList.toggle('open')
})

//Scroll reveal

window.sr= ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem', 
    delay:200
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem', 
    delay:200
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem', 
    delay:200
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem', 
    delay:200
});
