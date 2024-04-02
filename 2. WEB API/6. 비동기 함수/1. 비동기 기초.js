
//동기식 코드 (순차 실행)
// 헬로우 다 찍고 바이 다 찍는다!
// 포문 => 포문    : 순차 실행

//비동기 함수 setTimeout
//지연시킴으로서, 코드 순서를 바꿀 수 있다.
//시간차로 진행할 수 있게함.
console.log('ㅇㅇㅇ');
setTimeout(()=>{console.log('ㅁㅁㅁㅁ');},2000)


setTimeout(()=>{
  for (let i = 0; i < 3; i++) {
    console.log(`hello${i}`);
  }  
},200); //밀리초:1/1000초 
setTimeout(()=>{
  for (let i = 0; i < 4; i++) {
    console.log(`bye${i}`);
  }
  
},0)
