# BFS & DBS

# BFS

- 대표적인 그래프 탐색 알고리즘
- **너비 우선 탐색(Breadth First Search)**: 정점들과 같은 레벨에 있는 노드들(형제 노드들)을 먼저 탐색하는 방식
  - **두 개의 큐**를 사용한다.
  - root와 가까운 node들부터 찾기 때문에 **최단거리를 탐색**할 때 유용하다.
  - queue에 각 노드의 정보를 기록해야 하기 때문에 메모리를 많이 잡아 먹는다.
  - 찾고자 하는 target node가 root node와 가까이 있다고 예상될 경우 BFS를 사용한다.
  - 지도 어플에서 특정 위치까지의 **최단거리** 안내, 혹은 소셜미디어에서 **친구 추천** 등에 이용된다.

---



# DFS

- **깊이 우선 탐색(Depth First Search)**: 정점의 자식들을 먼저 탐색하는 방식
- **한 개의 큐와 한 개의 스택**을 사용한다.
- BFS보다 속도가 느릴 수 있다.
- 미로 게임 등에서 **경로가 존재하는지를 판별**할 때 유용하다.

---



# 자바스크립트로 그래프 구현

```javascript
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
};
```

---

## BFS 알고리즘 구현      

두 개의 **큐(Queue)**를 활용한다.

```javascript
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

const bfs = (graph, startNode) => {
  let visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
      visited.push(node); 
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

console.log(bfs(graph, "A"));
// ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]
```

---

## DFS 알고리즘 구현

- 자료구조 스택과 큐를 활용
  - `needVisit` **스택**과 `visited` **큐**, 두 개의 자료 구조를 생성한다.
  - 큐와 스택 구현은 별도의 라이브러리를 활용할 수도 있지만 간단히 배열을 통해 구현하자.
- **BFS** 구조는 두 개의 큐를 활용하는데, **DFS**는 한 개의 스택과 한 개의 큐를 사용한다는 차이가 있다.
- **BFS** 구조는 이전 노드와 연결된 노드들을 먼저 탐색해야 하기 때문에 **queue**.
- **DFS**는 이전 노드가 아니라 자기 자신과 연결되었던 노드들 먼저 탐색하기 때문에 **stack**을 사용한다.

```jsx
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

// (graph, 시작 정점)
const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

console.log(dfs(graph, "A"));

// ["A", "C", "I", "J", "H", "G", "B", "D", "F", "E"]
```

