// =================전역 변수 영역========================//
//서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: `할 일 1`,
    done: false
  },
  {
    id: 2,
    text: `할 일 2`,
    done: false
  },
  {
    id: 3,
    text: `할 일 3`,
    done: false
  }
]
//현재 수정 모드에 진입하셨나요?
let isEnterEditMode = false;


//=================함 수 정 의 영 역 =======================//
function renderNewTodoElement({ id, text }) {
  //li 태그 생성하기
  const $newTodoLi = document.createElement(`li`);
  //2-1. 생성한 태그에 텍스트 추가하기
  $newTodoLi.textContent = text;
  //2-2 클래스,data-id 추가
  $newTodoLi.classList.add(`todo-list-item`);
  $newTodoLi.dataset.id = id;
  //2-3 LI 자식들 추가하기
  // innerHtml을 써서 포맷을만들어서 넣어준다~!
  $newTodoLi.innerHTML = `   
                      <label class="checkbox">
                          <input type="checkbox">
                          <span class="text">${text}</span>
                      </label>
                      <div class="modify"><span class="lnr lnr-undo"></span></div>
                      <div class="remove"><span class="lnr lnr-cross-circle"></span></div>`;
  //생성한 태그 ul 에 추가하기
  $todoListUl = document.querySelector(`.todo-list`);
  $todoListUl.appendChild($newTodoLi);
}

// ======================
//새로운 할일을 추가하는 함수
//======================
// 입력값이 유효한지 검증
// 입력값이 유효한지 검증
function isValidate($textInput) {
  const text = $textInput.value;

  // 입력값이 비었거나 10글자 이상이면 유효하지 않다.
  if (text.trim() === '' || text.length > 10) {
    $textInput.style.background = 'orangered';
    $textInput.setAttribute('placeholder', '필수 입력사항입니다 (10자 이내)');
    $textInput.value = '';
    return false;
  }
  $textInput.style.background = '';
  $textInput.setAttribute('placeholder', '할 일을 입력하세요.');
  return true;
}

function insertTodoData() {
  //1. 입력한 텍스트 읽어오기
  $todoText = document.getElementById(`todo-text`); //입력창
  const inputText = $todoText.value;

  //혹시 입력을 안하셨나요? 집에 가세요
  if(!isValidate($todoText))return;

  //새 할일의 아이디 값을 생성하는 함수
  const makeNewId = () => {
    return todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  };

  const newTodo = {
    id: makeNewId(),
    text: inputText,
    done: false,
  };

  //할 일 데이터 배열에 새로운 할 일 데이터 추가하기
  todos.push(newTodo);
  //todos 배열에 새로운 할일을 객체로 포장해서 추가하기
  renderNewTodoElement(newTodo);
}


//배열에서 삭제된 할일 객체를 지우는 함수
function removeTodoData(dataId) {
  // const index = -1;
  // for(let i =0li<todos.length;i++)
  // {
  //   if(todo.id ===$li.dataset.id){
  //     index i
  //   }
  // }
  const index = todos.findIndex(todo => todo.id === dataId);
  todos.splice(index, 1);
  console.log(todos);
}

////
function spanToInput(span) {
  var input = document.createElement('input');
  input.type = 'text';
  input.value = span.innerHTML;
  span.parentNode.replaceChild(input, span);
}

function inputToSpan(input) {
  var span = document.createElement('span');
  span.innerHTML = input.value;
  input.parentNode.replaceChild(span, input);
}


//
// 수정 모드 진입 처리
function toggleModifyMode($modifyBtn) {
  // 지금 수정모드 진입상태인지 수정을해야하는 상태인지 확인
  const isModifying = $modifyBtn.classList.contains('lnr-undo');

  // 다른 항목이 이미 수정중이면 이 함수를 종료한다.
  if (isEnterEditMode && isModifying) return;
  isEnterEditMode = isModifying;
 
  // 1. 수정 모드 진입
  // 1-1. span.lnr-undo를 span.lnr-checkmark-circle로 클래스 교체
  $modifyBtn.classList.toggle('lnr-undo');
  $modifyBtn.classList.toggle('lnr-checkmark-circle');

  const $label = $modifyBtn.parentElement.previousElementSibling;

  if (isModifying) {
    // 1-2. span.text를 input.modify-input으로 태그 교체
    // 부모태그.replaceChild(새롭게들어올태그, 없어질태그);
    const $textSpan = $label.lastElementChild;
  
    const $modifyInput = document.createElement('input');
    $modifyInput.classList.add('modify-input');
    $modifyInput.setAttribute('type', 'text');
    // span.text의 텍스트를 input.modify-input에 저장
    $modifyInput.value = $textSpan.textContent;

    $label.replaceChild($modifyInput, $textSpan);
  } else {
    // 1-2-1. 교체된 input태그 내부에는 기존 span의 텍스트가 그대로 들어가야함
    // 2. 수정 완료 처리
    // input.modify-input에 있는 value를 읽어서 새로운 span.text를 생성하여 교체
    const $modifyInput = $label.querySelector('.modify-input');
    const $newTextSpan = document.createElement('span');
    $newTextSpan.classList.add('text');
    $newTextSpan.textContent = $modifyInput.value;

    $label.replaceChild($newTextSpan, $modifyInput);

    // 실제 배열 데이터 수정
    // 수정하려면 클릭한 버튼 근처 li에 있는 data-id가져와서 배열 탐색
    const dataId = +$label.parentElement.dataset.id;

    const foundTodo = todos.find(todo => todo.id === dataId);
    foundTodo.text = $newTextSpan.textContent;

  }

}

