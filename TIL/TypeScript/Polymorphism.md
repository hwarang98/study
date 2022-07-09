# Polymorphism

## Typescript 다형성

> 여려가지 다른 구조들, 여러가지 다른 모양들, 여러가지 다른 형태들을 뜻한다.

## call signatures 에 Generic을 해주자

- <T> 를 추가해준다. T가 아닌 다른문자 가능 apple, banana ...
- type의 placholder을 해준다고 생각하면된다.
- <T> → 이 과정을 generic 이라 부른다.

그러면 각각 a는 number, b는 boolean, c는 string, b는 number | boolean | string 이 된다

```tsx
type SuperPrint = {
	<T>(arr: T[]): T
}

const superPrint : SuperPrint = (arr) => arr[0]

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1, 2, true, false, "hello"])
```