
//객체 생성
//개 정보1
var name = '뽀삐';
var kind  = '시츄';
var age  = 3;
var injection = true;
var favorite = [`산책`,`간식`];
var bark = ()=> console.log(`왈왈!`);

//배열로 하면, 뭐가뭔지 잘 모름
var dog= [
  `뽀삐`,
  `진돗개`,
  3,
  true,
  [`산책`,`간식`],
  ()=>console.log(`왈왈!`),
];

//객체
var dog = {
  name: `뽀삐`,
  kind: `진돗개`,
  age: 3,
  injection: true,
  favorite: [`산책`,`간식`],
  bark: ()=>console.log(`왈왈!`)
}


//고양이 정보
var cat = {
  name:`콩순`,
  kind:`코숏`,
  favorite:[`낮잠`,`방 어지르기`],
  age:2,
  injection:true,
  hate: null
};

//게시글 정보
var writenPage = {
  pageNo: 11,
  writer: `콩순`,
  id: `콩콩순`,
  nickname:`깜찍이`,
  joinDay: `2023-11-20`
};

console.log(dog.favorite);
console.log(dog.name);
console.log(cat.name);

console.log('================');

//객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]); //배열 조회

//데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
//각 객체의 타입에 맞게 컨트롤 해야함.
console.log(dog.age++);
console.log(!dog.injection);
dog.favorite.push(`꼬리흔들기`);
console.log(dog.favorite);
cat.favorite.splice(0,1);     //0번방 삭제
console.log(cat.favorite);
console.log('============');
dog.favorite.splice(1,1);
console.log(dog.favorite);
dog.favorite.reverse();
console.log(dog.favorite);


//객체를 참조하는 두번째 방법
console.log('================');
console.log(dog.name);
console.log(dog[`name`]);
var key = `name`;
console.log(dog[key]);

//프로퍼티 수정
//기존에 있는 key 접근
console.log('=============');

dog.age =4;
cat.favorite[1] = `실뭉치`;

console.log(dog);
console.log(cat);

//프로퍼티 동적 추가
//기존에 없는 key로 접근
console.log('==============');

cat.friend = `철수`;
console.log(cat);

//프로퍼티 삭제
delete cat.hate;
delete cat.friend;

console.log(cat);