## 문제

정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 한다.  

  

## 입출력 예시

```javascript
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
```

  

## 코드

```javascript
const largestProductOfThree = function (arr) {
  // 오름차순으로 배열복사 -> 나열

  // [1,2,3,4,5,6] 일 경우
  // 양수일때 배열의 뒤에서 즉, length-1(6), length-2(5), length-3(4) 3번째 인덱스의 요소까지 곱한다.
  // 음수일땐 배열의 앞에서 즉, lengh
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
};
```

