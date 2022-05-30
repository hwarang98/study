# setState 사용 이유

## setState

react 사용시 state를 사용해야하는 경우가 무조건 생긴다.

그런데 state 값을 직접적으로 변경하지않고 useState()라는 함수를 호출에 인자값으로 변경하고자 하는 값을 넣어주면서 state값을 변경한다.

```jsx
const [test, setTest] = useState({});
test.value = 1;
console.log(test.value) // {value : 1}
```

## 이유

직접 값을 바꾸면 리렌더링을 보장하지않는다.

기본적으로 해당 코드에서 setTest를 사용해야 하는 이유는 setTest가 컴포넌트의 lifeCycle 함수를 대신 호출해주기 때문이다.

여기서 setTest는 비동기식으로 동작하여 VirtualDOM에 전달된 값에따라 React는 화면을 다시 렌더링할 요소를 검사하는데 이러한 과정상 모든 변화가 동기적으로 수행되지 않고 한번에 묶여서 진행될 수 있다.

또 직접 값을 변경하면 useEffect를 통한 lifeCycle API도 사용할 수 없기 때문에 React의 핵심 기능들이 정상적으로 동작하려면 반드시 setTest를 써야한다.