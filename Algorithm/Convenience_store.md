# 편의점 알바 

## 문제

편의점에서 아르바이트를 하고 있는 중에, 하필이면 피크 시간대에 손님에게 거스름돈으로 줄 동전이 부족하다는 것을 알게 되었습니다. 현재 가지고 있는 동전은 `1원`, `5원`, `10원`, `50원`, `100원`, `500원`으로 오름차순으로 정렬되어 있고, 각 동전들은 서로 배수 관계에 있습니다. 동전 개수를 최소화하여 거스름돈 K를 만들어야 합니다. 이때, 필요한 동전 개수의 최솟값을 구하는 함수를 작성해 주세요.

---

## code

```javascript
function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.
  let result = 0;
  const coin = [500,100,50,10,5,1];
  for(let i = 0; i < coin.length; i++){
    if(k > 0){
      let sum = Math.floor(k / coin[i]);
      result = result + sum;
      k = k - (coin[i] * sum);
    }
  }
  return result
}

```

