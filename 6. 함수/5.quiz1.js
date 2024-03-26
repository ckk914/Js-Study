/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
 나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

function calcDivisor(num)
{
  var numList = [];
  for(var i=1;i<=num;i++){
    if(num%i===0) numList.push(i);
  }
  console.log(`${num}의 약수 :${numList}`);
  return numList.length;
}
// 호출부
var divCount = calcDivisor(20);
console.log(`약수의 개수: ${divCount}개`);