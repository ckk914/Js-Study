//* 함수 선언문(정의문)
function add(n1, n2) {
  return n1 + n2;
}

const r1 = add(10, 30);
console.log(`r1: ${r1}`);

const plus = add;
console.log(plus);
console.log(typeof plus);

//함수도 하나의 데이터이고 값이다.
const r2 = plus(5, 8);
console.log(`r2: ${r2}`);

/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 
       즉, 런타임에 생성이 가능하다.

    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
 */

// 익명 함수 : 함수를 값(리터럴)으로 본 경우
//함수를 변수처럼 생성할 수 있다.
//* 함수 표현식
const multiply = function (n1, n2) {
  return n1 * n2;
};

const r3 = multiply(3, 4);
console.log(r3);

const array = [
  10,
  `zzz`,
  true,
  [],
  {},
  add,         //함수
  multiply,  //함수
  function () {
    console.log("a");
  },
];

const r4 = array[5]; //5번방 함수 사용
console.log(r4(10, 99)); //109

array[7](); //배열의 7번방 함수 호출

console.log(`=======`);

const dog = {
  name: `초코`,
  age: 3,
  favorite: [`산책`, `낮잠`],
  //메서드 : 객체의 전용 함수 (객체의 기능을 표현)
  play: function (tool) {
    console.log(`${this.name} 강아지는 ${tool} 장난감으로 놀아요~`);
  },
};

dog.play(`개껌`);

//결국 배열도 객체다

const arr = {
  0: "zzz",
  1: "fgsdf",
  2: "dfsdf",
  length: 3,
  indexOf: function () {},
  slice: function () {},
  push: function () {},
};

const arr2 = [];
console.log(typeof arr2);

const cat = {
  name: `야옹이`,
  sleep: function () {
    console.log(`쿨쿠쿨`);
  },
};

cat.sleep();