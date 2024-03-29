//장바구니 수량 올릴때 카운터를 쓴다.!

// const increase = (() => {})    ();        //함수를 바로 실행하는 꼴
// 이렇게 처리하면 카운트 따로 놀음 in ,de 따로 
/*
const increase = (() => {
  let count = 0;
  return ()=> ++count;
})(); 

const decrease = (() => {
  let count = 0;
  return ()=> --count;
})(); 
console.log(increase());  //1
console.log(increase());  //2
console.log(increase());  //3 
console.log(decrease());  //-1
console.log(decrease());  //-2

 */
//=====================================
// const countClosure = () => {

//   let count = 0;
//   return{
//     incre
//   }
//   const increase = () => ++count;
//   const decrease = () => --count;

  // return {increase, decrease};    //같은 의미.
  //             ll
  // return{
  //   increase:increase,
  //   decrease,decrease,
  // }
// };

// const counter = countClosure();
// console.log(typeof counter);
// console.log(typeof counter);
// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(decrease());
// console.log(decrease());



/*
const increase = (() => {
  let count = 0;
  return () => ++count;
})();

const decrease = (() => {
  let count = 0;
  return () => --count;
})();

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
*/

// const countClosure = () => {
//   let count = 0;
//   const increase = () => ++count;
//   const decrease = () => --count;

//   return {
//     increase,
//     decrease,
//   };
// };

const { increase, decrease } = (() => {
  let count = 0;
  return {
    increase: () => ++count,
    decrease: () => --count,
  }
})();
// console.log(typeof counter);

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());