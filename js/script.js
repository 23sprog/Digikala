let $ = document
let btnAuth = $.querySelector('.navbar__search-box')
let productContainer = $.querySelector('.product')
btnAuth.addEventListener("click", (e)=>{

    let rectProductContainer = productContainer.getClientRects()
    console.log(rectProductContainer)
    scrollTo(rectProductContainer.left, rectProductContainer.top)

    // productContainer.scrollIntoView({behavior:"smooth"})
})

let mainSlider = new Swiper(".mainSlider", {
    navigation: {
        nextEl: ".swiper-button-next-mainSlider",
        prevEl: ".swiper-button-prev-mainSlider",
    },
    pagination: {
        el: ".swiper-pagination-mainSlider",
        clickable: true,
    },
    loop:true,
    speed: 400,
    // mousewheel: true,
    autoplay:{
        delay: 8000,
    }
});

let storieSlider = new Swiper(".storieSlider", {
    slidesPerView: 12.5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next-storieSlider",
        prevEl: ".swiper-button-prev-storieSlider",
    },
    breakpoints:{
        292:{
            slidesPerView: 3,
        },
        389:{
            slidesPerView: 4,
        },

        484:{
            slidesPerView: 5,
        },
        581:{
            slidesPerView: 6,
        },
        678:{
            slidesPerView: 7,
        },
        767:{
            slidesPerView: 8,
        },
        870:{
            slidesPerView: 9,
        },
        960:{
            slidesPerView: 10,
        },
        1014:{
            slidesPerView: 10.5,
        },
        1115:{
            slidesPerView: 10,
        },
        1220:{
            slidesPerView: 11,
        },
        1335:{
            slidesPerView: 12,
        }
    }
});

let option = new Swiper(".option", {
    slidesPerView: 12.5,
    spaceBetween: 25,

});

var offer = new Swiper(".offer", {
    slidesPerView: 8.15,
    // spaceBetween: 30,
    // pagination: {
    //     clickable: true,
    // },
});


// Close More Option

let moreOptionScreen = $.querySelector('.moreOptionScreen')
let moreOptionExitButton = $.querySelector(".moreOptionHeader__right");
let moreOptionBlackBackground = $.querySelector(".moreOption__blackBG");
let moreOptionOpenButton = $.querySelector("#moreOptionOpenButton")
function exitMoreOptionScreen() {
    moreOptionBlackBackground.style.display = "none";
    moreOptionScreen.style.display = "none";
}

function openMoreOptionScreen() {
    moreOptionBlackBackground.style.display = "block";
    moreOptionScreen.style.display = "block";
}

moreOptionBlackBackground.addEventListener("click",exitMoreOptionScreen)
moreOptionExitButton.addEventListener("click",exitMoreOptionScreen)
moreOptionOpenButton.addEventListener("click",openMoreOptionScreen)



