# powerSet 

## 문제

하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.

---

## 입출력 예시

```javascript
let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
```

---

## code

```javascript
const powerSet = function (str) {
  const split = str.split('').sort();

  // 중복제거
  const deduplication = split.reduce((acc, cur) => {
    if(acc[acc.length - 1] === cur) return acc;
    return acc.concat(cur)
  });
  
  let result =[];
  const pick = (idx, item) => {
    if(idx === deduplication.length){
     result.push(item);
    return;
    }

    pick(idx + 1, item);
    pick(idx + 1, item + deduplication[idx]);
  };
  pick(0, '');
  return result.sort();
}
```

