
// 1~100 사이 랜덤 정수
var rn ;

count=0;
while(true)
{
  count+=1;
  rn= Math.floor(Math.random()*100) +1;
  console.log('hello '+count);
  console.log(rn);
  if(rn ===77)break;
}