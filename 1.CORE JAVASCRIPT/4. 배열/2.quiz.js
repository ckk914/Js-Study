
var scores = [83, 99, 100, 57, 100];
var total = 0;
var average = 0;
for (var subject of scores) {
  total += subject;
}
average = total / scores.length;

console.log(`총점은 ${total}이고 평균은 ${average}`);