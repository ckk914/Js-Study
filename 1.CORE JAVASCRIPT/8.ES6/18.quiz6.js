// function createCalculator() {
//   let total = 0;
//   return {
//     add: function(num) {
//       return total += num;
//     },
//     subtract: function(num) {
//       return total -= num;
      
//     },
//     getTotal: function() {
//       return total;
//     }
//   };
//}
const createCalculator =() =>{
  let total = 0;
  return{
    add:(num) => total+=num,
    subtract:(num) =>total-=num,
    getTotal: (num) => total,
  }
}
// 구조 따기.
// const createCalculator =() =>{
//   return{
//     add:() => {},
//     subtract:() =>{},
//     getTotal: () => {}
//   }
// }
// createCalculator를 호출하면 반환되는 헬퍼함수는 
// 3가지의 기능을 갖고 있는데

const calculator = createCalculator();
console.log(calculator.add(5)); // 5
console.log(calculator.subtract(2)); // 3
console.log(calculator.add(14)); // 17
console.log(calculator.add(21)); // 38
console.log(calculator.subtract(29)); // 9
console.log(calculator.getTotal()); // 9




// const { increase, decrease } = (() => {
//   let count = 0;
//   return {
//     increase: () => ++count,
//     decrease: () => --count,
//   }
// })();
//참고용 코드 
// const { increase, decrease } = (() => {
//   let count = 0;
//   return {
//     increase: () => ++count,
//     decrease: () => --count,
//   }
// })();


// function createCounter(count) {
//   let ccount = count;
//   return function () {
//     return ++ccount; // 카운터 증가
//   };
// }
// return {
//     increase: () => ++count,
//     decrease: () => --count,
//   }
//add / subtract /  getTotal

