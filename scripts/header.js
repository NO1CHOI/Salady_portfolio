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


//트랜스레이y 트렌지션
// //애니메이션
// mNavWrap.style.transition = 'height 0.3s linear'

// mNavBtn.addEventListener('click',()=>{
//     mNavWrap.style.display ='block'
//     mNavWrap.style.height = '500px'
// })

// // X 클릭 시 m_nav_wrap 숨기기
// closeBtn.addEventListener('click',()=>{
//     mNavWrap.style.display ='none'
//     mNavWrap.style.height = '0'
// })

// headerGnb.addEventListener('mouseover',()=>{
//     lnbBg[i].style.display ='block'
// })
// headerGnb.addEventListener('mouseout',()=>{
//     lnbBg[i].style.display ='none'
// })