//
// function toggleModifyMode($modiftBtn){
//   if(isEnterEditMode) return;
//   isEnterEditMode = true;
//   //1. 수정 모드 진입
//   //1.1 span. lnr-undo -> 아이콘 변경
//   $modiftBtn.classList.toggle(`lnr-undo`);
//   $modiftBtn.classList.toggle(`lnr-checkmark-circle`);
//   // 수정모드인지,  수정을 해야하는 상태인지 확인
//   //아이콘 상태로 상태 확인!
//   // const isModifting = $modiftBtn.classList.contains(`lnr-checkmark-circle`);
//   const isModifting = $modiftBtn.classList.contains(`lnr-undo`);
//   //다른 항목이 이미 수정중이면서 수정진입모드라면 이 함수를 종료한다.
// if(isEnterEditMode  &&isModifting) return;
// isEnterEditMode = isModifting;

//   const $label = $modiftBtn.parentElement.previousElementSibling; //부모의 형제
  
//   if(isModifting){ //수정모드로 진입하기

//  //1.2 노드 교체 replaceChild(new,old);
//   //부모 태그. replaceChild(뉴,올드);
//   const $textSpan = $label.lastElementChild;
//   const $modifyInput = document.createElement(`input`);
//   $modifyInput.classList.add(`modify-input`);
//   $modifyInput.setAttribute(`type`,`text`);
//   //span, text의 텍스트를 input.modify-input에 저장
//   $modifyInput.value = $textSpan.textContent;
//   //교체
//   $label.replaceChild($modifyInput,$textSpan);
//   }
//   else{ //수정 완료 처리
//     // 1.2.1 - 교체된input 태그 내부에는 기존
//    // input.modify-input 에 있는 value를 읽어서 새로운 span.txt를 생성하여 교체⭐: 교체하면 기존꺼 지워짐
//   const $modifyInput = $label.querySelector(`.modify-input`);// 라벨부터 빠른 검색
//   const $newTextSpan = document.createElement(`span`);
//   $newTextSpan.classList.add(`text`);
//   $newTextSpan.textContent = $modifyInput.value;
//   $label.replaceChild($newTextSpan,$modifyInput);
// //실제 배열 데이터 수정
// // 수정하려면 클릭한 버튼 근처 li 에 있는 data-id 가져와서 배열 탐색
// $label.parentElement.dataSet.id;

// todos.find(todo =>todo.id ===data.id)
// {
// foundtodo.text =   $newTextSpan.textContent;
// console.log(todos);
// }
// }
  
 
// }

//=================함 수 실 행 영 역 ======================//
$addBtn = document.getElementById(`add`);         //추가버튼

// 클릭 이벤트
$addBtn.addEventListener(`click`, (e) => {
  e.preventDefault(); //form의 submit 중단
  insertTodoData();
});

//할일 완료 상태 데이터 처리       v 처리
function toggleDone(dataId){
  // 체크박스 체크 및 해제 시 todos배열에 있는 특정 객체의 done 프로퍼티를
  //반대값으로 변경해야함0

  //1. 클릭한 체크박스가 갖고 있던 ID 파라미터로 받기

  //2, 배열을 순회하여 DATA ID 와 일치하는 ID를 가진 객체 찾아내기~!
  // for(let i = 0;i<todos.length;i++){
  //   console.log(todo[i]);
  // }
  const todo = todos.find(todo=> todo.id == dataId);   // 객체를 통째로 가져옴!
  if(todo) todo.done = !todo.done; //논리 반전
  // console.log(todos);
  
}
//삭제 버튼 클릭 이벤트
//Uㅣ에 이벤트를 건다 (모든 버튼을 다 포함하고 있는)
document.querySelector(`.todo-list`).addEventListener(`click`, e => {
  //클릭한 버튼이 포함된 li를 탐색
  const $targetLi = e.target.closest(`.todo-list-item`); //근처의 올라가면서 부모를 찾아라⭐
  const dataId = +$targetLi.dataset.id;
  
  //삭제 처리 진행
  if (e.target.matches(`.remove span`)){
    // return;  //삭제 버튼 아니면 나가기!⭐
  //화면에서 제거
  document.querySelector(`.todo-list`).removeChild($targetLi);
  // 또는  
  // $targetLi.remove();

  //배열에서 데이터 제거
  removeTodoData(+$targetLi.dataset.id);
  } 
  else if(e.target.matches(`.checkbox input[type=checkbox]`)){
  //체크화면 렌더링 처리
    e.target.closest(`.checkbox`).classList.toggle(`checked`);
    //
    toggleDone(dataId); // li 떤짐
  }
  else if(e.target.matches(`.modify span`)){
    console.log(e.target);
    toggleModifyMode(e.target);
  }
})

