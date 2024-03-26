/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
  18.5이하면 "당신은 저체중입니다." 
  나머지는 "당신은 정상체중입니다."를 출력하는 
  CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
*/
function calcBMI(height, weight) {
  var m = height / 100;
  var bmi = weight / (m * m);
  console.log(`bmi는 ${bmi}`);
  return bmi;
}
//몸무게 판정
function judgeWeight(bmi) {
  console.log(`당신은 ${bmi}체중입니다.`);
}
//반올림
function round(Bmi, Number) {
  var dotNumber = 10 ** Number;
  var level = ``;
  var weightLevelValue = Math.round(Bmi * dotNumber) / dotNumber;

  if (weightLevelValue < 18.5) level = `과`;
  else if (25.0 < weightLevelValue) level = `저`;
  else level = `정상`;

  judgeWeight(level);

  return weightLevelValue;
}

// Math.round()// 반올림

var h = 178.4,
  w = 78.2;
var myBmi = calcBMI(h, w);

console.log(
  `키 -> ${h}cm,체중->${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`
);
// console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`);
