# longestPalindrome

## 문제

문자열을 입력받아 부분 문자열 중 가장 긴 (palindrome)*의 길이를 리턴해야 합니다.

- `palindrome`: 데이터를 앞에서 뒤로 또는 뒤에서 앞으로 조회한 결과가 동일한 경우

---

## 입출력 예시

```js
let str = 'My dad is a racecar athlete';
let result = longestPalindrome(str);
console.log(result); // --> 11 ('a racecar a')

str = ' dad ';
result = longestPalindrome(str);
console.log(result); // --> 5 (' dad ')
```

---

## code

```js
function longestPalindrome(str) {
    if (str.length <= 1) return str.length;
    const palindrome = (str) => {
        // str이 회문인지 아닌지 불리언값으로 반환해줌 ex) 'foof' -> ture, 'bad' -> false
        let len = str.length;
        let mid = Math.floor(len / 2);
        for (let i = 0; i < mid; i++) {
        	if (str[i] !== str[len - 1 - i]) {
            return false;
        	}
        }
        return true;
    };

    for (let len = str.length; len >= 1; len--) { // len = 27, len = 26
        //console.log(len)

        for (let startIdx = str.length - len; startIdx >= 0; startIdx--) { // 	   startIdx = 27-27(0), strtIdx = 27-26(1), strIdx = 26 - 26(0)
            // console.log('=====시작====='); 
            // slice의 특성을 고려한 마지막 인덱스 + 1 을 저장
            const endIdx = startIdx + len; // 0 + 27, 1 + 26, 
            const subStr = str.substring(startIdx, endIdx); // str.substring(0,27)
            const result = palindrome(subStr);

            // console.log('len: ', len, '\n'); // 27, 26, 26

            // console.log('startIdx: ', startIdx, '\n'); // 0, 1

            // console.log('endIdx: ', endIdx, '\n'); // 27, 27
            
            //console.log('subStr: ', subStr, '\n'); 

            if (result === true) return len;
            //console.log('=====끝=====', '\n'); // 0
        }
    }
}
```

