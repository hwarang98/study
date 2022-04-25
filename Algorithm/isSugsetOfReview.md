# 문제

두 개의 배열(`base`, `sample`)을 입력받아 `sample`이 `base`의 부분집합인지 여부를 리턴해야 합니다.

---

# 입출력 예시

```js
let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
```

---

# code

```js
const isSubsetOf = function (base, sample) {
  let count = 0
  base.sort((a, b) => a - b)
  sample.sort((a, b) => a - b)

  const findIdx = (item, arr, from) => {
    for(let i = from; i < arr.length; i++){
      if(item === arr[i]){
        return i
      }
      else if(item < arr[i]){
        return -1
      }
    }
    return -1
  }

  for(let i = 0; i < sample.length; i++){
    count = findIdx(sample[i], base, count)
    if(count === -1){
      return false
    }
  }
  return true
};

```

