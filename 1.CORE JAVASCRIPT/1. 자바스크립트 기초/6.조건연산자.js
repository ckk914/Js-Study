var money =3000;

// var food = (money > 8000) ? '돈까스':'라면';
// 선택지가 두개 이상이면 가독이 매우 떨어짐...
var food = (money >= 8000) ? '돈까스' 
: (money >= 5000) ? '쫄면' 
: (money >= 3000) ? '라면' : '굶어';

var food;
if (money >= 8000) {
  food = '돈까스';
} else if (money >= 5000) {
  food = '쫄면';
} else if (money >= 3000) {
  food = '라면';
} else {
  food = '굶어';
}

console.log(`선택한 음식: ${food}`);