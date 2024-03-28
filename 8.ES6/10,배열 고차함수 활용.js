const appleBasket = [{
  color: 'green',
  sweet: 13
},
{
  color: 'red',
  sweet: 14
},
{
  color: 'red',
  sweet: 11
},
{
  color: 'green',
  sweet: 6
},
{
  color: 'green',
  sweet: 7
},
{
  color: 'green',
  sweet: 9
},
];

/*
 사과중에 녹색이면서, 당도가 9 인 사과만 선별하여  => //필터팅
 " 이 사과는 xx색이며 당도는 xxx입니다"                => //매핑
 라는 문자열이 들어있는 배열을 만들어주세요.           => 필터링 먼저 때리고, 매핑하자.
콘솔에 반복 출력 해주세요.                                       => forEach
 */      

// 필터링,매핑, foreach 혼합
const filteredApples = 
appleBasket.filter(apple=> apple.color===`green` && apple.sweet>=9).map(apple => {
  const convertedAppleColor = apple.color ===`green`? `초록` : `빨강`;
  return `이 사과는 ${convertedAppleColor}색이며, 당도는 ${apple.sweet}입니다.`;
}).forEach(apple => console.log(apple));


//맵 따로 
// const mappedApples = filteredApples.map(apple => {
//   const convertedAppleColor = apple.color ===`green`? `초록` : `빨강`;
//   return `이 사과는 ${convertedAppleColor}색이며, 당도는 ${apple.sweet}입니다.`;
// });
// console.log(mappedApples);
// mappedApples.forEach(apple => console.log(apple));

