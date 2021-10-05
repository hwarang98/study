class Person{
    constructor(name, first, second){
        this.name = name
        this.first = first
        this.second = second
    }
    sum(){
        return this.first + this.second
    }
}

// 상속을 사용하면 중복된 불필요한 코드를 쓰지 않아도 되고 익스텐즈라는 상속을 쓰면서 필요한 함수만 추가하면 되기때문에 간결하며 유용하게된다.
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        // 슈퍼에 괄호가 있으면 부모클래스의 생성자, 괄호가 없으면 부모클래스 자체를 뜻한다. 
        // 만약 슈퍼라는 기능이 없으면, 자식클래스에서 부모클래스의 속성과 기능에 추가적인 무언가를 넣어 활용때 다시 부모클래스의 코드를 사용해야하는 중복이 발생할 것이다.
        this.third = third
    }
    sum(){
        return super.sum() + this.third
    }
    avg(){
        return (this.first + this.second + this.third)/3
    }
    
}

let user = new PersonPlus('화랑', 40, 60, 80)
console.log('화랑이의 점수: ', user.sum());
console.log('화랑이의 평균: ', user.avg());



// kim.sum = function(){
//     return 'this: ' + (this.first + this. second)
// }

// let lee = new Person('은준', 20,20,20)

// console.log("화랑.sum(): ", kim.sum())
// console.log("은준.sum(): ", lee.sum())
