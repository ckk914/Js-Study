const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 500000,
  },
];

//----------------------------------
//                   b  = index이다     (0,1,2,3,4,5)
// const x = traders.filter(a,b) => {
//----------------------------------
// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

const traderList = traders
  .filter((trd) => trd.year === 2022)
  .map((trd) => ({
    //trader만 찍어도 둘다 나옴
    name: trd.trader.name,
    city: trd.trader.city,
  }))
  .forEach((result) => console.log(`거래처정보(${result.name} ,${result.city})`));

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요. (중복제거도 하면 좋음!)
const Allcity_Array = [];
traders.forEach((trd) => Allcity_Array.push(trd.trader.city));

// 중복 제거 코드
const uniqueCities = [...new Set(Allcity_Array)];
console.log(uniqueCities);

//==========================================
// # 심플 코드로 바꿈,
//간단 코드로 바꿈.
const mappedCities = traders.map(trs => trs.trader.city);
const cities = [...new Set(mappedCities)]; // 중복 삭제 코드
console.log(cities);
//<-----------------------------------------

// 연습 3: 대전에 근무하는 모든 거래자를 찾아
//  거래자정보(이름, 도시)를 배열에 매핑해주세요.
const DaejeonWorkerArray = [];
const DaejeonWorkerList = traders
  .filter((trd) => trd.trader.city === `대전`)
  .map((trd) => ({
    name: trd.trader.name,
    city: trd.trader.city,
  }))
  .forEach((result) => DaejeonWorkerArray.push(`거래처정보(${result.name} ,${result.city})`));
// console.log(DaejeonWorkerArray);
const uniqueDaejeonWorkerList = [...new Set(DaejeonWorkerArray)];
console.log(uniqueDaejeonWorkerList);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const AllWorkerNameArray = [];
const AllWorkerNameListMake = traders.forEach((trd) => AllWorkerNameArray.push(trd.trader.name));
// console.log(AllWorkerNameArray);
const uniqueAllWorkerList = [...new Set(AllWorkerNameArray)];
console.log(uniqueAllWorkerList);
//=======================================================
// 한줄로 쉽게 정리
const mappedName = [...new Set(traders.map(trs => trs.trader.name))];
console.log(`mappedName = ${mappedName}`);
//=====================================================
// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
const AllSeoulMoneyArray = [];
let AllSeoulMoney = 0;
const AllSeoulMoneySearchStart = traders
  .filter((trd) => trd.trader.city === `서울`)
  .forEach((trd) => AllSeoulMoneyArray.push(trd.value));
console.log(AllSeoulMoneyArray);

//forEach는 변수에 담을 수 없다.  ★
//return 이 없음.! 돌면서 알아서 처리해야함!
for (var EachMoney of AllSeoulMoneyArray) {
  AllSeoulMoney += EachMoney;
}
console.log(AllSeoulMoney);
//=========================================
//또다른 해답 2
// let total = 0;
// traders
//   .filter(trs => trs.trader.city === '서울')
//   .map(filteredTrs => filteredTrs.value)
//   .forEach(val => total += val);

// console.log(`총액: ${total}`);
//=========================================
//또다른 해답3
// const totalM = traders
//   .filter(trs => trs.trader.city === `서울`)
//   .reduce((total, trs) => total + trs.value, 0);

// reduce 클린해 보이나, 완벽 이해 안되면 패스..
//==========================================

//1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
console.log('1==================');
const DaejeonAllMoneyArray = [];
let DaejeonAllMoney = 0;
const DaejeonAllMoneyCalc = traders.filter(trd => trd.trader.city === `대전`)
  .forEach(trd => DaejeonAllMoneyArray.push(trd.value));
// console.log(DaejeonAllMoneyArray);
for (var EachMoney of DaejeonAllMoneyArray) {
  DaejeonAllMoney += EachMoney;
}
//출력
// console.log(DaejeonAllMoney);
//===========================풀이
// let totalInDaejeon2023 = 0;
// for (const trs of traders) {
//   if (trs.year === 2023 && trs.trader.city === '대전') {
//     totalInDaejeon2023 += trs.value;
//   }
// }
// console.log(`2023년 대전 총 거래액: ${totalInDaejeon2023}`);

//============reduce 풀이
const totalInDaejeon2023 =
  traders
    .filter(trs => trs.year === 2023 && trs.trader.city === '대전')
    .reduce((total, trs) => total + trs.value, 0);
//출력
// console.log(`2023년 대전 총 거래액: ${totalInDaejeon2023}`);


//2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
console.log('2==================');
const BusanAllUserNameArray = [];
const BusanAllUserNameSearch = traders.filter(trd => trd.trader.city === `부산`)
  .forEach(trd => BusanAllUserNameArray.push(trd.trader.name));
//출력
// console.log(BusanAllUserNameArray);
/////////////고차함수
// const nameListInBusan = traders
//   .filter(trs => trs.trader.city === '부산')
//   .map(trs => trs.trader.name);

// console.log('부산 거래자 이름리스트: ', nameListInBusan);
//==================================================
//3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
console.log('3==================');
let RichMoney = 0;
// 액수 구하기
const RichMoneyCheck = traders.filter(tt => {
  if (RichMoney < tt.value) RichMoney = tt.value;
  // if (RichMoney < tt.value) RichMoney = tt;
});
//  console.log(RichMoney);
const RichMen = traders.filter(trs => trs.value === RichMoney).map(trs => ({
  name: trs.trader.name,
  city: trs.trader.city,
})).forEach(result => console.log(`거래자정보(${result.name},${result.city})`));

//풀이
// console.log('============================');

