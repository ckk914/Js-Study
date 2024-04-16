const dogList = [];

class DogRepository{
	constructor(){
		this.dogList = [];
	}
}

const dr = new DogRepository();

const dog1 = {
  dogName: '뽀삐',
  age: 3,
  bark: function() {
    console.log(`${this.dogName}가 왈왈!!`);
  }
};
const dog2 = {
  dogName: '해피',
  age: 4,
  bark: function() {
    console.log(`${this.dogName}가 왈왈!!`);
  }
};
class Dog{
//생성자
	constructor(dogName, age){
			this.dogName = dogName;
			this.age = age;
	}
	bark(){
		console.log(`${this.dogName}가 왈왈ㄹㄴㅁㄹㅇㄴ`);
	}
}

const d1 = new Dog(`초코`,2);
const d2 = new Dog(`나비`,3);

// d1.bark();
// d2.bark();
dogList.push(d1);
dogList.push(d2);
dogList.push(new Dog(`괭이`,1));

for(const d of dogList){
	d.bark();
}

