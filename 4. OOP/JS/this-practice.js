//this

//일반 함수에서 this
function foo() {
  //nodeJS에서는 this는global객체를 표현
  //브라우저에서는 window라는 전역 객체를 표현
  console.log(this);
}

// foo();
const madeBy = "KIA";
const model = "K7";

//객체에서의 this
//this로 호출하면 내부 내용 출력 
//          -> 현대, 그랜져 출력
// this지우면 바깥 출력
//          ->  기아 k7
const car = {
  madeBy: "Hyundai",
  model: "그랜져",
  showInfo: function () {
    console.log(this);
    console.log(`제조사:${this.madeBy},모델명: ${this.model}`);
  },
};
//호출 영역
// car.showInfo();

//이벤트 핸들러의 this - function 으로 선언시
// 이벤트를 건 요소
const $btn = document.getElementById("btn");

//클릭 시 버튼 태그 출력
const buttonHandler = function (e) {
  console.log("btn click");
  console.log(this);
  this.style.background = "greenyellow";
  //this = $btn
};

$btn.addEventListener(`click`, buttonHandler);
