# binaryHeap

## 문제

정수를 요소로 갖는 배열을 입력받아 이진 힙(binary heap)*을 리턴해야 합니다.

- `이진 힙(binary heap)`은 노드의 값이 특정한 순서를 가지고 있는 완전 이진 트리(Complete Binary Tree)입니다.
- 완전 이진 트리는 이진 트리의 (마지막 레벨 또는 마지막 깊이를 제외하고) 모든 레벨이 노드로 가득 채워져 있어야 합니다. 마지막 레벨은 왼쪽부터 차례대로 채워져 있습니다.
- 이진 힙에서 부모 노드의 값이 (이진 트리이므로 2개의) 자식 노드의 값보다 큰 경우를 최대 힙(max heap), 반대의 경우를 최소 힙(min heap)이라고 합니다.
- **최대힙(max heap)** 을 구현

---

## 입출력 예시

```javascript
let output = binaryHeap([5, 4, 3, 2, 1]);
console.log(output); // --> [5, 4, 3, 2, 1]

output = binaryHeap([3, 1, 21]);
console.log(output); // --> [21, 1, 3]

output = binaryHeap([4, 10, 3, 5, 1]);
console.log(output); // --> [10, 5, 3, 4, 1]
```

---

## code

```javascript
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  // heap은 맨처음 빈 배열로 받고 item은 각각 배열의 인덱스를 차례대로 받아온다
  // 자식노드를 찾는다.
  // 자식노드는 배열의 맨 마지막 인덱스 --> heap.length - 1
  // 부모노드를 찾는다. how?
  // 부모노드는 맨 마지막 인덱스에서 2번째 앞에있는 인덱스
  // 현재 heap의 마지막노드 즉, 자식 노드(childNode)가 부모노드보다 클 경우 while문을 실행
  // while문에서 자식노드와 부모노드의 위치를 바꿔줌 swap() 함수 실행

  heap.push(item);
  let childNode = heap.length - 1;
  let parentsNode = getParentIdx(childNode);

  while(parentsNode >= 0 && heap[childNode] > heap[parentsNode]){
    swap(childNode, parentsNode, heap);
    childNode = parentsNode; 
    parentsNode = getParentIdx(childNode); 
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

```

