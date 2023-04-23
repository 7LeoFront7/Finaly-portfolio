let BtnActive = document.querySelector('.home__button-reg');
let popupActive = document.querySelector('.form__data-phone');
let formActiveClouse = document.querySelector('.formActive-clouse')

BtnActive.addEventListener('click', function(){
    popupActive.classList.toggle('open')
})

formActiveClouse.addEventListener('click', function(){
    popupActive.classList.remove('open')
})