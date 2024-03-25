//암묵적 = 알아서 바뀜

var n1 = 10;   //숫자
var n2 = '20'; //문자

//숫자 + 문자 => 문자
console.log(n1+n2); // 1020
//      숫자 + 문자
var n3 = n1 + '';
console.log(typeof n3); // string

var n4 = n2-n1 -5 ; // 20 - 10 -5 =5
console.log(n4);
var n5 = n1*n2;  // 숫자 *문자 => 숫자
console.log(n5); // 10*20=200

var n6 = 'hello' *3;  
console.log(n6);  // NaN : 연산불가

console.log('=====================');

var n7 = -'99'; // 텍스트에 음수 붙이니 number 가 된다.
                // 숫자가 됨
console.log(true+true);   // 2
console.log(true+false);  // 1

console.log('=======================');
// 암기 필수★★
//falsy : 0,'',null, undifined, NaN 
//   ㄴ 이 5개 제외 나머지는 TRUE 다.
// if(true) console.log('hello-1'); //출력
// if(false)console.log('hello-2');
//falsy한 값 한개도 안찍힘 !
if(0) console.log('hello-1'); //출력
if('') console.log('hello-1'); //출력
if(null) console.log('hello-1'); //출력
if(undefined) console.log('hello-1'); //출력
if(NaN) console.log('hello-1'); //출력
console.log('=======================');
if(99) console.log('hello-6'); //출력 99 = true
if(-87.876) console.log('hello-7'); //출력 -87.876 = true
if('아뇽?')console.log('hello-8'); //true
if('   ')console.log('hello-9'); //true
if([10,20,30])console.log('hello-10');//true
if([])console.log('hello-11');    //true
if({kind: `개`})console.log('hello-12');//true
if(function(){})console.log('hello-13');//true


for(var i =1;i<=10;i++)
{
  if(i%2 /*1*/ )
  {
    console.log(`${i}는 홀수입니다.`);  
  }
  else
  console.log(`${i}는 짝수입니다.`);
}
console.log('===========');
var apple = 10;
if(apple){                        //0이면 출력 안함
  console.log('사과가 있습니다.');
}else{
  console.log('사과가 없습니다.');
}

var n=20;
var flag = n>10;
if(flag){}


