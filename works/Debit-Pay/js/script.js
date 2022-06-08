
let burger = document.querySelector('#burger');
let burger2 = document.querySelector('#burger2');
let popup = document.querySelector('#popup');
let clouse = document.querySelector('.header__burger');

burger.addEventListener("click", burgerOpen);

function burgerOpen(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    burger.classList.toggle("active");
}

function myClick(){

    if(burger2.classList.contains('active')){
        clouse.innerHTML='<img src=img/clouse.svg alt=pic>';
    } else {
        clouse.innerHTML='<img src=img/burger.svg alt=pic>';
}}

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

