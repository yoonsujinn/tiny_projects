

document.addEventListener('DOMContentLoaded',function()  {
  const input = document.querySelector('input')
  const button = document.querySelector('button')
  let random1 = Math.floor(Math.random() * 100 ) + 1;
  let inputCount = document.querySelector('.inputCount')
  let expect = document.querySelector('.expect')
  let upDown = document.querySelector('.upDown')
  let arr = [];
  let i = 0;
  let min = 0;
  let max = 0;


  button.addEventListener('click', function() {
    numSubmit();
  });

  function numSubmit()  {
    console.log('qqq')
  }
  })
  
    // var in_1 = document.getElementById('input_11').value;
    //   // in_1변수를 선언 > input_11 에 입력된 값을 가져온다.
    // arr[i] = in_1;
    // console.log(random1);

    // if(i<4 && random1 < in_1 ) {
    //   $(".upDown").text(in_1+"은 너무 커요");
    //   // 최소값 최대값 구하는 for문
    //   i = i+1;
    //   $(".correct_2").text(i+"번 도전했어요!");
    //     if (i>=2) {
    //       $(".correct_1_1").text("예상한 수는 "+arr+" 이에요.");
    //     }
    // } else if (i<4 && random1 > in_1){
    //     $(".upDown").text(in_1+"은 너무 작아요")
    //     arr[i] = in_1;
    //     i = i+1;
    //     $(".correct_2").text(i+"번 도전했어요!");
    //       if (i>=2) {
    //         $(".correct_1_1").text("예상한 수는 "+arr+" 이에요.");
    //       }
    // } else if (random1 == in_1){
    //     arr[i] = in_1;
    //     $(".upDown").text("짝짝짝")
    //     $(".correct_2").text(random1+"은 정답입니다!");
    //     $('#input_11').prop('disabled', false);
    //     document.getElementById("input_11").disabled = true;
    //     if (i>=2) {
    //       $(".correct_1_1").text("예상한 숫자들은 "+arr+" 이에요.");
    //     }
    //   } else if(i<5){
    //     arr[i] = in_1;
    //     $(".upDown").text("정답은" +random1+ "입니다ㅠㅠ")
    //     $(".correct_2").text("실패~!");
    //     document.getElementById("input_11").disabled = true;
    //     if (i>=2) {
    //       $(".correct_1_1").text("예상한 숫자들은 "+arr+" 이에요.");
    //     }
    //     }
      // }


