## Third-party 모음
- ⚡️ [Next 15](https://nextjs.org/docs) app router (o) / page router (x)
- 🦾 [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Tailwindcss](https://tailwindcss.com/)
- 💡 [Eslint](https://eslint.org/) Airbnb 설정 추가
- 💖 [Prettier](https://prettier.io/)
- 🐶 [Husky](https://typicode.github.io/husky/)
- 🚀 [PWA](https://web.dev/progressive-web-apps/)
- 💣 [pnpm](https://pnpm.io/) 전역으로 설치 후 사용 할 것 "npm i -g pnpm"
- 🪢 [Jest](https://jestjs.io/)
- 🌚 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- 🗂 [Mantine](https://mantine.dev/) UI/UX 프레임워크

## 개발
### 프로젝트 받은 후 초기 작업
_**npm & yarn 사용 금지 !!!**_
```bash
    npm i -g pnpm
    pnpm install
```

### 로컬 환경 실행 (http://localhost:3000)
```bash
    pnpm run dev
```
### 로컬 환경 (https) (https://localhost:3000)
카메라 등 브라우저 API 권한 획득을 위해 사용 
```bash
    pnpm run dev:https
```

## 테스팅 (단위 테스트)
```bash
    pnpm run test
```

## TDD 
describe : 테스트 그룹화
it : 테스트 정의
expect : 테스트 결과
mock : 특정 모듈이나 함수 동작을 대체
render : 컴포넌트를 가상 DOM에 렌더링 하여 테스트 환경 제공
screen : render 된 컴포넌트의 요소 탐색
- getByText : 지정한 텍스트를 가진 요소 반환
waitFor : 비동기 동작이 완료될 때까지 기다림
userEvent : 사용자의 동작을 시뮬레이션
