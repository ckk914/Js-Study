var x = 99; //global scope : 전역 변수
function foo() {
  var x = `홍길동`; // local scope : 지역 변수
  //함수 내에서 생성
  //함수 끝나면 메모리 안에서 지움`
  console.log(`foo x : ${x}`); //홍길동
  var y = `메롱`;
  console.log(`foo y : ${y}`); //홍길동
  return x;
}
var y = foo();
console.log(`x:${x}`); //99
console.log(`y:${y}`); //홍길동
//---------------------------
//중첩 함수 : 함수안에 함수를 정의
function outer(m) {
  var n = `other local n`;
  var v = `other local v`;

  console.log(n); //출력 ok
  console.log(v); //출력 ok
  console.log(m);//출력 ok
    //헬퍼 함수 : 바깥쪽 함수 전용 함수
  function inner() 
  {
    console.log(n);     //출력 ok
    var m = `inner local m `;
    console.log(m);  //출력 ok
  }
  inner();
}

outer(`other local test`);
// inner();   // 에러!
                    // outer 내부에서만 호출 가능!
                    // 비공개하고 싶은 함수를 함수 안에 함수로 선언한다.

      var userName =`홍길동`;

      function funcA(){
        userName = `박아영`;
      }
      function funcB(){
        userName=`피자`;
      }

      funcA();
      funcB();
      funcA();
      console.log(userName);