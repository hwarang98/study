# 소수 찾기

## 문제

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요. 

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

---

## 입출력 예시

| n    | result |
| ---- | ------ |
| 10   | 4      |
| 5    | 3      |

---

## code

```js
function solution(n) {
    let count = 1;
    for(let i = 3; i <= n; i+=2){
        let isPrime = true;
        let sqrt = parseInt(Math.sqrt(i));
        for(let j = 3; j <= sqrt; j+=2){
            if(i % j === 0){
                isPrime = false
                break
            }
        }
        if (isPrime) count++
    }
    return count
}
```

