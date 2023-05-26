
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/embed/d7ocgBD6WVU";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;



$(document).ready(function() {
    $('#video-modal').on('shown.bs.modal', function(e) {
        let button = $(e.relatedTarget),
            video = button.data('video');

        if (player) {
            if (player.playerInfo.videoData.video_id == video) {
                player.playVideo();
            } else {
                player.loadVideoById(video);
            }

        } else {
            player = new YT.Player('player', {

                playerVars: {
                    'controls': 0,
                    'showinfo': 0,
                    'rel': 0,
                    'autoplay': 0,
                    'playsinline': 1
                },
                videoId: video,
                events: {
                    'onReady': onPlayerReady,
                }
            });
        }
    });

    $('#video-modal').on('hidden.bs.modal', function() {
        player.pauseVideo();
    });

    function onPlayerReady() {
        player.playVideo();
    }
});











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


//$( "#submitAmo" ).on( "click", function() {
  //  $('.amoforms_iframe').css('display','block');
  //} );
  



  let btnVidosA = document.querySelector('.home__video-izum')
  
  
  let actifeFormZakaz = document.querySelector('.actife__form-zakaz')
  let clousefornacmZakaz = document.querySelector('.clousefornacm-zakaz')
  
  let actifeForm = document.querySelector('.actife__form')
  let clousefornacm = document.querySelector('.clousefornacm')
  let headerOther = document.querySelector('.header__other')
  
  
  
  headerOther.addEventListener('click', function(){
      actifeFormZakaz.classList.toggle('actife__form-open-zakaz')
  })
  
  clousefornacmZakaz.addEventListener('click', function(){
      actifeFormZakaz.classList.remove('actife__form-open-zakaz')
  })
  

///////////////////////////////////////////////////////////////////////

  