# 멱집합 알고리즘

## 문제

김코딩은 몇 년의 해외 출장 끝에 본가에 내려왔습니다. 오랜만에 보는 김코딩의 얼굴에 반가웠던 부모님은 상다리가 부러질 정도로 음식을 만들었습니다. 감동의 재회도 잠시, 의자에 앉아 식사를 하려던 김코딩은 무엇부터 먹어야 될지 깊은 생각에 빠졌습니다. 정성스럽게 차려 주신 만큼, 최대한 많은 방법으로 다양하게 먹고 싶었기 때문입니다.

밥은 한 가지이며 반찬은 다수일 때, 밥과 함께 먹을 수 있는 반찬의 모든 경우의 수를 배열에 담아 리턴하세요.

---

## 주의사항

- 반찬은 영문으로 작성이 되어 있습니다.
- 반찬은 중복되지 않습니다.
- 반찬을 먹지 않는 것도 포함됩니다. (출력되는 2차원 배열은 빈 배열을 포함합니다.)
- 반찬은 3개 이상 99개 이하입니다.
- 출력되는 배열은 전부 사전식 순서(lexical order)로 정렬되어야 합니다.

---

## 입출력 예시

```javascript
let output = missHouseMeal(["eggroll", "kimchi", "fishSoup"]);
console.log(output);
/*
[ [], 
  [ 'eggroll' ], 
  [ 'eggroll', 'fishSoup' ], 
  [ 'eggroll', 'fishSoup', 'kimchi' ], 
  [ 'eggroll', 'kimchi' ], 
  [ 'fishSoup' ], 
  [ 'fishSoup', 'kimchi' ], 
  [ 'kimchi' ]
] 
*/
```

---

## code

```javascript
function missHouseMeal(sideDishes) {
    // TODO: 여기에 코드를 작성합니다.
    // 멱집합이란 -> 멱집합(powerset)은 주어진 집합의 모든 부분 집합들로 구성된 집합이며, 집합의 모든 부분집합들을 말한다.
    // 2차원 배열을 리턴해야한다.
    // 사전식 순서로 정렬되야 하므로 .sort() 사용
    // 반찬을 담을 빈 배열을 선언
    // 재귀로 쓸 함수를 만든다.
    // 재귀로 빈배열에 하나씩 담는다(빈 배열 포함)
    let result = [];
    sideDishes.sort();
    
    function powerSet(idx, sideDish) {
        console.log('idx: ', idx)
        console.log('sideDish: ', sideDish)
        if(idx === sideDishes.length){
            result.push(sideDish);
            return;
        }
        powerSet(idx + 1, sideDish);
        powerSet(idx + 1, [sideDish, ...sideDishes[idx]]);
    }
    powerSet(0, []);
    // console.log(result)
    return result.sort()
}


missHouseMeal(['pasta', 'oysterSoup', 'beefRibs', 'tteokbokki'])

```

