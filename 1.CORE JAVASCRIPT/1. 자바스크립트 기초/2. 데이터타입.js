
var num = 90;
console.log(typeof num); //number

var num2 = 90.33;
console.log(typeof num); //number

var num3 = 27;
console.log(num3 / 5);  //정수 나누기 정수 인데도 5.4 나옴
//자바스크립트는 정수가 없다 


var foodName = '깐풍기';




var element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>';

// 백틱쓰면 줄바꿈 가능함!
var elem = `
<nav>
  <ul>
    <li>메롱</li>
  </ul>
</nav>
`;

console.log(elem);

console.log('=======================');

var month = 4;
var day = 5;
var anni = "식목일";

var sentence = month + '월' + day + '일은' +
  anni + '입니다.';
console.log(sentence);

var sentence2 = '${month}월 ${일}은 ${anni}입니다'

var userAge = 30;
var flag = userAge>19;
console.log(typeof flag);
console.log(flag);

// undefined, null
// undefined : 아직 값이 없음
// null : 일부러 값을 없앤 상태(고의로 값을 없앰)


function butNewCar(money){
  if(money> 5000) ;
}