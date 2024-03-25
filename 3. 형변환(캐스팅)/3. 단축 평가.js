
true && true; //t
true && false; //false
false && true; //false
false && false; //false
// 단축평가 
// ㄴ왼쪽이 false이면, 오른쪽 단계는 볼 필요 없다.

//OR 연산 : 첫번째 truthy를 반환
console.log('hello' || 'bye'); //hello 출력
console.log(null||'안뇽');     // 안녕 출력

//AND 연산 : 첫번째 Falsy를 반환
console.log('메롱'&& 'ㅈㄹ'); //ㅈㄹ 출력 :마지막 true인 것 출력
console.log(0 &&'룰루랄라');


//if(조건 참){
//console.log('blah blah');
//}
//      ll      같은 코드.
// 조건 && console.log('blah blah');
/*
<h1>안녕하세요</h1>
login && <h2>xxx님 환영합니다</h2>
쿠폰 당첨 여부 && sendCoupon();
!쿠폰 당첨 여부 && sendMessage();  
 쿠폰당첨여부 || sendMessage();  //빌런 코드
★★ 실무에서는 죄다 && 씀!!

내게시물여부 && <button>삭제</button>


*/