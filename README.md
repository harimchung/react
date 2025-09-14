<<<<<<< HEAD
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
=======
# React + Next.js 2주 집중 학습 플랜

## 소개

이 문서는 1년차 주니어가 **React, TypeScript, Next.js** 전반을 2주(14일) 동안 경험하며, 마지막 날엔 실제 배포까지 완수할 수 있도록 돕는 로드맵입니다. 매일 1\~2시간 분량이며, 실습과 산출물을 통해 성장 상황을 확인합니다.

---

## Day 1 \~ Day 14 일정

### Day 1 — 기초 & 환경 세팅

* React 핵심 개념 복습(JSX, 컴포넌트, props/state)
* Vite+React+TS 프로젝트 생성
* Counter 컴포넌트 구현 (증가/감소 버튼)

### Day 2 — 컴포넌트 설계

* children, composition 패턴 학습
* Card, List 등 재사용 컴포넌트 제작
* Counter 리팩토링

### Day 3 — Hooks 기초

* useState, useEffect, useRef 심화
* Debounced search + usePrevious 훅 만들기

### Day 4 — Custom Hooks & Context

* `useFetch<T>` 작성
* ThemeContext 적용 및 토글

### Day 5 — Next.js 시작

* Next 앱 생성(TypeScript)
* 페이지 라우팅(`/`, `/about`)

### Day 6 — 데이터 패칭

* SSG/SSR/CSR 차이 이해
* `getStaticProps`, `getStaticPaths` 연습
* Posts 리스트/상세 구현

### Day 7 — API Routes & Form

* Next API route(`/api/comments`)
* Form 제출 + optimistic update

### Day 8 — TypeScript 심화

* Props 타입, generics, Next 타입
* 기존 코드 타입 강화

### Day 9 — 스타일 & 이미지

* CSS Modules/Tailwind 중 선택
* `next/image` 사용법
* 레이아웃 + 반응형

### Day 10 — 테스트

* Jest + React Testing Library 세팅
* Counter/Form 테스트 작성

### Day 11 — 성능 & 접근성

* Lighthouse, React Profiler 사용
* aria-label, semantic HTML 개선

### Day 12 — 빌드 & CI

* `next build` / `next start` 확인
* GitHub Actions 워크플로우 작성

### Day 13 — 배포

* GitHub → Vercel 연동
* 환경변수 설정 → 빌드/배포 확인

### Day 14 — 최종 정리 & 데모

* README 작성 (프로젝트 개요/실행/배포 URL)
* 사수와 코드리뷰 → 수정 PR
* 5\~10분 발표 및 회고

---

## 최종 목표

* React 컴포넌트/Hooks를 올바르게 이해 및 구현
* TypeScript로 props/hook 타입 명확화
* Next.js 라우팅, 데이터 패칭, API Routes 사용
* 로컬 빌드 → Vercel 배포까지 경험
* 간단한 단위 테스트 작성 및 통과

---

## 프로젝트 제안

> **Simple Blog / Notes App**

* 홈: 포스트 리스트(SSG)
* 상세: 포스트 페이지(SSG/SSR)
* 작성: API route에 POST → 목록 갱신
* 댓글: CSR + optimistic update
* 테스트: Counter/Form 2\~3개
* 배포: Vercel

---

## 참고 자료

* [React 공식 문서](https://react.dev/)
* [Next.js 공식 문서](https://nextjs.org/docs)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
>>>>>>> 9effebc (Update README.md)
