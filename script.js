var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 1,
    loop: false,
    loopedSlides: 10,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#more-bck",
        prevEl: "#more",
        nextE2: "#more-bck2",
        prevE2: "#more2",
    },

    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 5,
        },
        1920: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".mySwiperr", {
    slidesPerView: "auto",
    spaceBetween: 1,
    loop: false,
    loopedSlides: 10,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#more-bck2",
        prevEl: "#more2",
    },

    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 5,
        },
        1920: {
            slidesPerView: 4,
        },
    },
});
