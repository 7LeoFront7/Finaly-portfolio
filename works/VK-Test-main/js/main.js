const chachBalanceBtn = document.querySelector('.chanch-balance');
const BlockBalance = document.querySelector('.header__my-balance');
const popchachBalanceBtn = document.querySelector('.popup-addNewBalance');
const popBlockBalance = document.querySelector('.poppup-balance');
let balance = 10000;

chachBalanceBtn.addEventListener('click', function(){
    let sum = prompt('Пополните баланс :) Или Введите просто введите новый');
    let newSum = Number(sum);
    if(isNaN(newSum)){
        alert('Ошибка при вводе цифр)');
            }else if(newSum >= 1000000){
        alert('Слишком большое пополнение!');
        balance = 10000;
        BlockBalance.innerHTML = `<span class="balance"> ${balance} ₽</span>` 
    } else {
    balance = newSum;
    BlockBalance.innerHTML = `<span class="balance"> ${balance} ₽</span>` 
    }
})

popchachBalanceBtn.addEventListener('click', function(){
    let sum = prompt('Пополните баланс :) Или Введите просто введите новый');
    let newSum = Number(sum);
    if(isNaN(newSum)){
        alert('Ошибка при вводе цифр)');
            }else if(newSum >= 50000){
        alert('Слишком большое пополнение!');
        balance = 10000;
        popBlockBalance.innerHTML = `<span class="balance">${balance} ₽</span>` 
    } else {
    balance = newSum;
    popBlockBalance.innerHTML = `<span class="balance">${balance }₽</span>` 
    }
})


let burger = document.querySelector('#burger');
let popup = document.querySelector('#popup');

burger.addEventListener("click", burgerOpen);

function burgerOpen(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    burger.classList.toggle("active")
}


let btnInp = document.getElementById('btnIn');

///////////////////////////////////////////////////////////////////////////////$Recycle.Bin



const buscetttBtn = document.querySelector('.buscettt')
const boxBooks = document.querySelector('.box-books-buscet')

buscetttBtn.addEventListener('click', function(){
    boxBooks.classList.toggle('hide')
})

