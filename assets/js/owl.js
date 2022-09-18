$(".categories_carousel").owlCarousel({
    loop: true,
    margin: 5,
    responsiveClass: true,
    rtl: true,
    responsive: {
        0: {
            items: 3,
            nav: false,
            dots: false,
            loop: false,
        },
        300: {
            items: 3,
            nav: false,
            dots: false,
            loop: false,
        },
        600: {
            items: 4,
            nav: false,
            dots: false,
            loop: false,
        },
        800: {
            items: 5,
            nav: false,
            dots: false,
            loop: false,
        },
        1000: {
            items: 8,
            nav: false,
            loop: false,
            dots: false,
        },
    },
});

$("#images").owlCarousel({
    loop: true,
    margin: 5,
    responsiveClass: true,
    rtl: true,
    responsive: {
        0: {
            items: 3,
            nav: false,
            dots: true,
            loop: true,
        },
        300: {
            items: 3,
            nav: false,
            dots: true,
            loop: true,
        },
        600: {
            items: 4,
            nav: false,
            dots: true,
            loop: true,
        },
        800: {
            items: 5,
            nav: false,
            dots: true,
            loop: true,
        },
        1000: {
            items: 8,
            nav: false,
            loop: true,
            dots: true,
        },
    },
});
