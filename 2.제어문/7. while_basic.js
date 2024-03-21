
// var n = 10;
// var begin=8,end=3,step=1;
// var n = begin;
// while(n>=end){
//   console.log(`${n}!!`);
//   n-=step;
// }

console.log('===============');

var level = 7; 
//  증가는 < 이 방향
//  감소는 > 이방향
// step>  조건 설정 -> 증감 설정 -> 반복 해야할 것 설정
var n=1;
while(n<=9)
{
  console.log(`${level} x${n} = ${level * n}`);
  n++;
}