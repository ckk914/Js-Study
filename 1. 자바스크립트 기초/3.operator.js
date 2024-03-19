
console.log(5%0); //나눗셈 불가 NaN
console.log(0%5); //나눗셈 불가 몫 나머지 모두 0

//제곱 연산
console.log(3**4); //81  3의4승

// 증감 연산자
var x =3 ;
x++;
// 백틱로 써넣어야함.
console.log(`x: ${x}`);

//전위, 후위 연산

var n1 = 10;
var n2 = n1++; //= 지나가고 더함
console.log(`n1:${n1}, n2: ${n2}`)  //11,10

var n3 = 10;
var n4 = ++n3; // = 통과 전 미리 더힘
console.log(`n3:${n3}, n4: ${n4}`)  //11,11

var xx = 5;
xx++;  //이게 연산 속도가 훨씬 빠르다
xx=xx +1;
console.log(`xx: ${xx}`);


