let superObj = {superVal : 'super'}
// let subObj = {subVal : 'sub'}
// subObj.__proto__= superObj

var subObj = Object.create(superObj); // superObj를 부모로하는 새로은 객체
subObj.subVal = 'sub';

console.log('subObj.subVal: ', subObj.subVal)
console.log('subObj.superVal: ', subObj.superVal)
subObj.superVal = 'sub';
console.log('subObj.superVal: ', subObj.superVal)


let kim = {
    name: 'kim',
    first:10, second:20,
    sum: function(){
        return this.first + this.second
    }
}

// 다음 코드는  31 번째 주석 처리된 코드와 똑같이 작동한다.
// Todo: __proto__ 대신 사용할수있는 Object.create()를 사용
let lee = Object.create(kim);
lee.name = "lee";
lee.name = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this. second)/2;
}

// let lee = {
//     name:'lee',
//     first: 10, second: 10,
//     avg: function(){
//         return (this.first + this.second)/2;
//     }
// }
// lee.__proto__ = kim; 

console.log('lee.sum(): ', lee.sum());
console.log('lee.avg(): ', lee.avg());