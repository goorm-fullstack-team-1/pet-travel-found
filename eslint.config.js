import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']), //ESLint가 검색하지 않을 폴더나 파일 지정
  {
    files: ['**/*.{js,jsx}'], // 검사 대상 파일 확장자 지정(이 경우 JS/JSX파일만 검사함)
    extends: [
      js.configs.recommended, // ESLint 공식 "권장 규칙" 세트 (기본 문법 오류, 변수 선언 오류 등)
      reactHooks.configs['recommended-latest'], // React Hooks 관련 권장 최신 규칙 세트
      reactRefresh.configs.vite, // Vite 환경의 React Refresh 관련 코드 검사 (핫 리로드 시 안전하게 작성되어있는지 확인)
    ],
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020 문법 사용
      globals: globals.browser, // 브라우저 전역 변수 사용 허용 (예: window, document)
      parserOptions: { // JSX 구문을 사용할 수 있도록 설정한 부분
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }], // 사용되지 않는 변수를 에러로 표시(단, 대문자나 언더스코어로 시작하는 변수는 무시. 예: App, Header 그리고 상수 등)
    },
  },
])
