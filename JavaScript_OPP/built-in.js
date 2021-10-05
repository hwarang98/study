console.log(Math.PI)
console.log(Math.random());
console.log(Math.floor(3.9));

let MyMath = {
    PI: Math.PI,
    random: function(){
        return Math.random();
    },
    floor: function(num){
        return Math.floor(num)
    }
}

console.log("Math.PI: ", MyMath.PI)
console.log("Math.random(): ", Math.random())
console.log("Math.floor: ", Math.floor(14.6))