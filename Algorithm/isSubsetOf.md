두개의 배열 `base = [1,2,3,4,5] ` 와 `smaple = [1,3,5] ` 를 입력 받았을때 `sample` 이 `base` 의 부분 집합이면 `true `를 리턴하고 그게아니면 `false` 을 리턴하는 알고리즘 구하기

```javascript
const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  // solution 1.이중반복문을 사용해보자
  // 카운터해줄 변수를 하나 선언 -> let count
  // 

  // let count = 0

  // base.sort((a,b) => a - b) //[4,3,2,1] -> [1,2,3,4]
  // sample.sort((a,b) => a - b) // ... 동일

  // for(let i = 0; i < base.length; i++){
  //   for(let j = 0; j < sample.length; j++){
  //     if (base[i] === sample[j]){
  //       count++
  //     }
  //   }
  // }
  // if(result === sample.length + 1){
  //   return true
  // }
  // else{
  //   return false
  // }
     
  base.sort((a,b) => a - b) //[4,3,2,1] -> [1,2,3,4]
  sample.sort((a,b) => a - b) // ... 동일

  const intersection = (item, arr, from) => { // sample[i], base, count --> 1, [2,3], 0
    for(let i = from; i < arr.length; i++){
      if(item === arr[i]) return i
      else if(item < arr[i]) return -1
    }
      return -1
  }
  let count = 0
  for (let i = 0; i < sample.length; i++){
    count = intersection(sample[i], base, count);
    if(count === -1) return false
  }
    return true

};

```

