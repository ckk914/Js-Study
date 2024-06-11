//this를 조작하는 메서드

//# call
const kim = {
  name: "김철수",
  age: 33,
};

const park = {
  name: "박영희",
  age: 55,
};
function sayHello(lang1, lang2) {
  console.log("this:", this);
  console.log(`Hello I am ${this.name}, I can speak ${lang1} and ${lang2}`);
}
//call : this를 조작하기 위한 메서드
//   param1 : 조작할 this를 전달
//   param2 : 원래 해당 함수가 받아야할 파라미터 전달

sayHello.call(kim, "Spanish", "Japanese");

console.log("==========");

//apply : call이랑 같음
//        다만 param2를 배열로 묶어서 전달⭐️
sayHello.apply(kim, ["한국어", "중국어"]);
console.log("==========");

//bind : call, apply와 같으나
//       함수를 실행시키지 않고,
//       this를 조작한 새로운 함수를 반환

//출력이 아닌 함수로 만드는게 bind (= 콜백을 할 수 있다.!)
const newSayHello = sayHello.bind(kim, "중국어", "힌두어");

newSayHello(); //출력해야지 출력됨.

//bind 실제 사용 예시
//이벤트객체는 항상 마지막 파라미터로!
const clickHandler = function (fruitName, e) {
  console.log("event객체:", e);
  console.log("this:", this);
  this.style.background = "greenyellow";
  console.log("전달한 과일명:", fruitName);
};

const $input = document.getElementById("fruit");
const $btn = document.getElementById("btn");

const bindedClickHandler = clickHandler.bind($btn, "레몬");

//btn 클릭인데 누르면 input으로 바뀜!
// $btn.addEventListener("click", clickHandler.bind($input));
// $btn.addEventListener("click", clickHandler.bind($btn, "사과"));
// $btn.addEventListener("click", bindedClickHandler); //레몬 출력
$btn.addEventListener(
  "click",
  function (name, e) {
    console.log("이름:", name);
  }.bind($btn, "김멍멍")
);
