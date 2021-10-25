# Tree traversal

## 전위 순회

- 제일 먼저 루트 노드를 방문 A→ 왼쪽 노드로 내려간다 B
- 왼쪽 노드인 B를 서브트리의 루트노드라고 생각하면 B를 방문 → C 로 내려간다.
- C에서 왼쪽 노드가 없기때문에 이후로 방문❌ → 오른쪽 노드인 D를 방문한다.
- 다시 A가 루트인 메인트리로 돌아가서 그 전체에서 오른쪽 서브트리의 루트인 E노드를 방문하고 E에서 왼쪽 오른쪽 순으로 방문하며 탐색한다.

## 예시코드

```javascript
preorder(callback) {
    callback(this.value);  //this를 먼저 방문한다.
    if (this.left) {       //왼쪽 노드가 있으면 내려가서 방문한다.
      this.left.preorder(callback);//왼쪽 노드의 왼쪽 노드로 내려간다.
    }                      //전부 방문하면 왼쪽 노드가 더 이상 없다.
    if (this.right) {      //오른쪽 노드가 있으면 방문한다.
      this.right.preorder(callback);//재귀 시작점인 root(this)로 돌아간다.
    }                      //다시 반복한다.
  }
```



---

## 중위 순회

- 중간에 root 노드를 방문하는 중위 순회다.
- 먼저 왼쪽 노드가 있는지 확인하고 있으면 B로 내려간다.
- B에서 다시 왼쪽이 있으면 C로 내려간다.
- 더이상 없으면 이전 재귀 root인 B로 돌아가서 오른쪽 D를 확인한다.
- 더이상 오른쪽이 없으면 A root 노드로 돌아온다.
- A를 탐색하고, 왼쪽이 없으니 오른쪽으로 내려가서 왼쪽을 찾는다.
- F를  방문하고 E재귀로 돌아와서 E를 탐색한다. E에서 오른쪽이 있는지 확인하고 있으면 G로 내려간다. 그리고 순회를 마친다.

## 예시코드

```javascript
inorder(callback) {
    if (this.left) { //왼쪽 노드를 확인한다. 
      this.left.inorder(callback);//왼쪽이 있으면 더 내려간다. 
    }
    callback(this.value);//더이상 왼쪽이 없으면 이전 root를 탐색한다.
    if (this.right) { //왼쪽과 루트가 끝났으니 오른쪽을 찾기 시작한다. 다시 왼쪽이 있으면 내려간다.
      this.right.inorder(callback);
    }
```

---

## 후위 순회

- root node를 마지막에 탐색하는 후위순위다.
- 왼쪽으로 내려가면서 왼쪽을 전부 탐색하고, 오른쪽 노드들을 탐색하고 중간 root 노드를 탐색한다.
- 다 끝나면 다시 재귀가 시작된 root로 돌아와서 오른쪽을 찾는다.
- 왼쪽이 있으면 왼쪽을 전부확인하고 오른쪽을 확인한다.
- 다 확인했으면 중간 root 노드를 탐색하고, 끝나면 root 재귀로 돌아와서 최상단 root 노드를 탐색한다.

## 예시코드

```javascript
postorder(callback) {
    if (this.left) { //왼쪽이 있으면 확인한다. 끝까지 간다. 못찾으면 시작점으로 돌아온다.
      this.left.postorder(callback);
    }
    if (this.right) {//오른쪽이 있으면 끝까지 확인한다. 못찾으면 시작점으로 돌아온다.
      this.right.postorder(callback);
    }
    callback(this.value);//시작점을 탐색한다.
  }
```

