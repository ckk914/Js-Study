
var userHeight = +prompt(`키 몇?`);


if(userHeight>140){
  // alert("놀이기구 탑승 가능성 +1😊");
  var userAge    = +prompt(`나이는?`);
  if(userAge>=8)
  {
    alert("놀이기구 탑승 가능합니다 😊");
  }
  else
  {alert("어려서, 놀이기구 탑승 불가👻");}
}
else{
  alert("키작아서, 놀이기구 탑승 불가👻");
}

alert("오늘 하루 즐거운 시간되세요!✨");