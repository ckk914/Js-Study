function add2(n1, n2) {
  return n1 + n2;
}

function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}
//만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
//파라미터에 집합자료형(배열, 객체)을 전달한다.
// numbers를 배열로 받는다.
function addAll(numbers) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}
//ES6 - SPREAD 문법
// 파라미터 앞에 점 ... 세개 써주면 배열로 바꿔서 받는것임!
//function addAllES6(first,second, ...numbers){
function addAllES6(...numbers) {
  console.log(numbers);
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

//함수와 아랫줄 사이에 100만줄 있다고 가정

var r1 = add2(5, 9);
var r2 = add3([5, 9, 2]);
console.log(`r1: ${r1}`);
var r3 = addAll([1, 2, 3, 4, 5]);
console.log(`r3: ${r3}`);

var r4 = addAllES6(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55
console.log(`r4: ${r4}`);

//다중 반환값
// 함수의 반환값은 언제나 한개다.
function arithmeticOperate(n1, n2) {
  //좋은 방법이 아님! 순서 바뀌면 손볼일이 많다.
  //객체를 써야 좋다.

  //변수는 2회 이상 사용될때만 사용할 것!
  //그게 더 클린하다.
  return {
    add: n1 + n2,
    sub: n1 - n2,
    multi: n1 * n2,
    div: n1 / n2,

  };
}

var r5 = arithmeticOperate(20, 10);
console.log(`r5 덧셈결과: ${r5.add} / r5 뺄셈결과: ${r5.sub}`);
console.log(`r5 덧셈결과: ${r5.multi} / r5 뺄셈결과: ${r5.div}`);

//바로 나눗셈 결과만 받기
var r6 = arithmeticOperate(5,1).multi;
console.log(`r6: ${r6}`);

function foo(){
  return 10;
}

var n = foo++;
console.log(n);

function fooa(){
  
}

