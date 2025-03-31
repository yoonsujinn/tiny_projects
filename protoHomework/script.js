const goodButton = document.querySelectorAll('.goodButton')
const pageWrapLi = document.querySelectorAll('.pageWrap>li')
const pageIdx = pageWrapLi.length;
const slideBtn_dotWrap = document.querySelector('.slideBtn_dotWrap')
const newPageDot = document.createElement('li')
const contentWrap = document.querySelector('.contentWrap')
const leftList = document.querySelectorAll('.contentWrap .leftList')
const rightOnBox = document.querySelector('.rightOnBox')
const topIcons = document.querySelectorAll('.topIcons .icon')
const toprightOnBoxText = document.querySelector('.rightOnBox p')
const spiker = document.querySelector('.spiker')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const playList = [
  new Audio("./mp3/nat02_01_01_01_a_a3_01_1.mp3"),
  new Audio("./mp3/nat02_01_01_01_a_a3_01_2.mp3"),
  new Audio("./mp3/nat02_01_01_01_a_a3_01_3.mp3"),
]


document.addEventListener("DOMContentLoaded", function () {
  // 음원 재생!!
  spiker.addEventListener('click',function() {
    if(rightOnBox.classList.contains('on1')) {
      playList[0].play()
    }
    if(rightOnBox.classList.contains('on3')) {
      playList[1].play()
    }
    if(rightOnBox.classList.contains('on8')) {
      playList[2].play()
    }
    if(rightOnBox.classList.contains('on14')) {
      playList[2].play()
    }
  })

  // 좋아요 기능~~~~
  goodButton.forEach(ele => {
    ele.addEventListener('click', () => {
      ele.classList.toggle('on')
    })
  })

    //페이지 끄기
    function listOnReset() {
      contentWrap.classList.remove('on')
      leftList.forEach(ele => {ele.classList.remove('on')})
    }
  
    //음원끄기
    function spikerOff() {
      playList.forEach(element => {
        element.pause();
        element.currentTime = 0; 
      });
    }
    

    


  leftList.forEach((leftListELe,index) => {
    leftListELe.children[0].addEventListener('click', function ()  {
      spiker.classList.remove('on')
      spikerOff()
      leftList.forEach(ele=>{ele.classList.remove('on')}) // 클릭하면 모든 li의 on클래스를 지운다
      
      leftListELe.classList.add('on') //클릭한 요소만 on클래스 붙임
      contentWrap.classList.add('on')
      for (let i = 0; i <= leftList.length; i++) {
        rightOnBox.classList.remove(`on${i}`) //on_숫자 클래스 모두지움
      }
      rightOnBox.classList.add(`on${index}`) //클릭한 요소의 인덱스 클래스만 추가함
      for (let i = 1; i <= 7; i++) { //아이콘 type모든 지움
        topIcons[0].classList.remove(`type${i}`)
        topIcons[1].classList.remove(`type${i}`)
      }
      if(index == 0) {  //하단 설명 글 + 아이콘 삽입
          topIcons[0].classList.add(`type1`);
          toprightOnBoxText.innerHTML="그림책을 읽고, ‘계절’에 대해 이야기해요. "
      } else if(index == 1) {
          topIcons[0].classList.add(`type7`);
          spiker.classList.add('on')
          toprightOnBoxText.innerHTML="좋아하는 계절과 그 까닭을 찾아보고, ‘봄이 가고 여름 오면‘ 노래를 불러 봐요."
      } else if(index == 2) {
          topIcons[0].classList.add(`type2`);
          toprightOnBoxText.innerHTML="계절을 대표하는 동식물을 관찰하며 계절의 변화를 느껴 봐요."
      } else if(index == 3) {
          topIcons[0].classList.add(`type7`);
          topIcons[1].classList.add(`type5`);
          spiker.classList.add('on')
          toprightOnBoxText.innerHTML="‘가을이 오는 소리‘ 노래를 부르며, 자연의 소리를 느껴 봐요."
      } else if(index == 4) {
          toprightOnBoxText.innerHTML="계절과 날씨에 어울리는 옷차림을 알아봐요."
      } else if(index == 5) {
          topIcons[0].classList.add(`type6`);
          toprightOnBoxText.innerHTML="계절에 어울리는 색을 골라 사계절을 표현해요."
      } else if(index == 6) {
          topIcons[0].classList.add(`type6`);
          toprightOnBoxText.innerHTML="좋아하는 계절의 풍경을 다양한 방법으로 나타내 봐요."
      } else if(index == 7) {
          topIcons[0].classList.add(`type3`);
          toprightOnBoxText.innerHTML="우리 주변의 자연물을 이용해 다양한 놀이를 해 봐요."
      } else if(index == 8) {
          topIcons[0].classList.add(`type7`);
          spiker.classList.add('on')
          toprightOnBoxText.innerHTML="‘잠자리 꽁꽁‘ 노래를 부르며 가을의 시작을 맞이해요."
      } else if(index == 9) {
          toprightOnBoxText.innerHTML="24절기를 조사하며 계절의 변화를 알아봐요."
      } else if(index == 10) {
          toprightOnBoxText.innerHTML="계절별 식재료와 음식을 알아봐요."
      } else if(index == 11) {
          topIcons[0].classList.add(`type6`);
          topIcons[1].classList.add(`type5`);
          toprightOnBoxText.innerHTML="다양한 열매를 관찰하고, 열매의 모습을 그려 봐요."
      } else if(index == 12) {
          toprightOnBoxText.innerHTML="계절이 담긴 그림을 보며 아름다움을 느껴 보고, 열매 얼굴을 꾸며 직접 표현해 봐요."
      } else if(index == 13) {
          toprightOnBoxText.innerHTML="계절마다 학교에서는 어떤 활동을 하는지 떠올려 봐요."
      } else if(index == 14) {
          topIcons[0].classList.add(`type7`);
          spiker.classList.add('on')
          toprightOnBoxText.innerHTML="‘가을 길‘ 노래를 부르고, 노랫말에 어울리는 동작을 만들어 표현해 봐요."
      } else if(index == 15) {
          topIcons[0].classList.add(`type6`);
          toprightOnBoxText.innerHTML="계절과 장소에 따라 사람들이 하는 일을 알아보고,내가 사는 곳의 모습을 그림으로 표현해 봐요."
      } else if(index == 16) {
          topIcons[0].classList.add(`type2`);
          toprightOnBoxText.innerHTML="계절에 따라 사용하는 물건이 어떻게 달라지는지 알아봐요."
      } else if(index == 17) {
          toprightOnBoxText.innerHTML="나들이 계획을 세우고, 나들이를 하며 계절의 소중함을 느껴 봐요."
      } else if(index == 18) {
          topIcons[0].classList.add(`type2`);
          toprightOnBoxText.innerHTML="우리나라 사계절 날씨의 특징을 알아보고, 일기 예보 놀이를 해요."
      } else if(index == 19) {
        topIcons[0].classList.add(`type5`);
        toprightOnBoxText.innerHTML="계절을 담아 교실을 꾸미며 계절의 아름다움을 느껴 봐요."
      }
    })
  });





  // 슬라이드 도트생성 //페이지의 갯수를 세서 페이지갯수 만큼 슬라이드 도트li를 추가한다.
  for (let index = 0; index < pageIdx; index++) {
    slideBtn_dotWrap.appendChild(newPageDot.cloneNode(true))
  }
  slideBtn_dotWrap.children[0].classList.add('on') //처음에는 맨처음 dot에 on클래스 추가
  let slidDot = [...slideBtn_dotWrap.children]; // DOM API에서 제공하는 유사배열이라서 ...로 풀어서 써야함
    // 도트 클릭했을때
    slidDot.forEach((ele,idx) => {
      ele.addEventListener('click',() => {
        slidDot.forEach(e =>{ e.classList.remove('on')}) //모든 요소 on클래스 지움
        ele.classList.add('on')
        if(idx == 0) { 
          prev.classList.remove('on')
          next.classList.add('on')
        }else if(idx+1 == slidDot.length ) {
          prev.classList.add('on')
          next.classList.remove('on')
        } else {
          prev.classList.add('on')
          next.classList.add('on')
        }
        listOnReset()
        spikerOff()
        pageWrapLi.forEach(ele => {ele.classList.remove('on')})  //left페이지모두 off
        pageWrapLi[idx].classList.add('on') //  idx일치하는 left페이지 on
        
      })
    });

    // 다음/이전버튼 클릭했을때


    //다음 버튼 클릭했을때
    next.addEventListener('click', ()=> {
      let nowDotIdx;
      slidDot.forEach((ele,idx) => {
        if(ele.classList.contains('on')){nowDotIdx = idx}  //on dot확인
      })
      pageWrapLi.forEach(ele => {ele.classList.remove('on')}) //left페이지모두 off
      pageWrapLi[nowDotIdx+1].classList.add('on') //idx일치하는 left페이지 on
      slidDot[nowDotIdx].classList.remove('on') //dot 모두 off
      slidDot[nowDotIdx+1].classList.add('on') //다음 dot on
      if(slidDot.length == nowDotIdx+2) {
        next.classList.remove('on')
      }else if(nowDotIdx <= 0) {
        prev.classList.add('on')
      }
      listOnReset()
      spikerOff()
    })

    prev.addEventListener('click', ()=> {
      let nowDotIdx2; 
      slidDot.forEach((ele,idx) => {
        if(ele.classList.contains('on')){nowDotIdx2 = idx}   //on dot확인
      })
      pageWrapLi.forEach(ele => {ele.classList.remove('on')})  //left페이지모두 off
      pageWrapLi[nowDotIdx2 -1].classList.add('on')
      slidDot[nowDotIdx2].classList.remove('on')
      slidDot[nowDotIdx2-1].classList.add('on')
      if(1 == nowDotIdx2) {
        prev.classList.remove('on')
      }else if(nowDotIdx2 >= 0) {
        next.classList.add('on')
      }
      listOnReset()
      spikerOff()
    })
});
