//It's the function i got from https://owlcarousel2.github.io/ for my carousel slider
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
})

// Change navbar status, when client presses "hambuger toggle icon", menu will show
// and when they press "X" the menu will hide
let navlinks = document.getElementById("navLinks");
let faBars = document.querySelector('.fa-bars');
let faTimes = document.querySelector('.fa-times');
// Function show menu
function showMenu() {
    navlinks.style.left = "-6%";
    faBars.style.display = "none";
    faTimes.style.display = "inline";
}
// Function hide menu
function hideMenu() {
    navlinks.style.left = "-76%";
    faBars.style.display = "inline";
    faTimes.style.display = "none";
}

// //When client mouse over the product, product's background will change,
// search tool and product's in for also appear inside
let productInfors = document.querySelectorAll(".product-infor");

productInfors.forEach((item) => {
    item.onmouseover = () => {
        let productContainer = item.querySelector(".product-infor-container");
        productContainer.style.display = "flex";
        productContainer.style.transition = "all 0.7s cubic-bezier(0.4, 0, 1, 1)";
    }
    item.onmouseout = () => {
        let productContainer = item.querySelector(".product-infor-container");
        productContainer.style.display = "none";
    }
})

