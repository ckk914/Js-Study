
//자바스크립트의 함수는
// 함수를 리턴할 수 있음,
function Calculator(a){

  return function(n1,n2){
    return n1+n2;
  }
}

const  x= Calculator(10);
console.log(typeof x); // function
const y = x(10,20);
console.log(`y= ${y}`);

console.log('============');

const z = Calculator()(6,9);
console.log(`z: ${z}`);

// 간략화 너무 하면 욕먹음!
const opetate2 = () => (n1,n2) => n1*n2;
const operate = function() {
   return function(n1,n2) {
    return n1*n2;
  }
  };
  console.log('===================');

const k = operate();
console.log(k);
const m = k(3,5);
console.log(m);

console.log('===================');
function bar(){
  function fas(){
    return 10;
  }
  return fas;
}
const h = bar()();




// 전역 변수는 위험한 경우가 있다!!

//카운트 증가시키는 함수
// 기존 
// let count = 0; // 전역변수

// const increase = function(){
//   return count++;
// };
// 변환
// const increase = () => {
//  let count = 0;           //계속 0부터 시작
//   return count++;
// }

// increase();
// increase();
// const count = increase(); //계속 1

//클로저를 통해 지역변수의 스코프를 늘려줄 수 있다.
const increaseClosure = () =>{             // 1번만 호출 하기엔 낭비성 호출임...
  let count = 0;                                       // 지역변수

  const helper = () => ++count;
  return helper;
  // return ()=> ++count;
}

const increase = increaseClosure();   //increase를 얻기 위해 1회만 호출한다..
console.log(increase);                          //[Function: helper]
console.log(increase());
console.log(increase());
console.log(increaseClosure());         //해도 초기화는 안됨.
count = 999;                                        //변화없음.
console.log(increase());
console.log(increase());
console.log(increase());

//즉시 실행 함수 : 함수를 1회성으로 사용할 목적으로 만드는 함수

(function() { 
  console.log(`hello`);
})();
//==========================================
const increaseClosure2 = () => {
let count = 0;
return () => count++;
};

const increase_ =  () => {
  let count = 0;
  return () => count++;
  };

increase_();
increase_();
increase_();
