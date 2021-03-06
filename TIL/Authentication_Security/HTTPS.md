# HTTPS 프로토콜

- `HTTPS`는 **H**yper **T**ext **T**ransfer **P**rotocol **S**ecure Socket layer 의 약자이며 HTTP over SSL(TLS), HTTP over Secure라고 부르기도 한다.
- 인증에서 HTTPS 프로토콜을 사용해야만 하는 이유는 HTTP보다 상대적으로 안전한 방법이고, 데이터 제공자의 신원을 보장받을 수 있기 때문이다.

### **데이터 제공자의 신원을 확인하고 보장받는 게 인증에서 중요한 이유**

1. 클라이언트는 데이터 제공자가 제공해 준 데이터를 사용할 수밖에 없다.

2. 클라이언트는 서버에 데이터 요청을 하고 이후 받은 데이터를 이용해서 화면을 렌더링하는 등의 작업을 해야 한다.

3. 그렇기 때문에 요청 및 응답을 중간에서 가로채는 

   중간자 공격

   에 취약

   1. 중간자 공격'은 클라이언트와 서버 사이에서 공격자가 서로의 요청, 응답의 데이터를 탈취 및 변조하여 다시 전송하는 공격

# 암호화

- HTTPS 프로토콜의 특징 중 하나는 암호화된 데이터를 주고받기 때문에, 중간에 인터넷 요청이 탈취되더라도 그 내용을 알아볼 수 없다.
- HTTP 프로토콜은 요청 및 응답을 탈취한다면 프로그램을 이용하여 아래와 같이 해당 요청으로 전달되는 데이터의 내용을 확인할 수 있다
- 데이터를 암호화하여 전송하는 HTTPS 프로토콜을 사용한다면 비밀번호와 같은 중요한 데이터가 유출될 가능성이 HTTP 프로토콜보다 현저히 적다.

# 인증서

- HTTPS 프로토콜의 또 다른 특징 중 하나는 브라우저가 응답과 함께 전달된 인증서 정보를 확인할 수 있다는 점이다.
- 브라우저는 인증서에서 해당 인증서를 발급한 CA 정보를 확인하고 인증된 CA가 발급한 인증서가 아니라면 화면에 경고창을 띄워 서버와 연결이 안전하지 않다는 화면을 보여준다.