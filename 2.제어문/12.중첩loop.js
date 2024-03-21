
var count = 0;
for (var i = 0; i < 3; i++) //3회 회전 0,1,2
{
  for (var j = 0; j < 2; j++) //2회 반복  0,1
  {
    count++;
    console.log(`메롱` + count);
  }
}

// 3x 2 번 반복 


// 구구단 2단~9단
var level = 2; // 단수
for (var level = 2; level <= 9; level++) {
  console.log(`# 구구단 ${level}단`);
  for (var line = 1; line <= 9; line++) {
    console.log(`-> ${level} x ${line} = ${level * line}`);
  }
  console.log('======================');
}

//
