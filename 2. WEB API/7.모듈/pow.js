

// export const pow = n =>n**2;
const pow = n =>n**2;
//만약에 내보낼 데이터가 1개라면 default를 쓸 수 있다.
const add = (n1,n2) => n1+n2;
export default {pow, add};  //두개 내보내서 가져온 곳에서 .을 써서 .pow   .add 를 쓸 수 있음.
