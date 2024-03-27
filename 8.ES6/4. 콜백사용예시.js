//정수 n을 전달하면 1~n 까지의 모든 짝수를 출력

// function showEvenNumber(n) {
//   const nums = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) nums.push(i);
//   }
//   console.log(nums);
// }
function showOddNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) nums.push(i);
  }
  console.log(nums);
}
// 배수 출력
// n : 숫자  / x : 배수원하는 수
function showThreeNumber(n, x) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) nums.push(i);
  }
  console.log(nums);
}
//홀짝
function showOddOrEvenNumber(n,isOdd) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === isOdd) nums.push(i);
  }
  console.log(nums);
}
// showEvenNumber(7);
// showOddNumber(7);
// showOddOrEvenNumber(7,0); //짝
// showOddOrEvenNumber(7,1); //홀

//모든 요구사항을 커버하기 위한
// 콜 백 함 수
//1~n까지의 정수를 조건에 맞게 출력
function showNumber(n,condition){
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)/*조건*/) nums.push(i);
  }
  console.log(nums);

}

showNumber(50, function(i){
  return i%2 ===0;
});

showNumber(20,function(i){
  return i%2===1;
});

showNumber(100, function(i) {
  return i % 6 === 0 && i % 12 !== 0;
});

showNumber(10,function(i){
  return true;
});

showNumber(20, kk => kk %2 ===0);

console.log('==================');

function makeCook(recipeName,recipeCode) {
  console.log(`### 나만의 맛도리 쩝쩝박사 레시피 !!!`);
  //--------------------------------------
  //실제 레시피 위치
  recipeCode();
  console.log(`요리 이름: ${recipeName}`);

  //--------------------------------------
  console.log(`~~차암 쉽죠? 여러분도 만들어 보세요~`);
}

//recipeName, recipeCode 태워서 보냄.
makeCook(`맛도리쩝쩝라면`,()=> {
  console.log(`1. 아리수 팔팔 끓이기`);
  console.log('2. 대파 양파 청양고추 팍팍퍽퍽');
  console.log(`3. 맛점`);
})

//콜백: 템플릿 만들고, 특정 부분 사용자에게 채우라고 하는 것!
//  예) 버튼 이벤트 => 각각 버튼별 다르게 돌아갈 수 있게 하는 
