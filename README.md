# cookcook

리액트 심화 팀 프로젝트에서 나만의 음식 레시피를 올리고 공유하는 사이트를 만들었어요<br />
백엔드는 supabase를 이용했어요<br/><br/>
🔗 cookcook site : https://cook-cook.vercel.app
<br/>
🔗 B-4조 노션 : https://github.com/SpartaNBTTeam/newsfeed/issues/1
<br/>

## 0. 팀원 소개

<table>
   <tr>
    <td align="center"><b>유태윤</b></td>
    <td align="center"><b>이예린</b></td>
    <td align="center"><b>김소라</b></td>
    <td align="center"><b>한예슬</b></td>
    <td align="center"><b>임다은</b></td>
    <td align="center"><b>강윤서</b></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/taeyun01"><img src="https://avatars.githubusercontent.com/u/167043856?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/1eeyerin"><img src="https://avatars.githubusercontent.com/u/40863185?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/Floweringworld"><img src="https://avatars.githubusercontent.com/u/69830157?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/leesb5510"><img src="https://avatars.githubusercontent.com/u/166012944?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/jamie240417"><img src="https://avatars.githubusercontent.com/u/167290167?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/jamie240417"><img src="https://avatars.githubusercontent.com/u/167046874?v=4" width="100px" /></a></td>
  </tr>
  <tr>
    <td align="center">초기세팅<br/>소셜 로그인 구현<br/> 및 총괄</td>
    <td align="center">마이페이지<br/>전체 디자인<br/>시스템 컴포넌트</td>
    <td align="center">상세페이지 구현</td>
    <td align="center">작성폼 (에디터) 구현</td>
    <td align="center">메인페이지<br/>검색페이지 구현</td>
    <td align="center">-</td>
  </tr>
</table>

- 각자 맡은 역할을 다한 뒤에도, 다른 팀원의 작업을 도와주면서 완성했어요 🌟 <br/><br/>

## 0-1. 프로젝트 진행 기간

- 2024.07.08 ~ 2024.07.15<br/><br/>

## 0-2. 프로젝트 중에는..

- 활발하게 진행 상황을 공유하기 위해 zep과 slack을 사용했어요
- 코드리뷰하는 문화를 지향해요
- pr에 1명 이상의 approve가 있어야 develop에 merge를 할 수 있도록 설정했어요
  <br/><br/>

## 1. 사용한 라이브러리

### @zustand

전역 상태 관리를 위한 Zustand를 사용했어요

### @supabase/supabase-js

Supabase를 백엔드로 사용하여 실시간 데이터베이스를 사용했어요

### @quill

Quill 라이브러리를 사용하여 작성폼을 구현했어요

### @tanstack-query

React Router를 사용하여 SPA의 라우팅을 관리했어요

### @tailwindCSS

TailwindCSS 사용하여 간편하게 스타일링을 했어요

### @svgr/rollup

SVG 파일을 React 컴포넌트로 변환하여 사용할 수 있는 SVGR을 사용했어요. 이를 통해 SVG 아이콘을 더 쉽게 관리하고 사용할 수 있어요
<br/><br/>

### @swiper

swiper를 사용하여 캐러셀을 구현했어요

## 2. 대표기능

- [x] 다른 사람의 레시피를 보고 꿀팁을 얻을 수 있어요<br />
- [x] 레시피 링크를 복사하여 공유 할 수 있어요<br />
- [x] 다른 사람의 레시피가 마음에 든다면 로그인 후 핀을 해서 다시 볼 수 있어요<br />
- [x] 로그인 후 레시피 등록을 할 수 있어요<br />
- [x] 레시피 검색을 할 수 있어요<br />

## 3. 상세설명

### 1. 메인페이지 레시피 조회 기능
<img width="640" src="https://github.com/user-attachments/assets/d8f9addc-426a-48db-8a56-fcf365590a85"/><br/>
- 최신 순으로 정렬된 다른 사람의 글을 구경할 수 있어요
- 마음에 드는 글이 있다면 저장할 수 있어요<br/><br/>

### 2. 소셜 로그인 기능
<img width="640" src="https://github.com/user-attachments/assets/8032b505-36e8-4372-9ef4-9fb98e2854e9"/><br/>
- 카카오, 구글 소셜 로그인을 통해 바로 가입이 가능해요<br/><br/>

### 3. 레시피 작성 기능
<img width="640" src="https://github.com/user-attachments/assets/36000892-3d07-40b1-95e8-7ee78629fc0a"/><br/>
- `@quill` 라이브러리를 이용하여 에디터로 이미지와 글을 자유롭게 작성할 수 있어요<br/><br/>

### 4. 상세페이지 조회 기능
<img width="640" src="https://github.com/user-attachments/assets/c113dddb-b1f8-4a96-9810-d20a060230c3"/><br/>
- 상세페이지 url을 공유할 수 있어요
- 다른 사람의 레시피를 pin 할 수 있어요<br/><br/>

### 5. 내가 작성한 레시피 조회 기능
<img width="640" src="https://github.com/user-attachments/assets/516687dc-0c55-410f-87f1-fc48ae9e9aec"/><br/>
- 내가 작성한 레시피를 볼 수 있고, 날짜별로 선택해 확인할 수 있어요<br/><br/>



