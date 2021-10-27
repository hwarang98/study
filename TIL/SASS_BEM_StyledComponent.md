# CSS 잔처리기의 등장 - SASS

> **Syntactically Awesome Style Sheets**의 약자로 CSS를 확장해 주는 스크립팅 언어이다.

CSS를 만들어주는 언어로서 자바스크립트처럼 특정 속성(ex. color, margin, width 등)의 값(ex. #ffffff, 25rem, 100px 등)을 **변수로 선언**하여 필요한 곳에 선언된 변수를 적용할 수도 있고, 반복되는 코드를 한번의 선언으로 여러 곳에서 재사용할 수 있도록 해 주는 등의 기능을 가졌다.

그래서 SASS는 SCSS 코드를 읽어서 전처리한 다음 컴파일해서 전역 CSS 번들 파일을 만들어 주는 전처리기(preprocessor)의 역할을 한다.

------

# css구조화를 위한 다양한 시도

## css 방법론의 대두

**방법론의 공통 지향점**

- 코드의 재사용
- 코드의 간결화(유지보수 용이)
- 코드의 확장성
- 코드의 예측성(클래시 명으로 의미 짐작)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4fef909-a71e-42f8-bc09-6901f65018f2/Untitled.png)

## css 방법론의 대두 - BEM

> BEM이란 Block, Element, Modifier로 구분하여 클래스명을 작성하는 방법이며, Block, Element, Modifier 각각은 `—`와 `__`로 구분한다.

### 장점

클래스명은 BEM 방식의 이름을 여러 번 반복하여 재사용할 수 있도록 하며 **HTML/CSS/SASS** 파일에서도 더 일관된 코딩 구조를 만들어 준다.

### 단점

클래스명 선택자가 장황해지고 긴 클래시면 때문에 마크업이 불필요하게 커지며, 재사용하려고 할 때 마다 모든 UI 컴포논트를 면시적으로 확장해함

------

# CSS-in-JS (styled-component)

- CSS-in-JS에는 대표적으로 **Styled-Component**가 있다.
- Styled-Component는 기능적(Functional) 혹은 상태를 가진 컴포넌트들로부터 UI를 완전 분리해 사용할 수 있는 아주 단순한 패턴을 제공한다.
- styled-component를 사영하면 기존 CSS 문법으로도 스타일 속성이 추가된 React 컴포넌트를 만들수있다.
- Javascript에서 변수를 선언하듯 Button이라는 변수를 만들고 tag의 속성을 정의하고 (`a` tag) back-ticks(``) 안에 기존 CSS 문법을 이용하여 스타일 속성을 정의해준다.

## 예시코드

```css
const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
`;
```

## 특징

- Styled Component 는 화면에 어떤 컴포넌트가 렌더링 되었는지 추적해서 해당하는 컴포넌트에 대한 스타일을 자동으로 삽입한다. 따라서 코드를 적절히 분배해 놓으면 사용자가 어플리케이션을 사용할 때 최소한의 코드만으로 화면이 띄워지도록 할 수 있다.
- Styled Component 는 스스로 유니크한 `className` 을 생성한다. 이는 `className` 의 중복이나 오타로 인한 버그를 줄여준다.
- 기존에는 더 이상 사용하지 않거나 삭제한 컴포넌트에 해당하는 스타일 속성을 제거하기위해 CSS 파일 안의 `className`을 이리저리 찾아야 했지만 **Styled Component** 는 모든 스타일 속성이 특정 컴포넌트와 연결되어 있기 때문에 만약 컴포넌트를 더 이상 사용하지 않아 삭제할 경우 이에 대한 스타일 속성도 함께 삭제된다.
- `className`을 일일이 수동으로 관리할 필요 없이 React 의 props 나 전역 속성을 기반으로 컴포넌트에 스타일 속성을 부여하기 때문에 간단하고 직관적이다.
- 컴포넌트에 스타일을 상속하는 속성을 찾아 다른 CSS 파일들을 검색하지 않아도 되기 때문에 코드의 크기가 커지더라도 유지보수가 어렵지 않다.
- 개별 컴포넌트마다 기존의 CSS 를 이용하여 스타일 속성을 정의하면 될 뿐입니다. 이외의 것들은 **Styled Component** 가 알아서 처리해 줍니다.

------

# CSS 방법론들의 특징, 장단점

## css

- 특징 : 기본적인 스타일링 방법
- 장점 : ❌
- 단점 : 일관된 패턴을 갖기 어려움 !important의 남용

## SASS

- 특징 : 컴파일된 CSS 를 만들어내는 전처리기
- 장점 : **변수**, **함수**, **상속** 개념을 활용하여 재사용 가능, CSS의 구조화
- 단점 : 전처리 과정이 필요, 디버깅의 어려움, 컴파일한 CSS 파일이 거대해짐

## BEM

- 특징 : CSS 클래시명 작성에 일관된 패턴을 강제하는 방법론
- 장점 : 네이밍으로 문제해결, 전 처리 과정 불필요
- 단점 : 선택자의 이름이 장황하먀 클래스 목록이 너무 많아짐

## Styled-Component(CSS-in-JS)

- 특징 : 컴포넌트 기반으로 CSS를 작성할 수 있게 도와주는 라이브러리
- 장점 : CSS를 컴포넌트 안으로 캡슐화, 네이밍이나 최적화를 신경 쓸 필요가 없음
- 단점 : 빠른 페이지 로드에 불리