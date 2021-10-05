function Person(name, first, second, third){
    this.name = name,
    this.first= first,
    this.second= second,
    this.third=  third
}
Person.prototype.sum= function() {
    return 'prototype: ' + (this.first + this.second + this.third)
} 

let kim = new Person('화랑',20,10)
kim.sum = function(){
    return 'this: ' + (this.first + this. second)
}
let lee = new Person('은준', 20,20,20)

console.log("화랑.sum(): ", kim.sum())
console.log("은준.sum(): ", lee.sum())

// 프로토 타입의 의미는 객체가 생성될때마다 해당 객체의 메소드를 만들어 메모리에 할당을 해야 하는데 그렇게 하지않고
// 생성자의 프로토타입에  정의함으로서 다른 모든 객체들이 참조하여 사용할 수 있도록 하여 메모리를 효율적으로 
// 사용할 수 있도록 하는 장점과 메소드의 재정의가 필요한 객체들은 상황에 맞게 자신만 사용가능한 메소드를 재정의 할수 있어 
// 유지보수에도 많은 도움이 됩니다.
