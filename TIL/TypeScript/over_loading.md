# over loading

## 오버로딩이란?

여러개의 call signatures 가 있는 함수를 뜻한다.

```tsx
// 오버로딩 예시
type Add = {
	(a:number, b: number) : number
	(a:number, b: string, c:number) : number
}

// 에러
const add : Add = (a, b, c?:number) => {
	return a + b
}

// a + b 를 해주고 c는 선택사항이라는 것을 명시 해줘야한다.
const add : Add = (a, b, c?:number) => {
	if(c) return a + b + c
	return a + b
}
```

## 프로젝트에서의 오버로딩 예시

프로젝트를 하다보면 특정 페이지로 이동하는 라우팅을 하게된다.

그렇다면 `Router.push()` 를 사용하게 되는데 그 함수안에 이동하고자하는 주소, 보내고싶은 값을 보낼 수 있는데 이것이 대표적인 예시이다.