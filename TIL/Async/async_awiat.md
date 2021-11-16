# what is async & await?

> async와 await는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법이며, 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 도와준다.

# async & await

```jsx
function logName() {
  var user = fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```

프로그래밍적 사고로 코드를 출력할수 있게 도와준다.

서버에서 사용자 데이터를 불러와서 변수에 담고, 사용자 아이디가 1이면 사용자 이름을 출력한다.

라고 하고싶으면 async await만 붙이시면 된다.

```jsx
async function logName() {
  var user = await fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```

------

# async & await 기본 문법

```jsx
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

------

# async & await 간단한 예제

```jsx
function fetchItems() {
  return new Promise(function(resolve, reject) {
    var items = [1,2,3];
    resolve(items)
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}
```

1. `logItems()` 함수를 실행하면 `fetchItems()` 함수의 결과 값인 `items` 배열이 `resultItems` 변수에 담깁니다. 따라서, 콘솔에는 `[1,2,3]`이 출력된다.
2. `await`를 사용하지 않았다면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백 함수나 `.then()`등을 사용해야 했지만 **async & await** 문법 을 통해 비동기에 대한 사고를 하지 않아도 되는 것이다.

------

# async & await 실용 예제

```jsx
function fetchUser() {
  var url = '<https://jsonplaceholder.typicode.com/users/1>'
  return fetch(url).then(function(response) {
    return response.json();
  });
}

function fetchTodo() {
  var url = '<https://jsonplaceholder.typicode.com/todos/1>';
  return fetch(url).then(function(response) {
    return response.json();
  });
}
```

1. `fetchUser()`를 이용하여 사용자 정보 호출
2. 받아온 사용자 아이디가 `1`이면 할 일 정보 호출
3. 받아온 할 일 정보의 제목을 콘솔에 출력

**다음은 async & await을 사용한 코드이다.**

```jsx
async function logTodoTitle() {
  var user = await fetchUser();
  if (user.id === 1) {
    var todo = await fetchTodo();
    console.log(todo.title); // delectus aut autem
  }
}
```

------

# async & await  Error handling

- 프로미스에서 에러 처리를 위해 `.catch()`를 사용했던 것처럼 async에서는 `catch {}` 를 사용하시면 된다.

```jsx
async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}
```