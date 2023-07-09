///////////////////////////////////

const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1
const clamp = (val, min, max) => Math.max(min, Math.min(val, max))

class DragScroll {
  
  constructor(obj) {
    this.$el = document.querySelector(obj.el)
    this.$wrap = this.$el.querySelector(obj.wrap)
    this.$items = this.$el.querySelectorAll(obj.item)
    this.$bar = this.$el.querySelector(obj.bar)
    this.init()
  }
  
  init() {
    this.progress = 0
    this.speed = 0
    this.oldX = 0
    this.x = 0
    this.playrate = 0
    //
    this.bindings()
    this.events()
    this.calculate()
    this.raf()
  }
  
  bindings() {
    [
     'events', 
     'calculate',
     'raf', 
     'handleWheel', 
     'move', 
     'raf', 
     'handleTouchStart',
     'handleTouchMove', 
     'handleTouchEnd'
    ].forEach(i => { this[i] = this[i].bind(this) })
  }
  
  calculate() {
    this.progress = 0
    this.wrapWidth = this.$items[0].clientWidth * this.$items.length
    this.$wrap.style.width = `${this.wrapWidth}px`
    this.maxScroll = this.wrapWidth - this.$el.clientWidth
  }
  
  handleWheel(e) {
    this.progress += e.deltaY
    this.move()
  }
  
  handleTouchStart(e) {
    e.preventDefault()
    this.dragging = true
    this.startX = e.clientX || e.touches[0].clientX
    this.$el.classList.add('dragging')
  }

  handleTouchMove(e) {
    if (!this.dragging) return false
    const x = e.clientX || e.touches[0].clientX
    this.progress += (this.startX - x) * 2.5
    this.startX = x
    this.move()
  }

  handleTouchEnd() {
    this.dragging = false
    this.$el.classList.remove('dragging')
  }
  
  move() {
    this.progress = clamp(this.progress, 0, this.maxScroll)
  }
  
  events() {
    window.addEventListener('resize', this.calculate)
    window.addEventListener('wheel', this.handleWheel)
    //
    this.$el.addEventListener('touchstart', this.handleTouchStart)
    window.addEventListener('touchmove', this.handleTouchMove)
    window.addEventListener('touchend', this.handleTouchEnd)
    //
    window.addEventListener('mousedown', this.handleTouchStart)
    window.addEventListener('mousemove', this.handleTouchMove)
    window.addEventListener('mouseup', this.handleTouchEnd)
    document.body.addEventListener('mouseleave', this.handleTouchEnd)
  }
  
  raf() {
    // requestAnimationFrame(this.raf)
    this.x = lerp(this.x, this.progress, 0.1)
    this.playrate = this.x / this.maxScroll
    //
    this.$wrap.style.transform = `translateX(${-this.x}px)`
    
    //
    this.speed = Math.min(100, this.oldX - this.x)
    this.oldX = this.x
    //
    this.scale = lerp(this.scale, this.speed, 0.1)
    this.$items.forEach(i => {
      i.style.transform = `scale(${1 - Math.abs(this.speed) * 0.002})`
      i.querySelector('img').style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`
    })
  }
}


/*--------------------
Instances
--------------------*/
const scroll = new DragScroll({
  el: '.carousel',
  wrap: '.carousel--wrap',
  item: '.carousel--item',
  bar: '.carousel--progress-bar',
})


/*--------------------
One raf to rule em all
--------------------*/
const raf = () => {
  requestAnimationFrame(raf)
  scroll.raf()
}
raf()



let podrobn1 = document.querySelector('.carousel--item')
let modal = document.querySelector('.modal')



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
let Zapis2BTN = document.querySelector('.Zapis1BTN2')
let Zapis3BTN = document.querySelector('.Zapis1BTN3')
let Zapis4BTN = document.querySelector('.Zapis1BTN4')
let wrapperOnlineZapis = document.querySelector('.wrapperOnlineZapis1')
let closeZapis1 = document.querySelector('.closeZapis1')

Zapis1BTN.addEventListener('click', function(){
  wrapperOnlineZapis.classList.add('wrapperOnlineZapis-opening')
})

Zapis2BTN.addEventListener('click', function(){
  wrapperOnlineZapis.classList.add('wrapperOnlineZapis-opening')
})

Zapis3BTN.addEventListener('click', function(){
  wrapperOnlineZapis.classList.add('wrapperOnlineZapis-opening')
})

Zapis4BTN.addEventListener('click', function(){
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

window.addEventListener('change', function(){

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


