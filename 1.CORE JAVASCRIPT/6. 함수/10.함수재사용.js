const NOT_FOUND = -1;
//배열 안에 특정 요소의 인덱스를 찾아 반환하는 함수
function myIndexOf(array, searchElement){
  for(var i = 0; i<array.length ;i++)
  {
    if(searchElement===array[i]){
      return i;
    }
  }
  return NOT_FOUND; //못찾음
}

function myIncludes(array, searchElement){
  
  var idx = myIndexOf(array,searchElement);
  return idx !==NOT_FOUND;
  // for(var i=0; i< array; i++){
  //   if(searchElement===arr[i])
  //   return true;
  // }
  // return false;
}

// 실행 영역
var foods = [`족발`,`피자`,`파스타`,`김치찌개`];

var idx = myIndexOf(foods, `파스타`);
console.log(`index: ${idx}`);

var flag = myIncludes(foods, `족발`);
console.log(``);