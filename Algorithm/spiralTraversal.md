# spiralTraversal

## 문제

2차원 M x N 배열을 나선형(spiral)으로 순회해야 합니다.

---

## 입력

- 세로 길이(`matrix.length`)가 M, 가로 길이(`matrix[i].length`)가 N인 2차원 배열
- `matrix[i]`는 `string` 타입을 요소로 갖는 배열
- `matrix[i][j].length`는 1

---

## 주의사항

- 순회는 좌측 상단 (0,0)에서 시작합니다.
- 배열의 모든 요소를 순서대로 이어붙인 문자열을 리턴해야 합니다.

---

## 입출력 예시

```javascript
let matrix = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
];
let output = spiralTraversal(matrix);
console.log(output); // --> 'ABCFIHGDE'

matrix = [
  ['T', 'y', 'r', 'i'],
  ['i', 's', 't', 'o'],
  ['n', 'r', 'e', 'n'],
  ['n', 'a', 'L', ' '],
];
output = spiralTraversal(matrix);
console.log(output); // --> 'Tyrion Lannister'

```

---

## code

```javascript
const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  // 좌측 상단[0,0] 에서 시작해서 나선형으로 순회한다.
  // 빈 문자열을 만들고 순회한 요소들을 하나씩 넣는다.
  // 순회 -> 반복문
  let result = '';
  return recur(matrix,result);
};

const recur = function (matrix, result) {
  if(matrix.length === 0){
  // matrix 길이가 0이면 재귀 종료(탈출조건)
    return result;
  }

  const m = matrix.length; // 세로길이
  const n = matrix[0].length; // 가로길이

  if(m === 1){
    // matrix 2차원 배열이 한 줄 일때
    for (let j = 0; j < n; j++) {
      result += matrix[0][j];
    }
  }
  
  if(m > 1){
    // matrix 2차원 배열이 1줄 이상일때
    // 4가지 일 이 일어나야한다.
    // n = matrix[0].length ,3
    for(let i = 1; i <= 4; i++){
      // 1. 맨 위쪽 요소들을 result에 넣는다
      if(i === 1){
        for(let j = 0; j < n - 1; j++){
          // matrix[0][0], matrix[0][1], matrix[0][2]
          result = result + matrix[0][j];
        }
      }
      if(i === 2){
        // 2. 가장 오른쪽 요소들을 result 에 넣는다
        for(let j = 0; j < m - 1; j++){
          result = result + matrix[j][n-1];
        }
      }
      if(i === 3){
        // 3. 가장 밑쪽 요소들을 result 에 넣는다
        for(let j = n-1; j > 0 ; j--){ // j < 2; j > 0; j--
          // matrix[2][2], matrix[2][1], matrix[2][0]
          result = result + matrix[m-1][j];
        }
      }
      if(i === 4){
        // 2. 가장 왼쪽 요소들을 result 에 넣는다
        for(let j = m - 1; j > 0; j--){
          result = result + matrix[j][0];
        }
      }
    }
  }
  // 남은 안쪽 배열들은 어떻게처리 할까?
  let spare = [];
  for(let i = 1; i < m - 1; i++){
    // matrix[1].slice()
    spare.push(matrix[i].slice(1, -1));
  }
  return recur(spare, result);
};
```

