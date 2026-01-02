# CLAUDE.md - Project Context for Claude Code

## Project Overview

**zzinblog** - Astro 기반 개인 블로그/포트폴리오 사이트 (개발 중)

- Site URL: https://zzinlee.dev
- Language: Korean (ko)

## Tech Stack

- **Framework**: Astro 5.5.5 (정적 사이트 생성기)
- **UI Library**: React 19.1.0 (@astrojs/react 통합)
- **Language**: TypeScript (strict mode)
- **Package Manager**: pnpm
- **Node Version**: 20+

## Commands

```bash
pnpm dev          # 개발 서버 실행
pnpm build        # 프로덕션 빌드
pnpm preview      # 빌드 결과 미리보기
pnpm format       # Prettier 포맷팅
pnpm format:check # 포맷팅 검사
```

## Directory Structure

```
src/
├── layouts/      # Astro 레이아웃 컴포넌트
├── pages/        # 페이지 (파일 기반 라우팅)
└── styles/       # 전역 CSS
public/           # 정적 파일 (favicon, og-image, robots.txt)
```

## Code Conventions

- **Path Alias**: `@/*` → `./src/*`
- **Astro 컴포넌트**: `.astro` 확장자, frontmatter에서 TypeScript 로직
- **Props 타입**: TypeScript interface로 정의
- **JSX**: React JSX 문법 사용

## Formatter (Prettier)

- **도구**: Prettier + prettier-plugin-astro
- **들여쓰기**: Space 2칸
- **따옴표**: Double quote (`"`)
- **세미콜론**: 항상 사용
- **Trailing comma**: ES5 스타일

## Important Notes

- SEO 최적화: sitemap.xml, robots.txt, Open Graph 메타 태그
- Astro Island Architecture: 최소한의 클라이언트 JavaScript
