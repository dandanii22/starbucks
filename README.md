# 🖥️REACT 프로젝트

<br>

<img width="1256" alt="스타벅스 main" src="https://github.com/dandanii22/starbucks/assets/168395861/798ea0e5-4cce-4042-8776-1af737e66d0a">

<br>
<br>

- 스타벅스 사이트 리뉴얼 및 코딩 진행
- 바로가기 : https://dandanii22.github.io/starbucks/dist/

- 활용 Skills : <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" /> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
- 활용 Tools : <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white" /> <img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white" /> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white" />
  <br>
  <br>

## 🗓️ 진행 기간 및 인원

- 진행 기간 : 5/31 ~ 6/12
- 인원 : 강영현, 박해윤, 우유림, 이다현
  <br>
 <br>

## 🎯 프로젝트 목적

**- 기존 스타벅스 사이트에서 아쉬웠던 디자인을 보완**

- 마이페이지 중요 기능 위주로 디자인 간소화
- 나만의 음료,메뉴 등록 시 커스텀 페이지 디자인 변경
- 서브페이지마다 각각 서브비주얼 추가
  <br>

**- CRUD가 갖춰진 페이지임을 활용해 사이트 제작 및 기능 추가**

- 기존 스타벅스 페이지에는 주문하기 기능이 따로 없었으나, 주문하기 및 장바구니 기능 추가
- 나만의 메뉴 등록 시 depth가 많아 불편함이 있었으나, 해당 depth를 간소화
  <br>
  <br>

## 👣 프로젝트 진행 구조

<img width="1143" alt="프로젝트 구성" src="https://github.com/dandanii22/starbucks/assets/168395861/e5ea857b-f39d-4c1b-8d50-e47dbaaebed4">
 <br>
  <br>

## 👩🏻‍💻역할 분담

#### 👉🏻 공통

- HTML,CSS
- api 제작

#### 👉🏻 강영현

- 담당 페이지
  - 마이페이지(마이스타벅스)
    <br>
    <br>
- 기능 구현
  - 유저 로그인 시 마이스타벅스 페이지 유저정보로 렌더링
  - 리워드 : 적립된 별 갯수에 따라 등급/다음 등급 메세지 노출
  - 카드 : 카드 별칭 수정, 카드 충전금 기록 가능
  - 프리퀀시 : 시즌/비시즌 별 적립에 따른 음료 스티커 노출 부여
    라이트/다크 시간대(오후6-12시)별 컨셉 전환
    바코드 팝업 생성 및 10분 타이머 추가로 자동으로 팝업 닫힘
  - 마이메뉴 : 음료/푸드/상품 메뉴에서 추가 시 마이메뉴 탭메뉴로 리스팅
    전체선택, 부분선택 후 삭제 가능
    메뉴 선택 시 나만의 옵션 상세 팝업기능, 정보 버튼 클릭 시 제품 상세페이지로 연결

#### 👉🏻 박해윤

- 담당 페이지
  - 음료, 카드, 카트
    <br>
    <br>
- 기능 구현
  - 음료와 카드 페이지를 api와 map을 사용하여서 페이지 구현
  - 체크박스를 누르면 조건에 맞는 제품들만 보기에 설정
  - 음료 메뉴 클릭시 추천 메뉴가 랜덤으로 보이게 (중복 메뉴 불가 및 현재 누른 메뉴와 같은 메뉴가 보이지 않게 설정)
  - 음료 커스텀 설정시에 log data로 전송
  - 카드 나만의 카드로 등록시에 log data로 전송
  - 카트 내의 기능 구현(삭제, 수량 수정, 체크누른 항목만 수량과 가격 계산, 주문 시에 주문한 메뉴들은 장바구니에서 사라지게)
  - 회원가입 시에 log data에 보내지는 요소 추가 (생년월일, 성별, 선택 버튼 체크유무)

#### 👉🏻 우유림

- 담당 페이지
  - 메인, 로그인, 회원가입, 공지사항
    <br>
    <br>
- 기능 구현
  - 메인 페이지 공지사항 클릭 시, 페이지 이동 및, 상세 페이지 이동
  - 회원가입 정보를 입력하여 가입 시 로그인 가능, 필수 선택 또는 필수 정보 미입력 시, 진행불가
  - 로그인 창의 '아이디 저장' 버튼 활성화를 통한 로그아웃 이후 이메일 아이디 기억
  - 버튼 클릭 시 각 해당 페이지로의 이동 혹은 활성화 ex)로그인 되지 않은 경우, 안내페이지로 이동

#### 👉🏻 이다현

- 담당 페이지
  - food, product 페이지
    <br>
    <br>
- 기능 구현
  - food, product 페이지 화면 구성
  - 각각 카테고리 및 테마별 배너 클릭 시 value값에 맞게 필터링하여 화면 랜더링
  - 추천메뉴에 카테고리별 랜덤 노출 및 클릭 시 해당 페이지 이동
  - 커스텀메뉴 설정 시 설정값에 따라 localStorage 저장 및 상태 변경
  - localStorage 데이터 마이페이지로 연동 후 MY메뉴에 데이터 노출
