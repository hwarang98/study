두개의 배열 `base = [1,2,3,4,5] ` 와 `smaple = [1,3,5] ` 를 입력 받았을때 `sample` 이 `base` 의 부분 집합이면 `true `를 리턴하고 그게아니면 `false` 을 리턴하는 알고리즘 구하기

```javascript
const isSubsetOf = function (base, sample)  
  // base에 sample이 포함되면 true
  // 그게아니면 false

  // 시간복잡도 -> sort() 사용
  // 함수를 하나 선언 sortIdx
  // item, arr, from 을 인자로 두고 반목분 실행
  // i = from 으로 두기
  // 반복문은 item === arr[i]이면 i를 그대로 리턴
  base.sort((a,b) => a - b); // [1,2,3,4,5]
  sample.sort((a,b) => a - b); // [1,3,5]

  const sortIdx = (item, arr, from) => {
    for(let i = from; i < arr.length; i++){
      if(item === arr[i]){
        return i
      } 
      else if(item < arr[i]){
        return -1
      } 
    }
    return -1
  };
  let count = 0;
  for (let i = 0; i < sample.length; i++) {
    count = sortIdx(sample[i], base, count);
    if (count === -1) return false;
  }
  return true;


};
```

