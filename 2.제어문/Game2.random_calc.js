/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.
*/

// 난이도 등급 선언
const HIGH = 1, MIDDLE = 2, LOW = 3;

while (true) {
  var OK_Count = 0;
  var NG_Count = 0;
  // level select
  while (true) {
    var selectLevel = +prompt(`✨난이도를선택하세요~~!\n\n1. 상 (1~100) \n2. 중 (1~50) \n3. 하 (1~20)`);
    if (selectLevel !== HIGH && selectLevel !== MIDDLE && selectLevel !== LOW) continue;
    else break;
  }
  
  while (true) {
    var Num1 = 0;
    var Num2 = 0;
    var Operator = 0;
    var count = 1;
    var calcValue = 0;

    var op_view = '';

    // 랜덤 수 설정
    switch (selectLevel) {
      case HIGH: //1~100
        // 숫자 2개 랜덤, 연산자 1개 랜덤
        Num1 = Math.floor(Math.random() * 100) + 1;
        Num2 = Math.floor(Math.random() * 100) + 1;
        break;
      case MIDDLE: //1~50
        Num1 = Math.floor(Math.random() * 50) + 1;
        Num2 = Math.floor(Math.random() * 50) + 1;
        break;
      case LOW: //1~20
        Num1 = Math.floor(Math.random() * 20) + 1;
        Num2 = Math.floor(Math.random() * 20) + 1;
        break;
      default:
        alert('다시 선택하세요');
        break;
    }
    //연산자
    Operator = Math.floor(Math.random() * 4) + 1;
    
    if(Num1<Num2)
    {
      var temp = Num1;
        Num1 = Num2;
        Num2 = temp;
    }
    switch (Operator) {
      case 1:
        calcValue = Num1 + Num2;
        op_view = '+';
        break;
      case 2:
        calcValue = Num1 - Num2;
        op_view = '-';
        break;
      case 3:
        calcValue = Num1 * Num2;
        op_view = '*';
        break;
      case 4:
        calcValue = Num1 / Num2;
        op_view = '/';
        break;
    }
    //  
    var answer = +prompt(`[Q ${count}] ${Num1} ${op_view}  ${Num2} = ?`);

    if (answer === calcValue) {
      alert('정답~!🎉');
      OK_Count += 1;
      
    }
    else if (answer === 0) {
      break;
    }
    else {
      alert(`땡👻 ${calcValue}가 정답!`);
      NG_Count += 1;
      // alert(NG_Count);
    }

  }
  alert(`[게임 종료]\n\n😊정답 갯수=${OK_Count}\n😂틀린 갯수=${NG_Count}`);

  // 게임 재시작 여부 확인
  var exitFlag = confirm(`한판 더 하실?`);
  // 취소 누르면 
  if (!exitFlag) {
    alert(`Bye👀`);
    break;
  }


}






////
// const DIFFICULT = 1,
//   MIDDLE = 2,
//   EASY = 3;

// var levelMessage = `~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~
// [ 1. 상  || 2. 중  || 3. 하 ]`;

// var level = +prompt(levelMessage);

// var maxNumber;

// switch (level) {
//   case DIFFICULT:
//     maxNumber = 100;
//     break;
//   case MIDDLE:
//     maxNumber = 50;
//     break;
//   case EASY:
//     maxNumber = 20;
//     break;
//   default:
//     maxNumber = 99999;
// }

// var qNum = 1; // 문제 번호

// var correctCount = 0,
//   wrongCount = 0;

// while (true) {
//   var firstNumber = Math.floor(Math.random() * maxNumber) + 1;
//   var secondNumber = Math.floor(Math.random() * maxNumber) + 1;

//   // 앞의 숫자가 더 크게 설정
//   if (firstNumber < secondNumber) {
//     var temp = firstNumber;
//     firstNumber = secondNumber;
//     secondNumber = temp;
//   } else if (firstNumber === secondNumber) {
//     continue;
//   }

//   // 0, 1, 2 중에 하나가 생성되는 난수
//   var markNum = Math.floor(Math.random() * 3);

//   var mark = '+'; // 연산 기호를 문자열로 저장

//   // 실제 정답
//   var realAnswer;

//   switch (markNum) {
//     case 0:
//       mark = '+';
//       realAnswer = firstNumber + secondNumber;
//       break;
//     case 1:
//       mark = '-';
//       realAnswer = firstNumber - secondNumber;
//       break;
//     case 2:
//       mark = 'x';
//       realAnswer = firstNumber * secondNumber;
//       break;
//   }

//   // 사용자의 입력답
//   var userAnswer = +prompt(
//     `Q${qNum++}. ${firstNumber} ${mark} ${secondNumber} = ??`
//   );

//   if (userAnswer === 0) {
//     alert('게임을 종료합니다.');
//     break;
//   }

//   // 정답 검증
//   if (userAnswer === realAnswer) {
//     alert('정답입니다!!');
//     correctCount++;
//   } else {
//     alert('틀렸습니다!!');
//     wrongCount++;
//   }
// } // end each game loop

// alert(`# 정답횟수: ${correctCount}회, 틀린횟수: ${wrongCount}회`);
// //


