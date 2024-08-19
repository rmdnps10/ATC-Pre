## 개발 협업 연습 과정
1. 먼저 본인에게 부여된 가상의 task에 관해서 issue를 등록합니다.
ex)"홈 화면 UI 뷰 마크업"
- 생성된 issue template에 맞게 내용을 채웁니다.
- issue를 등록할 때는 오른쪽에 Assignees에 본인을 설정하고, Labels에 도 이슈에 성격에 따라 적절한 태그를 붙입니다. 


![alt text](<img/스크린샷 2024-08-19 오후 12.09.05.png>)



> 단순 UI 마크업은 Style, three.js나 gasp와 같은 유저클릭이나 반응에 따른 것은 Interaction 으로 구분해서 issue를 등록합니다.





2. Issue 를 등록하면, issue 고유번호가 발급되는데, 이 고유번호를 통해 로컬 개발환경에서 가장 최신의 분기점에서, 브랜치를 생성합니다.


![alt text](<img/스크린샷 2024-08-19 오후 12.10.41.png>)
> 이슈 등록했을떄의 사진, 위의 사진에서 #1이 고유번호입니다.
- `이슈유형/구체적인테스크#고유번호` 형식으로 브랜치를 생성합니다. 이때, 영어로 생성합니다.

- 이슈유형은 issue 등록할 때의 Labels를 활용하고, 구체적인 테스크는 - (하이픈) 을 통해 영어로 작성합니다.

- 예를 들어 프로젝트의 카테고리 UI의 뷰를 구현하는 task를 맡은 경우, `style/project-category#1` 명으로 브랜치를 생성하고 checkout 합니다.

```
git checkout -b 브랜치명 (<- 브랜치 생성하면서 그 브랜치로 체크아웃)
```


3. 맡은 태스크를 코드로 수행하는 과정을 commit 으로 기록합니다.

## 🔥 커밋 컨벤션
```
  Feat: 새로운 기능을 추가
  Fix: 버그 수정
  Design: CSS 등 사용자 UI 디자인 변경"
  !BREAKING CHANGE: 커다란 API 변경의 경우"
  !HOTFIX: 급하게 치명적인 버그를 고쳐야하는 경우"
  Style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우"
  Refactor: 코드 리팩토링"
  Comment: 필요한 주석 추가 및 변경"
  Docs: 문서 수정"
  Test: 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음"
  Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우"
  Remove: 파일을 삭제하는 작업만 수행한 경우"
```

이 방식을 지켜서 커밋해주세요! 
이외의 커밋은 기록하지 못하도록 git hook을 통해 막혀있습니다.


4. task 구현이 완료되었으면 아까 생성한 브랜치를 푸시합니다.
```
git push style/project-category#1
```

5. 깃허브 레포지토리의 pull request 항목에 들어가서 PR template에 따라 pull Request를 생성합니다.
 
 - ⭐️ 반드시 dev 브랜치로 PR을 날립니다. (main 아닙니다!)
 - `dev 브랜치`는 개발용 배포 URL이 연결된 브랜치이고
 - `main 브랜치`는 실제 production용 브랜치입니다.
 - Issue와 마찬가지로 적절한 Assignee와 Label을 할당합니다.

 6. PR을 날린 이후에는 디스코드-개발 협업방에 테스크를 완료했고 그래서 이에 대한 PR을 날렸다고 리마인드합니다. (본인이 Merge하지않기)

 7. Web Leader가 확인후에 머지합니다.



## ⚒️ Next.js 기본 지식

Next.js는 SSR(서버 사이드 렌더링)을 지원하는 리액트 프레임워크입니다.

렌더링 방식에는 크게 CSR, SSR, SSG 방식이 있는데 
CSR은 렌더링 주체가 클라이언트에서 이뤄지고, SSR은 서버단에서 렌더링을 마친 후 클라이언트에게 결과물을 전달합니다.


SSR 방식은 CSR에 비해, `웹사이트 초기 로딩속도가 빠르고`, `검색 엔진 최적화가 쉽다.` 라는 장점이 있습니다. 이는 컨텐츠 리소스가 많고, 검색 엔진 최적화가 필수적인 ATC 웹사이트에 적절한 방식입니다.

SSG (Static Site Generation) 방식은 서버에서 미리 생성해 둔 HTML 파일을 클라이언트에게 보내는 방식입니다. 정적 리소스가 많고, 댓글 기능이 있는 페이지를 제외하면 리소스의 변화가 없다는 점에서 이 방식 또한 ATC 웹사이트에 적절한 방식입니다.

반면에 스크롤 이벤트와 같은 사용자 상호작용에 따른 브라우저 API를 사용하여 인터랙션을 구현하려면, CSR 방식으로 구현해야 합니다. (서버 컴포넌트에서는 사용자 이벤트를 알 수가 없음)

Next.js는 기본적으로 (default) SSR방식을 채택할 뿐 만이 아니라 CSR, SSG 와 같은 방식도 쉽게 구현할 수 있습니다. 즉, 페이지별 목적에 따라 커스텀이 가능하며 같은 페이지 안에서도 Server Component, Client Commponent를 통해서 다르게 구현할 수 있습니다.

📚 참고자료
> [서버 컴포넌트 vs 클라이언트 컴포넌트](https://choi-hyunho.com/nextjs-server-component#heading-app) 

> [SSR, SSG](https://enjoydev.life/blog/nextjs/1-ssr-ssg-isr)

> [⭐️ Next.js 공식문서](https://nextjs.org/docs)





### Next.js Application 실행방법

```
npm run dev
```
를 통해 **Next.js application**을 실행합니다.


### Next.js 폴더구조 


https://nextjs.org/docs/getting-started/project-structure 

app 폴더 내에 Next.js 의 컨벤션대로 폴더 구조만 작성하면 알아서 Next.js에서 알아서 라우팅을 구현합니다.