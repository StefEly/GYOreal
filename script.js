function toggleMenu() {
    document.getElementById("sidebar-menu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("sidebar-menu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

const cardList = document.querySelector(".card-list");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const cardItem = document.querySelector(".card-item");

let cardWidth = cardItem.offsetWidth + 30;

let scrollAmount = 0;

const startOffset = 10;

cardList.style.transform = `translateX(${startOffset}px)`;

function updateCardWidth(){
    cardWidth = cardItem.offsetWidth + 30;
}

function getMaxScroll(){

    const rawMaxScroll =
        cardList.scrollWidth -
        cardList.parentElement.offsetWidth;

    return Math.floor(rawMaxScroll / cardWidth) * cardWidth;
}

nextBtn.addEventListener("click", () => {

    if(window.innerWidth <= 768) return;

    updateCardWidth();

    const maxScroll = getMaxScroll();

    scrollAmount += cardWidth;

    if(scrollAmount > maxScroll){
        scrollAmount = maxScroll;
    }

    cardList.style.transform =
        `translateX(${startOffset - scrollAmount}px)`;

});

prevBtn.addEventListener("click", () => {

    if(window.innerWidth <= 768) return;

    updateCardWidth();

    scrollAmount -= cardWidth;

    if(scrollAmount < 0){
        scrollAmount = 0;
    }

    cardList.style.transform =
        `translateX(${startOffset - scrollAmount}px)`;

});

window.addEventListener("resize", () => {

    updateCardWidth();

    scrollAmount = 0;

    if(window.innerWidth > 768){

        cardList.style.transform =
            `translateX(${startOffset}px)`;
    }

    else{
        cardList.style.transform = "none";

    }

});

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>7){
        counter =1;
    }
}, 7000);  