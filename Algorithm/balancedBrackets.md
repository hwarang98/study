# 문제

문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 한다.

---

# 입출력 예시

```javascript
let output = balancedBrackets('(');
console.log(output); // // -> false

output = balancedBrackets('()');
console.log(output); // --> true
```

---

# code

```javascript
const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  // '()', '[]', '{}' 를 문자열로 변수에 할당 -> let bracket = '()[]{}'
  // 빈배열에 하나씩 넣음
  // bracket[0] = '(' , bracket[1] = ')' 짝수면 열리는 괄호, 그게아니면 닫히는 괄호
  // bracket % 2 === 0 -> 열리는 괄호 그게아니면 닫히는 괄호
  // indexOf 
  let bracket = '()[]{}'
  let temp = []

  if(str.length === 0) return true
  if(str.length%2 !== 0) return false

  for(let i = 0; i < str.length; i++){ // 
    let newIdx = bracket.indexOf(str[i]) // str[i]의값을 할당 str[0] -> '('
    if(newIdx %2 === 0){
      temp.push(newIdx + 1)
    }
    else{
      if(temp.pop() !== newIdx) return false
    }
  }
  if(temp.length === 0) return true
};
```

