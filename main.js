

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