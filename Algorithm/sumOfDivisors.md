## 문제

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

---

## 입출력 예시

| n    | return |
| ---- | ------ |
| 12   | 28     |
| 5    | 6      |

---

## code

```js
const getDivisors = (n) => { 
    const divisors = []; 
    for(let i = 1 ; i <= Math.sqrt(n); i++){ 
        if(n % i === 0) { 
            divisors.push(i); 
            if(n / i != i) divisors.push(n / i); 
        } 
    } 
    divisors.sort((a, b) => a - b); 
    return divisors; 
}
function solution(n) {
    let result = 0;
    let divisors = getDivisors(n);
    for(let i = 0; i < divisors.length; i++){
        result = result + divisors[i];
    }
    return result
}
```

**문제점**

- 너무 복잡하게 생각한거같다. 다른사람들의 풀이를 보면 되게 간단하게 풀 수 있었음에도 불구하고 괜히 어렵게 풀었다

**개선점**

더 간단하게 풀 수 있는방법을 항상  생각해보자.

---

## 다른사람이 푼 코드

```js

function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}
```