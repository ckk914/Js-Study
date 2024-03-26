
var phone = {
  company: `삼성`,
  color: `펄 화이트`,
  model: `갤럭시 S24 Ultra`,
  price: 1200000
};

for(var data in phone)
{
  //for in 에서는 key 값을 반복해서 꺼낸다.
  //key의 type은 string
  // `company`  이런 형태인거다.
  // 객체명[data] 로 그래서 접근해야함.
console.log(data+` `+phone[data]);
// console.log(typeof data);
}
console.log('===============');
//객체 프로퍼티 유무 확인
//phone에 새로운 프로퍼티 추가하고 싶음.
var newKey = `memory`;
if(!(newKey in phone)){
  phone[newKey] = `32GB`;  
}
console.log(phone);



