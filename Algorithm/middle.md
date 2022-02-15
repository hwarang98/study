# 가운데 글자 가져오기

## 문제

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

---

## 입출력 예시

| s       | return |
| ------- | ------ |
| "abcde" | "c"    |
| "qwer"  | "we"   |

---

## code

```js
function solution(s) {
    let middle = Math.floor(s.length / 2)
    return s.length % 2 === 1 ? s[middle] : s[middle - 1] + s[middle];
}
```

