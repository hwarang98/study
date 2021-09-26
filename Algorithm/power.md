## 거듭제곱 알고리즘 

- `Math.pow` 사용 ❌ 
- 시간복잡도 `O(logN)` 을 만족
- 나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문이다. 하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 된다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.

```javascript
function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.

  // exponent가 0일때는 1을 리턴
  // exponent가 짝수일 때 exponent를 2로 나눈다.
  // exponent가 홀수일 때 (exponent - 1)을 2로 나눈다.
  // 각 연산을 해줄때 마다 94,906,249로 나눠 나머지를 구하는 과정을 추가하자
  if(exponent === 0){
    return 1;
  }
  if(exponent%2 === 0){
    let evenNum = power(base, exponent/2) % 94906249
    return (evenNum * evenNum) % 94906249
  }
  else{
    let oddNum = power(base, (exponent - 1)/2) % 94906249
    return (base * ((oddNum * oddNum) % 94906249)) % 94906249
  }
}

```

