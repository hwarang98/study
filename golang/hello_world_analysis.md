#  hello world 뜯어보기

```go
package main

import "fmt"

func main() {
	fmt.Println("hello world")
}
```

## package main

> go 언어는 패키지 선언으로 시작 되어야 하며, package main은 프로그램 시작점이 있는 패키지

패키지 선언은 이 코드가 어떤 패키지에 속하는 알러주는것이다.

## import “fmt”

특정 패키지에서 제공하는 기능을 사용

## func main(){

main() 함수를 선언, main() 함수는 프로그램 진입점 함수이며, 프로그램은 항상 main()에서 시작하고 main()에서 종료된다

## fmt.Println("hello world")

자바스크립트로 치면 `console.log()` 에 해당한다. 터미널에 괄호 안에 있는 것을 출력한다.