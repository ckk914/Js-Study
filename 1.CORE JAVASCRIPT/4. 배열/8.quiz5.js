var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
var exitFlag = false;
  while(true){
  var selectMenu = +prompt(`[${tvxq}]\n✨메뉴를 선택하세요
                                1.새로운 이름 추가
                                2.기존 이름 삭제
                                3.멤버 수정
                                4. 프로그램 종료`);
  switch(selectMenu)
    {
      case 1: //멤버 추가
        var addMember = prompt(`[${tvxq}]\n✨추가할 멤버명을 적으세요`);
        tvxq.push(addMember);
      break;
      case 2: //멤버 제거
        while(true){
        var delMember = prompt(`[${tvxq}]\n✨제거할 멤버명을 적으세요`);
        if(tvxq.includes(delMember)){tvxq.splice(tvxq.indexOf(delMember),1);break;}
        else
         alert(`${delMember}는 없는 이름입니다.`);
        }
      break;
      case 3:
         while(true){
          var ChangeMember = prompt(`[${tvxq}]\n✨방출할 멤버를 입력하세요`);
          //포함 검사 -> 있으면, 삭제 없으면 알람
          if(tvxq.includes(ChangeMember)) break;//tvxq.splice(tvxq.indexOf(delMember),1);
          else alert(`${ChangeMember}는 잘못된 이름입니다.`)
        }
        var newMember = prompt(`${tvxq}\n ✨tvxq에 새로 들일 멤버를 적어주세요.`);
        if(tvxq.includes(ChangeMember)) tvxq.splice(tvxq.indexOf(ChangeMember),1,newMember);
        alert(`team 재결성🎉\n ${tvxq}`);
      
        break;
      case 4: //프로그램 종료
      exitFlag = true;
      break;
      default:
       alert(`메뉴를 다시 입력해주세요`);
       break;
    }
  
    if(exitFlag)break;
  }


  /*
  //다른 풀이
  while (true) {
  var choice = prompt(
    `현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`
  );
  if (choice === '1') {
    var newName = prompt('추가할 새로운 멤버의 이름을 입력하세요.');
    tvxq.push(newName);
    alert(`${newName}이(가) 추가되었습니다.`);
  } else if (choice === '2') {
    var delName = prompt('삭제할 멤버의 이름을 입력하세요.');
    var idx = tvxq.indexOf(delName);
    if (idx !== -1) {
      tvxq.splice(idx, 1);
      alert(`${delName}이(가) 삭제되었습니다.`);
    } else {
      alert(`${delName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }
  } else if (choice === '3') {
    alert('프로그램을 종료합니다.');
    break;
  } else {
    alert('잘못된 입력입니다. 메뉴 번호를 정확하게 입력해주세요.');
  }
}

  */