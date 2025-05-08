document.addEventListener('DOMContentLoaded', function() {
  const log = console.log;
  const wheel = document.querySelectorAll('.wheel');
  const del = document.querySelector('.bottomTop .del')
  const input = document.querySelectorAll('input')
  const wheel_turn = document.querySelector('.wheel_turn')
  const wheel_stop = document.querySelector('.wheel_stop')
  let arrNum;
  let setTimeArr = []
  

  wheel_turn.addEventListener('click',function() {
    rotateFunction(arrNum,10,(callback)=> {
      wheel[0].style.transform = `rotate(${callback}deg)`
    })
    rotateFunction(arrNum,7,(callback)=> {
      wheel[1].style.transform = `rotate(${callback}deg)`;
    })
    rotateFunction(arrNum,3,(callback)=> {
      wheel[2].style.transform = `rotate(${callback}deg)`;
    })
    // 콜백을 사용하려고 하면 함수 정의할때 콜백 매개변수를 추가하고,
    // 호출시 콜백 함수를 넘겨야 함
    this.classList.add('pointerNone')
    del.classList.add('pointerNone')
    wheel_stop.classList.remove('pointerNone')
  }) 


  function rotateFunction(arrNum,time,callback) {
    let i = 0;
    setTimeArr.push(
      setInterval(() => {
        i += 2;
        if(i >= 360) {i=0};
        callback(i)
      }, time)
    )
  }


  let wheelList =  {
    wheel_0 : 0,
    wheel_1 : 0,
    wheel_2 : 0,
  };

  wheel_stop.addEventListener('click',function(){
    for(i=0; i<=2; i++) {
      wheelList[`wheel_${i}`] = wheel[`${i}`].style.transform;  
      wheelList[`wheel_${i}`] = wheelList[`wheel_${i}`].split('(')[1].split('d')[0];
      clearInterval(setTimeArr[`${i}`])
      setTimeout(() => {
        setTimeArr = [];
      }, 5);
    }

    if ((wheelList.wheel_2 >= 0 && wheelList.wheel_2 <= 35) || wheelList.wheel_2 >= 326) {
      console.log('첫 번째 영역: 용도바꾸기');
    } else if (wheelList.wheel_2 >= 36 && wheelList.wheel_2 <= 108) {
      console.log('두 번째 영역: 확대축소');
    } else if (wheelList.wheel_2 >= 109 && wheelList.wheel_2 <= 175) {
      console.log('세 번째 영역: 빼기');
    } else if (wheelList.wheel_2 >= 176 && wheelList.wheel_2 <= 250) {
      console.log('네 번째 영역: 더하기');
    } else if (wheelList.wheel_2 >= 251 && wheelList.wheel_2 > 325) {
      console.log('다섯 번째 영역: 재료바꾸기');
    }
    console.log(wheelList)

    wheel_turn.classList.remove('pointerNone')
    del.classList.remove('pointerNone')
    wheel_stop.classList.add('pointerNone')
  });


    // 휴지통 클릭~~~
    del.addEventListener('click',function() {
      for(let e of input) {
        e.value='';
      }
    })
})