//입력 이벤트 구현
// $form.addEventListener(`submit`, e => {
//   e.preventDefault(); //submit 기능 끄기!
//   // 널 검사~!  ㅇㅇㅇ
//   if ($form.firstElementChild.value === ``) {

//     $input.value = ``;
//     $input.placeholder = `필수 입력사항입니다.!`;
//     $input.style.backgroundColor = `red`;
//     setTimeout(() => {
//       $input.placeholder = `할일을 입력하세요.`;
//       $input.style.backgroundColor = `#868e96`;
//     }, 800);
//     return;
//   }
//   else {
//     //추가 문 넣기~!

//     //null이 아니면! 추가하고 초기화~!
//     $input.value = ``;
//   }
//   //정상 되면 날리기.... 자꾸 초기화 짓거리...
//   // $form.submit();
// });
//==============================================================
// 3. 체크박스 체크 + 라인 아무곳이나 눌러도 체크되게 하기  ㅇㅇㅇ
//  ㄴ 안했는데 되네? 뭐지...

// })
//==============================================================
//4.5 v 누르면 이름에 찍 -       ㅇㅇㅇ
// $todolist = document.querySelector(`.todo-list `);
// $todolist.addEventListener(`click`, (e) => {


//   $li = e.target.parentElement.parentElement;
//   //다른 버튼엔 반응 안하도록 조건 처리.
//   if (e.target.classList.value === `` || e.target.classList.value === `checkbox` ||
//     e.target.classList.value === `text` || e.target.classList.value === `checked`) {
//     //체크박스 상태체크
//     if ($li.children[0].children[0].checked) {
//       //체크 상태이면
//       $li.children[0].classList.add(`checked`);
//       console.log($li.children[0].classList);
//       //누른 id 가져오기 + 객체에 컨트롤 하기
//       //클릭한 버튼이 포함된 li를 탐색
//       const $targetLi = e.target.closest(`.todo-list-item`); //근처의 올라가면서 부모를 찾아라⭐
//       console.log($targetLi.dataset.id);
//       todos[$targetLi.dataset.id - 1].done = true;

//       console.log(todos);
//       //아이디 비교
//       //  배열 데이터 수정 
//     }
//     else {
//       //체크 안된 상태
//       $li.children[0].classList.remove(`checked`);
//       //누른 id 가져오기 + 객체에 컨트롤 하기
//       const $targetLi = e.target.closest(`.todo-list-item`); //근처의 올라가면서 부모를 찾아라⭐
//       todos[$targetLi.dataset.id - 1].done = false;
//       console.log(todos);
//     }
//   }
// })
//==============================================================

// 5. 수정 버튼 누르면 수정 모드로 진입
// 6. 수정 하고 v 누르면 수정 완료
/* <div class="modify"><span class="lnr lnr-undo"></span></div> */
$modify_btn = document.querySelector(`.modify`);
$modify_btn.addEventListener(`click`,()=>{
console.log(`mod`);
});


// $newInput = document.createElement(`input`);

// //수정 진행 이벤트
// document.querySelector(`.todo-list`).addEventListener(`click`, e => {
//   if (!e.target.matches(`.modify span`)) return;  //수정 버튼 아니면 나가기!⭐
//   //수정 처리 진행
//   //클릭한 버튼이 포함된 li를 탐색
//   const $targetText = e.target.closest(`.todo-list-item`).children[0].children[1];
//   const $targetPAPApapa = $targetText.parentNode.parentNode;
//   console.log($targetPAPApapa.dataset.id);
//   const $icon = e.target.closest(`.todo-list-item`).children[1].children[0];
//   // console.log($icon.classList);
  
//   if($icon.classList.contains(`lnr-undo`)){ //수정하기
//     console.log($newInput.value);
//     console.log($targetText);
//     $targetText.parentNode.replaceChild($newInput,$targetText);
//     $icon.classList.replace(`lnr-undo`,`lnr-checkmark-circle`);
//   }
//   else{  //수정 완료
//     $icon.classList.replace(`lnr-checkmark-circle`,`lnr-undo`);
//     $targetText.parentNode.replaceChild($targetText,$newInput);
//   }
  
//   // console.log($targetText);
//   // $modify_btn
//   // if($targetInput.type ===`checkbox`) { 
//     //체크박스 -> 수정모드!
//     //클래스 교체하기 
//     //.1.1 StereoPannerNode. lnr-undo를 StereoPannerNode. lnr-checkmark-circle로 클래스 교체
//       //  lnr-checkmark-circle
//     //1.2 span.tet를 input.modify-input 으로 태그 교체
//     // 1.2.1

// })