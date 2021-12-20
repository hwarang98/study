# SQL

- SQL이란 **데이터베이스 용 프로그래밍 언어** 이다.
- **데이터베이스에 쿼리를 보내 원하는 데이터를 가져오거나 삽입할 수 있다.**
- SQL 은 데이토가 구조화된 테이블을 사용하는 데이터 베이스에서 활용할 수 있다.
- 데이터의 구조가 고정되어 있지않는 데이터베이스를 noSQL 이라고한다.(MongoDB)
- SQL 을 사용하기 위해선 데이터의 구조가 고정되어 있어야한다.

# SQL 종류

- Data Definition Language
  - DDL(Data Definition Language)은 데이터를 정의할 때 사용하는 언어이다.
  - 테이블을 만들 때 사용하는 `CREATE`나 테이블을 제거할 때 사용되는 `DROP` 등이 DDL에 해당한다.
  - 데이터베이스의 테이블과 같은 오브젝트를 정의할 때 사용한다.
- Data Manipulation Language
  - DML(Data Manipulation Language)은 데이터베이스에 데이터를 저장할 때 사용하는 언어이다.
  - `INSERT`처럼 새로운 레코드를 추가할 때 사용되는 문법을 포함해 데이터를 삭제하는 `DELETE` 나, 변경하는 `UPDATE`가 DML에 포함된다.
- Data Control Language
  - DCL(Data Control Language)은 데이터베이스에 대한 접근 권한과 관련된 문법이다.
  - 어느 유저가 데이터베이스에 접근할 수 있는지 권한을 설정한다.
  - 권한을 주는 `GRANT` 나, 권한을 가져가는 `REVOKE` 등이 DCL에 포함된다.
- Data Query Language
  - DQL(Data Query Language)은 정해진 스키마 내에서 쿼리할 수 있는 언어이다.
  - `SELECT` 가 DQL에 해당합니다. 이렇게 언어를 분류했지만, DQL을 DML의 일부분으로 취급하기도 한다.
- Transaction Control Language
  - TCL(Transaction Control Language)은 DML을 거친 데이터의 변경사항을 수정할 수 있다.
  - `COMMIT` 처럼 DML이 작업한 내용을 데이터베이스에 커밋하거나, `ROLLBACK` 처럼 커밋했던 내용을 다시 롤백하는 문법이 있다.

------

# File I/O

- 파일을 읽는 방식으로 작동하는 형태를 말한다.
- 단점
  - 데이터가 필요할 때마다 전체 파일을 매번 읽어야 하므로 파일의 크기가 커질수록 이 작업은 버겁고, 비효율적이다.
  - 파일이 손상되거나 여러 개의 파일들을 동시에 다뤄야 하거나 하는 등 복잡하고 데이터량이 많아질수록 데이터를 불러들이는 작업이 점점 힘들진다.