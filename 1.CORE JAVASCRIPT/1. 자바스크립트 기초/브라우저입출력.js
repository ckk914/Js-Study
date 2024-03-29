
const food = '돈까스';
const userName = '스윙스';

// console.log(`${food}의 왕 ${userName}`);

// 브라우저 전용 함수 : node.js환경에서는 작동 불가
//prompt() : 브라우저에서 입력을 할 수 있게 해주는 함수
//confirm() : 브라우저에서 확인/취소를 할 수 있게 해주는 함수
//alert()   : 브라우저에서 알림창을 띄우는 함수

// var yourName = prompt('당신의 이름을 입력하세요');
// alert(`입력한 이름: ${yourName}`)

// // 확인 취소 창
// var resultflag = confirm(`혹시 얼마 있니?? 가진거 다 내놓으렴?`);
// alert(resultflag+` 완료`);
// console.log(`${resultflag}`);

// +promt 하면 숫자를 입력 받는다!
var n1 = +prompt(`1번째 수를 입력`);
var n2 = +prompt(`2번째 수를 입력`);

alert(typeof n1);
alert(`두수의 합 : ${n1+n2}`);