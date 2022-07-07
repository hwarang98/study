# Call Signatures

## 함수 타입

첫번째 add 함수는 매개변수에 타입을 지정해주지않아서에러가뜬다. 항상 타입을 정해주자

```tsx
// err
function add (a, b){
	return a + b
}

// ok
function add (a:number, b:number){
	return a + b
} 

// arrow function
const add = (a:number, b:number) => a + b 

// type
type Add = (a:number, b:number) => number; 
const add:Add = (a, b) => a + b
```

## Call Signatures

![image-20220707235508706](/Users/hwarang/Library/Application Support/typora-user-images/image-20220707235508706.png)