

//명시적 타입 형변환 = 직접 지정해서 바꿈
var x =`30.5` , y=`40.5`;

var result = x+y;
console.log(result);  //3040
var result2 = Number(x)+Number(y);      //71
console.log(result2);          
// parseInt는 문자를 숫자로 바꿀때 정수로 바꾼다. 
//            소숫점을 버려버림ㅠ

// parseDouble을 사용하면 소수점을 지킬 수 있음.
var result3 = parseInt(x)+parseInt(y);  //70
console.log(result3);
//텍스트로 데이터를 가져오는게 제일 안전
var result4 = +x + +y;                  //71
console.log(result4);

//숫자를 문자로 바꾸고 싶을때 ★
var m = ''+10+ 20; //앞에 빈문자 넣으면 문자로 바뀌고 쭉 찍힘 
console.log(m);

var f = ``+false;  //빈문자 더하면 문자됨

console.log('================');

console.log(Boolean('hello')); //true 출력
console.log(Boolean(null)); //false 출력
console.log(!!999);         //true   느낌표 두번 넣어도 형이 나옴
console.log(!999);          //false
console.log(!!undefined);   //false


// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
```