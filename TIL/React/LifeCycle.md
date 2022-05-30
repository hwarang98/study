# LifeCycle

말 그대로 생명주기이다. 컴포넌트가 브라우저 상에서 나타날때, 업데이트될때, 사라질 때의 중간 과정에서 어떠한 작업을 행하려고 할때 LifeCycle API 를 사용하면 된다, 여기엔 다양한 메서드들이 컴포넌트의 생명주기 동안 특정 시점에 실향된다. 이들 메서드는 컴포넌트의 생성과 소멸동안 다른 시점에서 개발자가 지정한 동작을 수행하기 때문에 작동 방식을 이해해보자

------

![65383863-16be3180-dd56-11e9-9771-46a40ba34569-2](/Users/hwarang/Downloads/65383863-16be3180-dd56-11e9-9771-46a40ba34569-2.png)

위의 그림과 같이 모든 Component는 크게 `Mounting(생성) - Updating(업데이트) - Unmounting(제거)` 단계를 거친다.

### Mounting

- Constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

처음 `Mounting`된 시점에서 `render()`를 통해 컴포넌트가 DOM 에 붙게 된다. `render()` 함수는 `Pure functions`이기 때문에 어떤 사이드 작업이 이뤄져선 안되며, `setState()`와 같은 state 변경 작업을 render 함수 안에서 해서는 안된다.

`render()`함수가 실행되면 `componentDidMount()`가 실행되며 `Mouting` 작업이 종료되는데, `componentDidMount()`는 `setstate()`의 사용이 가능하며 dom 에 부착과 동시에 실행되기 때문에 state 변경작업이 이뤄질 경우 rendering 이 다시 일어나지만 UI 의 변화가 사용자에게 보이진 않는다. **다시 말하자면, render 가 두 번 일어나지만 화면에는 한 번의 출력만 나타난다는 것이다.** 하지만 rendering 작업이 두 번 이뤄지면 성능상의 문제가 나타나기 때문에, 일반적으로 특별한 케이스인 API 호출이나 component 의 render 작업에 영향이 없어 re-rendring 이 이뤄지지 않는 작업에 사용이 권장된다고 한다.

일반적으로 state 가 변경되는 작업을 할 경우엔 애초에 `constructor`에 선언하는 것이 권장된다고 한다.

------

### Updating

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

Props 나 state 의 변화는 `Updating` 작업을 발생시킨다. `updating` 주기에서의 `render()` 작업이 발생하기 직전 `shouldComponentUpdate()`가 실행된다. `shouldComponentUpdate()`또한 특별한 상황에서만 주로 사용되는데, 그 상황이 바로 **불필요한 render 작업의 취소**이다. redner 를 하기 전이기 때문에 불필요한 render 를 사전에 막을 수 있고 `return false`를 통해 취소할 수 있다. 그렇기 때문에 `shouldComponentUpdate()` 내부에서 state 를 변경하는 일을 해선 안된다고 한다.

이후 `render()`가 실행되 업데이트 작업이 완료되면 마지막으로 `componentDidUpdate()`가 실행된다. 이 작업에서는 `setState()`를 사용해 state 를 변경할 수 있지만, 부적절한 사용은 무한 루프를 야기하기 때문에 필요한 경우에 사용해야한다.

`shouldComponentUpdate()`는 첫번째 인자로 바뀔 state 를 받지만, `componentDidUpdate()`는 첫번째 인자로 바뀌기 전 state 를 받고 있다. 이는 서로 호출 단계가 render 이전과 이후이기 때문이다.

------

### Unmounting

- componentWillUnmount()

component 제거에서 사용되는 메서드는 `componenetWillUnmount()` 이다. 일반적으로 연결했던 이벤트 리스너를 제거하거나 clear timers or caches, cancelling API 등의 정리 활동을 한다. 컴포넌트는 다시 렌더링되지 않으므로 `componentWillUnmount()`내에서 `setState()`를 호출하면 안된다.