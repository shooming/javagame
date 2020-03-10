var canvas = document.getElementById("myCanvas"); //캔버스 지정
var ctx = canvas.getContext("2d");

/*ctx.beginPath(); // 새로운 경로를 만듭니다. 경로가 생성됬다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
ctx.rect(20, 40, 50, 50); //정사각형 만드는 메서드 처음 두값은 좌상단 모서리로부터의 좌표, 나머지 두값은 너비와 높이
ctx.fillStyle = "#FF0000"; // 색상값
ctx.fill(); //색상값
ctx.closePath(); //현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.



ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.stroke();
ctx.closePath();*/

var x = canvas.width/2; //arc 안에서 사용할 x변수 (첫 시작위치)
var y = canvas.height-30; // arc 안에서 사영할 y변수 (첫 시작위치)
var dx = 2; //움직이는 것을 표현하기위해 x값을 매프레임 마다 더함
var dy = -2; //움직이는 것을 표현하기위해 y값을 매프레임 마다 더함
var ballRadius = 10;// 원의 반지름 값을 대입하여 계산하는데 사용

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2); // 원의 중심을 가리키는 x와 y좌표, 원의 반지름, 시작 각도와 끝 각도(원을 그릴 때 시작과 끝이되는 각도이며, 라디안 값입니다.), 그리는 방향(false를 넣으면 시계방향으로 그려집니다. 기본 값이나 true를 넣으면 반 시계방향으로 그려집니다.) 이 파라미터는 옵션입니다.
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height); // x,y가 이동 후 그전 값을 클리어함 (직사각형의 좌상단 모서리를 표시할 x와 y좌표, 그리고 직사각형의 우하단 모서리를 표시할 x와 y좌표)
  drawBall();

  if(x+ dx > canvas.width-ballRadius || x + dx < ballRadius){
    dx = -dx;
  } //x값이 0으로 가게되면 반대 반향으로 가게 함, 혹은 x값이 캔버스의 최대값보다 커지면 반대로 가게함 ballRadius를 쓴이유는 벽에 서 튈길때 원이 반지름의 중심부분이 기준이어서 벽안으로 들어가버리는 현상이 생셔서 기준을 원의 둘레를 기준으로 계산함.

  if(y + dy > canvas.height-ballRadius || y+ dy < ballRadius){
    dy = -dy;
  } //y값이 0으로 가게되면 반대 반향으로 가게 함, 혹은 y값이 캔버스의 최대값보다 커지면 반대로 가게함


  x += dx;
  y += dy;
}
setInterval(draw, 10); //10밀리초마다 해당함수 계속 호출됨
