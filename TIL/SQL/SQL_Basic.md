# SQL Basic

- `Select`

- `Where`

- `And`, `Or`, `Not`

- `Order By`

- `Insert Into`

- `Null Values`

- `Update`

- `Delete`

- `Count`

- `Like`

- `Wildcards`

- `Aliases`

- ```
  Joins
  ```

  - `Inner Join`
  - `Left Join`
  - `Right Join`

- `Group By`

------

**데이터베이스 관련 용어**

- `SQL Create DB`
- `SQL Drop DB`
- `SQL Create Table`
- `SQL Drop Table`
- `SQL Alter Table`
- `SQL Not Null`
- `SQL Unique`
- `SQL Primary Key`
- `SQL Foreign Key`
- `SQL Default`
- `SQL Auto Increment`
- `SQL Dates`

------

# 데이터베이스 관련 명령어

### **데이터베이스 생성**

```sql
CREATE DATABASE 데이터베이스_이름;
```

------

### **데이터베이스 사용**

데이터베에스를 이용해 테이블을 만들거나 수정하거나 삭제하는 등의 작업을 하려면, 먼저 데이터 베이스를 사용하겠다는 명령을 전당해야한다.

```sql
USE 데이터베이스_이름;
```

------

### 테이블 생성

```sql
CREATE TABLE user (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  email varchar(255)
);
```

------

### 테이블 정보 확인

```sql
DESCRIBE user;
mysql> describe user;
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int          | NO   | PRI | NULL    | auto_increment |
| name  | varchar(255) | YES  |     | NULL    |                |
| email | varchar(255) | YES  |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)
```

------

# SQL 명령어

## **SELECT**

SELECT는 데이터셋에 포함될 특성을 특정한다.

```sql
SELECT 'hello world' // 일반 문자열
SELECT 2 // 숫자
SELECT 15 + 3 // 간단한 연산
```

------

## **FROM**

테이블과 관련한 작업을 할 경우 반드시 입력해야 하며 `FROM` 뒤에는 결과를 도출해낼 데이터베이스 테이블을 적어준다.

```sql
// 특정 틀성을 테이블에서 사용
SELECT 특성_1 FROM 테이블_이름 

// 몇 가지의 특성을 테이블에서 사용
SELECT 특성_1, 특성_2 FROM 테이블_이름 

// 테이블의 모든 특성을 선택
SELECT * FROM 테이블_이름
```

------

## where

필터 역할 하는 쿼리문

```sql
// 특정 값과 동일한 데이터 찾기
SELECT 특성_1, 특성_2 FROM 테이블_이름 WHERE 특성_1 = "특정 값"

// 특정 값을 제외한 값을 찾기
SELECT 특성_1, 특성_2 FROM 테이블_이름 WHERE 특성_2 <> "특정 값"

// 트정 값보다 크거나 작은 데이트를 필터할땐 < > <= >= 를 사용
SELECT 특성_1, 특성_2 FROM 테이블_이름 WHERE 특성_1 > "특정 값"

SELECT 특성_1, 특성_2 FROM 테이블_이름 WHERE 특성_1 <= "특정 값"

// 문자열에서 특정 값과 비슷한 값들을 필터할 때에는 'LIKE'와 '\\%' 혹은 '\\*' 를 사용
SELECT 특성_1, 특성_2 FROM 테이블_이름 WHERE 특성_2 LIKE "%특정 문자열%"

// 리스트의 값들과 일치하는 데이터를 필터할 때에는 'IN' 을 사용
SELECT 특성_1, 특성_2 FROM 테이블_이름 WHERE 특성_2 IN ("특정값_1", "특정값_2")

// 값이 없는 경우 'NULL' 을 찾을 때에는 'IS' 를 사용
SELECT * FROM 테이블_이름 WHERE 특성_1 IS NULL

// 값이 없는 경우를 제외할 때에는 'NOT' 을 추가해 사용
SELECT * FROM 테이블_이름 WHERE 특성_1 IS NOT NULL
```

------

## ORDER BY

돌려받는 데이터 결과를 어떤 기준으로 정렬하여 출력할지 결정하며, `ORDER BY`는 선택적으로 사용가능

```sql
// 기본 정렬은 오름차순이다.
SELECT * FROM 테이블_이름 ORDER BY 특성_1

// 내림차순
SELECT * FROM 테이블_이름 ORDER BY 특성_1 DESC
```

------

## LIMIT

결과로 출력할 데이터의 개수를 정할 수 있습니다. LIMIT은 선택적으로 사용할 수 있으며, 쿼리문에서 사용할 때에는 가장 마지막에 추가된다.

```sql
// 데이터 결과를 200개만 출력
SELECT * FROM 테이블_이름 LIMIT 200
```

------

## DISTINCT

```sql
// 유니크한 값을 받고 싶을 때에는 SELECT DISTINCT 를 사용
SELECT DISTINCT 특성_1 FROM 테이블_이름

// 특성_1, 특성_2, 특성_3의 유니크한 '조합' 값들을 선택
SELECT DISTINCT 특성_1, 특성_2, 특성_3 FROM 테이블_이름
```

------

## INNER JOIN

`INNER JOIN` 이나 `JOIN` 으로 실행할 수 있다.

```sql
// 둘 이상의 테이블을 서로 공통된 부분을 기준으로 연결
SELECT * FROM 테이블_1 JOIN 테이블_2 ON 테이블_1.특성_A = 테이블_2.특성_B
```

------

## OUTER JOIN

`Outer JOIN` 은 다양한 선택지가 있다.

```sql
// 'LEFT OUTER JOIN'으로 LEFT INCLUSIVE을 실행한다
SELECT * FROM 테이블_1 LEFT OUTER JOIN 테이블_2 ON 테이블_1.특성_A = 테이블_2.특성_B
```

------