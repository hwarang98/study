'use strick'

// 1.Producer
// TODO: promise 만들기
// 새로운 Promis가 만들어질때 전달한 executor 함수가 자동적으로 실행된다.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)

    console.log('doing some thing...'); // promise가 만들어지는순간 실행된다.
    setTimeout(() => {
        // resolve('화랑');
        reject(new Error('네트워크 없음요'))
    },1000)
});

// 2.Consumers: then, catch, finally
// TODO: promise 사용하기
promise
    .then((value) => {
    // TODO: 원하는 기능의 콜백함수를 실행해주면 된다.
    // promise. then() -> promise가 리턴된다.
    console.log("value: ", value)
    // 인자의 value는 promise의 resolve콜백함수에서 전달된 'ellie' 라는 값을 가진다.
})
.catch(error => {
    // .catch -> 리턴된 promise에 catch를 등록한다.
    console.log(error);
});

// 3. promise chaining 
// TODO: Promise 연결하기
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4.Error Handling
// TODO: 오류처리

const getHen = () =>
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve ('🐓'), 1000);
    });
    const getEgg = hen =>
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve (`${hen} => 🥚`), 1000);
    });
    const cook = egg => 
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve (`${egg} => 🍳`), 1000);
    });

    getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)