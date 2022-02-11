# 3진법 뒤집기 알고리즘

## 문제

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

---

## 입출력 예시

| n    | result |
| ---- | ------ |
| 45   | 7      |
| 125  | 229    |

---

## code

```javascript
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''),3);

}
```

