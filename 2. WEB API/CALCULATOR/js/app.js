////////////////////////////////////////////////////////////////
//                 실행코드 (함수 호출, 이벤트 등록, 핸들러 정의)
////////////////////////////////////////////////////////////////
console.log($logEntries);
//이벤트 핸들러 바인딩
//각각
$addBtn.addEventListener(`click`,e=>{
//연산 처리 함수
console.log(e.target.id);
 calculate(e.target.id);
});
$subtractBtn.addEventListener(`click`,e=>{
  //연산 처리 함수
 calculate(e.target.id);
});
$multiplyBtn.addEventListener(`click`,e=>{
//연산 처리 함수
calculate(e.target.id);
});
$divideBtn.addEventListener(`click`,e=>{
//연산 처리 함수
calculate(e.target.id);
});