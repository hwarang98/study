# 타입정하기

## 타입 지정

```tsx
let a  : number = 1;
let b  : string = 'hello';
let c  : boolean = true;

// array type
let a  : number[] = [1, 2];
let b  : string[] = ['hello'];
let c  : boolean[] = [true];
```

변수명 다음에 **: number** 이런식으로 변수 값들의 타입을 미리 지정해준다.

배열같은경우는 **: number[]** 의 방식으로 배열안의 값들의 타입을 지정해 줄 수있다.

### object type

```tsx
const player : {
	name:string,
	age?:number
} = {
	name:"hwarnag"
}
```

여기서 주의할점은 player의 타입을 지정해주고 실제 내용도 적어줘야한다는점이다.

`= { name:”hwarang” }` ← 실제 내용 작성

또한 age를 optional 하게 만들어주고싶다면 **age** 뒤에 **?** 를 적어준다. 그러면 age는 `number | undefined` 가 나옴으로서 age의 값은 필수적이지 않게된다. 즉, age를 적어도되고 안적어도 된다

### 재사용

```tsx
// 타입생성
type Player = {
	name:string,
	age?:number
}

const hwarang : Player = {
	name:"hwarang"
}

const jenny : Player = {
	name : jenny,
	age : 25
}

// 과도한 재사용
type Age = number;
type Name = string;
type Player = {
	name:Name,
	age?:Age
}

const hwarang : Player = {
	name:"hwarang"
}

const jenny : Player = {
	name : jenny,
	age : 25
}
```

다음과 같은 방식으로 Player 라는 큰 타입을 지정해줄수있다. 타입의 이름의 첫 글자는 대문자로 해줘야한다.

과도한 재사용 같은경우는 가독성을 높혀주는 역할로서 좋은 선택이지만 과도한 사용은 안하는게좋다. 그러니 적당히 가독성을 높혀주는 선에서만 사용하고 굳이 사용할필요는 없다.

### return type

```tsx
type Age = number;
type Name = string;
type Player = {
	name:Name,
	age?:Age
}
function example(name: string) : Player {
	return {
		name
	}
}
const hwarang = example("hwarang");
hwarang.age = 25;
```

타입을 지정해준다음 함수의 괄호안에 `name: string` 을 명시 해주면 매개변수로 **string** 만 받을수 있다.

그리고 Player 타입중 `age? : Age` 로 인해 age의 값은 선택적이므로 없어도 있어도 된다.

나이를 주고싶다면 `hwarang.age = 25;` 를 해줘도 무방하다.