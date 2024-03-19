var result = 10+20;
console.log(result);

var fruit;
fruit= '자몽';
var food = '볶음밥';

//변수 규칙
// 숫자가 맨앞에 안 됨 
// var 7number (X)
// 숫자 중간은 가능
var num7ber;  //(o)

// var user name  띄어쓰기 안됨
var current_login_user_phone_number; //snake case
var CurrentLoginUserPhoneNunber; // camel case (js: 0 )

// 셋 다 다른 변수임. 대소문자 구분함
var apple;
var APPLE;
var ApplE;

//특수문자 안됨!
// var myPetName!;
var $myPetName_;

// 키워드 변수 이름 안됨
// 키워드는 거의 소문자임.
// var for; (x)
var For;  //대문자로 바꿔버리면 가능

// 이름은 쓰임이 유추되도록 할 것
var userName;
var userEmail;
var memberAddress;
//한글 변수명은 가능한데,
//하지는 마세요

var myMoney = 1000;
//상수는 미리 선언해서 안변하는 값에 대해서 사용
const $orange = 'ffa808';

//const 걸려있으면 변경 시도 시 에러남
$orange = 'sdsdsds'; 
console.log($orange);


