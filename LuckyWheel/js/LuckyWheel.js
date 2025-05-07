document.addEventListener('DOMContentLoaded', function() {
  const log = console.log;
  const wheel = document.querySelectorAll('.wheel');
  const del = document.querySelector('.bottomTop .del')
  const input = document.querySelectorAll('input')
  const wheel_turn = document.querySelector('.wheel_turn')
  const wheel_stop = document.querySelector('.wheel_stop')
  let wheel_1_trans, wheel_2_trans ,wheel_3_trans; 
  let rotateID_0, rotateID_1, rotateID_2

  

  
  

  //   rotateID 
  function rotateFunction(wheelNum,time) {
    let i = 0;
    rotateID_wheelNum = setInterval(() => {
        i += 2;
      if(i >= 360) {i=0};
        callback(i)
    }, time);

  }

      

  wheel_turn.addEventListener('click',function() {
    let wheelNum =[0,1,2]

    rotateFunction(wheelNum[0],10,(callback)=> {
      console.log(callback,'11111콜백백')
    })
    rotateFunction(wheelNum[1],7,(callback)=> {
      console.log(callback,'222222콜백백')

    })
    rotateFunction(wheelNum[2],3,(callback)=> {
      console.log(callback,'333333콜백백')

    })
    // 콜백을 사용하려고 하면 함수 정의할때 콜백 매개변수를 추가하고,
    // 호출시 콜백 함수를 넘겨야 함
    
  }) 
    //  => {
      // wheel[2].style.transform = `rotate(${callback}deg)`;
    // })
  //   rotateFunction(7,(callback) => {
  //     wheel[1].style.transform = `rotate(${callback}deg)`;
  //   })
  //   rotateFunction(10,(callback) => {
  //     wheel[0].style.transform = `rotate(${callback}deg)`;
  //   })
  //   this.classList.add('pointerNone')
  //   del.classList.add('pointerNone')
  //   wheel_stop.classList.remove('pointerNone')




  // wheel_stop.addEventListener('click',function(){
  //   let wheel_3 = wheel[0].style.transform;
  //   wheel_3 = wheel_3.split('(')[1].split('d')[0];
  //   console.log(wheel_3)
  //   clearInterval(rotateID);

  //   if ((wheel_3 >= 0 && wheel_3 <= 35) || wheel_3 >= 326) {
  //     console.log('첫 번째 영역: 용도바꾸기');
  //   } else if (wheel_3 > 36 && wheel_3 <= 108) {

  //     console.log('두 번째 영역: 확대축소');
  //   } else if (wheel_3 > 109 && wheel_3 <= 175) {

  //     console.log('세 번째 영역: 빼기');
  //   } else if (wheel_3 > 176 && wheel_3 <= 250) {

  //     console.log('네 번째 영역: 더하기');
  //   } else if (wheel_3 > 251 && wheel_3 > 325) {

  //     console.log('다섯 번째 영역: 재료바꾸기');
  //   }
  // })



    // 휴지통 클릭~~~
    del.addEventListener('click',function() {
      for(let e of input) {
        e.value='';
      }
    })

})




