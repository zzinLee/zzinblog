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
pnpm lint         # ESLint 린트 검사
pnpm lint:fix     # ESLint 자동 수정
pnpm check        # ESLint + Prettier 검사
pnpm fix          # ESLint + Prettier 수정
```

## Directory Structure

```
src/
├── components/       # 재사용 Astro/React 컴포넌트
│   ├── Header.astro  # 공통 헤더/네비게이션
│   ├── Footer.astro  # 공통 푸터
│   ├── PostCard.astro # 글 목록 카드
│   └── FontHead.astro # 폰트 로딩
├── content/
│   └── posts/        # .md 블로그 글 저장소
├── content.config.ts # Content Collection 스키마 정의
├── layouts/
│   ├── Layout.astro      # 베이스 레이아웃 (SEO 메타 포함)
│   └── PostLayout.astro  # 글 상세 레이아웃
├── pages/
│   ├── index.astro       # 메인 (최신 5개 글)
│   ├── 404.astro
│   ├── posts/
│   │   ├── index.astro       # 전체 글 목록
│   │   └── [...slug].astro   # 글 상세 (동적 라우팅)
│   └── sitemap.xml.ts
└── styles/
    └── global.css    # 전역 CSS + Markdown prose 스타일
public/               # 정적 파일 (favicon, og-image, robots.txt)
```

## Blog Content Pattern

- **Content Collections**: Astro Content Collections (`astro:content`) 사용
- **글 저장 위치**: `src/content/posts/*.md`
- **글 스키마**: `content.config.ts`에 Zod 스키마 정의
  - `title` (string, 필수)
  - `description` (string, 필수)
  - `date` (Date, 필수)
  - `tags` (string[], 선택)
  - `draft` (boolean, 기본값 false) — draft: true인 글은 목록/빌드에서 제외
- **라우팅**: `pages/posts/[...slug].astro`에서 `getStaticPaths()`로 정적 생성
- **Markdown 스타일**: `global.css`의 `.prose` 클래스로 관리

### 새 글 작성법

`src/content/posts/`에 `.md` 파일 생성 후 frontmatter 작성:

```md
---
title: "글 제목"
description: "글 설명"
date: 2026-03-10
tags: ["tag1", "tag2"]
draft: false
---

본문 내용...
```

## Code Conventions

- **Path Alias**: `@/*` → `./src/*`
- **Astro 컴포넌트**: `.astro` 확장자, frontmatter에서 TypeScript 로직
- **React 컴포넌트**: 인터랙티브한 UI에만 사용 (Island Architecture)
- **Props 타입**: TypeScript interface로 정의
- **JSX**: React JSX 문법 사용
- **레이아웃 패턴**: `Layout.astro`(베이스) → `PostLayout.astro`(글 전용) 계층 구조
- **공통 UI**: Header/Footer는 각 페이지/레이아웃에서 직접 import

## Formatter (Prettier)

- **도구**: Prettier + prettier-plugin-astro
- **들여쓰기**: Space 2칸
- **따옴표**: Double quote (`"`)
- **세미콜론**: 항상 사용
- **Trailing comma**: ES5 스타일

## Linter (ESLint)

- **도구**: ESLint + eslint-plugin-astro + typescript-eslint
- **설정**: eslint.config.js (Flat Config)
- **주요 규칙**: TypeScript 추천 규칙 + Astro 추천 규칙

## Important Notes

- SEO 최적화: sitemap.xml, robots.txt, Open Graph 메타 태그
- Astro Island Architecture: 최소한의 클라이언트 JavaScript
