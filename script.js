let basket1 = document.querySelector(".Basket-1 span");
let basket2 = document.querySelector(".Basket-2 span");
let ButtonL = document.querySelector(".left-arrow");
let ButtonR = document.querySelector(".right-arrow");
let reset = document.querySelector(".reset");


const  totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;


basket1.innerText = firstBasketAppleCount;
basket2.innerText = secondBasketAppleCount;

ButtonR.addEventListener('click',()=>{
    if(firstBasketAppleCount > 0){
    firstBasketAppleCount--
    basket1.innerText = firstBasketAppleCount;

    secondBasketAppleCount++
    basket2.innerText  = secondBasketAppleCount;
}
})


ButtonL.addEventListener('click',()=>{
    if(secondBasketAppleCount > 0){
    firstBasketAppleCount++
    basket1.innerText = firstBasketAppleCount;

    secondBasketAppleCount--
    basket2.innerText  = secondBasketAppleCount;
}
})


