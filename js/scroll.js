//Navbar
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Funcion click responsive barra JQUERY
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
})

//
const nav = document.querySelector('.menu-toggle button');
nav.addEventListener('click', e =>{
    nav.classList.toggle('open');
})