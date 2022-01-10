# 보드게임

## 문제

N * N의 크기를 가진 보드판 위에서 게임을 하려고 합니다. 게임의 룰은 다음과 같습니다.

1. 좌표 왼쪽 상단(0, 0)에 말을 놓는다.
2. 말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
3. 조작의 기회는 딱 한 번 주어진다.
4. 조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
   - 예시: `UDDLLRRDRR`, `RRRRR`
5. 한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.
6. 방문한 곳을 또 방문해도 숫자를 획득할 수 있다.
7. 보드 밖을 나간 말은 OUT 처리가 된다.
8. 칸 안의 숫자는 0 또는 1이다.
   1. 단, 좌표 왼쪽 상단(0, 0)은 항상 0이다. 
9. 획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.

보드판이 담긴 board와 조작하려고 하는 문자열 operation이 주어질 때, 말이 해당 칸을 지나가면서 획득한 숫자의 합을 구하는 함수를 작성하세요. 

---

## code

```javascript
function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    //
    const move = {
        U: [-1, 0],
        D: [1, 0],
        R: [0, 1],
        L: [0, -1],
    };
    const len = board.length;
    const isValid = (y, x) => 0 <= y && y < len && 0 <= x && x < len;
    console.log('isValid: ', isValid(1,2))

    let y = 0; // 0 0 1  0  0  1
    let x = 0; // 1 1 0 -1 -1  0
    let score = 0;
    for (let i = 0; i < operation.length; i++) { // R R D L L D
        const [dY, dX] = move[operation[i]]; 
        console.log('dY: ', dY)
        console.log('dX: ', dX)
        y += dY; // 0 0 1  0  0  1
        x += dX; // 1 1 0 -1 -1  0
        if (isValid(y, x) === false) return "OUT";

        score += board[y][x]; // board[0][1], board[0][1], board[1][0], board[0][-1]
        console.log('score: ', score)
        }
    return score;
}
```

