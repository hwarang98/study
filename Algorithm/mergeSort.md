# 문제

정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴하라.

---

# 주의사항

- **병합 정렬**을 구현해야 할 것.
- `arr.sort` 사용은 금지.
- 입력으로 주어진 배열은 중첩되지 않은 1차원 배열이다.

---



```javascript
const merge = function (left, right) {
  // merge라는 함수는 이미 정렬된 left,right를 인자로 받아서 하나로 합치는 기능.
  // left = [1,3,5,7,9], right = [2,4,6,8,10] 이라가정
  // left[0] <= right[0] 일 경우 -> 1 <= 2 result에 left.shift() 를 push
  // 그게 아니면 result 에 right.shift() push
  const result = [];
  while(left.lenght !== 0 && right.length !== 0){
    left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift())
  }
  return [...result, ...left, ...right];
};

  /*
  [5,4,3,2,1] 의 중간지점을 구하기위해 Math.floor(arr.length/2) -> 2 를 구해준다.
  배열을 middle을 기점으로 두개로 나눈다. left=[5,4], right=[3,2,1]  
  left = arr.slice(0, middle) && right = arr.slice(middle)
  left의 첫번째 인덱스와 right의 첫번째 인덱스를 비교해서 더 작은걸 배열에 넣는다. 재귀 활용
  */
const mergeSort = (arr) => {
  // 탈출조건 length === 1 일때
  if(arr.length === 1) return arr;

  
  const middle = Math.floor(arr.length / 2); // 배열의 중간지점 찾기위함
  const left = arr.slice(0, middle); //
  const right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}
```

