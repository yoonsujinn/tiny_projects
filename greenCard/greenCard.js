

const leftMoveBg = document.querySelector('.leftMoveBg')
const rightTitle =  document.querySelectorAll('.rightTitle')
let scWidth = Math.round(window.innerWidth);
let scHeight = Math.round(window.innerHeight);
let section_3 = document.querySelector('.section_3');

const motions = {
    1: {
        start: page1_motion,
        end: page1_motion_exit,
    },
    2: {
        start: page2_motion,
        end: page2_motion_exit,
    },
    3: {
        start: page3_motion,
        end: page3_motion_exit,
    },
    4: {
        start: page4_motion,
        end: page4_motion_exit,
    },
    5: {
        start: page5_motion,
        end: page5_motion_exit,
    },
    6: {
        start: page6_motion,
        end: page6_motion_exit,
    },
    7: {
        start: page7_motion,
        end: page7_motion_exit,
    }
};


// 화면 처음 시작할때 실행되는 js
scWidth = Math.floor(scWidth / 10) * 10;
scHeight = Math.floor(scHeight / 10) * 10;
window.addEventListener("resize",updateScreenSize)

function updateScreenSize() {
  scWidth = window.innerWidth;
  scWidth = Math.floor(scWidth / 10) * 10;
  scHeight = window.innerHeight;
  scHeight = Math.floor(scHeight / 10) * 10;
  console.log('사이즈변경',scWidth,scHeight)
}

page1_motion()


// 페이지5슬라이드
setInterval(() => {
  let sc5_slideWrapDiv = document.querySelector('.sc5_slideWrap')
  let slideEle = document.querySelectorAll('.sc5_slideWrap [class*="sc5_"]')
  let newDiv_1 = document.createElement('div')
  let newDiv = newDiv_1.cloneNode(true)
  let delClass = slideEle[0].className;
  let delClassTxt = slideEle[0].innerHTML;

  sc5_slideWrapDiv.removeChild(slideEle[0])
  newDiv.classList.add(delClass)
  newDiv.innerHTML = delClassTxt;
}, 4000);



// section1 - 캐릭터 4초에 한번씩 변경되는 스크립트 
let imgArrindex;
let imgArrindex_2 = 1;
let sectionArray = [1,2,3];
let imgArr1 = [
  './images/bg-main-visual-bg-01.png',
  './images/bg-main-visual-bg-02.png',
  './images/bg-main-visual-bg-03.png',
]

setInterval(function(){
  if(imgArrindex < imgArr1.length) {
      leftMoveBg.style.backgroundImage = `url(${imgArr1[imgArrindex]})`;
      leftMoveBg.classList.remove('leftMoveBg_1','leftMoveBg_2','leftMoveBg_3')
      leftMoveBg.classList.add(`leftMoveBg_${imgArrindex + 1}`)
      imgArrindex ++;
  }else{
      imgArrindex = 0;
      leftMoveBg.style.backgroundImage = `url(${imgArr1[imgArrindex]})`;
      leftMoveBg.classList.remove('leftMoveBg_1','leftMoveBg_2','leftMoveBg_3')
      leftMoveBg.classList.add(`leftMoveBg_${imgArrindex + 1}`)
      imgArrindex ++;
  }
},4000)
        // section5 2초에 한번씩 이미지 슬라이드!
        
  let section3_headText = document.querySelector('.section3_headText')
  let section3_mainText = document.querySelector('.section3_mainText')
  let section3_ImgObjs = document.querySelectorAll('.section3_ImgObjs')
  function section3_case1() {
      section3_headText.innerHTML = "환경을 위한 레벨업";
      section3_mainText.innerHTML = "환경도 지키고 교통요금도 포인트로 적립받는<br/>일석이조 에코라이프";
      
  }
  function section3_case2() {
      section3_headText.innerHTML = "지구를 위한 착한 생각!";
      section3_mainText.innerHTML = "그린카드와 함께라면 평범한 쇼핑도<br/>녹색 소비가 됩니다!";

  }

  function section3_case3() {
      
      section3_headText.innerHTML = "환경도 지키고, 혜택도 받고!";
      section3_mainText.innerHTML = "친환경 활동 및 소비만큼 혜택을 제공하는<br/>리워드 서비스 입니다.";
  }

