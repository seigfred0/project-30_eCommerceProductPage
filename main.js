// Mobile Side Nav
const openSideNav = document.querySelector('.openBtn');
const closeSideNav = document.querySelector('.closeBtn');
const sideNav = document.querySelector('.sideNav');

openSideNav.addEventListener('click', () => {
    sideNav.style.width = '250px'
    document.body.classList.toggle('darken')
  
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