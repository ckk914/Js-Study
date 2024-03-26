
// console.log(`김철수님 안녕하세요! `);
// console.log(`오늘도 즐거운 하루 되세요~!`);

// //100줄 정도 작성...........

// console.log(`박영희님 안녕하세요! `);
// console.log(`오늘도 즐거운 하루 되세요~!`);

// //500줄 정도 작성.......

// console.log(`뽀로로님 안녕하세요! `);
// console.log(`오늘도 즐거운 하루 되세요~!`);

//함수 정의(만든다.) (=모듈화)
function sayhello(userName){
 console.log(`${userName}님 안녕하세요! `);
console.log(`오늘도 즐거운 하루 되세요~!`);
}

function makeLine(){
  console.log(`===============`);
}

//함수 호출 (사용한다.)
sayhello(`뽀로로`);
makeLine();
sayhello(`둘리`);
makeLine();
sayhello(`잔망루피`);
makeLine();
sayhello();
makeLine();


//나의 프로그램에서는 원의 넓이를 자주 구함
const PI = 3.14159265;

//반지름 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(r) {
  return PI *r**2
}
//게시글을 삭제하는 함수
function removeBoardArticle(){

}
//반지름이 5인 원의 넓이
var circle1 = calcAreaCircle(5);
console.log(circle1);

//반지름이 17인 원의 넓이
var circle2 = calcAreaCircle(17);
console.log(circle2);
