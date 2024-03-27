const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
  },
];

//회원 정보 중 취미가 2개인 사람들만
//추출해서 필터링 해주세요
function filterByHas2Hobby(){
  const filteredArray = [];
  for(const user of userList)
  {
    if(user.hobbys.length ==2) filteredArray.push(user);
  }
  return filteredArray;
}

// const newArray = filterByHas2Hobby();
// console.log(newArray);

//서울 사는 사람 필터링
function filterUserLiveInSeoul(){
  const filteredArray = [];
  for(const user of userList){
  // if(user.address===`서울`) filteredArray.push(user);
  if(user.address.includes(`서울`)) filteredArray.push(user);
  }

  return filteredArray;
}
// const newArray = filterUserLiveInSeoul();
// console.log(newArray);

//콜백을 이용한 배열 필터링 함수
function filter(condition){
  const filteredArray = [];
  for(const user of userList){
  if(condition(user)/*조건*/) {
    filteredArray.push(user);
  }
}

  return filteredArray;
}

//서울 살면서 직업 게이머 인 사람 필터링
const filteredUser = filter(function(user){
  // return user.address ===`서울` && user.job === `게이머`;
  return user.hobbys[0].length ===5;
});
console.log(filteredUser);