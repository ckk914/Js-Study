//  자주 씀! 사용 빈도 높음 ★

const employee = {
  Name: `뽀로로`,
  age : 10,
  hireDate : `2020-01-30`,
  birthDate: `2015-12-31`
};

//일일히 넣기 귀찮..... 한번에 할 수 있음.!
// const name = employee.Name;
// const hire = employee.hireDate;

// 뽑았다
const{Name, hireDate} = employee;
console.log(`${Name}, ${hireDate}`);

function foo(employee){
   const {Name,age}= employee;
  console.log(`내이름은 ${Name}입니다.`);
  console.log(`내 나이는 ${age}입니다.`);

}

function printInfo(Name, age){
  console.log(`내 이름은 ${Name}입니다.`);
  console.log(`내 나이는 ${age}입니다.`);
}

foo(employee); // 함수 호출 시 매개변수로 employee 객체를 전달
printInfo(employee.Name, employee.age); // 함수 호출 시 객체의 속성을 매개변수로 전달
const age  = 10;

//이미 age가 있으므로 이름을 empage로 바꾼다!        => age: empage
const {age : empage, birthDate} = employee;
console.log(empage);
// const divStyle = {
//   `font-size`: `18px`,
//   `background-color`: `red`
// };

// const {`font-size`:fontSize, `background-color`:bgColor}  = divStyle;
// console.log(fontSize);
// console.log(bgColor);

console.log(`========================`);

const dog = {
  kind: `말티즈`,
  name: `해피`,
  age: 3,
  injection : false,
};
const {kind, age:petage, ...rest} = dog;
console.log(kind);
console.log(petage);
console.log(rest);

//객체 안전 복사
const copyDog = {...dog};
copyDog.age = 10;

const copyDog2 = {
  ...dog,
  age:20,
   favorite: [`산책`]
};

console.log(dog);
console.log(copyDog);
console.log(copyDog2);