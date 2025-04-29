# LangUp.ai

LangUp.ai는 AI 기술을 활용하여 언어 학습을 돕는 서비스입니다. 영어 및 다양한 언어를 배우고자 하는 사람들에게 효과적인 학습 환경을 제공합니다.

## 개요

LangUp은 Language Upgrade의 약자로, 사용자의 언어 능력을 향상시키는 것을 목표로 합니다. AI 기술을 활용하여 맞춤형 학습 경험을 제공하고, 언어 학습의 효율성과 재미를 높입니다.

## 주요 기능

- AI 기반 개인화된 학습 경로
- 실시간 발음 피드백
- 대화형 언어 연습
- 다양한 언어 지원 (영어, 일본어, 중국어, 스페인어 등)
- 학습 진도 추적 및 분석
- 모바일 및 데스크톱 호환성

## 기술 스택

- Frontend: React, Next.js, TypeScript
- Backend: Node.js, Express
- AI/ML: TensorFlow, PyTorch
- 데이터베이스: MongoDB
- 인프라: AWS, Docker

## 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/opspresso/langup-web.git
cd langup-web

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 문서

자세한 정보는 다음 문서를 참조하세요:

- [아키텍처 문서](./docs/ARCHITECTURE.md)
- [페이지 구조](./docs/PAGES.md)
- [사용자 시나리오](./docs/SCENARIOS.md)
- [사용자 가이드](./docs/USER_GUIDE.md)

## GitHub Pages 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다. `public` 폴더의 변경 사항이 `main` 브랜치에 푸시되면 GitHub Actions가 자동으로 변경 사항을 감지하고 웹사이트를 `gh-pages` 브랜치에 배포합니다.

### 수동 배포 방법

필요한 경우 다음 명령을 사용하여 수동으로 배포할 수 있습니다:

```bash
# 의존성 설치
npm install

# GitHub Pages에 배포
npm run deploy
```

### 배포 URL

배포된 웹사이트는 다음 URL에서 접근할 수 있습니다:
https://opspresso.github.io/langup-web/

## 라이선스

MIT
