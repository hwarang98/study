# 문제

오름차순 정렬된 정수의 배열(`arr`)과 정수(`target`)를 입력받아 `target`의 인덱스를 리턴해야 한다.

---

# Code

```javascript
const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  // arr이 [1,2,3,4,5], target이 2 라고 가정해보자
  // 그러면 2를 리턴해야한다. -> 2번째 인덱스에 위치하기 때문
  // let lowNum = 0, let arrLen = arr.length - 1
  // arr 배열의 중간인 3을 찾는다. -> middleNum
  // 만약 middleNum이 target 과 같다면 그대로 리턴
  // 만약 middleNum > target -> return let high = middleNum + 1
  // else return let lowNum = middleNum - 1

  let lowNum = 0
  let highNum = arr.length - 1; // 배열의 길이는 항상 + 1 (인덱스는 0부터 시작)

  while(lowNum <= highNum){
    let middleNum = Math.floor((highNum + lowNum) / 2); // Math.floor 은 무조건 반내림을한다 1.1 -> 1, 1.9 -> 1
    if(arr[middleNum] === target){
      return middleNum
    }
    if(arr[middleNum] > target){
      highNum = middleNum - 1
    }
    else{
      lowNum = middleNum + 1
    }
  }
  return -1
};

```

---

## 새로 알게된 **method**

- `Math.floor()` : 정수로 내림을 한다.

  * 1.1 -> 1을 반환하고 1.9 -> 1 을 반환한다.
  * 소수점 자리수를 정해주고싶으면 `Math.floor(1.222 * 10) / 10` 이런식으로 **10**을 곱해주고 (12.222 -> 12) 여기에 10을 나눠주면 **1.2** 가 나온다.   
  * `Math.floor(1.222 * 100) / 100` 의 값은 **1.22**가 된다.
  * 음수일경우 `Math.floor(-1.2)`, `Math.floor(-1.9)` 2를 반환한다.

     

- `Math.ceil()` :   정수로 올림한다.

  - 소수점 자리수 구하는 방법은 `Math.floor()`과 동일하다.
  - 음수일경우 `Math.floor(-1.2)` ,  `Math.floor(-1.9)` 1을 반환한다.

     

- `Math.round()` : 정수로 반올림한다.

  - 소수점 자리수 구하는방법은 `Math.floor()` 과 동일하다.

  - `Math.round(1.1)`, `Math.round(1.2)` -> **1**

  - `Math.round(1.5)` , `Math.round(1.9)` -> **2**

  - 음수일경우 `Math.round(-1.1)`, `Math.round(-1.2)` `Math.round(1.5) ` -> **1**

    - `Math.round(-1.7)`, `Math.round(-1.9)` -> **2**

    