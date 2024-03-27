
//1. var는  변수의 중복 선언을 암묵적으로 허용

var x = 10;
let y  = 10;
//,,1900만줄

var x = `ddd`;   //에러 안남. 쓰지말것
// let  y = 20;       // 에러 남.
console.log(`x = ${x}`);
console.log(`y = ${y}`);

//2. var는 블록 레벨 스코프를 지원하지 않음

let i = `메롱`;

for(let i =0;i<5;i++){
  console.log(`for-i:${i}`);
}

console.log(`global-i : ${i}`); //var이면 5가 나옴
                                                //let 이면 메롱


// 3. 호이스팅 : 선언위치와 관계없이 참조 가능
hobby = `댄스`;

//... code
var hobby;  //이게 됨.!

console.log(hobby);

//================================================
// let이 문법 확인하기 좋게 에러가 맞게 난다!
hooby2 = `춤`;

let hobby2;                //에러 

console.log(hobby2); // 에러 

