

window.addEventListener('DOMContentLoaded', function () {
  const leftMoveBg = document.querySelector('.leftMoveBg')
  const rightTitle = document.querySelectorAll('.rightTitle')
  let scWidth = Math.round(window.innerWidth);
  let scHeight = Math.round(window.innerHeight);
  let section_3 = document.querySelector('.section_3');
  let pointSave = document.querySelectorAll('.pointSave');


  const motions = {
    0: {
      start: page1_motion,
      end: page1_motion_exit,
    },
    1: {
      start: page2_motion,
      end: page2_motion_exit,
    },
    2: {
      start: page3_motion,
      end: page3_motion_exit,
    },
    3: {
      start: page4_motion,
      end: page4_motion_exit,
    },
    4: {
      start: page5_motion,
      end: page5_motion_exit,
    },
    5: {
      start: page6_motion,
      end: page6_motion_exit,
    },
    6: {
      start: page7_motion,
      end: page7_motion_exit,
    }
  };


  // 화면 처음 시작할때 실행되는 js

  scWidth = Math.floor(scWidth / 10) * 10;
  scHeight = Math.floor(scHeight / 10) * 10;
  window.addEventListener("resize", updateScreenSize)


  function updateScreenSize() {
    scWidth = window.innerWidth;
    scWidth = Math.floor(scWidth / 10) * 10;
    scHeight = window.innerHeight;
    scHeight = Math.floor(scHeight / 10) * 10;
    console.log('사이즈변경', scWidth, scHeight);
  }





  // 화면 전체 스크롤
  window.addEventListener("wheel", function (event) {
    let scrollXY = event.deltaY; //스크롤 방향 확인
    let scrollPosition = window.scrollY; // 스크롤 현재 위치 확인
    // console.log(scrollPosition,'현재높이');
    // console.log(scHeight,'화면');


    // 살짝 스크롤 되었을 경우 보정(내려갈때)
    function scrollToBottomN(bottomN) {
      setTimeout(() => {
        window.scroll({
          top: scHeight * bottomN,
          behavior: 'smooth'
        });
      }, 50);
    }
    // 살짝 스크롤 되었을 경우 보정(올라갈때)
    function scrollToTopN(topN) {
      event.preventDefault();
      setTimeout(() => {
        window.scroll({
          top: scHeight * topN,
          behavior: 'smooth'
        });
      }, 50);
    }
    if (scrollXY > 0) { //스크롤 내리는 기능이버섯
      event.preventDefault();
      if (scrollPosition < scHeight) { scrollToBottomN(1) }
      else if (scrollPosition == scHeight) { scrollToBottomN(2) }
      else if (scrollPosition == scHeight * 2) { scrollToBottomN(3) }
      else if (scrollPosition == scHeight * 3) { scrollToBottomN(4) }
      else if (scrollPosition == scHeight * 4) { scrollToBottomN(5) }
      else if (scrollPosition > scHeight * 4.1) { scrollToBottomN(6) }
    } else if (scrollXY < 50) { //스크롤 올리는 기능이버섯
      // console.log(scHeight,'화면높이');
      // console.log(scrollPosition,'현재높이');
      // console.log('-------------------------------')
      if (scrollPosition == scHeight) { scrollToTopN(0) }
      else if (scrollPosition == scHeight * 2) { scrollToTopN(1); }
      else if (scrollPosition == scHeight * 3) { scrollToTopN(2); }
      else if (scrollPosition == scHeight * 4) { scrollToTopN(3); }
      else if (scrollPosition == scHeight * 5) { scrollToTopN(4); }
      else if (scrollPosition > scHeight * 5) { scrollToTopN(5) }
    }
  }, { passive: false });

  //페이지마다 기능 열렸다 닫혔다 하기
  window.addEventListener("scroll", function (event) {
    let scrollPosition = window.scrollY; // 스크롤 현재 위치 확인
    let sectionIndex = document.querySelectorAll('section');
    for (let i = 0; i < sectionIndex.length; i++) {
      motions[i].end();
      if (scrollPosition < scHeight) { motions[0].start(); }
      if (scrollPosition == scHeight) { motions[1].start(); }
      if (scrollPosition == scHeight * 2) { motions[2].start(); }
      if (scrollPosition == scHeight * 3) { motions[3].start(); }
      if (scrollPosition == scHeight * 4) { motions[4].start(); }
      if (scrollPosition == scHeight * 5) { motions[5].start(); }
      if (scrollPosition >= scHeight * 6) { motions[6].start(); }
    }
  });

  // ----------------------------페이지마다 로딩될때 실행하는 JS----------------------------
  // ----------------------------------------------------------
  // -------------------1페이지 시작!!!!!!!--------------------
  // ----------------------------------------------------------



  const imgArr1 = [
    './images/bg-main-visual-bg-01.png',
    './images/bg-main-visual-bg-02.png',
    './images/bg-main-visual-bg-03.png',
  ]
  var isRunning_1 = false;
  let imgArrindex = 1;

  function page1_motion() {
    document.querySelectorAll('.rightTitle').forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('on');
      }, (index + 1) * 60);
    });
    setTimeout(() => {
      document.querySelector('.section_1 em').classList.add('on');
    }, 600);

    setTimeout(() => {
      document.querySelector('.section_1 .rightApp').classList.add('on');
    }, 1200);
    page1_motion_set();
  }

  function page1_motion_set() {//-1페이지 캐릭터 4초에 한번씩 변경되는 스크립트 !----
    if (!isRunning_1) {
      intervalId_1 = setInterval(page1_motion_set_1, 4000);
      isRunning_1 = true;
    }
  }
  function page1_motion_set_1() {
    leftMoveBg.classList.remove('leftMoveBg_1', 'leftMoveBg_2', 'leftMoveBg_3');
    leftMoveBg.style.backgroundImage = `url(${imgArr1[imgArrindex - 1]})`;
    leftMoveBg.classList.add(`leftMoveBg_${imgArrindex}`);
    imgArrindex >= imgArr1.length ? imgArrindex = 1 : imgArrindex++;
  }


  // ----------------------------------------------------------
  // -------------------1페이지 종료!!!!!!!--------------------
  // ----------------------------------------------------------
  function page1_motion_exit() {

    document.querySelectorAll('.rightTitle').forEach((element, index) => {
      element.classList.remove('on');
    });
    document.querySelector('.section_1 em').classList.remove('on');
    document.querySelector('.section_1 .rightApp').classList.remove('on');
    clearInterval(intervalId_1);  // 반복 중단
    isRunning_1 = false;          // 상태값도 false로 되돌림
  }


  page1_motion();


  // ---------------------------------------------------------
  // -------------------2페이지 동작!!!!!!!-------------------
  // ---------------------------------------------------------
  function page2_motion() {
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
  // ---------------------------------------------------------
  // -------------------2페이지 종료!!!!!!!--------------------
  // ----------------------------------------------------------
  function page2_motion_exit() {
    document.querySelector('.section2_left p').classList.remove('on');
    document.querySelector('.section2_left b').classList.remove('on');
    document.querySelector('.section2_left strong').classList.remove('on');
    document.querySelector('.section2_left a').classList.remove('on');
    document.querySelector('.cardIntroWrap:nth-child(1)').classList.remove('on');
    document.querySelector('.cardIntroWrap:nth-child(2)').classList.remove('on');
    document.querySelector('.cardIntroWrap:nth-child(3)').classList.remove('on');
  }
  page2_motion();

  // ---------------------------------------------------------
  // -------------------3페이지 시작!!!!!!!--------------------
  // ---------------------------------------------------------


  const section3_case = [
    {
      headText: "환경을 위한 레벨업",
      mainText: "환경도 지키고 교통요금도 포인트로 적립받는<br/>일석이조 에코라이프"
    },
    {
      headText: "지구를 위한 착한 생각!",
      mainText: "그린카드와 함께라면 평범한 쇼핑도<br/>녹색 소비가 됩니다!"
    },
    {
      headText: "환경도 지키고, 혜택도 받고!",
      mainText: "친환경 활동 및 소비만큼 혜택을 제공하는<br/>리워드 서비스 입니다."
    }
  ]
  var isRunning_3 = false;
  let intervalId_3;
  let caseNum = 1;
  let section3_headText = document.querySelector('.section3_headText');
  let section3_mainText = document.querySelector('.section3_mainText');

  function page3_motion() {
    document.querySelector('.section3_headText').classList.add('on');
    document.querySelector('.section3_mainText').classList.add('on');
    page3_motion_set();
  }
  function page3_motion_set() {
    if (!isRunning_3) {
      intervalId_3 = setInterval(page3_motion_set_1, 4000);
      isRunning_3 = true;
    }
  }
  function page3_motion_set_1() {
    caseNum++;
    if (caseNum > section3_case.length) { caseNum = 1; }
    setTimeout(() => {
      section3_headText.innerHTML = `${section3_case[caseNum - 1].headText}`
      section3_mainText.innerHTML = `${section3_case[caseNum - 1].mainText}`
      section3_case.forEach((ele, idx) => { section_3.classList.remove(`on${idx + 1}`) });
      setTimeout(() => { section_3.classList.add(`on${caseNum}`) }, 20);
    }, 100);
  }



  // ---------------------------------------------------------
  // -------------------3페이지 종료!!!!!!!--------------------
  // ----------------------------------------------------------
  function page3_motion_exit() {
    document.querySelector('.section3_headText').classList.remove('on');
    document.querySelector('.section3_mainText').classList.remove('on');
    clearInterval(intervalId_3);  // 반복 중단
    isRunning_3 = false;          // 상태값도 false로 되돌림
  }

  page3_motion();



  // ---------------------------------------------------------
  // -------------------4페이지 시작!!!!!!!--------------------
  // ----------------------------------------------------------
  function page4_motion() {
    let page4_time = 0;
    pointSave.forEach(ele => {
      page4_time = page4_time + 50;
      setTimeout(() => {
        ele.classList.add('on')
      }, page4_time);
    });
  }

  // 4페이지 탭 기능
  let section4_headEle = document.querySelectorAll(".section4_head li")
  let section4_body = document.querySelectorAll(".section4_body")
  section4_headEle.forEach((ele, idx) => {
    ele.addEventListener('click', function (e) {
      section4_headEle.forEach(e => { e.classList.remove('on'); });
      section4_body.forEach(e => {
        e.classList.remove('on');
        section4_body[idx].style.transform = "scaleX(0)";

      });
      ele.classList.add('on');
      section4_body[idx].classList.add('on');
      setInterval(() => {
        section4_body[idx].style.transform = "scaleX(1)";
      }, 100);
    });
  });


  // ---------------------------------------------------------
  // -------------------4페이지 종료!!!!!!!--------------------
  // ----------------------------------------------------------
  function page4_motion_exit() {
    pointSave.forEach(ele => {
      ele.classList.remove('on')
    });
  }

  page4_motion();



  // ---------------------------------------------------------
  // -------------------5페이지 동작!!!!!!!-------------------
  // ---------------------------------------------------------
  let sc5CardText = [
    {
      backImg: "url(./images/icon/icon-main-section04-1.png)",
      cardText: "공공시설<br />무료 할인 혜택"
    },
    {
      backImg: "url(./images/icon/icon-main-section04-2.png)",
      cardText: "포인트 적립 가능한<br />친환경 제품<br />안내"
    },
    {
      backImg: "url(./images/icon/icon-main-section04-3.png)",
      cardText: "에너지 절약 시<br />인센티브 안내"
    },
  ]

  // 페이지5슬라이드 초기설정
  const cardWrap = document.querySelector('.sc5_slideWrap .cardWrap');
  const sc5_card = document.querySelectorAll('.sc5_card');
  for (let i = 0; i <= sc5CardText.length - 1; i++) {
    sc5_card[i].style.backgroundImage = `${sc5CardText[i].backImg}`;
    sc5_card[i].innerHTML = `${sc5CardText[i].cardText}`
  }
  var isRunning_5 = false;
  let transLeft = 0;


  function page5_motion() {
    document.querySelector('.section5_left p').classList.add('on');
    setTimeout(() => {
      document.querySelector('.section5_left b').classList.add('on');
    }, 200);
    setTimeout(() => {
      document.querySelector('.section5_left strong').classList.add('on');
    }, 500);
    transLeft + 1;
    page5_motion_set();
  }

  function page5_motion_set() {
    if (!isRunning_5) {
      intervalId_5 = setInterval(page5_motion_set_1, 2000);
      isRunning_5 = true;
    }
  }
  function page5_motion_set_1() {
    let realTime_card = document.querySelectorAll('.sc5_card');
    let sc5_card_first = realTime_card[0].cloneNode(true);
    let sc5_card_second = realTime_card[1].cloneNode(true);
    transLeft = transLeft - 1;
    cardWrap.style.left=`${transLeft*52}%`
    cardWrap.style.transition = '0.3s';
    if(transLeft == -2) {
      cardWrap.appendChild(sc5_card_first);
      cardWrap.appendChild(sc5_card_second);
    }else if(transLeft == -3) {
      setTimeout(() => {
        transLeft = 0;
        cardWrap.style.transition = '0s';
        cardWrap.removeChild(cardWrap.lastElementChild);
        cardWrap.removeChild(cardWrap.lastElementChild);
        cardWrap.style.left=`${transLeft}%`
      }, 300);

    }
  }

  // ---------------------------------------------------------
  // -------------------5페이지 종료!!!!!!!--------------------
  // ----------------------------------------------------------
  function page5_motion_exit() {
    clearInterval(intervalId_5);  // 반복 중단
    isRunning_5 = false;          // 상태값도 false로 되돌림
  }
  page5_motion();


  // ---------------------------------------------------------
  // -------------------6페이지 시작!!!!!!!--------------------
  // ----------------------------------------------------------
  let smallLogos = document.querySelector('.smallLogos')
  let smallLogosWrap = document.querySelector('.smallLogosWrap')
  let cloneWrap = smallLogosWrap.cloneNode(true);
  smallLogos.appendChild(cloneWrap);


  function page6_motion() {
    smallLogosWrap.classList.add('ani');
    cloneWrap.classList.add('ani');
  }



  // ---------------------------------------------------------
  // -------------------6페이지 종료!!!!!!!--------------------
  // ----------------------------------------------------------
  function page6_motion_exit() {

  }
  page6_motion();

  function page7_motion() {
  }

  function page7_motion_exit() {
  }

})

