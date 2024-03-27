
//------------------------------------
//어떤 계산을 하는 함수
function operate(param){
  console.log(`param: ${param}`);
//받은 함수를 원하는 위치에서 호출 가능!
const x = param(10,20);

  console.log(`계산기 시작!!`);
const n1 =10, n2 = 20;
const result =  param( n1,n2);
return result;
}
//------------------------------------

//식을 계속 요구한다. => 식을 보내라고 함.  == 콜백
// 그냥 식은 못보내지만, 함수를 보낼 수 있다!
function add(n1,n2){
  return n1+n2;
}
// operate(add); //함수 전달
//호출 => 다른 이름 없는 함수 전달
//계산식을 태워서 보낸다.
const result = operate(function(n1,n2){return n1*n2});
console.log(`result: ${result}`);
