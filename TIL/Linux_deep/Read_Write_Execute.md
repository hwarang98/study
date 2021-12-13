### 폴더인지 파일인지 확인하기

1. 터미널에 `ls -l` 을 입력하고 엔터를 누른다.
2. 다음과 같은 결과를 확인 할 수 있다.

![스크린샷 2021-12-13 오후 9.19.00](/Users/hwarang/Desktop/스크린샷 2021-12-13 오후 9.19.00.png)

- helloworld.js는  `-rw-r--r--` 이라고 출력되었고, 폴더 linux는 `drwxr-xr-x` 라고 출력되어있다.
- 첫 시작인 `-` 와 `d` 는 각각 **not directory**와 **directory**를 나타낸다.
- 폴더면 `d` 파일이면 `-` 로 나타낸다.
- r, w, x는 각각 **read permission**, **write permission**, **execute permission**으로 **읽기 권한**, **쓰기 권한**, **실행 권한** 을 나타낸다.
- helloworld.js의 권한은 `rw-r--r--` 으로, 소유자는 읽기와 쓰기가 가능하고, 다른 사용자 그룹은 읽기만 가능하다는 의미이다.
- 폴더 linux의 권한은 `rwxr-xr-x` 으로, 소유자는 읽기와 쓰기, 실행이 가능하고, 다른 사용자 그룹은 읽기와 실행만 가능하다.

---

# user, group, other

### **user**

- user는 파일의 소유자이다. 기본적으로 파일을 만든 사람이 소유자가 된다. 따라서 user를 소유자라고 하기도 한다

### **group**

- group에는 여러 user가 포함될 수 있다. 그룹에 속한 모든 user는 파일에 대한 동일한 group 액세스 권한을 갖는다. 많은 사람이 파일에 액세스해야 하는 프로젝트가 있다고 가정해보자. 각 user에게 일일이 권한을 할당하는 대신에 모든 user를 group에 추가하고, 파일에 group 권한을 할당할 수 있다.

### **other**

- 파일에 대한 액세스 권한이 있는 다른 user이다. 파일을 만들지 않은 다른 모든 user를 의미한다. 따라서 other 권한을 설정하면, 해당 권한을 global 권한 설정이라고 볼 수도 있다.

------

# chmod: 권한을 변경하는 명령어

명령어 chmod 폴더나 파일의 읽기 쓰기 실행 권한을 변경 할 수 있다.

두 가지 방법

1. 더하기 (`+`), 빼기(`-`), 할당(`=`) 과 액세서 유형을 표기해서 변경하는 **Symbolic method** 이다.
2. 두 번째는 rwx를 3 bit로 해석하여, 숫자 3자리로 권한을 표기해서 변경하는 **Absolute form** 이다.

**Symbolic method는 액세스 클래스, 연산자, 액세스 타입으로 구분한다.**

| Access class         | Operator             | Access Type |
| -------------------- | -------------------- | ----------- |
| u (user)             | + (add access)       | r (read)    |
| g (group)            | - (remove access)    | w (write)   |
| o (other)            | = (set exact access) | x (execute) |
| a (all: u, g, and o) |                      |             |

**Absolute form은 숫자 7까지 나타내는 3 bits의 합으로 표기한다.**

| Permission  | Number |
| ----------- | ------ |
| Read (r)    | 4      |
| Write (w)   | 2      |
| Execute (x) | 1      |

만약, user는 `rwx` 를, group과 other은 `r--` 로 권한을 변경하려고 한다면, 위 표에 나와있는 숫자의 합을 user, group, other 순으로 입력하여 사용한다.

```
# u=rwx (4 + 2 + 1 = 7), go=r (4 + 0 + 0 = 4)
chmod 744 helloworld.js # -rwxr--r--
```

| #    | Sum                | rwx  |
| ---- | ------------------ | ---- |
| 7    | 4(r) + 2(w) + 1(x) | rwx  |
| 6    | 4(r) + 2(w) + 0(-) | rw-  |
| 0    | 0(-) + 0(-) + 0(-) | ---  |
| 1    | 0(-) + 0(-) + 1(x) | --x  |
| 2    | 0(-) + 2(w) + 0(-) | -w-  |
| 3    | 0(-) + 2(w) + 1(x) | -wx  |
| 4    | 4(r) + 0(-) + 0(-) | r--  |
| 5    | 4(r) + 0(-) + 1(x) | r-x  |