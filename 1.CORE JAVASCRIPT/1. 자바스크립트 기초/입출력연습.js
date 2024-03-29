var userName = prompt('당신의 이름은?');
var userAge  = +prompt('당신의 나이는?');

var now = new Date();	// 현재 날짜 및 시간
var userYear = now.getFullYear() - userAge +1 ;
alert(`${userName}님은 ${userYear}년생이시군요?`)

// 변수명에 마우스 올려보면
// 무슨 형인지 나옴
