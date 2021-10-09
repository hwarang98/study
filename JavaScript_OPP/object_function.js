let kim = {
    name:"kim",
    first: 10,
    second: 20
}
let lee = {
    name:"lee",
    first: 10,
    second: 10
}

function sum(prefix){
    return prefix + (this.first + this.second);
}

// JavaScript에서의 모든 함수는 call이라는 메소드를 가지고있다.

/*
call.sum()
첫번째 인자로는 그 함수의 내부적으로 this를 무엇으로 할 것인지 정해준더
두번째 인자부터는 우리가 호출할려는 함수의 파라미터에 들어갈 인자 값 들이 들어온다.
*/

// sum()
sum.call(kim); // sum의 this는 "kim" 이된다. 
sum.call(lee); // sum의 this는 "lee" 가 된다
console.log("sum.call(kim)", sum.call(kim, '=> '))
console.log("sum.call(lee)", sum.call(lee, ': '))