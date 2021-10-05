function Person(name, first, second, third){
    this.name = name,
    this.first = first,
    this.second = second,
    this.third =  third,
    this.sum = function() {
        return this.first + this.second + this.third
    } 
}

let kim = new Person('화랑',20,10,10)
let lee = new Person('은준', 20,20,20)

console.log("화랑.sum(): ", kim.sum())
console.log("은준.sum(): ", lee.sum())

let d1 = new Date();
console.log(`${d1.getFullYear()} 년 ${d1.getMonth()+1} 월`)

console.log('Person(): ', Person())
console.log('Person(): ', new Person())
// new 라는 키워를 쓰면 객체를 생성하는 생성자가 된다. constructor
// constructor는 객체를 찍어내는 작은 공장, 공장의 시스템이다. 
// 공장의 시스템을 바꾸면 생산물이 바뀌듯이 객체도 한번에 바뀐다. 
// 중복제거가 코딩기술 발전의 원천 중 하나다.
// 결국 코딩을 좀 더 편하고, 재사용하기 쉽게 만드는 게 목적이다.