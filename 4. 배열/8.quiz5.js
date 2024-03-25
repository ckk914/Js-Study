var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
var exitFlag = false;
  while(true){
  var selectMenu = +prompt(`[${tvxq}]\n✨메뉴를 선택하세요
                                1.새로운 이름 추가
                                2.기존 이름 삭제
                                3. 프로그램 종료`);
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
      case 3: //프로그램 종료
      exitFlag = true;
      break;
      default:
       alert(`메뉴를 다시 입력해주세요`);
       break;
    }
  
    if(exitFlag)break;
  }