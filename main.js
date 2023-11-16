// Mobile Side Nav
const openSideNav = document.querySelector('.openBtn');
const closeSideNav = document.querySelector('.closeBtn');
const sideNav = document.querySelector('.sideNav');

openSideNav.addEventListener('click', () => {
    sideNav.style.width = '250px'
    document.body.classList.toggle('darken')
    if(basketVisible) {
        basket.style.display = "none";
        basketVisible = false;
    }
  
    
});

closeSideNav.addEventListener('click', () => {
    sideNav.style.width = '0px';
    document.body.classList.toggle('darken')

});



// Add To Cart Section
const plustBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
let displayCount = document.querySelector('.count');
let count = 0;

plustBtn.addEventListener('click', addAmount)
minusBtn.addEventListener('click', minusAmount)

function addAmount() {
    count += 1;
    displayCount.textContent = count;
}

function minusAmount() {
    if(count === 0) {
        count == 0
    } else {
        count -= 1;
        displayCount.textContent = count;
    }
}




// Mobile Slide Show Product
let currentImageIndex = 0;
let images = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]


document.getElementById('nextBtn').addEventListener('click', () => {
    const add = 1;
    changeImage(add);
})

document.getElementById('prevBtn').addEventListener('click', () => {
    const subtract = -1;
    changeImage(subtract);
})

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const productImage = document.querySelector('.imagesProduct');
    productImage.src = images[currentImageIndex];
}


// CART/BASKET SECTION
const cartBtn = document.querySelector('#cartBtn');
const basket = document.querySelector('.cart-container');
let basketVisible = false;
let cartBtnClikced = false;

cartBtn.addEventListener('click', () => {
    basketVisible = !basketVisible;
    basket.style.display = basketVisible ? "block" : "none";
    // cartBtn.style.filter = "invert(44%) sepia(2%) saturate(2904%) hue-rotate(179deg) brightness(94%) contrast(80%)";
    
    if(basketVisible) {
        cartBtn.querySelector('path').setAttribute('fill', 'black');
    } else {
        cartBtn.querySelector('path').setAttribute('fill', 'hsl(219, 9%, 45%)');
    }

    
})


// Cart Product

const product = {
        name: 'Fall Limited Edition Sneakers',
        price: 125.00,
        imageUrl: `images/image-prduct-1.jpg`,
};


function addProductCart() {

    

    const productInBasket = `
        <div class="selected-product">
            <img class="basket-pic" src="images/image-product-1.jpg" alt="">
            <div class="product-info">
                <p>Fall Limited Edition Sneaker</p>
                <p>$125.00 x 3 <span class="heavy total-price">$375.00</span></p>
            </div>
            <div class="product-delete">
                <img class="icon" src="images/icon-delete.svg" alt="">
            </div>
        </div>
        <button id="checkoutBtn" class="checkout">Checkout</button>
    `;

    const productContainer = document.querySelector('.cart-product');
    productContainer.innerHTML += productInBasket;
}

console.log(product.name)



// END OF CAR/BASKET SECTION

// getting rid of the pesky select text 
document.addEventListener('selectstart', (event) => {
    event.preventDefault();
});



