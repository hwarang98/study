# URL

> Uniform Resource Locator의 줄임말로, 네트워크 상에서 웹 페이지, 이미지, 동영상 등의 파일이 위치한 정보를 나타낸다.

**scheme, hosts, url-path로 구분할 수 있다.**

- **scheme**: 가장 먼저 작성하고, 통신 방식(프로토콜)을 결정한다.
  - *일반적인 웹 브라우저에서는 http(s)를 사용*

- **hosts**: 웹 서버의 이름이나 도메인, IP를 사용하며 주소를 나타낸다.

- **url-path:** 웹 서버에서 지정한 루트 디렉토리부터 시작하여 웹 페이지, 이미지, 동영상 등이 위치한 경로                                                      와 파일명을 나타낸다.

---

# URI

> Resource Identifier의 줄임말로, 일반적으로 URL의 기본 요소인 scheme, hosts, url-path에 더해 query, bookmark를 포함한다.

브라우저의 검색창을 클릭하면 나타나는 주소가 URI 이다

URI는 URL을 포함하는 상위개념이다.

URL = URI ⭕️

URI = URL ❌

---

| 부분                                 | 명칭     | 설명                                                         |
| ------------------------------------ | -------- | ------------------------------------------------------------ |
| `file://`, `http://`, https://       | scheme   | 통신 프로토콜                                                |
| `127.0.0.1`, `www.google.com`        | host     | 웹 페이지, 이미지, 동영상 등의 파일이 위치한 웹 서버, 도메인 또는 IP |
| `:80`, `:443`, `:3000`               | port     | 웹 서버에 접속하기 위한 통로                                 |
| `/search`, `/Users/username/Desktop` | url-path | 웹 서버의 루트 디렉토리로부터 웹 페이지, 이미지, 동영상 등의 파일이 위치까지의 경로 |
| `q=JavaScript`                       | query    | 웹 서버에 전달하는 추가 질문                                 |