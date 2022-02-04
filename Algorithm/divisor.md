# 약수의 개수와 덧셈 

## 문제

두 정수 `left`와 `right`가 매개변수로 주어집니다. `left`부터 `right`까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

---

## 입출력 예시

| left | right | result |
| ---- | ----- | ------ |
| 13   | 17    | 43     |
| 24   | 27    | 52     |

----

## code

```javascript
function divisor(n){
  // 약수의 갯수 구하는 함수
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count++
        }
    }
    return count;
}

function solution(left, right) {
    // 약수의 개수가 짝수인 수는 더하고
    // 약수의 개수가 홀수인 수는 제외
    // 약수의 갯수를 구해주는 함수를 만들어준다. divisor
    // 반복문으로 함수를 실행할 변수에 담는다. count
    // count % 2 === 0 의 조건에 맞는 숫자끼리 더해준다

    let result = 0;
    for(let i = left; i <= right; i++){
        // console.log(i)
        let count = divisor(i);
        console.log('count: ', count);
        if(count % 2 === 0){
            result = result + i;
            // console.log(result)
        }
        else{
            result = result - i;
        }
    }
    console.log(result)
    return result;
}

solution(24,27); // 24 25 26 27
```

