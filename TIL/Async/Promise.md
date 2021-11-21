# what is Promise?

> 프로미스는 자바스크립트 비동기 처리에 사용되는 객체이다

여기서 자바스크립트의 비동기 처리란 ‘특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성’을 의미한다.

------

# Promise Code

**Promise**는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용한다.

다음은 간단한 ajax 통신코드이다.

```jsx
function getData(callbackFunc) {
  $.get('url 주소/products/1', function(response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

getData(function(tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

다음은 Promise를 적용한 코드이다.

```jsx
function getData(callback) {
  // new Promise() 추가
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function(tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});
```

------

# Promise의 3가지 상태(states)

프로미스를 사용할 때 알아야 하는 가장 기본적인 개념이 바로 프로미스의 상태(states)이다.

여기서 말하는 상태란 프로미스의 처리 과정을 의미한다.

`new Promise()`로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖는다.

- **Pending(대기)** : 비동기 처리 로직이 아직 완료되지 않은 상태

  아래와 같이 `new Promise()` 메서드르 호출하면 대기(Pending) 상태가된다.

  ```jsx
  new Promise();
  ```

  `new Promise()` 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 `resolve`, `reject`이다.

- **Fulfilled(이행)** : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태

  콜백 함수의 인자 `resolve` 를 아래와 같이 실행 하면 이행(Fulfilled) 상태가 된다.

  ```jsx
  new Promise(function(resolve, reject) {
    resolve();
  });
  ```

  이행 상태가 되면 아래와 같이 then()을 이용하여 처리 결과 값을 받을 수 있다.

  ```jsx
  function getData() {
    return new Promise(function(resolve, reject) {
      var data = 100;
      resolve(data);
    });
  }
  
  // resolve()의 결과 값 data를 resolvedData로 받음
  getData().then(function(resolvedData) {
    console.log(resolvedData); // 100
  });
  ```

  ※ 프로미스의 '이행' 상태를 좀 다르게 표현해보면 '완료' 이다

- **Rejected(실패)** : 비동기 처리가 실패하거나 오류가 발생한 상태

  `new Promise()`로 프로미스 객체를 생성하면 콜백 함수 인자로 `resolve`와 `reject`를 사용할 수 있다. 여기서 `reject`를 아래와 같이 호출하면 실패(Rejected) 상태가 된다.

  ```jsx
  new Promise(function(resolve, reject) {
    reject();
  }); // 실패상태
  ```

  그리고, 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 `catch()`로 받을 수 있다.

  ```jsx
  function getData() {
    return new Promise(function(resolve, reject) {
      reject(new Error("Request is failed"));
    });
  }
  
  // reject()의 결과 값 Error를 err에 받음getData().then().catch(function(err) {
    console.log(err);// Error: Request is failed});
  ```

------

# Promise Code

ajax 통신 예제

```jsx
function getData() {
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      if (response) {
        resolve(response);
      }
      reject(new Error("Request is failed"));
    });
  });
}

// 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
getData().then(function(data) {
  console.log(data); // response 값 출력
}).catch(function(err) {
  console.error(err); // Error 출력
});
```

- 서버에서 응답을 제대로 받아오면 `resolve()` 메서드를 호출하고, 응답이 없으면 `reject()` 메서드를 호출하는 예제이다.
- 호출된 메서드에 따라 `then()`이나 `catch()`로 분기하여 응답 결과 또는 오류를 출력한다.

------

# Promise Chaining

> 여러개의 Promise 를 연결한다.

```jsx
function getData() {
  return new Promise({
    // ...
  });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
  .then(function(data) {
    // ...
  })
  .then(function() {
    // ...
  })
  .then(function() {
    // ...
  });
```

위 코드가 예제이다.

다음은 비동기 처리에서 흔하게 사용되는 `setTimeout()` API 를 사용한것이다.

```jsx
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
.then(function(result) {
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
```

------

# Promise Error Handling

- 에러 처리에는 2가지 방법이있다.

1. `then()` 의 두번째 인자로 에러를 처리하는 방법
2. `catch()` 를 사용하는방법

```jsx
function getData() {
  return new Promise(function(resolve, reject) {
    reject('failed');
  });
}

// 1. then()의 두 번째 인자로 에러를 처리하는 코드
getData().then(function() {
  // ...
}, function(err) {
  console.log(err);
});

// 2. catch()로 에러를 처리하는 코드
getData().then().catch(function(err) {
  console.log(err);
});
```

------

# Promise 에러 처리는 catch()를 사용

가급적 `catch()`로 에러를 처리하는 게 더 효율적이다.

```jsx
// then()의 두 번째 인자로는 감지하지 못하는 오류
function getData() {
  return new Promise(function(resolve, reject) {
    resolve('hi');
  });
}

getData().then(function(result) {
  console.log(result);
  throw new Error("Error in then()"); // Uncaught (in promise) Error: Error in then()
}, function(err) {
  console.log('then error : ', err);
});
```

`then()`의 첫 번째 콜백 함수 내부에서 오류가 나는 경우 오류를 제대로 잡아내지 못해서 나타나는 에러이다.

![image-20211116231712774](/Users/hwarang/Library/Application Support/typora-user-images/image-20211116231712774.png)

똑같은 오류를 `catch()` 로 처리하면 다른 결과가 나온다.

```jsx
// catch()로 오류를 감지하는 코드
function getData() {
  return new Promise(function(resolve, reject) {
    resolve('hi');
  });
}

getData().then(function(result) {
  console.log(result); // hi
  throw new Error("Error in then()");
}).catch(function(err) {
  console.log('then error : ', err); // then error :  Error: Error in then()
});
```

![image-20211116231658491](/Users/hwarang/Library/Application Support/typora-user-images/image-20211116231658491.png)

*더 많은 예외 처리 상황을 위해 `catch()` 를 사용하자.

.