// let highestTransaction = traders[0];
// for (const trs of traders) {
//   if (highestTransaction.value < trs.value) {
//     highestTransaction = trs;
//   }
// }
// console.log(`가장 높은 거래액 정보 - 이름: ${highestTransaction.trader.name}, 도시: ${highestTransaction.trader.city}, 거래액: ${highestTransaction.value}`);
// console.log('============================');

//reduce 풀이
// const highestTransaction 
//    = traders.reduce((max, trs) => max.value < trs.value ? trs : max);

// console.log(`가장 높은 거래액 정보 - 이름: ${highestTransaction.trader.name}, 도시: ${highestTransaction.trader.city}, 거래액: ${highestTransaction.value}`);

//4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 
//  예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
console.log('4==================');
console.log('****************');
let SeoulTrsAllMoney = 0;
let BusanTrsAllMoney = 0;
// traders.filter(trs => trs.trader.city === `서울`)
//   .map(filteredTrs => filteredTrs.value)
//   .forEach(val => SeoulTrsAllMoney += val);

// traders.filter(trs => trs.trader.city === `부산`)
//   .map(filteredTrs => filteredTrs.value)
//   .forEach(val => BusanTrsAllMoney += val);

// console.log(`서울: ${SeoulTrsAllMoney}, 부산: ${BusanTrsAllMoney}`);
//=================4풀이
// const totalByCity = {};

// for (const trs of traders) {
//   if (trs.trader.city in totalByCity) //이 도시는 한번 누적된 적이 있음.
//   {
// totalByCity[trs.traders.city] +=trs.value;
//   }
//   else {
//     //이도시는 한번도 나온적 없음.
//    totalByCity[trs.trader.city] = trs.value;
//   }
// }
//===================풀이 2
// const totalByCity = {};  // { 서울: 500000, 대전: 30032030, ... }

// for (const trs of traders) {
//   const city = trs.trader.city;
//   if (totalByCity[city]) { // 이 도시는 한번 누적된 적이 있음
//     totalByCity[city] += trs.value;
//   } else {  // 이 도시는 한번도 나온적이 없던 도시임
//     totalByCity[city] = trs.value;
//   }
// }
// console.log(totalByCity);
//===================풀이3 reduce
// traders.reduce((totalByCity,trs) => {
// const city = trs.trader.city;
// totalByCity[city] = (totalByCity[city] || 0)+ trs.value;
// return totalByCity;
// },{});
console.log('=============================');

// const totalByCity = {};  // { 서울: 500000, 대전: 30032030, ... }

// for (const trs of traders) {
//   const city = trs.trader.city;
//   if (totalByCity[city]) { // 이 도시는 한번 누적된 적이 있음
//     totalByCity[city] += trs.value;
//   } else {  // 이 도시는 한번도 나온적이 없던 도시임
//     totalByCity[city] = trs.value;
//   }
// }
// console.log(totalByCity);

// const totalByCity = traders.reduce((totalByCity, trs) => {
//   const city = trs.trader.city;
//   if (totalByCity[city]) {
//     // 이 도시는 한번 누적된 적이 있음
//     totalByCity[city] += trs.value;
//   } else {
//     // 이 도시는 한번도 나온적이 없던 도시임
//     totalByCity[city] = trs.value;
//   }
//   return totalByCity;
// }, {});

// const totalByCity = traders.reduce((totalByCity, trs) => {
//   const city = trs.trader.city;
//   totalByCity[city] = (totalByCity[city] || 0) + trs.value;
//   return totalByCity;
// }, {});

// console.log(totalByCity);

//5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 
// 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
console.log('5==================');
// const trsOver700KByYear = {};
/* trsOver700KByYear[`2022`] = [
  {
    trader = {},
    year: 2022,
}
] 
*/
const traderHistory = traders
//풀이 1  for
// for (const trs of traders) {     //거래액 필터 조건
//   const yearString = trs.year.toString();
//   if (trs.value >= 700000) {
//     if (!trsOver700KByYear[yearString]) { //거래 년도가 저장 안됐을때 //없으면 false이고 반전해서 실행! 
//       trsOver700KByYear[yearString] = [trs];
//     }
//     else {  // 지금 거래 년도가 저장되어 있으면,
//       trsOver700KByYear[yearString].push(trs);
//     }
//   }
// }

//풀이 2 for each
// traders.forEach(trs => {
//   const yearString = trs.year.toString();
//   if (trs.value >= 700000) {
//     if (!trsOver700KByYear[yearString]) { //거래 년도가 저장 안됐을때 //없으면 false이고 반전해서 실행! 
//       trsOver700KByYear[yearString] = [trs];
//     }
//     else {  // 지금 거래 년도가 저장되어 있으면,
//       trsOver700KByYear[yearString].push(trs);
//     }
//   }
// });
//풀이 3 reduce
const trsOver700KByYear = traders.
filter(trs => trs.value >=700000)
.reduce((transactions, trs)=>{
const yearString = trs.year.toString();
if(!transactions[yearString])transactions[yearString] = [trs];  //없으면 배열 생성
else transactions[yearString].push(trs);
  return transactions;
},{})              //마지막 빈객체는 넣어줄 객체 같은 의미? 초기값 : 객체
console.log('========5.출력===========');
console.log('2022년,2023년 정리!');
console.log(trsOver700KByYear);
console.log('========================');
//json 형식 변환 방법
// console.log(JSON.stringify(trsOver700KByYear,null,2));
//<=======================
// const traderHistory = traders
//   .filter(trs => trs.value >= 700000)
//   .map(trs => ({
//     year: trs.year,
//     money: trs.value,
//   }));
// console.log(traderHistory);
