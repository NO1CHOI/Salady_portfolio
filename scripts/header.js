/* header */

const headerGnb = document.querySelectorAll('.gnb > li')
const lnbBg = document.querySelectorAll('.lnb_bg')

console.log(headerGnb,lnbBg);

/* 초기셋팅 */
for(let i=0;i<5;i++){
    lnbBg[i].style.height = '0'
};

for(let i=0;i<5;i++){
    headerGnb[i].addEventListener('mouseover',()=>{
    lnbBg[i].style.height = '50px'
    })
    headerGnb[i].addEventListener('mouseout',()=>{
    lnbBg[i].style.height = '0'
    })
};

/* 메인배너 스와이퍼 */
var mainswiper = new Swiper("#bnr .main-swiper", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
        el: ".main-swiper .main-pagination", 
        clickable: true,
    },
    autoplay: { delay: 5000 },
    loop: true,
    direction: 'horizontal',
});

/* 추천메뉴 스와이퍼 */
var menuswiper = new Swiper(".menuSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".main1_wrap .swiper-button-next",
        prevEl: ".main1_wrap .swiper-button-prev",
    },
    autoplay: { delay: 3000 },
    loop: true,
    direction: 'horizontal',
});