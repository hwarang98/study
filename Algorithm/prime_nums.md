# 소수만들기

## 문제

주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

---

## code

```javascript
function solution(nums) {
    // nums[i] + nums[j] + nums[k] 를 2로 나누었을때 나머지가 0이아니면 count에 담자
    let count = 0;
    const numLen = nums.length;
    
    for(let i = 0; i < numLen; i++){
        for(let j = i+1; j < numLen; j++){
            for(let k = j + 1; k < numLen; k++){
                const sum = nums[i] + nums[j] + nums[k]
                console.log('sum: ', sum)
                if(isPrime(sum)) count++
                console.log(count)
            }
        }
    }
    return count
}

function isPrime(num) {
        for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
        return num > 1;
    }

    solution([1,3,6,7,10,11,15])
```

