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

//
function min(userList,condition){

  let minValue = userList[0][condition];
  // console.log(minValue);
  for(const a of userList){
    if(minValue>a[condition]) minValue=a[condition];
}
return minValue;
}

function find(condition){
  // const findArray = [];
  // console.log(condition(user));
for(const a of userList){
  if(condition(a)) return a;
}
}
function some(condition){
  const filteredArray = [];
  for(const a of userList){
    if(condition(a)) filteredArray.push(a);
  }
  return filteredArray;
}

//
console.log('최소 salary를 가진 사용자:', min(userList, 'salary'));
console.log('최소 age를 가진 사용자:', min(userList, 'age'));



// // '서울'에 사는 첫 번째 사용자를 찾는 예시
const firstUserInSeoul = find((user) => user.address === '서울');
console.log('서울에 사는 첫 번째 사용자:', firstUserInSeoul);

// // 급여 5,000,000 이상인 사용자가 하나라도 있는지 확인하는 예시
const hasHighEarningUser = some((user) => user.salary >= 5000000);
console.log('연봉이 5,000,000 이상인 사용자가 있는가?:', hasHighEarningUser);

// // // 모든 사용자가 '서울'에 사는지 확인하는 예시 every인데 필요없음.
const allUsersInSeoul = some((user) => user.address === '서울');
console.log('모든 사용자가 서울에 사는가?:', allUsersInSeoul);