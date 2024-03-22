
// for(var i =1; i<50;i++)
// {
//   if(i>10)break;
//   console.log(i);
// }

console.log('===================');
for(var i =0;i<3;i++){
  for(var j = 0;j<2;j++){
    if(i===j)break;
    console.log(`${i},${j}`);
  }
}