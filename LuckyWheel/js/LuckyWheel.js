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
  let circle_0 = 'circle_0'; //콜백 전달시 서클 번호 전달달
  let circle_1 = 'circle_1';
  let circle_2 = 'circle_2';

  wheel_turn.addEventListener('click',function() {
    rotateFunction(10,circle_0,(callback)=> {
      wheel[0].style.transform = `rotate(${callback}deg)`
    })
    rotateFunction(20,circle_1,(callback)=> {
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
      }else if(circle == 'circle_0') {
        i=
        console.log(wheelList.wheel_0)
      }else if(circle == 'circle_1') {
        console.log(wheelList.wheel_1)
      }else if(circle == 'circle_2') {
        console.log(wheelList.wheel_2)
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

    // if ((w_1 >= 0 && w_1 <= 17) || w_1 >= 339) {wheel[1].style.transform = 'rotate(0deg)' 
    //   console.log('111111',w_1);}
    // else if (w_1 >= 18 && w_1 <= 52) {wheel[1].style.transform = 'rotate(36deg)' 
    //   console.log('222',w_1);}
    // else if (w_1 >= 53 && w_1 <= 88) {wheel[1].style.transform = 'rotate(72deg)' 
    //   console.log('333',w_1);}
    // else if (w_1 >= 89 && w_1 <= 124) {wheel[1].style.transform = 'rotate(108deg)' 
    //   console.log('444',w_1);}
    // else if (w_1 >= 125 && w_1 <= 159) {wheel[1].style.transform = 'rotate(144deg)' 
    //   console.log('555',w_1);}
    // else if (w_1 >= 160 && w_1 <= 198) {wheel[1].style.transform = 'rotate(180deg)' 
    //   console.log('666',w_1);}
    // else if (w_1 >= 199 && w_1 <= 132) {wheel[1].style.transform = 'rotate(216deg)' 
    //   console.log('777',w_1);}
    // else if (w_1 >= 133 && w_1 <= 268) {wheel[1].style.transform = 'rotate(252deg)' 
    //   console.log('888',w_1);}
    // else if (w_1 >= 269 && w_1 <= 303) {wheel[1].style.transform = 'rotate(255deg)' 
    //   console.log('999',w_1);}
    // else if (w_1 >= 304 && w_1 < 338) {wheel[1].style.transform = 'rotate(326deg)' 
    //   console.log('1010101',w_1);}
    

    

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




