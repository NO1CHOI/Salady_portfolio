const salady = document.querySelectorAll('.menu_container > li > a')
const menuName = document.querySelectorAll('.menu_bg')
console.log(salady, menuName)

// a링크 이동 막기
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
            e.preventDefault();
        }
    });
});


/* .active 이동하기 */
salady.forEach(check => {
    check.addEventListener('click', function(e) {
    e.preventDefault(); // a 링크 이동 막기
    salady.forEach(el => el.classList.remove('active'));
    this.classList.add('active');
    });
});

/* 카테고리 변경하기 */
salady.forEach((obj,ind)=>{
    console.log(obj,ind) // 콘솔확인
    obj.addEventListener('click',()=>{
        console.log(ind);
        for(let i of menuName){i.style.display = 'none'}; // 모두숨기기
        menuName[ind].style.display = 'block';
    })
})

/* 추천메뉴 swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


/* 추천메뉴 p 마우스 호버 효과 */
const menuP = document.querySelectorAll('.swiper-slide p')
const swiperBorder = document.querySelectorAll('.main1_wrap .swiper-slide')
console.log(menuP,swiperBorder)

for(let i=0;i<menuP.length;i++){
    menuP[i].addEventListener('mouseover',()=>{
        menuP[i].style.color = '#17633D'
    })
    menuP[i].addEventListener('mouseout',()=>{
        menuP[i].style.color = '#222'
    })
}

// for(let i=0;i<swiperBorder.length;i++){
//     menuP[i].addEventListener('mouseover',()=>{
//         swiperBorder[i].style.borderStyle  = '#17633D'
//     })
//     menuP[i].addEventListener('mouseout',()=>{
//         swiperBorder[i].style.borderStyle  = '#222'
//     })
// }