
var score = 70;

console.log(`점수:${score}점`);

if(score > 60){
console.log(`합격하셨어요~짝짝짝`);
}
//-------------------------------------------------
// 랜덤 정수 생성하기 math.random()
// Math.random()   =>  0.0 이상 1.0 미만의 랜덤 값
//-------------------------------------------------
// 1이상 10 이하 랜덤 정수 생성 하기
// Math.random()*10
//-------------------------------------------------
// Math.floor() : 소숫점 이하 버림
// Math.floor(Math.random()*10)+1    1부터 10까지 나옴
//-------------------------------------------------
// # 랜덤 범위 정수값 공식
//-------------------------------------------------
//   x~y의 수를 구하라 할때 공식 적용
// Math.floor(Math.random) *(y-x +1) +x 

var randomNumber = Math.floor(Math.random()*10)+1;
console.log(`랜덤값: ${randomNumber}`);

var score = Math.floor(Math.random() *101);

// var score = 90;
// console.log(`점수: ${score}점`);
if(score>60)
{
  console.log(`합격!`);
}
else
{
  console.log(`아웃`);
}