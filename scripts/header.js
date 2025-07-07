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
var swiper = new Swiper(".swiper", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay:{delay:5000},
    loop:true,
    direction:'horizontal', //horizontal, vertical
    });