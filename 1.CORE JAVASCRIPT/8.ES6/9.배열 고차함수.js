const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 2700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 18,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 7900000,
    age: 42,
  },
];


//배열 고차함수
//forEach() : 배열 요소를 순회
// for (user of userList){
//   console.log(`내이름은 ${user.userName}이고, ${user.address}에 살아요`);
// }
// 배열명.forEach(변수 => {반복할 함수}); ㄱ
userList.forEach(user =>{ console.log(`내이름은 ${user.userName}이고, ${user.address}에 살아요`);});

let total = 0;
[10,20,30].forEach(n => {
  total += n;
});
console.log(`total: ${total}`);

//for Each문 별도로 생성하보기.~>
function myForEach(callback){
  for(const x of array){
    callback(x);
  }
}
//<----------------------
console.log('==================');

//filter: 조건에 맞는 배열안의 요소를 필터링
const numbers = [1,2,3,4,5,6,7,8,9,10];
//자바스크립트가 제공하는 filter 함수
const filteredArray = numbers.filter(n=> n%2 ===0);
console.log(filteredArray);

// 회원 목록에서 이름이 8글자인 회원들을 필터링해줘
const filteredUserList = userList.filter(user=> user.userName.length ===8);
console.log(filteredUserList);

//map : 배열에서 특정 데이터들을 추출해서 새로운 배열에 매핑
// ㄴ 실제 자바스크립트에 있던 함수임.

console.log('===================');
// const mapNumbers = numbers.map(n=>n+2);
// const mapNumbers = numbers.map(n=>`번호${n}`);
//마크업 만드는 방법
const mapNumbers = numbers.map(n=>`<li class = "list-item">${n}</li>`);
console.log(mapNumbers);
//--------------------------------------------
//filter => 10개의 데이터를 필터링하면 10개 이하로 남음
//           ex> 10명 중 서울 사는 애들 필터링 => 3명 남음
//              배열만큼 순회한다!
//             return이 true와 false 이다. 
//            조건에 맞는 것들만 다시 배열에 담는다.
//            traders.filter((a) =>{});
//                           ll                                 두개는 같은 문법이다!
//            for(let a of traders)
//--------------------------------------------
//map  -> 10개의 데이터를 매핑하면 항상 10개 짜리 배열이 나옴 
//             ex> 10명의 회원 정보 중 이름 정보만 10개 가져와
//             이거도 배열만큼 순회한다!
//
//--------------------------------------------

//회원 목록에서 회원의 나이를 추출해서 xx세로 매핑
const UserAge = userList.map(user=> `${user.age}세`);
console.log(UserAge);

// 회원 목록에서 회원 이름과 나이와  주소를 추출할건데,
// 이름의 키값을 nickName, 나이는 old, 주소는 addr로 하고 싶음.
// const mappedUserList = userList.map((user) => 
//  {
//   return {nickName:user.userName,
//   old: user.old,
//   addr: user.account}
// });
// 회원목록에서 회원 이름과 회원의 나이와 회원의 주소를 추출할건데
// 이름의 키값을 nickName, 나이는 old, 주소는 addr로 하고싶음
const mappedUserList = userList.map(function (user) {
  return { 
    nickName: user.userName, 
    old: user.age, 
    addr: user.address 
  };
});
console.log(mappedUserList);
//자바스크립트 find 함수 (처음 발견된 3의 배수만 찾는다!)
const triple = numbers.find(n=> n%3 ===0);
console.log(`triple: ${triple}`);

const twenty = userList.find(user => user.age>=50 && user.age<60);
console.log(twenty);


/* 
회원목록에서 서울에 사는 회원들의 두번째 취미만을 추출하여
`xxx님의 2번째 취미는 ```입니다.`를 반복해서 출력해라.
 */


// userList
// .filter(user=> user.address ===`서울`)    //3명 뽑아서 map으로 보냄
// .map(user => ({               //3명의 취미 1번방꺼를 뽑아서 배열로 만든다. 
//   hobby:user.hobbys[1],
//   name:user.userName,
// }))             
// .forEach(result => console.log(`${result.name}님의 2번째 취미는 ${result.hobby}입니다.`));

userList
  .filter(user => user.address === '서울')
  .map(user => ({ name: user.userName, second: user.hobbys[1] }))  // ['축구' , '테니스' , '테니스']
  .forEach(result => console.log(`${result.name}님의 2번째 취미는 ${result.second}입니다.`));


/*
    userList [
      {all}, {all}, {all}, {all}  - filter당시 user == {all} 
    ]
    filter [
      {all}, {all}, {all} -- map당시 user == {all}
    ]
    map [
      {이름, 취미2}, {이름, 취미2}, {이름, 취미2} - forEach당시 result == {이름, 취미2}
    ]
    forEach
    {이름, 취미2}
    {이름, 취미2}
    {이름, 취미2}
*/
