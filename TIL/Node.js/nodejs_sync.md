# Node.js 에서의 동기와 비동기

```javascript
const fs = require('fs')
// sample.txt = b

// 동기적인 처리
console.log('a');
const result = fs.readFileSync('../syntax/sample.txt', 'utf8')
console.log(result);
console.log('c');
// console 1 -> 'a'
// console 2 -> 'b'
// console 3 -> 'c'

// 비동기적인 처리
console.log('a');
fs.readFile('../syntax/sample.txt', 'utf8', (err, result) => {
    console.log(result);
})
console.log('c');
// console 1 -> 'a'
// console 2 -> 'c'
// console 3 -> 'b'
```

- 동기적으로 처리한 코드는 첫번째 `console`이 실행되고 그 다음 `fs.readFileSync` 를 실핼하고 다음 `console`로 넘어간다.
- 비동기적으로 처리한 코드는 첫번째 `console`을 실행후 두번째 `fs.readFile`을 실행시키는 **동안** 그 다음 `console`을 실행 시키고 실행시켜둔 `fs.readFIle`의 결과를 출력한다. 
- Node.js에서는 비동기적 방식을 사용해야 최대의 성능을 사용할수있다.