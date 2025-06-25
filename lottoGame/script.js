  const bottom_button = document.querySelector('.bottom_button');
  const ball = document.querySelectorAll('.ballWrap .ball');
  const result_Wrap = document.querySelector('.result_Wrap');
  let rect = ball.getBoundingClientRect();
  let x;
  let y;
  ball_min_X = 20;
  ball_max_X = 313;
  ball_min_Y = 25;
  ball_max_Y = 202;
  resultNumMax = 45;
  resultNumMin = 1;




// 볼 테두리 좌표 알아내는 방법
  
let cx = rect.left + rect.width / 2;
let cy = rect.top + rect.height / 2;
let rx = rect.width / 2;
let ry = rect.height / 2;

let points = [];
let step = 5;  // 정밀도: 1도 단위로 하고 싶으면 1로 바꿔도 됨

for (let angle = 0; angle < 360; angle += step) {
  let rad = angle * (Math.PI / 180);
  let x = cx + rx * Math.cos(rad);
  let y = cy + ry * Math.sin(rad);
  points.push({ x, y });
}

console.log(points);




  // bottom_button.addEventListener('click', function () {
  //   bottom_button.classList.add('on');
  //   result_Wrap.classList.remove('ready');




    
  //   // setInterval(() => {
  //   //   ball.forEach(b => {
  //   //     x = Math.random()*(ball_max_X - ball_min_X + 1 );
  //   //     y = Math.random()*(ball_max_Y - ball_min_Y + 1 )
  //   //     b.style.left = `${x}px`
  //   //     b.style.bottom = `${y}px`
  //   //   });
  //   // }, 1000);

  // })