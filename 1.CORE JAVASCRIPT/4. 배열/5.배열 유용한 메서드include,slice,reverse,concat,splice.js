
var foodList = [`떡꼬치`, `닭꼬치`, `짜장면`, `치킨`,`짜장면`];

//indexOf() : 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌
var target = `짜장면`;

//짜장면이 있는 위치를 알려줌
var index = foodList.indexOf(target);
console.log(`index 위치 : ${index}`);
//          ll
for (var i = 0; i < foodList.length; i++) {
  if (target === foodList[i]) {
    index = i;
    break;
  }
}

//include(): 특정 데이터가 있는지 없는지를 논리로 확인
// 찾았으면 true, 못찾았으면 false

var flag = foodList.includes(`떡라면`);
console.log(flag);

//slice(): 배열을 원하는 범위만큼 추출
var sliced = foodList.slice(1,3);  //1~2 범위의 데이터 추출
//1번 앞에 선 긋고 3번 앞에 선긋고 그 사이 애들 추출
// 1이상 3미만
console.log(sliced);

//3번부터 끝까지
var sliced2 = foodList.slice(3);
console.log(sliced2);

//배열 복사
var sliced3 = foodList.slice();
console.log(sliced3);

//★★ slice 열심히 써도 원본은 지장없다
//복사본 만들어서 떠온다고 생각하면 쉬움


//reverse(): 배열을 역정렬
console.log('=================');


var nums = [10,20,30,40,50];
nums.reverse();  //뒤바꾸기 : 원본이 변경됨
                 //원본이 바뀌니 위험하다!
                //한번 카피 후 뒤집는 게 좋다
console.log(nums);

var numsCopy = nums.slice(); //카피본 생성
numsCopy.reverse();

// console.log(nums);
console.log(nums);
console.log(numsCopy);


console.log('===============');
// concat() : 배열을 결합
// 사용한 원본은 변하지 않는다. 사본을 갖다줌
var arr1 = [10,20,30];
var arr2 = [99,999];
var concated = arr1.concat(arr2);
console.log(concated);


//중간 데이터 지워버리기!
//splice() : 배열의 삭제, 삽입
// (원본에서 삭제, 삽입을 진행하므로) 원본이 손상됨!!

//원하는 자리 삭제
console.log('========');
console.log(foodList);
foodList.splice(1,2); //(시작,삭제갯수) => 1번 인덱스부터 2개 지우세요

console.log(foodList);

//삭제 후 넣기
foodList.splice(0,1,`파스타`,`갈비`); //(시작,삭제갯수,대체문자)
console.log(foodList);

//중간에 끼워넣기
foodList.splice(2,0,'피자'); //2버 인덱스 앞에 삽입!
console.log(foodList);

// 2번부터 끝까지 싹 지우기
foodList.splice(2);
console.log(foodList);