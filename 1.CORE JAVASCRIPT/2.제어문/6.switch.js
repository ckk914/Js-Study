
var season = prompt('선호하는 계절을 입력하세요.');

//조건을 판별하는 함수 
//(비교식x 문자값이나 숫작밧만 써야함)

switch(season){
  case `봄`:case 'spring': alert(`여의도`); break;
  case `여름`:case 'summer': alert(`부산`);break;
  case `가을` : case 'fall': alert(`여의도3`);break;
  case `겨울`: case 'winter': alert(`여의도4`);break;
  default: alert('봄,여름,가울겨울 중 하나를 입력하세요.');
}
