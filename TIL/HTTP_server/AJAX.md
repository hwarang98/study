# AJAX란?

> **Asynchronous JavaScript And XMLHttpRequest**의 약자로, JavaScript, DOM, Fetch, XMLHttpReqest, HTML 등의 다양한 기술을 사용하는 웹 개발 기법이다.

## **특징**

AJAX의 가장 큰 특징은 웹 페이지에 필요한 부분에 필요한 데이터만 비동기적으로 받아와 화면에 그릴수 있다.

---

## 예제

다음 사진은 구글 메인 화면이다 여기에서 유저의 요구에 따라 반응하는곳은 어디일까?

![image-20211118142705180](/Users/hwarang/Library/Application Support/typora-user-images/image-20211118142705180.png)

바로 검색창이다. 입력창에 어떠한 글자를 치게되면 서버에서 단어를 받아와 추천 검색어로 보여준다.

![image-20211118142739989](/Users/hwarang/Library/Application Support/typora-user-images/image-20211118142739989.png)

검색창에서는 필요한 데이터만 비동기적으로 받아와 렌더링되며, 여기에 AJAX가 사용된다.

---

# AJAX의 두가지 핵심 기술

> AJAX를 구성하는 핵심 기술은 **JavaScript**와 **DOM** & **Fetch**이다.

- 클라이언트에서 요청을 보내면 매번 새로운 페이지로 이동해야 했었다 하지만 `Fetch` 를 사용하면 서버로부터 필요한 데이터를 받아올수 있다.
- DOM을 사용해 조작할 수 있기 때문에, `Fetch`를 통해 전체 페이지가 아닌 필요한 데이터만 가져와 **DOM**에 적용시켜 새로운 페이지로 이동하지 않고 기존 페이지에서 필요한 부분만 변경할 수 있다.

---

### what is Fetch?

- 사용자가 현재 페이지에서 작업을 하는 동안 서버와 통신할 수 있도록 한다.
- 즉, 브라우저는 Fetch가 서버에 요청을 보내고 응답을 받을때까지 모든 동작을 멈추는 것이 아니라, 계속해서 페이지를 사용할 수 있게 하는 비동기적인 방식을 사용합니다.

---

# XHR & Fetch

- `Fetch` 이전에는 `XHR`(XMLHttpRequest)를 사용했었다.
- `Fetch`는 `XHR`의 단점을 보완한 새로운 Web API이며, XML보다 가볍고 JavaScript와 호환되는 JSON을 사용합니다. 따라서 XHR보다 Fetch를 많이 사용한다.

### Fetch 사용예제

```javascript
// Fetch를 사용
fetch('<http://52.78.213.9:3000/messages>')
	.then (function(response) {
		return response.json();
	})
	.then(function (json) {
		...
});
```



### XHR 사용예제

```jsx
 // XMLHttpRequest를 사용
var xhr = new XMLHttpRequest();
xhr.open('get', '<http://52.78.213.9:3000/messages>');

xhr.onreadystatechange = function(){
	if(xhr.readyState !== 4) return;
	// readyState 4: 완료

	if(xhr.status === 200) {
        // status 200: 성공
		console.log(xhr.responseText); // 서버로부터 온 응답
	} else {
		console.log('에러: ' + xhr.status); // 요청 도중 에러 발생
	}
}

xhr.send(); // 요청 전송
```

---

# AJAX의 장점

- 서버에서 **HTML**을 완성하여 보내주지 않아도 웹페이지를 만들 수 있다.
- **AJAX**를 사용하면 서버에서 완성된 **HTML**을 보내주지 않아도 필요한 데이터를 비동기적으로 가져와 브라우저에서 화면의 일부만 업데이트 하여 렌더링 할 수 있다.
- 표준화된 방법 이전에는 브라우저마다 다른 방식으로 **AJAX**를 사용했으나, **XHR**이 표준화 되면서부터 브라우저에 상관 없이**AJAX**를 사용할 수 있게 되었다.
- 유저 중심 어플리케이션 개발 **AJAX**를 사용하면 필요한 일부분만 렌더링하기 때문에 빠르고 더 많은 상호작용이 가능한 어플리케이션을 만들 수 있다.
- 더 작은 대역폭 대역폭: 네트워크 통신 한 번에 보낼 수 있는 데이터의 크기. 이전에는 서버로부터 완성된 HTML 파일을 받아와야했기 때문에 한번에 보내야 하는 데이터의 크기가 컸다. 그러나 AJAX에서는 필요한 데이터를 텍스트 형태(JSON, XML 등) 보내면 되기 때문에 비교적 데이터의 크기가 작다.

---

# AJAX의 단점

- **Search Engine Optimization**(SEO)에 불리 **AJAX** 방식의 웹 어플리케이션의 HTML 파일은 뼈대만 있고 데이터는 없기 때문에 사이트의 정보를 긁어가기 어렵다.
- 뒤로가기 등의 기능을 구현하기 위해서는 별도로 **History API**를 사용해야 합니다.