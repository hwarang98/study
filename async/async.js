// async & await
// 깨끗하게 promis를 쓰는 방법

// 1.async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         resolve('화랑');
//     })
// }

async function fetchUser() {
    return '화랑' 
}

const user = fetchUser();
user.then(console.log)
console.log(user);

// 2.await 🪄
// await는 async가 붙은 함수않에서만 쓸 수 있다.
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';

}
async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    // getApple 와 getBanana 중 가장먼저 받아오는 것 을 리턴한다.
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log)


// function pickFruits(){
//     return getApple()
//     .then (apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`)
//     })
// }