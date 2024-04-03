////////////////////////////////////////////////////////////////
//                 정의공간
//                               프로그램 전체에서 사용할 전역적인 변수와 함수를 정의
////////////////////////////////////////////////////////////////
// input
const $userInput = document.getElementById(`input-number`);
//버튼 + - *  /
const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

//result 요소노드
const $currentResult = document.getElementById(`current-result`);
//계산 로그 요소노드
const $currentCalculation = document.getElementById(`current-calculation`);

//결과값
let currentResult = 0;

//로그 엔트리 접근
const $logEntries = document.querySelector(`section.card .log-entries`);

////////////////////////////////////////////////////////////////////
//함수 정의 영역
////////////////////////////////////////////////////////////////////
// 계산 기능 헬퍼 함수
const calculate = (id) => {
  if (id == `btn-add`) {
    //더하기를 해야함
    //계산 전 값을 백업
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어와야함.
    const enteredNumber = +$userInput.value;
    
    // 2. 결과에 누적
    currentResult += enteredNumber;
    
    //3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult}+${enteredNumber}`;
    $currentCalculation.textContent = descriptionLog;
    //카드 만들기
    const $newLi = document.createElement(`li`); //⭐매번 불러줘야지만, 추가가 됨.
    $newLi.classList.add(`log-entries__item`);
    $newLi.textContent += `#` + Number($logEntries.children.length + 1) + `. `;
    $newLi.textContent += descriptionLog +` = `+currentResult+ `\n`;
    $logEntries.appendChild($newLi); //⭐만든거를 계속하면 하나에 추가됨..

    console.log($logEntries);
  } //=================<덧셈 여기까지
  else if (id == `btn-subtract`) {
    //빼기 전 값을 백업
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어와야함.
    const enteredNumber = +$userInput.value;

    // 2. 결과에 누적
    currentResult -= enteredNumber;

    //3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult}-${enteredNumber}`;
    $currentCalculation.textContent = descriptionLog;

    //카드 만들기
    const $newLi = document.createElement(`li`); //⭐매번 불러줘야지만, 추가가 됨.
    $newLi.classList.add(`log-entries__item`);
    $newLi.textContent += `#` + Number($logEntries.children.length + 1) + `. `;
    $newLi.textContent += descriptionLog +` = `+currentResult+ `\n`;
    $logEntries.appendChild($newLi); //⭐만든거를 계속하면 하나에 추가됨..
  }
  else if (id == `btn-multiply`) {
    //곱셈 전 값을 백업
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어와야함.
    const enteredNumber = +$userInput.value;

    // 2. 결과에 누적
    currentResult *= enteredNumber;

    //3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult}*${enteredNumber}`;
    $currentCalculation.textContent = descriptionLog;

    //카드 만들기
    const $newLi = document.createElement(`li`); //⭐매번 불러줘야지만, 추가가 됨.
    $newLi.classList.add(`log-entries__item`);
    $newLi.textContent += `#` + Number($logEntries.children.length + 1) + `. `;
    $newLi.textContent += descriptionLog +` = `+currentResult+ `\n`;
    $logEntries.appendChild($newLi); //⭐만든거를 계속하면 하나에 추가됨..
  }
  else {
    //나눗 전 값을 백업
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어와야함.
    const enteredNumber = +$userInput.value;

    // 2. 결과에 누적
    currentResult /= enteredNumber;

    //3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult}/${enteredNumber}`;
    $currentCalculation.textContent = descriptionLog;

    //카드 만들기
    const $newLi = document.createElement(`li`); //⭐매번 불러줘야지만, 추가가 됨.
    $newLi.classList.add(`log-entries__item`);
    $newLi.textContent += `#` + Number($logEntries.children.length + 1) + `. `;
    $newLi.textContent += descriptionLog +` = `+currentResult+ `\n`;
    $logEntries.appendChild($newLi); //⭐만든거를 계속하면 하나에 추가됨..
  }

};

