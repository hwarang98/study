# golang은 변수 선언시 타입을 정해주는 정적언어이다.

## 👍 정적타입 언어의 장점

- 타입 에러로 인한 문제점을 초기에 발견할 수 있어 타입 관련한 런타임 오류를 방지할 수 있고 타입의 안정성이 높음.
- 특히, 사용자에게 배포되는 앱의 경우 타입 관련한 검증을 컴파일 시에 하지 않고 런타임에 하게 되면 앱 사용 시 타입 불일치로 인한 크래시의 발생 위험이 높아짐.
- 컴파일 시에 미리 타입을 결정하기 때문에 실행 속도가 빠름
- 코드의 가독성이 좋음. 다수의 협업이나 프로젝트의 장기 개발 및 유지보수에 유리함.

## golang variable

```go
package main

import "fmt"
func main() {
	// 변수 선언
	var a int = 0 
	var message string = ""
	
	a=20
	message = "good morning"
	
	fmt.Println(message, a)
}
```

### `var a int = 0`

- a: 변수명
- int: 변수 타입
- 0: 초기값

다음으로 그밑에 `a=20` , `message = "good morning` 이 부분은 변수에 값을 재할당 하는것이다.

```go
package main

import "fmt"
func main() {
	var min int = 10
	var work int = 20

	var result int = min * work
	fmt.Print(min, work, result)
}
// 10, 20, 200 
```