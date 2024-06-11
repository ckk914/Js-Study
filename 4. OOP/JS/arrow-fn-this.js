//화살표 함수와 this
const dog = {
  name: "뽀삐",
  regularFn: function () {
    console.log("regular:", this); //자기 자신 객체
  },
  arrowFn: () => {
    console.log("arrow: ", this); //window 객체
  },
};

dog.regularFn(); //뽀삐
dog.arrowFn(); // 윈도우

console.log("===");

const cat = {
  name: "나비",
  introduce: function () {
    console.log("introduce this: ", this); //나비
    setTimeout(() => {  //일반 함수는 window가 나오고, 화살표 함수가 나비가 나옴(바로 상위 this 출력)
      console.log("SetTimeout:", this);
    }, 2000);
  },
};
cat.introduce();

//일반 함수
// $modal.addEventListener("click", function (e) {
//     console.log(this); // $modal
    
//   $ok.addEventListener("click", function (e) {
//     console.log(this); // $ok
//   });
//화살표 함수
//   $cancel.addEventListener("click", (e) => {
//     console.log(this); // $modal
//   });
// });
