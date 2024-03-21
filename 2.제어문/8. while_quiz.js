//누적 합 구하기

// var start = +prompt(`첫번째값을 입력하세요`);
// var end   = +prompt(`두번째값을 입력하세요`);
// 시작이 더 크고 end 가 더 작을때
if (start > end) {
  var t = start;
  start = end;
  end = t;
}
//<--------------
// var total = 0;
// var n = start;

// while(n<=end)
// {
// total+=n;
// n++;
// }
// alert(`${start}~${end}의 총합은 ${total}입니다.`);

//--------------------------------------------------
// 양의 정수 입력
var inputValue = +prompt(`첫번째값을 입력하세요`);
var strTotal = '';
var n = 1;
while (n <= inputValue) {
  if (n % 2 === 1) { strTotal += '+'; }
  else { strTotal += '-' }
  n++;
}
alert(strTotal);