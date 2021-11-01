# 문제

길이가 m, n이고 오름차순으로 정렬되어 있는 자연수 배열들을 입력받아 전체 요소 중 k번째 요소를 리턴해라.

---

# 주의사항

- 두 배열의 길이의 합은 1,000,000 이하.
- 어떤 배열 `arr`의 k번째 요소는 `arr[k-1]`을 의미한다.

---

# 입출력 예시

```javascript
let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3
```

---

# code

```javascript
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {    
  let temp = 0
  let left = 0
  let right = 0
  let target;
  while(temp < k){ 
    console.log('temp: ', temp)
    console.log('k: ', k)
    if(arr1[left] < arr2[right]){ 
      console.log('arr1[left]: ', arr1[left])
      console.log('arr2[right]: ', arr2[right])
      target = arr1[left] 
      console.log('target: ', target)
      left++ 
      console.log('left: ', left)
    }else{ 
      target = arr2[right] 
      console.log('arr2[right]: ', arr2[right])
      right++ 
      console.log('right: ', right)
    }
    temp++
    console.log('temp: ', temp)
  }
  console.log('target: ', target)
  return target
};

```

---

## 맨처음 시도한 code

```javascript
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
	let mergeNum = arr1.concat(arr2);
	let newArr = mergeNum.sort((a,b) => a - b);
	let left = 0
	let right = k-1
	return newArr[right]
};
```

