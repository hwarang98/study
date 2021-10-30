파일 읽기

[node 공식문서](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsreadfilepath-options-callback) 에서 fs.readFile~~ 를 사용하면 내가 원하는 파일을 불러올 수 있다.

```jsx
const fs = require('fs');

fs.readFile('sample.txt','utf8', (err, data) => {
    console.log(data); 
		// sample.txt라는 파일을 읽어오고 뒤에 utf8 이라는것은 읽어올수 없는형태를 읽어올 수 있게 일종의 인코딩 역활을 한다.
});
```

---

공식문서를 통해 원하는것 (내가 모르는 메소드 등)을 찾은후 사용방법을 꼭 직접 사용해보는것 자체로 경험치가 쌓인다.