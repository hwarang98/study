# 문제

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 [내적](https://en.wikipedia.org/wiki/Dot_product)을 return 하도록 solution 함수를 완성해라

이때, a와 b의 내적은 `a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]`입니다. (n은 a, b의 길이)

---

# 입출력 예시

| a           | b             | result |
| ----------- | ------------- | ------ |
| `[1,2,3,4]` | `[-3,-1,0,2]` | 3      |
| `[-1,0,1]`  | `[1,0,-1]`    | -2     |

---

# code

```javascript
function solution(a, b) {
 
    let result = []
    for(let i = 0; i < a.length; i++){
        result.push(a[i] * b[i]);
    }
    return result.reduce((acc,cur) => acc + cur);
}
```

