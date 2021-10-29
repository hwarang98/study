# url.parse 

`url.parse(_url, true).query;` 라는것을 사용하면 `queryString` 의 값이 웹 페이에 로딩된다.

```javascript
let let url = require('url');
		.
		.
		. //생략
let queryData = url.parse(_url, true).query; 
console.log(queryData.id)
response.end(queryData.id); 
// http://localhost:3000/?id=helloNode
// helloNode
// 웹 페이지에 helloNode가 출력된다.
```

