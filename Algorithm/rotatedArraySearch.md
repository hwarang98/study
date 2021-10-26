# 문제

`부분적으로 오름차순 정렬`*된 정수의 배열(`rotated`)과 정수(`target`)를 입력받아 `target`의 인덱스를 리턴해야 한다.

- `부분적으로 정렬된 배열`: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
- 예시: `[4, 5, 6, 0, 1, 2, 3]`은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬된다.

---

# 입출력 예시

```javascript
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1
```

## 해석

`target` 으로 2를 받으면 2번째 인덱스 (`arr[2]`) 의 값인 **5** 를 리턴해야한다.

---

# Reference code



```javascript
const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  /* 이진탐색
  let lowNum = 0
  let highNum = arr.length - 1; 

  while(lowNum <= highNum){
    let middleNum = Math.floor((highNum + lowNum) / 2); 
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
  */    
  // 왼쪽이 정렬되어있을때  
  // 오른쪽이 정렬되어있을때  

  // rotated = [4,5,6,0,1,2,3], target = 1
  let left = 0
  let right = rotated.length - 1 // 6

  while(left <= right){
    let mid = Math.floor((right + left) / 2) // 3(배열의 중간부터 탐색하기위함)

    if(rotated[mid] === target){ // 0 === 1 x
      return mid;
    }

    if(rotated[left] < rotated[mid]){ //4 < 0 x
      // 왼쪽이 정렬되있을때
      if(target < rotated[mid] && rotated[left] <= target){ // 4 < 0 && 4 <= 1 x
        right = mid - 1; // 오른쪽으로 탐색
      } else { // 그게아니면 
        right = mid + 1; // 왼쪽으로 탐색
      }
    }
    else{
      if(target <= rotated[right] && rotated[mid] < target){ // 1 <= 3 && 0 < target
        left = mid + 1;
      }else{
        right = mid - 1;
      }
    } 
  }
  return -1;

};

```

