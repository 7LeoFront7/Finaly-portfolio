const cardWrapper = document.querySelector('.buscet-box-books')

window.addEventListener('click', function(event){
    
    if (event.target.hasAttribute('data-cart')){
        const card =  event.target.closest('.card')
        

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.book_img').getAttribute('src'),
            title: card.querySelector('.book_name').innerText,
            autor:card.querySelector('.book_aut').innerText,
            price:card.querySelector('.book_price').innerText,
            counter:1
        };


       

        





        const itemInCart = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`)

      

        if(itemInCart){
            const counterEl = itemInCart.querySelector('[data-counter]');
            

            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter)
            
        } else {

          

            const cardItemHTML = `
            <div class="buscet-book" data-id="${productInfo.id}">
                        <div class="buscet__body">
                          <div class="buscet__img">
                            <img src="${productInfo.imgSrc}" alt="">
                          </div>
                          <div class="buscet__body-all">
                            <div class="buscet__body-title">
                            <h2>${productInfo.title}</h2>
                          </div>
                          <div class="buscet__body-text">
                            <h3>${productInfo.autor};</h3>
                          </div>
                          <div class="buscet__body-price">
                            <span>${productInfo.price}</span>
                          </div>
                          </div>
                          <div class="details-wrapper">
                            <div class="items counter-wrapper">
                          
                                 <div class="items_control" data-action="minus"> - </div>
                                 <div class="items_current" data-counter>${productInfo.counter}</div>
                                 <div class="items_control" data-action="plus">+</div>
                            </div>
                          </div>
                        </div>
                        
    
                        
                      </div>
            `

            cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
        }



        toggleCartStatus()

        calcCartPrice()







    }

   
}
)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////$Recycle.Bin


function toggleCartStatus(){
 
  const cartympty = document.querySelector('[data-cart-empty]');
  const cartbay = document.querySelector('[data-cart-bay]') 

  if(cardWrapper.children.length > 0){
   
    cartympty.classList.add('hide')
    cartbay.classList.remove('hide')
  } else {
   
    cartympty.classList.remove('hide')
    cartbay.classList.add('hide')
    
  }
}





/////////////////////////////////////////////////////////////////////////////////////////////////////////////$Recycle.Bin


window.addEventListener('click', function(event){

        if (event.target.dataset.action === 'plus'){
            
            const counterWrapper = event.target.closest('.counter-wrapper');
            const dataCounter = counterWrapper.querySelector('[data-counter]');

            dataCounter.innerText = ++dataCounter.innerText
            calcCartPrice()
            
        }




        if (event.target.dataset.action === 'minus'){
            const counterWrapper = event.target.closest('.counter-wrapper');
            const dataCounter = counterWrapper.querySelector('[data-counter]');


            if(parseInt(dataCounter.innerText) > 1){
dataCounter.innerText = --dataCounter.innerText
            } else if(event.target.closest('.buscet-box-books') && (parseInt(dataCounter.innerText) === 1)){
              event.target.closest('.buscet-book').remove();

              toggleCartStatus()

            
            }

            calcCartPrice()

        }
})



function calcCartPrice(){
  const cartItems = document.querySelectorAll('.buscet-book');

  let totalPrice = 0;
  let titlePrice = document.querySelector('.buscet-bay h1')
  

  cartItems.forEach(function(item){
    const amountEl = item.querySelector('[data-counter]')
    const priceEl = item.querySelector('.buscet__body-price span')
    const allPriceCart = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
    totalPrice += allPriceCart

  })

  titlePrice.innerText = `${totalPrice} ₽`
}


let buttonPay = document.querySelector('.btn-pay')

buttonPay.addEventListener('click', function(event){

    let balance = document.querySelector('.balance')
    let balancepop = document.querySelector('.poppup-balance')

    let result;

   let add = document.querySelector('.buscet-bay h1')
  if (parseInt(add.innerText) > parseInt(balance.innerText)){
    alert('Ошибка: Недостаточно средств ₽')
  } else {
    alert('Спасибо за покупку :)')
    result =  parseInt(balance.innerText) - parseInt(add.innerText)
    balance.innerText = `${result} ₽`
    balancepop.innerText = `${result} ₽`
    
   cardWrapper.innerHTML = ''

    toggleCartStatus()
}
})
