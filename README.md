# 우리 FISA Frontend Toy Project
리액트로 만드는 우리가계부

## 💵 서비스 소개
우리 FISA 서비스 개발 과정 토이프로젝트로 react를 활용한 가계부 페이지입니다.

</br>

### 📍 Branch Name Rule
아래와 같이 통일
```
- main
- feat/#{issue_number}
```

</br>

### 📍 Commit Message Convention

|    Type     | Description  |
|:-----------:|---|
|   `Feat:`   | 새로운 기능 추가 |
|   `Fix:`    | 버그 수정 및 코드 수정 |
| `Refactor:` | 코드 리팩토링 |
| `Rename:` | 파일 혹은 폴더명을 수정할 때 사용|
| `Remove:` | 파일을 삭제할 때 사용 |

➡️ Feat: button 추가

</br>

### 📍 폴더 구조
```
fronted-3rd-woori-account-book
├── node_modules // .gitignore 사용하여 업로드 x
├── README.md
├── .gitignore
├── package.json
└── src
      ├── assets // 이미지 혹은 폰트
      ├── components // 재사용 가능한 컴포넌트들
      ├── contexts // contextAPI
      ├── layouts // 기본적인 레이아웃 구조
      └── styles // CSS
```

</br>

### 📍 App.jsx 구조
<img width="346" alt="image" src="https://github.com/user-attachments/assets/bd89ecb5-8aef-4432-aeea-97ddd3ac9b68" />


## UI Style Gideline

### 📍 Font
- Noto Sans Korean
```html
<!-- HEAD에 추가 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">
<style>
  body {
    Font-family: 'Noto Sans KR', sans-serif;
  }
</style>
```

</br>

### 📍 color code
<img width="177" alt="image" src="https://github.com/user-attachments/assets/2bab3c26-9e37-44af-b59b-a8a4e5a13e20" />


### 📍 완성된 페이지 
http://192.168.0.34:4173/ 
<img width="1552" alt="image" src="https://github.com/user-attachments/assets/aab87866-44c2-4369-8316-2fa529b84973" />

