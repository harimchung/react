## Day 2을 진행하며 느낀점

### 1. component & props
- react에서 가장 기초적이면서 핵심적인 기능이라고 생각하는 컴포넌트와 프롭에 대해서 공부했다.
- 이전과 다르게 새로 알게 된 점이라면 props에서 기본적으로 지정해둔 값은 '값이 없거나 있어야만 지정된다' 는 점. undefined 는 포함되지 않는다.
- interface와 type 도 궁금했는데, interface는 extends를 사용할 수 있고 주로 객체 사용 시에 이용한다. 같은 이름이면 합쳐지고.
- type은 && 처럼 union을 사용할 수 있다. 주로 util 에 많이 쓰이고, 같은 이름 사용하면 에러.
- 그리고 type 에서는 제너릭을 사용할 수 있다고 되어있는데, 이 제너릭은 <T> 같은거다. 그러니까 컴포넌트에서 사용할 타입을 동적으로도 지정가능하다는 뜻.
- export default와 export 의 차이점도 궁금했는데 export default는 대표로 하나만 export한다는 뜻. export default 를 사용하면 다른 컴포넌트에서 as 를 사용해서 다른 이름으로도 불러올 수 있다.
- 반면 export는 이름 그대로 가져와야하고, 한 컴포넌트 내에서 여러개의 함수를 export 해야할 때 주로 사용.
- 당연히 export default와 export는 동시에 사용가능. 대신 default는 한번만 사용가능!

### 더 궁금한점
