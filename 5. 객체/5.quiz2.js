/*
Q2. 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.
var salaries = {
  kim: 1000000,
  park: 1600000,
  lee: 1300000
}
- 모든 팀원의 월급을 합한 값을 구하고, 
  그 값을 변수 total에 저장해주는 코드를 작성해보세요. 
  total엔 3900000이 저장되어야겠죠?
*/
var salaries = 
{
  kim: 1000000,
  park: 1600000,
  lee: 1300000
};

var total = 0;
console.log(salaries);


for(var pp  in salaries){
total+=+salaries[pp];
}
console.log(total);