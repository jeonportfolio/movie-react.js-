# javascript 를 활용한 영화 검색 사이트 만들기 <br/>

◆ `npm init -y`<br/>
◆ `npm i parcel -D `<br/>
◆ package script 부분 `"dev": "parcel ./index.html","build" :"parcel build ./index.html"` 개발용과 빌드용 구분<br/>


## 상태관리 패턴 <br/>

◆ store 생성(jsu.js) -> 특정 컴포넌트의 데이터를 다른 컴포넌트로 전달이 가능함<br/>
◆ for in 문을 통해 객체들을 반복하고 .defineProperty를 통해 객체들을 정의 get, set을 통해 주고받는다<br/>
◆ subscribe를 통해 데이터의 변경을 감지한다. -> set에서 key 값이 변경되면 콜백 함수로 감지한다.<br/>
◆ Message.js 에서 subscribe 콜백 함수 생성<br/>