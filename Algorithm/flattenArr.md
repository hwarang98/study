## 다차원의 배열을 입력받아 1차원 배열로 리턴

```head```라는 변수에 0번째 인덱스를 할당해준다.

```tail```에 0번째 이후 인덱스 즉 ```arr.slice ``` 을 할당해준다.

```head```가 배열이면 재귀함수를 실행하고 인자로 ```head```, ```tail``` 을 할당해준다.

```[head]``` 에 ```.concat```  을 해줌으로서 head 함수 ```flattenArr()``` 을 추가해주고 인자로는 ```tail``` 의 값 들을 넣어준다. 

```javascript
function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 2차원 배열안의 1차원 배열은 object 타입이다.
  // [[1],2,[3,4],5] -> [1,2,3,4,5]
  // 
  
  if(arr.length === 0){
    return []
  }
  let head = arr[0]
  let tail = arr.slice(1)
  if(Array.isArray(head)){
  return flattenArr([...head, ...tail])
  }
  return [head].concat(flattenArr([...tail]))
}
```

