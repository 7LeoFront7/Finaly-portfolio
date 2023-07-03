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
