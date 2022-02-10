# uglyNumbers Algorithm

## 문제

아래와 같이 정의된 ugly numbers 중 n번째 수를 리턴해야 합니다.

- ugly number는 2, 3, 5로만 나누어 떨어지는 수이다.
- 1은 1번째 ugly number 이다.
- 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ...

---

## 입출력 예시

```javascript
let result = uglyNumbers(1);
console.log(result); // --> 1

result = uglyNumbers(3);
console.log(result); // --> 3
```

---

## code 

```javascript
const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  // ugly number = num % 2 === 0 
  // num과 count 를 선언한다
  // num > count 까지 while문 선언
  // num을 1씩증가
  // uglyNum 이라는 함수를 만들고 uglyNum(num)조건에 만족하면 count를 1씩 증가
  // makeUgly 라는 함수를 만들고, num % N 을 해준다
  
  const makeUgly = (num, N) => {
    while(num % N === 0){
      num = num / N;
    }
    return num;
  }

  const uglyNum = (num) => {
    num = makeUgly(num, 2);
    num = makeUgly(num, 3);
    num = makeUgly(num, 5);
    return num === 1;
  }
  
  let num = 0;
  let count = 0;
  while(n > count){
    num++;
    if(uglyNum(num)) count++
  }
  return num
};

```

