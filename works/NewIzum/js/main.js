
let actifeFormZakaz = document.querySelector('.actife__form-zakaz')
let clousefornacmZakaz = document.querySelector('.clousefornacm-zakaz')
let ZakazObratZvonok = document.querySelector('.zakzObratZvon')
let ZakazObratZvonok2 = document.querySelector('.zakzObratZvon2')



ZakazObratZvonok.addEventListener('click', function(){
  actifeFormZakaz.classList.add('actife__form-open-zakaz')
})

ZakazObratZvonok2.addEventListener('click', function(){
  actifeFormZakaz.classList.add('actife__form-open-zakaz')
})

clousefornacmZakaz.addEventListener('click', function(){
    actifeFormZakaz.classList.remove('actife__form-open-zakaz')
})



///////////////////////////////////////////////////////////////////////



const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


//////////////////////////////////////////////////////////////////////////

let headerBurger = document.querySelector('.header__burger')
let burgerPhone = document.querySelector('.burger-phone')

headerBurger.addEventListener('click', function(){
    burgerPhone.classList.toggle('open-burger')
})

////////////////////////////////////////////////////////////////////

 



  
