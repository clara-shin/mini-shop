# mini-shop

## VanillaJS를 이용한 미니 숍

<center>
<img src="https://github.com/clara-shin/mini-shop/assets/27764950/71b758a0-ef16-4ccf-8ffc-9ddfab50b355" width="300" >
</center>

-   배운 것:

    -   HTML: `data-\*`
    -   CSS: `flex`를 이용한 레이아웃, `:root{}, var(), calc()`
    -   JS:

        -   배열 `filter`과 `dataset`을 이용한 정렬
        -   이벤트 위임(Event Delegation): 추후 한번만 리스트를 렌더링을 목적
            -   각 버튼에 이벤트리스터를 등록하기 보다, 이벤트위임을 사용, 각 버튼의 상위부모인 컨테이너에 이벤트리스너를 등록하여 한 곳에서만 핸들링 할수 있도록 효율성 개선
        -   JSON파일을 이용한 db 미니세팅
        -   `fetch()` API: 반환된 `Promise` 객체를 이용한 데이터 업로드
        -   개선점:
            -   각 다른 버튼을 클릭 시 CSS만으로(visibility) 데이터 정렬을 통해 불필요한 데이터 렌더링 횟수를 없애기
            -   조건을 충족하여 PWA(progressive web app) 변환하기
