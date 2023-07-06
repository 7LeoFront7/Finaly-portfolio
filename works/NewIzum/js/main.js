$('.menu').click (function(){
    $(this).toggleClass('open');
  });

  let burger = document.querySelector('.menu')
let burgerWrapper = document.querySelector('.burger-wrapper')

burger.addEventListener('click', function(){
    burgerWrapper.classList.toggle('burger-wrapper-open')
})
  

const items = document.querySelectorAll(".accordion .burger__adressa");
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
items.forEach(item => item.addEventListener('click', toggleAccordion));

////////////////////////////////

let Zapis1BTN = document.querySelector('.Zapis1BTN')
let wrapperOnlineZapis = document.querySelector('.wrapperOnlineZapis1')
let closeZapis1 = document.querySelector('.closeZapis1')

Zapis1BTN.addEventListener('click', function(){
  wrapperOnlineZapis.classList.add('wrapperOnlineZapis-opening')
})

closeZapis1.addEventListener('click', function(){
  wrapperOnlineZapis.classList.remove('wrapperOnlineZapis-opening')
})

////////////////////////////////

let ZakazZvon1 = document.querySelector('.ZakazZvon1')
let ZakazZvon2 = document.querySelector('.ZakazZvon2')
let wrapperZakazZvon1 = document.querySelector('.wrapperZakazZvon1')
let closeZakazZvon1 = document.querySelector('.closeZakazZvon1')

ZakazZvon1.addEventListener('click', function(){
  wrapperZakazZvon1.classList.add('wrapperZakazZvon1-opening')
})
ZakazZvon2.addEventListener('click', function(){
  wrapperZakazZvon1.classList.add('wrapperZakazZvon1-opening')
})

closeZakazZvon1.addEventListener('click', function(){
  wrapperZakazZvon1.classList.remove('wrapperZakazZvon1-opening')
})