section_3.classList.add(`on${imgArrindex_2}`)
section3_case1();
setInterval(function() {
  if (imgArrindex_2 < sectionArray.length) {
      sectionArray.forEach(ele => {
        section_3.classList.remove(`on${ele}`)
    });
  imgArrindex_2++;
  setTimeout(() => {
    section_3.classList.add(`on${imgArrindex_2}`)
    imgArrindex_2 === 1 ? section3_case1() : null;
    imgArrindex_2 === 2 ? section3_case2() : null;
    imgArrindex_2 === 3 ? section3_case3() : null;
  },2);
  }else if(imgArrindex_2 >= sectionArray.length) {
    imgArrindex_2 = 0;
    sectionArray.forEach(ele => {
      section_3.classList.remove(`on${ele}`)
    });
    imgArrindex_2++;
    setTimeout(() => {
      section_3.classList.add(`on${imgArrindex_2}`);
      imgArrindex_2 === 1 ? section3_case1() : null;
      imgArrindex_2 === 2 ? section3_case2() : null;
      imgArrindex_2 === 3 ? section3_case3() : null;
  },2);
}
},4000) 




// 화면 전체 스크롤
window.addEventListener("wheel", function(event) {

let scrollXY = event.deltaY; //스크롤 방향 확인
let scrollPosition = window.scrollY; // 스크롤 현재 위치 확인
// console.log(scrollPosition,'현재높이');
// console.log(scHeight,'화면');
    if(scrollXY > 0 ) { //내려갈때
        event.preventDefault();
        if(scrollPosition < scHeight) {
            setTimeout(() => {
                window.scroll({
                    top: scHeight, 
                    behavior: 'smooth' 
                });
            },30);
        }else if(scrollPosition == scHeight) {
            setTimeout(() => {
                window.scroll({
                    top: scHeight*2, 
                    behavior: 'smooth' 
                });
            },30);
        }else if(scrollPosition == scHeight*2) {
            setTimeout(() => {
                window.scroll({
                    top: scHeight*3, 
                    behavior: 'smooth' 
                });
            },30);
        }else if(scrollPosition == scHeight*3) {
            setTimeout(() => {
                window.scroll({
                    top: scHeight*4, 
                    behavior: 'smooth' 
                });
            },30);
        }
        else if(scrollPosition == scHeight*4) {
            setTimeout(() => {
                window.scroll({
                    top: scHeight*5, 
                    behavior: 'smooth' 
                });
            },30);
        }
        if (scrollPosition > scHeight * 4) {
            setTimeout(() => {
                window.scroll({
                    top: scHeight * 5 + 173,
                    behavior: 'smooth'
                });
            }, 30);
        }
    }else if( scrollXY < 50) { //올라갈때
        // console.log(scHeight,'화면높이');
        // console.log(scrollPosition,'현재높이');
        // console.log('-------------------------------')
      if(scrollPosition == scHeight) {
          setTimeout(() => {
              window.scroll({
                  top: 0, 
                  behavior: 'smooth' 
              });
          },30);
      }
      else if(scrollPosition == scHeight*2) {
          setTimeout(() => {
              window.scroll({
                  top: scHeight, 
                  behavior: 'smooth' 
              });
          },30);
      }
      else if(scrollPosition == scHeight*3) {
          setTimeout(() => {
              window.scroll({
                  top: scHeight*2, 
                  behavior: 'smooth' 
              });
          },30);
      }
      else if(scrollPosition == scHeight*4) {
          setTimeout(() => {
              window.scroll({
                  top: scHeight*3, 
                  behavior: 'smooth' 
              });
          },30);
      }
      else if(scrollPosition == scHeight*5) {
          setTimeout(() => {
              window.scroll({
                  top: scHeight*4, 
                  behavior: 'smooth' 
              });
          },30);
      }else if(scrollPosition > scHeight*5) {
          // 여기가 푸터
          setTimeout(() => {
              window.scroll({
                  top: scHeight*5, 
                  behavior: 'smooth' 
              });
          },30);
      }
    }
}, { passive: false });

