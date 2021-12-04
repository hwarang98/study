# 문제

어떤 정수들이 있다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어진다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해라

---

# 입출력 예시

| absolutes  | signs                | result |
| ---------- | -------------------- | ------ |
| `[4,7,12]` | `[true,false,true]`  | 9      |
| `[1,2,3]`  | `[false,false,true]` | 0      |

---

# code

```javascript
function solution(absolutes, signs) {
    let result = '';
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i] === false){
            absolutes[i] = -absolutes[i]
            console.log(absolutes[i])
        }
        else{
            absolutes[i]
        }
    }
    return absolutes.reduce((acc, cur) => acc + cur)

}
```

