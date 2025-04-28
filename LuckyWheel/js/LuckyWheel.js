document.addEventListener('DOMContentLoaded', function() {
  const log = console.log;
  const wheel = document.querySelectorAll('.wheel');
  const del = document.querySelector('.bottomTop .del')
  const input = document.querySelectorAll('input')
  const wheel_turn = document.querySelector('.wheel_turn')
  const wheel_stop = document.querySelector('.wheel_stop')





  
  
  function rotateFunction(time, callback) {
  let i = 0;
    let rotateID = setInterval(() => {
      i += 2;
      if(i >= 360) {i=0};
      callback(i)
    }, time);

  }



  wheel_turn.addEventListener('click',function() {
    rotateFunction(11,(callback) => {
      wheel[2].style.transform = `rotate(${callback}deg)`;

    })
    rotateFunction(7,(callback) => {
      wheel[1].style.transform = `rotate(${callback}deg)`;
    })
    rotateFunction(10,(callback) => {
      wheel[0].style.transform = `rotate(${callback}deg)`;
    })
    this.classList.add('pointerNone')
    del.classList.add('pointerNone')
    wheel_stop.classList.remove('pointerNone')
  }) 



  wheel_stop.addEventListener('click',function(){
    let wheel_0 = wheel[0].style.transform;
    wheel_0 = wheel_0.split('(')[1].split('d')[0];
    // if (wheel_0 >= 0 && wheel_0 < 72) {
    //   wheel[2].style.transform = `rotate(72deg)`;
    // } else if (wheel_0 >= 72 && wheel_0 < 144) {
    //   console.log('두 번째 영역: 확대축소');
    // } else if (wheel_0 >= 144 && wheel_0 < 216) {
    //   console.log('세 번째 영역: 빼기');
    // } else if (wheel_0 >= 216 && wheel_0 < 288) {
    //   console.log('네 번째 영역: 더하기');
    // } else if (wheel_0 >= 288 && wheel_0 < 360) {
    //   console.log('다섯 번째 영역: 재료바꾸기');
    // }
  })



    // 휴지통 클릭~~~
    del.addEventListener('click',function() {
      for(let e of input) {
        e.value='';
      }
    })

})




