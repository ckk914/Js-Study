

// q1
// 정수 3개 입력
// 같은 값이 몇개인지 표시
// var inputNumber1 = +prompt(`정수A:`);
// var inputNumber2 = +prompt(`정수B:`);
// var inputNumber3 = +prompt(`정수C:`);

// if(inputNumber1===inputNumber2 &&inputNumber1===inputNumber3)
// {
//   alert(`3개 모두 같습니다.`);
// }
// else if(inputNumber1===inputNumber2 || inputNumber1===inputNumber3
//         ||inputNumber2===inputNumber3)
// {
//   alert(`같은 값을 가지는 것은 2개입니다.`);
// }
// else{
//   alert(`같은 값을 가지는 것은 0개입니다.`);
// }

//q2
//정수 2개 입력
//두값의 차이는?? 양수로 구하기
// var inputNumber1 = +prompt(`정수A:`);
// var inputNumber2 = +prompt(`정수B:`);
// var gap=0;
// if(inputNumber1<=inputNumber2)gap = inputNumber2-inputNumber1;
// else 
//    gap = inputNumber1-inputNumber2;

//    alert(`값 차이는 ${gap}입니다.`)
//Q3
//정수 3개 입력
//최소값 구하기 제일 작은 값

var inputNumber1 = +prompt(`정수A:`);
var inputNumber2 = +prompt(`정수B:`);
var inputNumber3 = +prompt(`정수C:`);

var minValue=0;

if(inputNumber1<=inputNumber2)
{
  if(inputNumber1<=inputNumber3)
     minValue= inputNumber1;
    else
      minValue=inputNumber3
}
else
{
  if(inputNumber2<=inputNumber3)
     minValue= inputNumber2;
    else
     minValue= inputNumber3
}

alert(`최소값은 ${minValue} 입니다!`);

//===============
// 3번 다른 방식
var min = a;
if(b<min) min = b;
if(c<min) min = c;