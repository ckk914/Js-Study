/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
// ============ 함수 정의 역역 =================== //
function calcNumbersTotalAndAverage(...numbers) {
  var total = 0;
  var Average = 0;
  for (var i of numbers) {
    total += i;
  }
  Average = total / numbers.length;
  return {
    total: total,
    avg: Average,
    // total,   이렇게만 써도 total: total 로 만듬
    // avg  ,                         avg: avg
    // 더 줄이자면 avg:total/numbers.length 도 가능
  };
}
//============= 실행 영역 ====================== //
//360과 90이 리턴되어야 함!
var result = calcNumbersTotalAndAverage(90, 80, 100, 90, 100); 
console.log(`총합: ${result.total}, 평균: ${result.avg}`);
