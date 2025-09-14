<<<<<<< HEAD
## Day 1을 진행하며 느낀점

### 1. next.js
- 왜 next.js를 사용해야 하나? 하고 생각했는데, page routing을 쉽게 할 수 있고 SSR이 구현 가능하다는 이유가 가장 컸다.
- 생각해보니 예전에 react 를 쓸 때 routing 을 할 때, react router 를 사용했던 것 같았는데, 더 가볍게 routing을 구현할 수 있겠구나
- 회사에서는 page router 방식을 쓰고 있는데, app router 방식은 또 처음 써보네
- page router는 _pages 하위에 실제로 들어가는 페이지 컴포넌트를 만들고, Page폴더 하위의 폴더가 그대로 주소가 되는 방식이라면,
- app router 방식은 폴더 이름이 경로가 되고, 폴더 아래의 page.tsx 가 해당경로의 컴포넌트가 된다는 점.
- 그리고 useState를 사용하려고 했더니 TypeError: useState only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component
  라는 에러가 발생했다.
- App Router에선 기본이 Server Component → 즉 서버에서 먼저 렌더링(SSR/SSG 가능).
- 따라서, 클라이언트 렌더링이 필요하면 파일 최상단에 "use client" 선언 후 React 훅(useState, useEffect 등)을 쓰면 된다는 점이 인상적이었다.

### 더 궁금한점
server component가 무엇인지?
=======
# react
>>>>>>> d56d77c (Initial commit)
