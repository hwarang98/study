# rotateMatrix

## 문제

2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.

---

## 입출력예시

```javascript
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(matrix[0][0]); // --> 1
console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[3][2]); // --> 8
```

---

## code

```javascript
const rotateMatrix = function(matrix,rotatetion = 1){
    let tempMatrix = [];
    let M = matrix[0] && matrix[0].length;
    let N = matrix.length;
  	const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];
    rotatetion = rotatetion % 4;
    console.log('rotatetion: ', rotatetion);
    

    for(let row = 0; row < RC[0]; row++){
        tempMatrix[row] = [];
            for(let col = 0; col < RC[1]; col++){
            if(rotatetion === 1) tempMatrix[row][col] = matrix[N - col - 1][row];
            else if(rotatetion === 2) tempMatrix[row][col] = matrix[N - row - 1][M - col - 1];
            else tempMatrix[row][col] = matrix[col][N - row - 1];
        } 
    }
    console.log('tempMatrix: ', tempMatrix);
    return tempMatrix
}

```

