
const userNames  = [`김철수`,`강감찬`,`박영희`];

//userNames 에서 각각의 요소들을 다시 변수에 집어 넣고 싶다.
// const kim = userNames[0];
// const kang = userNames[1];
// const park = userNames[2];
//        ll  하단과 같음
const [kim,kang,park] = userNames;    // kim, kang, park 각각 복사!
console.log(`a:${kim}, b:${kang},c:${park}`);

const example = [``,[],()=>{}];
//배열의 함수를 뺄때 씀

// const myFunc  = example[2];
const [,,myFunc]= example;

//중간을 건너 띄우고 넣을 수 있음.
const [kk, , pp]= userNames;
console.log(`a:${kk}, ,c:${pp}`);

let first =10, second = 20;

//간단한 스왑  
[first, second] = [second,first];

//배열 안에서 맨 앞에 2개만 각각의 변수에 저장하고
//나머지는 다시 배열로 묶고 싶을떄
// const numbers = [1,3,5,7,9,11,13];
// const numbersCopy = numbers.slice();

// // const one =numbersCopy.shift();
// // const three =numbersCopy.shift();
// const [one,three, ...numbersCopy]= numbers;
// console.log(`one = ${one} three= ${three}`);
// console.log(`number: ${numbersCopy}`);
const numbers = [1,3,5,7,9,11,13];

// 구조 분해 할당을 사용하여 첫 번째, 두 번째 요소를 추출하고 나머지는 새로운 배열에 저장
const [one, three, ...restNumbers] = numbers;

console.log(`one = ${one} three = ${three}`);
console.log(`number: ${restNumbers}`);

//스프레드를 통한 배열 간편 복사
// 스프레드를 통한 배열 간편 복사
const foods = ['감튀', '햄버거', '콜라'];
// const copyFoods = foods;  //위험!!
// const copyFoods = foods.slice(); //좋음
// const copyFoods = foods.map(f=>f);
// ... 배열 평탄화 
// 배열 복사 ! slice와 같은 효과!
const copyFoods = [...foods];  

foods[0] = `치킨`;

console.log('foods:', foods);
console.log('copyFoods:', copyFoods);

const newFoods = [`육포`, ...foods, '닭다리', ...userNames];
console.log(newFoods);

//배열 합치기
  // a,concat(b) => [...a , ...b];
//          ㄴ          두개 같은 의미.