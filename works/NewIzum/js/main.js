

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

///////////////////////////////////////////

let pricePhotoZon = document.querySelector('.price__photoZon')
let selectPol = document.getElementById('pol')
let selectZona = document.getElementById('zona')

//

let priceTitleitle = document.querySelector('.price-box-zona-title')
let priceOpis = document.querySelector('.price-box-opic')
let priceNew = document.querySelector('.priceNew')
let priceOld = document.querySelector('.priceOld')

window.addEventListener('click', function(){

  if (selectPol.value == 'men'){
    if (selectZona.value == '2zon'){
      pricePhotoZon.src = 'img/men1.jpg'
      priceTitleitle.innerHTML = 'Комплекс 2 зоны'
      priceOpis.innerHTML = '<ul><li>Подмышки</li><li>Бикини тотальное</li></ul>'
      priceNew.innerHTML = '1990 ₽'
      priceOld.innerHTML = '3000 ₽'
    } 
    else if (selectZona.value == '3zon'){
      pricePhotoZon.src = 'img/men2.jpg'
      priceTitleitle.innerHTML = 'Комплекс 3 зоны'
      priceOpis.innerHTML = '<ul><li>Подмышки | Голени | Бикини тотальное <br> 1 малая зона в подарок</li></ul>' 
      priceNew.innerHTML = '2990 ₽'
      priceOld.innerHTML = '4000 ₽'
    }
    else if (selectZona.value == '5zon'){
      pricePhotoZon.src = 'img/men3.jpg'
      priceTitleitle.innerHTML = 'Комплекс 5 зон'
      priceOpis.innerHTML = '<ul><li>Подмышки | Голени | Бикини тотальное Ноги полностью | 2 малые зоны в подарок</li></ul>' 
      priceNew.innerHTML = '3990 ₽'
      priceOld.innerHTML = '5000 ₽'
    }
    else if (selectZona.value == 'allzon'){
      pricePhotoZon.src = 'img/men4.jpg'
      priceTitleitle.innerHTML = 'Комплекс всё тело'
      priceOpis.innerHTML = '<ul><li>Подмышки | Голени | Бикини тотальное Ноги полностью | Руки полностью <br>3 малые зоны в подарок</li></ul>' 
      priceNew.innerHTML = '4990 ₽'
      priceOld.innerHTML = '6000 ₽'
    } else {
      pricePhotoZon.src = 'img/men5.jpg'
      priceTitleitle.innerHTML = 'Комплекс абсолютно все'
      priceOpis.innerHTML = '<ul><li>Абсолютно все</li></ul>' 
      priceNew.innerHTML = '5990 ₽'
      priceOld.innerHTML = '7000 ₽'
    }
  } else {

    if (selectZona.value == '2zon'){
      pricePhotoZon.src = 'img/ДВЕ ЗОНЫ Ж 1.jpg'
      priceTitleitle.innerHTML = 'Комплекс 2 зоны'
      priceOpis.innerHTML = '<ul><li>Подмышки</li><li>Бикини тотальное</li></ul>'
      priceNew.innerHTML = '1990 ₽'
      priceOld.innerHTML = '3000 ₽'
    } 
    else if (selectZona.value == '3zon'){
      pricePhotoZon.src = 'img/zona3.png'
      priceTitleitle.innerHTML = 'Комплекс 3 зоны'
      priceOpis.innerHTML = '<ul><li>Подмышки | Голени | Бикини тотальное <br> 1 малая зона в подарок</li></ul>' 
      priceNew.innerHTML = '2990 ₽'
      priceOld.innerHTML = '4000 ₽'
    }
    else if (selectZona.value == '5zon'){
      pricePhotoZon.src = 'img/zona5.jpg'
      priceTitleitle.innerHTML = 'Комплекс 5 зон'
      priceOpis.innerHTML = '<ul><li>Подмышки | Голени | Бикини тотальное Ноги полностью | 2 малые зоны в подарок</li></ul>' 
      priceNew.innerHTML = '3990 ₽'
      priceOld.innerHTML = '5000 ₽'
    }
    else if (selectZona.value == 'allzon'){
      pricePhotoZon.src = 'img/10zon.jpg'
      priceTitleitle.innerHTML = 'Комплекс всё тело'
      priceOpis.innerHTML = '<ul><li>Подмышки | Голени | Бикини тотальное Ноги полностью | Руки полностью <br>3 малые зоны в подарок</li></ul>' 
      priceNew.innerHTML = '4990 ₽'
      priceOld.innerHTML = '6000 ₽'
    } else {
      pricePhotoZon.src = 'img/allzon.jpg'
      priceTitleitle.innerHTML = 'Комплекс абсолютно все'
      priceOpis.innerHTML = '<ul><li>Абсолютно все</li></ul>' 
      priceNew.innerHTML = '5990 ₽'
      priceOld.innerHTML = '7000 ₽'
    }
  }





  
})


