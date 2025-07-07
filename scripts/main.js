const salady = document.querySelectorAll('.menu_container > li > a')
const menuName = document.querySelectorAll('.menu_bg')
console.log(salady, menuName)

/* a링크 막기*/
e.preventDefault();


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
