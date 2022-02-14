# 나눠서 나머지가 1이되는 가장 작은 자연수 구하기

## 문제

자연수 `n`이 매개변수로 주어집니다. `n`을 `x`로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 `x`를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

---

## 입출력 예시

| n    | result |
| ---- | ------ |
| 10   | 3      |
| 12   | 11     |

---

## code

```js
function solution(n) {
    let result = 0;
    let x = 0;
    
    for(let i = 0; i < n; i++){
        x++
        if(n % x === 1){
            result = x
            break;
        }
    }
    return result
}

```

