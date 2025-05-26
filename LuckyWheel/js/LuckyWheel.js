document.addEventListener('DOMContentLoaded', function() {
  const log = console.log;
  const wheel = document.querySelectorAll('.wheel');
  const del = document.querySelector('.bottomTop .del')
  const input = document.querySelectorAll('input')
  const wheel_turn = document.querySelector('.wheel_turn')
  const wheel_stop = document.querySelector('.wheel_stop')
  let setTimeArr = []
  let wheelList =  { //stop시 rotation값 저장
    wheel_0 : 0,
    wheel_1 : 0,
    wheel_2 : 0,
  };
  let circle_0 = 'circle_0'; //콜백 전달시 서클 번호 전달
  let circle_1 = 'circle_1';
  let circle_2 = 'circle_2';

  wheel_turn.addEventListener('click',function() {
    rotateFunction(10,circle_0,(callback)=> {
      wheel[0].style.transform = `rotate(${callback}deg)`
    })
    rotateFunction(7,circle_1,(callback)=> {
      wheel[1].style.transform = `rotate(${callback}deg)`;
    })
    rotateFunction(3,circle_2,(callback)=> {
      wheel[2].style.transform = `rotate(${callback}deg)`;
    })
    // 콜백을 사용하려고 하면 함수 정의할때 콜백 매개변수를 추가하고,
    // 호출시 콜백 함수를 넘겨야 함
    this.classList.add('pointerNone')
    del.classList.add('pointerNone')
    wheel_stop.classList.remove('pointerNone')
  }) 


  function rotateFunction(time,circle,callback) {
    let i;
    setTimeout(() => {
      if(wheelList['wheel_0'] == 0) {
        i=0;
      }
      else if(circle == 'circle_0') {
        i=wheelList.wheel_0
      }else if(circle == 'circle_1') {
        i=wheelList.wheel_1
      }else if(circle == 'circle_2') {
        i=wheelList.wheel_2
      }
    },1);
    setTimeArr.push(
      setInterval(() => {
        i += 2;
        if(i >= 360) {i=0};
        callback(i)
      }, time)

    )
  }




  wheel_stop.addEventListener('click',function(){
    for(i=0; i<=2; i++) {
      wheelList[`wheel_${i}`] = wheel[`${i}`].style.transform;  
      wheelList[`wheel_${i}`] = wheelList[`wheel_${i}`].split('(')[1].split('d')[0];
      wheelList[`wheel_${i}`] = Number(wheelList[`wheel_${i}`]) 
      clearInterval(setTimeArr[`${i}`])
      setTimeout(() => {
        setTimeArr = [];
      }, 5);
    }

    let sector_1 = [0,72,144,216,288]
    let sector_2 = [0,36,72,108,144,180,216,252,288,326,324]

    let w_0 = wheelList.wheel_0;
    let w_1 = wheelList.wheel_1;
    let w_2 = wheelList.wheel_2;

    if ((w_2 >= 0 && w_2 <= 35) || w_2 >= 326) {wheel[2].style.transform = 'rotate(0deg)';}
    else if (w_2 >= 36 && w_2 <= 108) {wheel[2].style.transform = 'rotate(72deg)';}
    else if (w_2 >= 109 && w_2 <= 175) {wheel[2].style.transform = 'rotate(144deg)';}
    else if (w_2 >= 176 && w_2 <= 250) {wheel[2].style.transform = 'rotate(216deg)';}
    else if (w_2 >= 251 && w_2 < 325) {wheel[2].style.transform = 'rotate(288deg)';}

    if ((w_1 >= 0 && w_1 <= 17) || w_1 >= 339) {wheel[1].style.transform = 'rotate(0deg)' }
    else if (w_1 >= 18 && w_1 <= 52) {wheel[1].style.transform = 'rotate(36deg)' }
    else if (w_1 >= 53 && w_1 <= 88) {wheel[1].style.transform = 'rotate(72deg)' }
    else if (w_1 >= 89 && w_1 <= 124) {wheel[1].style.transform = 'rotate(108deg)' }
    else if (w_1 >= 125 && w_1 <= 159) {wheel[1].style.transform = 'rotate(144deg)' }
    else if (w_1 >= 160 && w_1 <= 198) {wheel[1].style.transform = 'rotate(180deg)' }
    else if (w_1 >= 199 && w_1 <= 132) {wheel[1].style.transform = 'rotate(216deg)' }
    else if (w_1 >= 133 && w_1 <= 268) {wheel[1].style.transform = 'rotate(252deg)' }
    else if (w_1 >= 269 && w_1 <= 303) {wheel[1].style.transform = 'rotate(255deg)' }
    else if (w_1 >= 304 && w_1 < 338) {wheel[1].style.transform = 'rotate(326deg)' }
    if ((w_2 >= 0 && w_2 <= 17) || w_2 >= 339) {wheel[0].style.transform = 'rotate(0deg)' }
    else if (w_2 >= 18 && w_2 <= 52) {wheel[0].style.transform = 'rotate(36deg)' }
    else if (w_2 >= 53 && w_2 <= 88) {wheel[0].style.transform = 'rotate(72deg)' }
    else if (w_2 >= 89 && w_2 <= 124) {wheel[0].style.transform = 'rotate(108deg)' }
    else if (w_2 >= 125 && w_2 <= 159) {wheel[0].style.transform = 'rotate(144deg)' }
    else if (w_2 >= 160 && w_2 <= 198) {wheel[0].style.transform = 'rotate(180deg)' }
    else if (w_2 >= 199 && w_2 <= 132) {wheel[0].style.transform = 'rotate(216deg)' }
    else if (w_2 >= 133 && w_2 <= 268) {wheel[0].style.transform = 'rotate(252deg)' }
    else if (w_2 >= 269 && w_2 <= 303) {wheel[0].style.transform = 'rotate(255deg)' }
    else if (w_2 >= 304 && w_2 < 338) {wheel[0].style.transform = 'rotate(326deg)' }

    

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




