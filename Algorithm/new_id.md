# 문제

new_id.md카카오에 입사한 신입 개발자 `네오`는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
다음은 카카오 아이디의 규칙입니다.

- 아이디의 길이는 3자 이상 15자 이하여야 합니다.
- 아이디는 알파벳 소문자, 숫자, 빼기(`-`), 밑줄(`_`), 마침표(`.`) 문자만 사용할 수 있습니다.
- 단, 마침표(`.`)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.

 

```javascript
function solution(new_id) {
    new_id = new_id.toLowerCase()
    .replace(/[^\w\-\.]/g,'')
    .replace(/[\.]{2,}/g,'.')
    .replace(/^\./,'')
    .replace(/\.$/,'')
    
    if(!new_id){
        new_id = 'a'
    }
    if(new_id.length >= 16){
        new_id = new_id.slice(0,15).replace(/\.$/,'')
    }
    if(new_id.length <= 2){
        // let result = new_id.slice(-1)
        new_id = new_id.padEnd(3,new_id[new_id.length-1])
    }
    return new_id;
}
```

