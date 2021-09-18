## 문제 

세로 길이 2, 가로 길이 n인 2 x n 보드가 있고, 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 한다.

```javascript
let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.

  // 재귀함수를 이용한 풀이
  // let tiling = function(n) {
  //   if( n <= 2){
  //     return n
  //   }
  //   return tiling(n - 1) + tiling(n - 2)
  // }
  
  const memo = [0,1,2]

  // !!재귀함수 
  let rec = (i) => {
    if(memo[i] !== undefined){
      return memo[i]
    }
    if(i <= 2){
      return memo[n]
    }
    memo[i] = rec(i - 1) + rec(i - 2)
    return rec(i)
  };

  return rec(n)
};

```

