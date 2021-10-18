## 문제

정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 한다.   

***

## 입출력 예시

```javascript
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
```

***

## 내가 짜본 코드

1. ```arrSort``` 라는 변수에 오름차순으로 배열을 정렬하여 할당함.
2. ```reducer``` 라는 변수에 누적 값 을 도출 해 내는 함수를 생성
3. `threeSortNum` 이라는 변수엔 `arrSort` 라는 변수에 할당되어 있는 배열의 마지막 에서 3번째인 인덱스와 마지막 인덱스를 `slice`하여 할당
4. `result`에 `reduce()` 를 사용하여 `reducer`를 넣어줌으로서 누적값 도출

```javascript
const largestProductOfThree = function (arr) {
  // 배열내의 제일 큰 수 3개를 따로 뽑아내자 
  // reduce 사용 -> 배열의 요소를 곱한 누적 값을 반환 
  // [5,4,3,-2,-3]
  // let sortLength = arr.sort((a,b) => a - b) ->[-3, -2, 3, 4, 5]
  // sortLength.slice(sortLength-3, sortLength)
   
   let arrSort = arr.sort((a,b) => a - b);
   let reducer = (pre, cur) => pre * cur;
   let threeSortNum = arrSort.slice(arrSort.length-3, arrSort.length);
   return result = threeSortNum.reduce(reducer)

}
```

### 잘못생각한점

- 마이너스`-`  x  마이너스 `-` = `+`  라는 것을 생각하지않고 단순히 배열을 오름차순으로 정리해 배열의 마지막 3개만 곱했다. 

***

## 레퍼런스 코드

```javascript
const largestProductOfThree = function (arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
};
```

`sort()`를 사용해 배열을 오름차순으로 정렬 하고 정렬한 배열의 마지막 3개를 곱해주는 것 까진 비슷하게 한 거 같다.

- `candi1` 에 오름차순한 배열의 끝에서 3개까지의 값 을 곱해주고 할당한 값이다.
- `candi2`엔 배열의 마지막 요소와 첫번째 두번째 요소를 곱한 값 을 할당한 값이다.
- `Math.max()` 를 사용해 `candi1` , `candi2`의 값 중 더 큰 값을 반환 해준다.
