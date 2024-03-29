/*
Q1. 아래 문제를 각각 풀어보세요.
1. 빈 객체 user를 만듭니다.
2. user에 키가 name, 값이 John인 프로퍼티를 동적 추가하세요.
3. user에 키가 surname, 값이 Smith인 프로퍼티를 동적 추가하세요.
4. name의 값을 Pete로 수정해보세요.
5. user에서 프로퍼티 name을 삭제하세요.
*/

var user ={
};
console.log(user);
user.name  = `John`;
user.username = `Smith`;
console.log(user);
user.name = `Pete`;
console.log(user);
delete user.name;
console.log(user);
//-----------------------
