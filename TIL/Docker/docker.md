# docker?

# Docker

> 리눅스 응용 프로그램들의 소프트웨어 컨테이너 안에 배치시키는 일을 자동화 하는 오픈 소스 프로젝트이다.

## container

- 애플리케이션이 의존성, 네트워크 환경, 파일 시스템에 구애받지 않고, 도커라는 기술 위에 실행될 수 있도록 만든 애플리케이션 상자이다.

------

## image

- 실행되는 모든 컨테이너는 이미지로부터 생성된다.
- 이미지는 애플리케이션 및 애플리케이션 구성을 함께 담아놓은 템플릿으로, 이를 이용해 즉시 컨테이너를 만들 수 있다.
- 이지미를 이용해 여러 개의 컨테이너를 생성할수 있다.(수평확장 가능)
- 이미즈는 기본 이미지(base image)로 부터 (git 사용과 유사) 변경 사항을 추가,커밋하여 다른 이미지를 만들수 있다.
- node.js로 작성된 애플리케이션을 이미지로 만들고 싶은 경우, nodejs 이미지를 기본 이미지로 삼고 내가 만든 애플리케이션을 추가해 넣고, 이미지화할 수 있다.

------

## repository

- 이미지는 레지스트리에 저장된다.
- 대표적인 이미지 레지스트리로는 **Docker Hub, Amazon ECR**이 있다.
- docker CLI에서 이미지를 이용해 컨테이너를 생성할 때, 호스트 컴퓨터에 이미지가 존재하지 않는다면, 기본 레지스트리로부터 다운로드 받게 된다.

------

# why use docker?

“**애플리케이션을 환경에 구애 받지 않고 실행이가능하다**”

1. 어떠한 웹 사이트를 만들었다.

2. 배포한다.

3. 배포하기위해 서버 환경에 우리가 만든 웹 을 맞춰서 배포해야하기때문에 그에 따른 설정을 해줘야한다.

4. 그러한 작업은 매번 다른 웹 서비르를 이용할때마다 설정을 바꿔줘야하고 그 과정중 에러가 날 수 있다.

5. 여기서 docker 를 도입하여 사용한다면, 도커의 컨테이너에 모든 설정을 맞춰주고 베포한다면 어떤 컴퓨터에서 열어봐도 작동이 가능하다.

   (파이썬으로 작업을 한후 docker에 업로드후 파이썬이 없는 컴퓨터에서 열어도 작동한다)