//페이지마다 기능 열렸다 닫혔다 하기
window.addEventListener("scroll",function(event) {
    let scrollPosition = window.scrollY; // 스크롤 현재 위치 확인
    let sectionIndex = document.querySelectorAll('section');
  for(let i=1; i<sectionIndex.length; i++) {
      if(scrollPosition < scHeight) {
          motions[i].end();
          motions[1].start();
      }
      if(scrollPosition == scHeight) {
          motions[i].end();
          motions[2].start();
      }
      if(scrollPosition == scHeight*2) {
          motions[i].end();
          motions[3].start();
      }
      if(scrollPosition == scHeight*3) {
          motions[i].end();
          motions[4].start();
      }
      if(scrollPosition == scHeight*4) {
          motions[i].end();
          motions[5].start();
      }
      if (scrollPosition == scHeight * 5) {
          motions[i].end();
          motions[6].start();
      }
    if (scrollPosition > scHeight * 5 && scrollPosition < scHeight * 6) {
            motions[i].end();
            motions[7].start();
        }
      }
        });
// 페이지마다 로딩될때 실행하는 JS
    function page1_motion() {
      document.querySelectorAll('.rightTitle').forEach((element,index) => {
        setTimeout(() => {
            element.classList.add('on');   
        }, (index + 1) * 60);
      });
      setTimeout(() => {
        document.querySelector('.section_1 em').classList.add('on');   
      },600);
      setTimeout(() => {
        document.querySelector('.section_1 .rightApp').classList.add('on');   
      },1200);
    }
    function page1_motion_exit() {
      document.querySelectorAll('.rightTitle').forEach((element,index) => {
              element.classList.remove('on');   
      });
      document.querySelector('.section_1 em').classList.remove('on');   
      document.querySelector('.section_1 .rightApp').classList.remove('on');   
    }

    function page2_motion() {
      // console.log('2페이지 도착!~~!')
      document.querySelector('.section2_left p').classList.add('on');
      setTimeout(() => {  
        document.querySelector('.section2_left b').classList.add('on');
      }, 200);
      setTimeout(() => {  
        document.querySelector('.section2_left strong').classList.add('on');
        document.querySelector('.section2_left a').classList.add('on');
      }, 500);
      setTimeout(() => {  
        document.querySelector('.cardIntroWrap:nth-child(1)').classList.add('on');
      }, 600);
      setTimeout(() => {  
        document.querySelector('.cardIntroWrap:nth-child(2)').classList.add('on');
      }, 700);
      setTimeout(() => {  
        document.querySelector('.cardIntroWrap:nth-child(3)').classList.add('on');
        }, 800);
    }
    function page2_motion_exit() {
        // console.log('2페이지 나가기')
        document.querySelector('.section2_left p').classList.remove('on');
        document.querySelector('.section2_left b').classList.remove('on');
        document.querySelector('.section2_left strong').classList.remove('on');
        document.querySelector('.section2_left a').classList.remove('on');
        document.querySelector('.cardIntroWrap:nth-child(1)').classList.remove('on');
        document.querySelector('.cardIntroWrap:nth-child(2)').classList.remove('on');
        document.querySelector('.cardIntroWrap:nth-child(3)').classList.remove('on');
    }
    
    function page3_motion() {
        // console.log('3페이지 도착!~~!')
        document.querySelector('.section3_headText').classList.add('on');
        document.querySelector('.section3_mainText').classList.add('on');
    }
    function page3_motion_exit() {
        // console.log('3페이지 나가기')
        document.querySelector('.section3_headText').classList.remove('on');
        document.querySelector('.section3_mainText').classList.remove('on');
    }
    function page4_motion() {
        // console.log('4페이지 도착!~~!')
    }
    function page4_motion_exit() {
        // console.log('4페이지 나가기')
    }
    function page5_motion() {
        // console.log('5페이지 도착!~~!')
    }
    function page5_motion_exit() {
        // console.log('5페이지 나가기')
    }
    function page6_motion() {
    // console.log('6페이지 도착!~~!')
    }
    function page6_motion_exit() {
        // console.log('6페이지 나가기')
    }

    function page7_motion() {
        // console.log('푸터터도착!~~!')
    }

    function page7_motion_exit() {
        // console.log('푸터 나가기기!~~!')
    }





