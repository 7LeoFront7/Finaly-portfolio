function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



 window.onload = function () {
  document.body.classList.add('loaded_hiding');window.setTimeout(function () {
    document.body.classList.add('loaded');document.body.classList.remove('loaded_hiding');      }, 1700);

   }


const lang = document.getElementById('lang');
const lang2 = document.getElementById('lang2');
const lang3 = document.getElementById('lang3');

lang.addEventListener('click', function(){
    wrapper.classList.toggle("lang");
    chanchLang()
})
lang2.addEventListener('click', function(){
    wrapper.classList.toggle("lang");
    chanchLang()
})
lang3.addEventListener('click', function(){
    wrapper.classList.toggle("lang");
    chanchLang()
})

///////////////////////////////////////////////////////////////////

const langArr = {
    'logo-title' :{
        'en':'Nazarov Maxim',
        'ru':'Назаров Максим',
        
    },
    'logo-text' :{
        'ru':'Веб-разработчик',
        'en':'Frontend Developer',
    },
    'language' :{
        'ru':'Английский <span aria-hidden>_</span> <span aria-hidden class="cybr-btn__glitch">English</span><span aria-hidden class="cybr-btn__tag">R25</span>',
        'en':'Russian <span aria-hidden>_</span> <span aria-hidden class="cybr-btn__glitch">Русский</span><span aria-hidden class="cybr-btn__tag">R25</span>',
    },
    'vkontakte' :{
        'ru':'Вконтакте <i class="fa fa-vk"></i>',
        'en':'Vkontakte <i class="fa fa-vk"></i>',
    },
    'github' :{
        'ru':'Гитхаб <i class="fa fa-github"></i>',
        'en':'Github <i class="fa fa-github"></i>',
    },
    'email' :{
        'ru':'Почта <i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>',
        'en':'E-mail <i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>'
    },
    'nav-home' :{
        'ru':'Главная',
        'en':'Home',
    },
    'nav-about' :{
        'ru':'Обо мне',
        'en':'About me',
    },
    'nav-port' :{
        'ru':'Портфолио',
        'en':'Portfolio',
    },
    'logo-contact' :{
        'ru':'Контакты',
        'en':'Contact',
    },
    'nav-games' :{
        'ru':'Игры',
        'en':'Games',
    },
    'mess-me' :{
        'ru':'Написать мне <span aria-hidden>_</span> <span aria-hidden class="cybr-btn__glitch green">Сообщение</span><span aria-hidden class="cybr-btn__tag">R25</span>',
        'en':'Write to me <span aria-hidden>_</span> <span aria-hidden class="cybr-btn__glitch green">Message</span><span aria-hidden class="cybr-btn__tag">R25</span>',
    },
    'nav-home2' :{
        'ru':'Главная <i class="bx bx-home"></i>',
        'en':'Home <i class="bx bx-home"></i>',
    },
    'nav-about2' :{
        'ru':'Обо мне <i class="bx bx-user"></i>',
        'en':'About me <i class="bx bx-user"></i>',
    },
    'nav-port2' :{
        'ru':'Портфолио <i class="bx bx-briefcase"></i>',
        'en':'Portfolio <i class="bx bx-briefcase"></i>',
    },
    'logo-contact2' :{
        'ru':'Контакты <i class="bx bx-phone"></i>',
        'en':'Contact <i class="bx bx-phone"></i>',
    },
    'nav-games2' :{
        'ru':'Игры <i class="bx bx-dice-3"></i>',
        'en':'Games <i class="bx bx-dice-3"></i>',
    },
    'home-logo' :{
      'ru':'Назаров Максим | Веб-разработчик',
      'en':'Nazarov Maxim | Frontend Developer',
  },
  'about-alltext' :{
    'ru':'<span>Основное:</span>  Назаров Максим Сергеевич, родился в 05.10.2002 г., живу в Москве, гражданство РФ. <br><span>Образование:</span> ГАПОУ ТК № 24 <br>Среднее профессиональное образование  "Информационные системы и программирование" (Очная форма обучения)<br><span>Опыт работы:</span> ИП "TURILOV proj", Фронтенд-Разработчик (Частично фулстак) | Фриланс<br> <span>Дополнительная информация:</span> Полный пакет Office | Photoshop + Figma | ',
    'en':'<span>Basic:</span> Nazarov Maxim Sergeevich, was born on 05.10.2002, I live in Moscow, citizenship of the Russian Federation. <br><span>Education:</span> GAPOU TC No. 24 <br>Secondary vocational education "Information systems and programming" (Full-time education)<br><span>Work experience:</span> IP "TURILOV proj", Frontend Developer (Partially fullstack) | Freelance<br><span>Additional information:</span> Full Office package | Photoshop + Figma | |',
},
'myworks ':{
    'ru':'<h1>Мои работы</h1>',
    'en':'<h1>My works</h1>',
},
    
}

const wrapper = document.querySelector('.wrapper')

function chanchLang(){
    for(let key in langArr){
        if(wrapper.classList.contains('lang')){
            document.querySelector('.lan-'+key).innerHTML = langArr[key]['ru'];
        } else {
            document.querySelector('.lan-'+key).innerHTML = langArr[key]['en'];
        }
}}


// Master DOManipulator v2 ------------------------------------------------------------
const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  activeDelay = .76,
  interval = 5000;

let current = 0;







