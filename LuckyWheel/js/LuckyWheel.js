document.addEventListener('DOMContentLoaded', function() {
  const log = console.log;
  const wheel = document.querySelectorAll('.wheel');
  const del = document.querySelector('.bottomTop .del')
  const input = document.querySelectorAll('input')
  const wheel_turn = document.querySelector('.wheel_turn')
  const wheel_stop = document.querySelector('.wheel_stop')
  let rotateID;


  



  
  
  // function rotateFunction(time, callback) {
  // let i = 0;
  //   rotateID = setInterval(() => {
  //     i += 2;
  //     if(i >= 360) {i=0};
  //       callback(i)
  //   }, time);
  // }



  wheel_turn.addEventListener('click',function() {
    log('돌리기클릭')
  //   rotateFunction(11,(callback) => {
  //     wheel[2].style.transform = `rotate(${callback}deg)`;
  //   })
  //   rotateFunction(7,(callback) => {
  //     wheel[1].style.transform = `rotate(${callback}deg)`;
  //   })
  //   rotateFunction(10,(callback) => {
  //     wheel[0].style.transform = `rotate(${callback}deg)`;
  //   })
  //   this.classList.add('pointerNone')
  //   del.classList.add('pointerNone')
  //   wheel_stop.classList.remove('pointerNone')
  }) 



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




