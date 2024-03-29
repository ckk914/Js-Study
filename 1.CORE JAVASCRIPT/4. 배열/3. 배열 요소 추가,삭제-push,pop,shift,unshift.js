
var pets = ['멍멍이','야옹이','쩝쩝이'];
console.log(pets);
pets[3]='찡찡이';  //이거도 가능은 함.
console.log(pets);
// Push(); 배열명.push(); 새로운 요소를 끝에 추가한다
pets.push('덩덩이','당당이'); //여러개 한번에 추가 가능!
console.log(pets);

//pop() : 배열 맨 끝 데이터 삭제
console.log(pets.pop());
console.log(pets);
var mypet2= pets.pop();
console.log(mypet2);

// 이 두개는 성능이 안좋아서 잘 안씀
// shift() : 배열의 맨 첫번째 삭제
// unshift() : 배열의 맨 첫번째에 추가

var last = pets.shift();     //맨앞 제거 
console.log(pets);
pets.unshift('뽈뽈이'); // 맨앞 삽입
console.log(pets);