# 서버생성

- 모든 node 웹 서버 애플리케이션은 웹 서버 객체를 만들어야 한다.
- 이 때 `createServer`를 사용한다.

```jsx
const http = require('http');

const server = http.createServer((request, response) => {
  // 여기서 작업이 진행됨
```

- 이 서버로 오는 HTTP 요청마다 `createServer`에 전달된 함수가 한 번씩 호출된다.
- 사실 `createServer`가 반환한 `Server` 객체는 `EventEmitter`이고 여기서는 `server` 객체를 생성하고 리스너를 추가하는 축약 문법을 사용한 것이다.
- HTTP 요청이 서버에 오면 node가 트랜잭션을 다루려고 `request`와 `response` 객체를 전달하며 요청 핸들러 함수를 호출한다.

------

# 메서드, URL, header

- 요청을 처리할 때, 우선은 메서드와 URL을 확인한 후 이와 관련된 적절한 작업을 실행하려고 할 것이다.
- Node가 `request` 객체에 유용한 프로퍼티를 넣어두었으므로 이 작업은 비교적 쉽게 할 수 있다.

```jsx
const { method, url } = request;
```

- 여기서 method는 항상 일반적인 HTTP 메서드/동사가 될 것이다.
- url은 전체 URL에서 **서버**, **프로토콜**, **포트**를 제외한 것으로, 세 번째 슬래시 이후의 나머지 전부라고 볼 수 있다.

------

## header

`request`에 `headers`라는 전용 객체가 있다.

```jsx
const { headers } = request;
const userAgent = headers['user-agent'];
```

클라이언트가 어떻게 헤더를 설정했는지에 관계없이 모든 헤더는 소문자 로만 표현된다.

이는 어떤 목적이든 헤더를 파싱하는 작업을 간편하게 해준다.

------

# 요청바디

- `POST`나 `PUT` 요청을 받을 때 애플리케이션에 요청 바디는 중요하다.
- **요청 헤더** 에 접근하는 것보다 **바디 데이터** 를 받는 것은 좀 더 어렵다.
- 핸들러에 전달된 `request` 객체는 `ReadableStream` 인터페이스를 구현하고 있다.
- 이 스트림에 **이벤트 리스너** 를 등록하거나 다른 **스트림에 파이프로 연결**할 수 있습니다.
- 스트림의 '**`data`**'와 '**`end`**' 이벤트에 이벤트 리스너를 등록해서 데이터를 받을 수 있다.

```jsx
let body = [];
request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  // 여기서 `body`에 전체 요청 바디가 문자열로 담겨있음.
});
```

------

# 오류

- `request` 스트림의 오류가 발생하면 스트림에서 `'error'` 이벤트가 발생하면서 오류를 전달한다.
- 이벤트에 리스너가 등록되어 있지 않다면 **Node.js** 프로그램을 종료시킬 수도 있는 오류를 던질 것이다.
- 그러므로 단순히 오류를 로깅만 하더라도 요청 스트림에 `'error'` 리스너를 추가해야 한다.

(하지만 HTTP 오류 응답을 보내는 것이 좋음)

```jsx
request.on('error', (err) => {
  // 여기서 `stderr`에 오류 메시지와 스택 트레이스를 출력한다.
  console.error(err.stack);
});
```

------

# 정리

```jsx
const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // 여기서 헤더, 메서드, url, 바디를 가지게 되었고
    // 이 요청에 응답하는 데 필요한 어떤 일이라도 할 수 있게 되었습니다.
  });
}).listen(8080); // 이 서버를 활성화하고 8080 포트로 받습니다.
```

------

# HTTP 상태 코드

- 따로 설정하지 않으면 응답의 **HTTP** 상태 코드는 항상 **200**이다.
- 모든 HTTP 응답이 이를 보장하는 것은 아니고 어떤 경우에는 다른 상태 코드를 보내기를 원할 것이다.
- 상태 코드를 변경하려면 `statusCode` 프로퍼티를 설정해야 한다.

```jsx
response.statusCode = 404; // 클라이언트에게 리소스를 찾을 수 없다고 알려준다.
```

------

# 응답 헤더 설정

- `setHeader` 메서드로 헤더를 설정한다.

응답에 헤더를 설정할 때 헤더 이름의 대소문자는 중요하지 않다.

헤더를 여러 번 설정한다면 마지막에 설정한 값을 보낸다.

```jsx
response.setHeader('Content-Type', 'application/json');
response.setHeader('X-Powered-By', 'bacon');
```

------

# 명시적인 헤더 데이터 전송

헤더를 작성하는 `writeHead` 메서드가 있다.

이 메서드는 스트림에 상태 코드와 헤더를 작성한다.

```jsx
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end();
```

스트림의 `end` 함수에 스트림에 보낼 **데이터의 마지막 비트**를 선택적으로 전달할 수 있다.

```jsx
response.end('<html><body><h1>Hello, World!</h1></body></html>');
```

------

# 서버 예제

```jsx
const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/echo') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(body);
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
}).listen(8080);
```