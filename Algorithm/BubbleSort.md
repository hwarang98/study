	## 문제

- `[2,1,3]` 을 인자로 입력받으면 `[1,2,3]` 을 출력해야한다.

- `sort` 함수를 사용하지않고 `sort` 기능과 동일한 임의의 함수를 만들고 사용한다.

  

## 버블정열 알고리즘이란?🧐

```
1. 첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
2. 두 번째 요소와 세 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
3. 1, 2를 마지막까지 반복합니다. (마지막에서 두 번째 요소와 마지막 요소를 비교)
4. 1~3의 과정을 한 번 거치게 되면, 가장 큰 요소가 배열의 마지막으로 밀려납니다.
5. 1~3의 과정을 첫 요소부터 다시 반복합니다.
6. 5를 통해 두 번째로 큰 요소가 배열의 마지막 바로 두 번째로 밀려납니다.
7. 1~3의 과정을 총 n번(배열의 크기) 반복합니다.
```



## 코드

```javascript
const swap = function (idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
let bubbleSort = function (arr) {
  let N = arr.length;
  for (let i = 0; i < N; i++) {
    let swaps = 0;
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
      }
    }
    if (swaps === 0) {
      break;
    }
  }
  return arr;
};

```
