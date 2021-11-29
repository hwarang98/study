# 문제

- 1478 → "one4seveneight"
- 234567 → "23four5six7"
- 10203 → "1zerotwozero3"

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 `s`가 매개변수로 주어진다. `s`가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성하라.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같다.

| 숫자 | 영단어 |
| ---- | ------ |
| 0    | zero   |
| 1    | one    |
| 2    | two    |
| 3    | three  |
| 4    | four   |
| 5    | five   |
| 6    | six    |
| 7    | seven  |
| 8    | eight  |
| 9    | nine   |

---

# 입출력 예시

- `"one4seveneight"` -> 1478
- `"23four5six7"` -> 234567
- `"2three45sixseven"` -> 234567
- "123" -> 123

# code

```javascript
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let parms = s;
    
    for(let i = 0; i < numbers.length; i++){
        let arr = parms.split(numbers[i])
        parms = arr.join(i)
    }
    return Number(parms)
}
```

