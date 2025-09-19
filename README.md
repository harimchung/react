## Day 3을 진행하며 느낀점

### 1. useEffect
- return 에는 clean up 함수를 넣는다.
- use effect안에 들어가는 함수는 사이드 이펙트 라고 부른다.
- 기본적으로 사이드 이펙트는 마운트 (실행) -> 클린업 -> 변화가 일어났을 때 재마운트 (실행)
- 외부 api 연결을 해제하거나, 메모리 누수를 막거나, setTimeout, setInterval 을 해제할 때 cleanup을 사용한다.
- 마운드 / 업데이트 / 언마운트
- useEffect는 '렌더링 된 이후' 실행된다.

### 2. Debounced Input
- 먼저 진행한 debounced input은 사용자의 입력 => 바로바로 update가 아니라!
- 사용자의 입력이 끝나고 5초간 입력이 없어야 update하는 로직이다.
- input이 변하게 되면 (useEffect에서 추적) timer 함수를 작동하는데
- 다음 input이 변하면 기존의 timer를 cleanup 하고 다시 timer를 작동시킨다.
- 결과적으로 delay 후에 props로 받은 onChange함수 실행!

### 3. Counter With Prev
- CustomHook 을 처음 만들어봤다. (물론 ai 가 만들어줬지만)
- hook 은 use로 시작해야하는 규칙이 있고. 일반 함수와 차이점이라면 react에서 기본 제공하는 다른 hook 들을 조합해서 쓸 수 있다는 점.
- 이걸 이용해서 useprevious는 return 값이 먼저 실행되고 => 렌더링 이후에 use Effect 가 되기 떄문에 component의 value값이 update되면서 다시 return 되는 형태
- 따라서 언제나 '이전 값'을 기억할 수 있는 형태가 되는 것이다.
- 반박자 차이! 를 이용한다는걸 이렇게 배웠다.

### 3. terminal 에서 powershell 로 실행할 때와 gitbash 로 실행할 때의 차이
- 크게 포트차이 그리고 속도차이가 있었다.
- gpt 에게 원인을 물어보니, git bash 는 windows환경에서 ls, rm 과 같은 명령어를 사용하기 위해서 에뮬레이션
  이라는 작업을 한단다. 따라서 그냥 windows에서 바로 실행되는 powershell과는 다르게, 한 단계 추가연산이 들어가기 때문에
  상대적으로 느린것.
- 그리고 포트번호는 기본 3000이지만, 사용 중인경우 다른 포트를 사용한단다.
- 잊지말고 bash가 아닌 powershell 환경에서 실행하도록 주의!

### 더 궁금한점
server component가 무엇인지?
