//객체의 설계도 class

class Pet {
  //생성자를 통해 필드를 선언
  //생성자를 먼저 생성
  //생성자의 이름은 늘 constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //메서드 선언 => function 없이 쓰면 됨!
  introduce() {
    console.log(`내 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`);
  }
}

//상속
class Dog extends Pet {
  constructor(name, age, hobby) {
    super(name, age); //부모에게 보내서 진행.
    this.hobby = hobby;
  }
  introduce() {
    console.log(
      `내 이름은 ${this.name}이고, 나이는 ${this.age}살 이고 취미는 ${this.hobby}`
    );
  }
}
//상속
class Cat extends Pet {
  constructor(name, age, sleep) {
    super(name, age); //부모에게 보내서 진행.
    this.sleep = sleep;
  }
}
const dog = new Dog("개", 3, "산책가기");
console.log(dog);
const cat = new Cat("냥", 6, "캣타워 낮잠");
console.log(cat);

console.log(dog === cat);

console.log("===");
dog.introduce();
cat.introduce();
