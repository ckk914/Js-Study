////////////////////////////////////////////////////////////////
//                 정의공간
//                               프로그램 전체에서 사용할 전역적인 변수와 함수를 정의
////////////////////////////////////////////////////////////////
const ADD  = `+`;
const SUB  = `-`;
const MUL  = `*`;
const DIV  = `/`;

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

// 로그 리스트 요소노드
const $logEntriesUl = document.querySelector('.log-entries');

// 로그를 모아놓을 배열
const logArray = [];

//결과값
let currentResult = 0;

//로그 엔트리 접근
const $logEntries = document.querySelector(`section.card .log-entries`);

// const operator = `+`;
////////////////////////////////////////////////////////////////////
//함수 정의 영역
////////////////////////////////////////////////////////////////////
//✨사칙 연산을 수행하여 결과를 반환하는 함수
const operateNumber = ({prevResult:first, type:mark, enteredNumber:second}) => {
let result;

switch(mark){
  case ADD: result = first +second; break;
  case SUB: result = first -second; break;
  case MUL: result = first *second; break;
  case DIV: result = first /second; break;
    
}

return result;
};
// 로그배열에 있는 로그들을 화면에 렌더링하는 함수
const renderLog = () => {

  //보여줄 로그의 수 
  const NUMBER_OF_LOG = 4;
  //시작 인덱스
  const startIndex = (logArray.length < NUMBER_OF_LOG) ? 0 : logArray.length - NUMBER_OF_LOG;


  //ul 리셋
  $logEntriesUl.innerHTML = ``; 

  for(let i = startIndex;i<logArray.length;i++)
  {
    const $logListItem = document.createElement(`li`);
    //  $newLi.classList.add(`log-entries__item`);
    $logListItem.classList.add(`log-entries__item`);
    $logListItem.textContent = `${i+1}. ${logArray[i]}`;

    $logEntriesUl.appendChild($logListItem);
  }
};
//✨ 로그배열에 완성된 로그를 쌓는 함수
const accumulateLogHistory = ({ descriptionLog, currentResult }) => {

  const logMessage = `${descriptionLog} = ${currentResult}`;
  logArray.push(logMessage);

  // console.log(logArray);
   // 로그 렌더링
   renderLog();

};


// ✨계산 기능 헬퍼 함수
const calculate = (type) => {

  // if (id == `btn-add`) {
    //더하기를 해야함
    //계산 전 값을 백업
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어와야함.
    const enteredNumber = +$userInput.value;
    
    // 2. 결과에 누적 계산
    ///////////////////
    // 계산 함수
    currentResult = operateNumber({prevResult, type, enteredNumber}); 

    //3. 화면에 렌더링
    $currentResult.textContent = currentResult;


  // 계산 로그 생성
  const descriptionLog = `${prevResult} ${type} ${enteredNumber}`;
  $currentCalculation.textContent = descriptionLog;

  // 로그 이력을 쌓는 함수
  accumulateLogHistory({ descriptionLog, currentResult });

    
    

    ////////////////////////
    //카드 만들기
    // const $newLi = document.createElement(`li`); //⭐매번 불러줘야지만, 추가가 됨.
    // $newLi.classList.add(`log-entries__item`);
    // $newLi.textContent += `#` + Number($logEntries.children.length + 1) + `. `;
    // $newLi.textContent += descriptionLog +` = `+currentResult+ `\n`;
    // $logEntries.appendChild($newLi); //⭐만든거를 계속하면 하나에 추가됨..

    // console.log($logEntries);
};

