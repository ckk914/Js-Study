//함수 선언문
// function add(n1,n2)
// {
//   return n1+n2;
// }

//화살표 함수
//한줄일때는 중괄호 생략 가능
const add = (n1,n2) => n1+n2;

const r1 = add(10,20);
console.log(r1);

//한줄 넘어가면 중괄호
const sayHello = () => { 
  console.log(`안녕하세요`);
 console.log(`수고하세요`);
 return `에에에`;
}

sayHello();
const kim = {
  name: `김철수`,
  greeting: sayHello,
  dance: () => console.log(`춤을 신나게 추기`)
};

kim.dance();
kim.greeting();

//정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는 
//화살표 함수 pow 를 작성하세요.

const pow =(n) => n**2;

console.log(pow(3));
console.log(pow(5));