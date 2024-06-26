# mini-shop

## 프로젝트명: VanillaJS를 이용한 미니 숍

### 결과물

링크: [https://jinee-mini-shop.netlify.app](https://jinee-mini-shop.netlify.app)

<img src="https://github.com/clara-shin/mini-shop/assets/27764950/71b758a0-ef16-4ccf-8ffc-9ddfab50b355" width="300" >

### 스택(기술)

-   HTML, CSS and Vanilla JS

### 주요 기능

-   첫 페이지 화면에 아이템 목록 전부가 보임
-   옷 타입(티셔츠,팬츠,스커트) 각 버튼을 선택하면 해당 아이템목록 출력
-   색깔이 적힌 버튼을 선택하면 동일 색깔의 옷 아이템들이 출력
-   로고를 선택하면 전체 아이템 목록이 보임

### 기간: 1일

### 아키텍처

-   JSON 파일을 이용한 db 미니세팅
-   HTML: `data-*`를 이용하여, JSON 데이터와 일치하는 값을 비교하도록 설계
-   CSS:
    -   `flex`를 이용한 레이아웃: 스크린 중앙에 배치
    -   `:root{}, var(), calc()`: 확장성과 유지보수 효율성 증가
    -   아이템 목록의 상위 엘리먼트에 `overflow-y: scroll`
        -   목록이 많아져 해당 스크린영역을 넘어가지 않도록 내부 스크롤 생성
-   JS:

    -   배열 `filter()`과 `dataset`을 이용한 데이터 비교 및 출력
    -   이벤트 위임(Event Delegation)
        -   추후 한번만 리스트를 렌더링을 목적
        -   개별 버튼에 이벤트리스터를 등록하기 보다, 이벤트위임을 사용
        -   즉, 각각의 버튼의 상위부모인 컨테이너에 이벤트리스너를 등록하여 한 곳에서만 핸들링 할수 있도록 효율성 개선

-   `fetch()` Browser API: 반환된 `Promise` 객체를 이용한 데이터 로딩

### 더 나아가서,

-   CSS 속성 중 `visibility` 사용:
    -   페이지 로딩 시 데이터 아이템목록은 한번만 출력하도록 하고,
    -   각 옷 타입과 색상 버튼 클릭 시 해당 아이템만 보여질 수 있도록 개선
    -   불필요한 데이터 렌더링 횟수를 줄여 성능 효율성 증대
-   조건을 충족하여 PWA(progressive web app) 변환하기
