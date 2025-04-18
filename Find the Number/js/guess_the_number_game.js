

document.addEventListener('DOMContentLoaded',function()  {
  const input = document.querySelector('input')
  const button = document.querySelector('.return button')
  const replay = document.querySelector('.replay button')
  let inputValue;
  let randomNum = Math.floor(Math.random() * 100 ) + 1;
  let inputCount = document.querySelector('.inputCount')
  let expect = document.querySelector('.expect')
  let upDown = document.querySelector('.upDown')
  let arr = [];
  let i = 0;
  let min = 0;
  let max = 0;

  // 엔터키를 눌렀을 때
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();  //폼 제출을 위해서 자동 새로고침하는데 그걸 막음
      numSubmit();
    }
  });
  // 버튼 클릭 시
  button.addEventListener('click', function() {
    numSubmit();
  });

 
  replay.addEventListener('click',function() {
    upDown.innerHTML = "";
    expect.innerHTML = "";
    inputCount.innerHTML = "";
    arr = [];
    randomNum = Math.floor(Math.random() * 100 ) + 1;
    button.style.cursor='pointer'
    button.style.pointerEvents ="auto"
    input.disabled = false;
    input.value='';

  });
  // numSubmit 함수 정의
  function numSubmit() {
    inputValue = input.value;

    if(inputValue >= 101) {
      upDown.innerHTML = `101보다 작은 숫자를 입력해주세요!`;
    }else if(inputValue == 0) {
      upDown.innerHTML = `0보다 큰 숫자를 입력해주세요!`;
    }else {
      arr.push(inputValue)
      console.log(randomNum)
      if(arr.length <= 4  && inputValue!=randomNum) {
        inputCount.innerHTML = `${arr.length}번 도전했어요! 아직 ${5-arr.length}번의 기회가 남아있어요`
        if(inputValue > randomNum ) {
          upDown.innerHTML = `${inputValue}은 너무 커요`;
          expect.innerHTML = `예상한 숫자는 ${arr} 입니다.`
        }else if(inputValue < randomNum) {
          upDown.innerHTML = `${inputValue}은 너무 작아요`;
          expect.innerHTML = `예상한 숫자는 ${arr}입니다.`
        }
      }else if(arr.length == 5 && inputValue!=randomNum ) {
        upDown.innerHTML = `정답은 ${randomNum}입니다ㅠㅠ. 정답을 맞추지 못했어요.`
        expect.innerHTML = `예상한 숫자는 ${arr} 입니다.`
        inputCount.innerHTML = `다시 도전해 보세요!`
        input.disabled = true;
        button.style.cursor='auto'
        button.style.pointerEvents = "none";
      } else if(inputValue == randomNum && arr.length <6 ) {
          upDown.innerHTML = `${inputValue}은 정답입니다!`
          inputCount.innerHTML = `짝짝짝 ${arr.length}번 도전 후 성공했어요~!`
          input.disabled = true;
          button.style.cursor='auto'
          button.style.pointerEvents ="none"
      }
    }


 
    




  }
    

    // if(i<4 && randomNum < in_1 ) {
    // $(".upDown").text(in_1+"");
   
    // } 
  
    // } else if (randomNum == in_1){
    //     arr[i] = in_1;
    //     $(".upDown").text("짝짝짝")
    //     $(".correct_2").text(randomNum+"은 정답입니다!");
    //     $('#input_11').prop('disabled', false);
    //     document.getElementById("input_11").disabled = true;
    //     if (i>=2) {
    //       $(".correct_1_1").text("예상한 숫자들은 "+arr+" 이에요.");
    //     }
    //   } else if(i<5){
    //     arr[i] = in_1;
    //     document.getElementById("input_11").disabled = true;
    //     if (i>=2) {
    //     }
    //     }



})
  
    // console.log(random1);

  

