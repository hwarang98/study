# What is Rest API?

> "Representational State Transfer"의 약자로 REST API는 웹에서 사용되는 데이터나 자원(Resource)을 HTTP URI로 표현하고, HTTP 프로토콜을 통해 요청과 응답을 정의하는 방식이다.

# REST API의 구성

- **자원(RESOURCE)** - URI
- **행위(Verb)** - HTTP METHOD
- **표현(Representations)**

---

# 좋은 REST API 디자인

REST API를 작성할 때는 몇 가지 지켜야 할 규칙들이 존재한다.

**리차든슨의 REST 성숙도 모델 구조화**

- 0단계: HTTP 사용
- 1단계: 개별 리소스와의 통신 준수
- 2단계: HTTP 메소드 원칙 준수
- 3단계: HATEOAS원칙 준수

모든 단계를 충족해야 REST API라고 부를수 있다고 하지만 실제론 3단계까지 지켜지기 어렵다고 하여 2단계까지만 적용해도 좋은 API 디자인이라고 볼 수 있고, 이런 경우 HTTP API 라고도 부른다.

---

# REST API 다지인 가이드

1. **URI**는 정보의 자원을 표현해야한다.
2. 자원에 대한 행위는 **HTTP Method(GET, POST, PUT, DELETE)**로 표현한다.

## REST API 중심 규칙

- **URI**는 정보의 자원을 표현해야 한다. (리소스명은 동사보다는 명사를 사용)

  - `GET /members/delete/1`
  - 위와 같은 방식은 REST를 제대로 적용하지 않은 URI입이며, URI는 자원을 표현하는데 중점을 두어야 한다. delete와 같은 행위에 대한 표현이 들어가서는 안된다

- 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)로 표현

  - 위의 잘못 된 URI를 HTTP Method를 통해 수정 → `DELETE /members/1`

- 회원정보를 가져올 때는 GET, 회원 추가 시의 행위를 표현하고자 할 때는 POST METHOD를 사용하여 표현한다.

  - 회원정보를 가져오는 URI

  ```jsx
      GET /members/show/1     (x)
      GET /members/1          (o)
  ```

  - 회원을 추가할 때

  ```
      GET /members/insert/2 (x)  - GET 메서드는 리소스 생성에 맞지 않다.
      POST /members/2       (o)
  ```

## URI 설계시 주의할 점

**슬래시 구분자(/)는 계층 관계를 나타내는 데 사용**

```
    <http://restapi.example.com/houses/apartments>
    <http://restapi.example.com/animals/mammals/whales>
```

**URI 마지막 문자로 슬래시(/)를 포함하지 않는다.**

URI에 포함되는 모든 글자는 리소스의 유일한 식별자로 사용되어야 하며 URI가 다르다는 것은 리소스가 다르다는 것이고, 역으로 리소스가 다르면 URI도 달라져야 한다.REST API는 분명한 URI를 만들어 통신을 해야 하기 때문에 혼동을 주지 않도록 URI 경로의 마지막에는 슬래시(/)를 사용하지 않는다.

```
    <http://restapi.example.com/houses/apartments/> (X)
    <http://restapi.example.com/houses/apartments>  (0)
```

- 하이픈(-)은 URI 가독성을 높이는데 사용
  - URI를 쉽게 읽고 해석하기 위해, 불가피하게 긴 URI경로를 사용하게 된다면 하이픈을 사용해 가독성을 높일 수 있다.
- 밑줄(_)은 URI에 사용하지 않는다.
- 글꼴에 따라 다르긴 하지만 밑줄은 보기 어렵거나 밑줄 때문에 문자가 가려지기도 한다.이런 문제를 피하기 위해 밑줄 대신 하이픈(-)을 사용하는 것이 좋다.(가독성)
- URI 경로에는 소문자가 적합하다.
- URI 경로에 대문자 사용은 피하도록 해야 한다. 대소문자에 따라 다른 리소스로 인식하게 되기 때문이다.FC 3986(URI 문법 형식)은 URI 스키마와 호스트를 제외하고는 대소문자를 구별하도록 규정하기 때문이다

```
    RFC 3986 is the URI (Unified Resource Identifier) Syntax document
```

**파일 확장자는 URI에 포함시키지 않는다.**

```
    <http://restapi.example.com/members/soccer/345/photo.jpg> (X)
```

REST API에서는 메시지 바디 내용의 포맷을 나타내기 위한 파일 확장자를 URI 안에 포함시키지 않는다.

Accept header를 사용

```
    GET / members/soccer/345/photo HTTP/1.1 Host: restapi.example.com Accept: image/jpg
```