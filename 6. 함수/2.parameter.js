//x부터 y까지의 누적합을 구해야 함

//1~10
function calcRangeTotal(x, y) {
  var total = 0;
  for (var i = x; i <= y; i++) {
    total += i;
  }
  return total;
}

var result1 = calcRangeTotal(1,10);
console.log(result1);

var result2 = calcRangeTotal(4,7);
console.log(result2);


//매개변수의 기본값 ()// 매개변수에 없으면 되게끔 하는게 ES6 문법
function sayHello(language=`한국어`){

  // ES5
  // language = language || `한국어`;
  switch(language){
    case `한국어`:
      console.log(`안녕하세요`);
      break;
      case `영어`:
      console.log(`헬로우`);
      break;
      case `중국어`:
      console.log(`따쟈하오`);
      break;
      case `일본어`:
      console.log(`콘니치와`);
      break;
      default:
        console.log(`우가우가`);
  }
}

sayHello(`영어`);
sayHello(); //=매개변수 안쓰면 undifined 가 전달됨.

//매개변수 없는 함수
function selectRandomPet(){
  var Pets = [`멍멍이`,`야옹이`,`짹짹이`,`고라니`,`노루루`];
  var randomNumber = Math.floor(Math.random() *Pets.length);

  return Pets[randomNumber];
}
var r1 = selectRandomPet();
var r2 = selectRandomPet();
var r3 = selectRandomPet();
console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);
console.log(`r3: ${r3}`);