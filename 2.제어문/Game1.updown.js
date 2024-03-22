// 난이도 등급 선언
const HIGH = 1, MIDDLE = 2, LOW = 3;

var life = 0;
// level select
while (true) {
  while (true) {
    var selectLevel = +prompt(`난이도를선택하세요~~!\n /1.상 기회3번 /2. 중 기회 6번 /3. 하 기회 10번`);
    if (selectLevel !== HIGH && selectLevel !== MIDDLE && selectLevel !== LOW) continue;
    else break;
  }
  // life 설정 ->if 보다 switch문이 깔끔
  // 난이도 같은건 숫자보다 문자로 선언해주는 것이 좋다!
  if (selectLevel === HIGH) life = 3;
  else if (selectLevel === MIDDLE) life = 6;
  else life = 10;

  //게임 정답 설정
  var rn = Math.floor(Math.random() * 50) + 1;
  var dn = 0;
  var up = 50;

  // 게~임 스타트
  for (var i = 0; i < life; i++) {

    var num1 = +prompt(`${dn}~${up} 숫자를 ${life - i}번만에 맞춰보세요~!(1):`);

    while (num1 > up || num1 < dn || typeof num1 !== `number` || num1 === '' || num1 === null ) {
      num1 = prompt(`${dn}~${up} 숫자를 ${life - i}번만에 맞춰보세요~!:  ${num1} ${typeof num1}`);
    }


    //판정
    if (num1 === rn) { alert(`축하합니다~! 정답~!`); break; }
    else if (num1 > rn) {
      alert(typeof num1);
      alert(`dn!\n남은기회:${life - i - 1}  ${i}`);
      up = num1;
    }
    else if (num1 < rn) {
      alert(typeof num1);
      alert(`up!\n남은기회:${life - i - 1}   ${i}`);
      dn = num1;
    }
    else { }

    if (life - i - 1 === 0) alert('게임 오버ㅠㅠ정답은${num1}이었음.');
  }

  // 게임 재시작 여부 확인
  var exitFlag = confirm(`한판 더 하실?`);
  // 취소 누르면 
  if (!exitFlag) {
    alert(`조심히 가~~`);
    break;
  }
}







//////////////////////////
// 참고용 코드
//////////////////////
// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 난이도 상수
// const HIGH = 1, MIDDLE = 2, LOW = 3;

// var initCount; // 사용자의 총 입력 기회

// while (true) {
//   // 난이도 선택
//   var level = +prompt(
//     '난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]'
//   );

//   if (level === HIGH) {
//     initCount = 3;
//   } else if (level === MIDDLE) {
//     initCount = 6;
//   } else if (level === LOW) {
//     initCount = 10;
//   } else {
//     alert('난이도를 숫자로 다시 입력해주세요');
//     continue;
//   }

//   break;
// }

// // 정답 생성
// var secret = Math.floor(Math.random() * 100) + 1;

// var countDown = initCount; // 입력기회 횟수

// var min = 1, max = 100;

// while (true) {
//   // 사용자의 입력값
//   var answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);
//   countDown--;

//   // 정답 판정
//   if (secret === answer) {
//     alert(`정답입니다!`);
//     break;
//   } else if (secret > answer) {
//     alert(`UP!!`);
//     min = answer + 1;
//   } else {
//     alert(`DOWN!!`);
//     max = answer - 1;
//   }

//   // 카운트다운 게임 종료 조건
//   if (countDown <= 0) {
//     alert(`기회가 모두 소진되었습니다. 정답은 ${secret}이지렁 ㅎㅎㅎ`);
//     break;
//   } else {
//     alert(`${countDown}번의 기회가 남았습니다.`);
//   }
// }

// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.
