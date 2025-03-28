
document.addEventListener('DOMContentLoaded', function() {
  let tds = document.querySelectorAll('td')
  let numWindow = document.querySelector('.numWindow')
  let calWindow = document.querySelector('.calWindow')
  let grayTextWindow = document.querySelector('.grayTextWindow')
  let grayNUM;
  let resultNum = 0;
  let calcState;


    // 마우스 클릭시 실행 함수
    tds.forEach(td => { 
      td.addEventListener('click',function(){
        let tdAttr = td.getAttribute('data-number')
        if(calcState == 'equals') {
          windowReset();
        }
        if(tdAttr == 0 || tdAttr ==1 || tdAttr ==2 || tdAttr ==3 || tdAttr ==4 || tdAttr ==5 || tdAttr ==6||tdAttr ==7 || tdAttr ==8 || tdAttr ==9 ||tdAttr =='.') {
            windowCall(tdAttr)
          }else if (tdAttr == 'reset') {
            windowReset();
          }else if(tdAttr == 'plus') {
            calcState = 'plus';
            plusPlay();
          }else if(tdAttr == 'equals') {
            resultPrint();
          }
        });
      })


    // 키보드  입력
    window.addEventListener('keydown',function(){
        keyPut();
    })
    function keyPut() { //키보드입력 실행 함수
      let keyCondition1 = (event.keyCode > 47 && event.keyCode <58) ||(event.keyCode > 95 && event.keyCode <106 || (event.keyCode ==190) || (event.keyCode ==110) || (event.keyCode ==109) || (event.keyCode ==189) ) ;
      // keyCode = 109, 189는 빼기
        if(keyCondition1){
            if(calcState =='equals') { 
              windowReset()
            } 
            windowCall(event.key)
          } else if(event.keyCode ==27) { //esc키 클릭
            windowReset();
          } else if(event.keyCode ==107) { //+ 키 클릭
            plusPlay();
          } else if(event.keyCode ==13) { //enter클릭
            resultPrint();
          }
    }

  // 입력한 숫자 화면에 표시하는 함수
    function windowCall(num) {
      numWindow.innerHTML += num;
    }

  // 계산기 리셋함수
  function windowReset() {
      console.log('리셋함수실행!!!!!!!!!!!!!!!')
      numWindow.innerHTML ='';
      grayTextWindow.innerHTML ='';
      resultNum = 0;
      calcState = undefined;
  }


  // 더하기 실행!!
  function plusPlay() {
    let windowNum = transNum(); //현재 입력한 숫자
    calcState = 'plus'; //상태 플러스로 변경
    grayTextWindowfunc(windowNum) //grayTextWindow로 올림
    resultNum = windowNum+resultNum; //화면의 숫자랑 결과값이랑 더함
    numWindow.innerHTML =''; //화면 숫자 비움

  }

  // // 결과값 출력 함수
  function resultPrint() {
      console.log('결과값 출력 함수 실행!!!!!!!!!!!!!!!')
      let windowNum = transNum();
      if(calcState ==="plus") {
        grayTextWindow.innerHTML ='';
        numWindow.innerHTML = resultNum;
        resultNum = resultNum+windowNum;
        calcState ='equals';

      }
      // resultNum = 0;
  }
  //인풋값 가져와서 숫자로 형변환 시켜주는 함수 
  function transNum() {
    let num_1 = numWindow.innerHTML; //화면 숫자가져옴
    num_1 = Number(num_1); //숫자로 형변환
    return num_1;
  }



  function grayTextWindowfunc(num){
    console.log('그레이텍스트 함수 시작!');
      if(calcState == 'plus') {
        if(grayTextWindow.innerHTML.trim() === "") { //grayTextWindow가 없을때else있을때
          grayTextWindow.innerHTML=numWindow.innerHTML

        }else {
          grayTextWindow.innerHTML=grayTextWindow.innerHTML+"+"+numWindow.innerHTML
        }
        // +num+"+";
      }
    }
  });