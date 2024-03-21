// 문제1: 입력한 정수 이하의 2의 제곱수를 가로로 출력
// var num1 = +prompt(`숫자 입력:`);
// var total= '';
// for(var i=1;2**i<num1;i++){
  
//   var calc = (2**i);
// // 2 4 8 16 
//   total+=calc+' ';
// }

// alert(total);

//다른 방법2
// 입력받은 숫자 이하의 2의 제곱수를 가로로 출력
// var n = +prompt('양의 정수를 입력하세요.'); 
//var total= '';
// for (var i = 2; i <= n; i *= 2) {
    //  total+= i+' ';
// }

//문제2: 1부터 입력한 정수n 까지의 모든 약수를 출력하고 개수를 출력

// var num1 = +prompt(`숫자 입력:`);
// var total= '';

// for(var i = 1; i<=num1;i++)
// {
//   if(num1%i===0) total +=i +' ';
  
// }
// alert(total);

// 다른방법

// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = +prompt('정수: ');

// 약수 카운트를 저장할 변수
var count = 0;

// 출력내용을 저장할 변수
var result = '';

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i}\n `;
    count++;
  }
}
result += `약수의 개수: ${count}개`;
alert(result);