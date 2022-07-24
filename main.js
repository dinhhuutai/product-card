

var favouElement = document.querySelector('.card-favourite');
var favouActives = document.querySelectorAll('.card-favourite i');

var addCartBtn = document.querySelector('.add-cart');
var numProducts = document.querySelector('.card-cart span');

var buyNowBtn = document.querySelector('.buy-now');

var sizeNumBtns = document.querySelectorAll('.size--number');

var colorBtns = document.querySelectorAll('.color-btn');

var imgProduct = document.querySelector('.product-img');

var cardProduct = document.querySelector('.card-product');


favouElement.onclick = function() {
    favouActives.forEach(favouActive => {
        favouActive.classList.toggle('hidden');
    });
}

addCartBtn.onclick = function() {
    numProducts.innerHTML++;
    if(Number(numProducts.innerHTML) === 10){
        numProducts.innerHTML = 0;
    }
}

buyNowBtn.onclick = function() {
    favouActives[0].classList.add('hidden');
    favouActives[1].classList.remove('hidden');
}

sizeNumBtns.forEach(sizeNumBtn => {
    sizeNumBtn.onclick = function() {
        var sizeNumActive = document.querySelector('.size--number.size--number-present');
        sizeNumActive.classList.remove('size--number-present');
        sizeNumBtn.classList.add('size--number-present');
    }
})

colorBtns.forEach(colorBtn => {
    colorBtn.onclick = function() {
        var colorActive = document.querySelector('.color-btn.color-btn-present');
        colorActive.classList.remove('color-btn-present');
        colorBtn.classList.add('color-btn-present');
        if(colorBtn.classList.contains('color--blue')){
            imgProduct.src = "./assets/img/shoes-blue.png";
            cardProduct.style.backgroundImage = "var(--blue-background)";
        }
        else if(colorBtn.classList.contains('color--pink')){
            imgProduct.src = "./assets/img/shoes-pink.png";
            cardProduct.style.backgroundImage = "var(--pink-background)";
        }
        else if(colorBtn.classList.contains('color--yellow')){
            imgProduct.src = "./assets/img/shoes-yellow.png";
            cardProduct.style.backgroundImage = "var(--yellow-background)";
        }
    }
})

