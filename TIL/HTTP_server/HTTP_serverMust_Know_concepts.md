# HTTP 요청 메서드

`GET` : 특정 리소스의 표시를 요청한다. 

`GET`을 사용하는 요청은 오직 데이터를 받기만 한다.

`HEAD` : `GET` 메서드의 요청과 동일한 응답을 요구하지만, 응답 본문을 포함하지 않는다.

`POST` : 특정 리소스에 엔티티를 제출할 때 쓰인다. 이는 종종 서버의 상태의 변화나 부작용을 일으킨다.

`PUT` : 목적 리소스 모든 현재 표시를 요청 payload로 바꾼다.

`DELETE` : 특정 리소스를 삭제한다.

`CONNECT`: 목적 리소스로 식별되는 서버로의 터널을 맺는다.

`OPTIONS` :메서드는 목적 리소스의 통신을 설정하는 데 쓰인다.

`TRACE(en-US)` : 메서드는 목적 리소스의 경로를 따라 메시지 loop-back 테스트 한다.

`PATCH` : 메서드는 리소스의 부분만을 수정하는 데 쓰인다.[HTTP 메시지](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages)[HTTP 상태 코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)