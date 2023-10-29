if ($('div').is('.mini-gallery')) {
    let cnt = $('.mini-gallery .swiper-slide').length - 3;
    $('.mini-gallery .count-slides').text('+' + cnt);
}

new Swiper('.blog-article-content-recent-posts .swiper-container', {
    navigation: {
        nextEl: '.looked-block .swiper-button-next',
        prevEl: '.looked-block .swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1.15,
            spaceBetween: 14
        },
        480: {
            slidesPerView: 1.7,
            spaceBetween: 14
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 24
        }
    },
    speed: 800,
})

console.log('article_js.init');