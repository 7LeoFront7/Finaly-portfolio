let burger = document.querySelector('.bx-menu');
let burgerpop = document.querySelector('.burger');
let burgerclose = document.querySelector('.bx-caret-left-circle');


burger.addEventListener('click', function(){
burgerpop.classList.add('open')
})

burgerclose.addEventListener('click', function(){
    burgerpop.classList.remove('open')
    })







    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");
    
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    
    for(let i=0; i<marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }