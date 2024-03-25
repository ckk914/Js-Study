
var food1= '짬뽕';
var food2= '탕슉';
var food3= '짜장';
var all = `${food1},${food2},${food3}`;
//한개씩 다 입력하기 힘들어서 배열이 필요함

var arr = [10,20,30,40,50,60]; 
console.log(typeof arr); //object 객체:여러 데이터

console.log(arr[1]);

console.log(arr[2]**2); //900
console.log(arr[2]);    //20

arr[3]++;               //바로 더해짐
console.log(arr);          

//배열 데이터 수 확인
console.log(arr.length);                // 4
console.log(`첫번쨰 데이터 ${arr[0]}`);
console.log(`마지막 데이터 ${arr[arr.length- 1]}`); 

//배열 데이터 순회(전체 참조: travis)
console.log('================');

for(var i = 0;i<=arr.length-1;i++){
  console.log(arr[i]);
}

// for ~ of 반복문 (배열 전용 반복문)
var weekDays = [`월`,`화`,`수`,`목`,`금`,`토`,`일`];
console.log('==================');

// for (var i=0;i<weekDays.length;i++)
// {
//   console.log(`${weekDays[i]}요일!!`);
// }

// ★★
// forEach 같은 for - of문 
// 뒤에 배열이 나와야한다.!
// 홀수번쨰만 하기엔 안좋음 위에 for문이 나음
// 전체적일때는 좋음
for(var day of weekDays){
  console.log(`${day}요일!!`);
}

//배열 생성 관례 : 이름 복수형, -List 어미
var fruits = ['자몽','딸기','오렌지',];
var fruitList = ['자몽','딸기','오렌지'];
var fruitArray = ['자몽','딸기','오렌지'];

console.log(fruits.length); //3 마지막에 , 있어도 3으로 나옴

// 끝에 , 를 안넣으면 복사하기 힘들다.
// ★ 끝에 , 를 넣어주는게 관례
var tags=[`<li>오렌지</li>`,
           `<a hef="#">링크</a>`,
            `<h1>로고</h1>`,
            '<h2>a문구</h2>',
          ];