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
////////////////////////////////
function filter(array, condition) {
  const filteredArray = []; // 필터링된 회원들을 다시 담을 배열
  for (const user of array) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// 맵
function map(callback){
  const mappedArray = [];
 //배열 순회
  for(const user of userList){
    mappedArray.push(callback(user));
}
  return mappedArray;
}




// 실행 영역
console.log('=========================');
//회원정보에서 회원의 이름들만 다 추출해서 
//배열에 담기
const nameList = map(user => user.userName);
console.log(nameList);
//회원정보에서 회원의 주소들만 다 추출해서
//배열에 담기
const addressList = map(user => user.address);
console.log(addressList);

// 회원의 첫번째 취미들만 다 추출해줘
const firstHobbyList = map(user => user.hobbys[0]);
console.log(firstHobbyList);

// 모든 회원의 이름과 게정을 연결해서 배열에 담아줘
// map(user => `${user.userName}(${user.account})`);
// console.log(nameIdList);
//★★ 조건이 두개 이상이면 `` 를 써야함
const myCustomList = map(user => `${user.userName}(${user.account})`);
console.log(myCustomList);

const myCustomList2 = map(user => `${user.userName}(${user.account})(${user.age})`)
console.log(myCustomList2);
console.log('=============================');
// 서울에 사는 급여가 400만원보다 높은 사람의 이름과 주소만 추출해줘
const filtered = filter(userList, user => user.address ==='서울' && user.salary > 4000000);
console.log(filtered);
