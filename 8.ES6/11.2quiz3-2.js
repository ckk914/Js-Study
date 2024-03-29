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

//6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요.
// 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

//풀었던 방법
// const mappedName = [...new Set(traders.map(trs => trs.trader.name))];
// console.log(`mappedName = ${mappedName}`);

// const AverageArray = [];

// for (const name of mappedName) {
//   let total = 0;
//   let cnt = 0;
//   traders.forEach(trs => {
//     if (trs.trader.name === name) {
//       total += trs.value;
//       cnt++;
//     }
//   });

//   const average = total / cnt; // 평균을 계산합니다.
//   AverageArray.push({ name, average }); // 평균 배열에 추가합니다.
// }
// //정답
// console.log(AverageArray);

//다른 풀이 1
//작성 초안
//평균을 구하려면 각자의 거래액 총합과 거래 횟수를 구해야한다.
/*
{
  `김철수`:{
    `총액`: 30000000,
    `거래횟수`:5,
  },
  `박영희`: {
    `총액`:1200000,
    `거래횟수`:2
  }
}
*/
// .reduce((transactions, trs)=>{
//   const yearString = trs.year.toString();
//   if(!transactions[yearString])transactions[yearString] = [trs];  //없으면 배열 생성
//   else transactions[yearString].push(trs);
//     return transactions;
//   },{})              //마지막 빈객체는 넣어줄 객체 같은 의미? 초기값 : 객체

// traders.reduce((averageList,trs)=>{
//   const name = trs.trader.name;
//   if(!averageList[name]) { // 처음등장!
//     //이
//     averageList[name] = {total: trs.value, count:1 };
//   }
//   else{   //반복 나옴.
//     averageList[name].total += trs.value;
//     averageList[name].count++;
//   }
//   return averageList;
// },{});

const trsDataByName = traders.reduce((averageList, trs) => {
  const name = trs.trader.name;
  if (!averageList[name]) { // 이 사람이름이 처음 등장했으면
    averageList[name] = { total: trs.value, count: 1 };
  } else {
    averageList[name].total += trs.value;
    averageList[name].count++;
  }
  return averageList;
}, {});

console.log(trsDataByName);

// 평균 구하기
for (const key in trsDataByName) {
  trsDataByName[key].average
    = trsDataByName[key].total / trsDataByName[key].count;
}

console.log(trsDataByName);


// console.log(averageList);
//7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

console.log('7===================================================7');
//직접 풀었던 코드
//거래 뽑음.
// const traderList = traders.filter(trs=> trs.year===2022 ||trs.year===2023);
// // console.log(traderList);

// const BestSellArray_2022 = [];
// const BestSellArray_2023 = [];

// for (const name of mappedName) {
//   let total = 0;
//   let cnt = 0;

//   traders.forEach(trs => {
//     if (trs.trader.name === name && trs.year===2022) {
//       total += trs.value;
//       cnt++;
//     }
//   });
//     BestSellArray_2022.push({ name, cnt }); // 평균 배열에 추가합니다.
// }
// // 정답
// console.log(BestSellArray_2022);
// ==============================================
// for (const name of mappedName) {
//   let total = 0;
//   let cnt = 0;

//   traders.forEach(trs => {
//     if (trs.trader.name === name && trs.year===2023) {
//       total += trs.value;
//       cnt++;
//     }
//   });
//     BestSellArray_2023.push({ name, cnt }); // 평균 배열에 추가합니다.
// }
// // 정답
// console.log(BestSellArray_2023);
//============================================================
//다른 풀이1 
//============================================================
const result = traders.reduce((acc, trs) => {
  // 연도별 거래자 거래 횟수 집계
  const key = `${trs.year}_${trs.trader.name}`;

  if (!acc[key]) {
    acc[key] = 1;
  } else {
    acc[key]++;
  }
  // 연도별 최대 거래 횟수 찾기
  const yearMaxKey = `max_${trs.year}`;
  if (!acc[yearMaxKey] || acc[key] > acc[yearMaxKey].count) {
    acc[yearMaxKey] = { name: trs.trader.name, count: acc[key] }
  }
  return acc;
}, {});

console.log(result);
// 결과 출력
console.log(`2022년 가장 많은 거래를 한 거래자: ${result.max_2022.name}, 거래 횟수: ${result.max_2022.count}`);
console.log(`2023년 가장 많은 거래를 한 거래자: ${result.max_2023.name}, 거래 횟수: ${result.max_2023.count}`);

//8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**
let max = traders[0].value;
let min = traders[0].value;
// console.log(max);
traders.map(trs => trs.value < min ? min = trs.value : min = min);
traders.map(trs => trs.value > max ? max = trs.value : max = max);
console.log(min);
console.log(max);
const centerData = (min + max) / 2;
console.log(centerData);
const centerUser = traders.filter(trs => trs.value === centerData).map(trs => ({
  name: trs.trader.name,
  city: trs.trader.city,
  year: trs.year,
  value: trs.value,
}))
  .forEach(result => console.log(`우리의~중간 유저님 거래 정보(${result.name},${result.city},${result.year},${result.value})`));

//9. **각 도시에서 진행된 거래의 수를 계산해주세요.
//결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**
// const mappedName = [...new Set(traders.map(trs => trs.trader.name))];

//////

// console.log(cities);
// const citiesTrsArray = [];
// for (const name of cities) {
//   let cnt = 0;

//   const trd = traders.forEach(trs => {
//     if (trs.trader.name === name) {
//       cnt++;
//     }
//   }).map(trs=>({
//     name:trs.trader.name,
//     count:cnt,
//   }));

//   citiesTrsArray.push(trd); // 평균 배열에 추가합니다.
// }
///////////////////
const cities = [...new Set(traders.map(trs => trs.trader.city))]; const cityTransactionCount = {};
for (let city of cities) {
  let cnt = 0;
  traders.forEach(trs => {
    if (trs.trader.city === city) {
      cnt++;
    }
  });
  cityTransactionCount[city] = cnt;
}
console.log(cityTransactionCount);


//10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요.
// 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**


const priceFromLow = traders.sort((a, b) => a.value - b.value);
console.log(priceFromLow);