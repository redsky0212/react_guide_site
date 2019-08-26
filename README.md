# React 프로젝트 생성 및 코딩 관련 가이드
---------------------------------

## React 프로젝트 최초 생성 방법
* create-react-app 으로 프로젝트 생성.
* 설치방법
  - npx create-react-app 프로젝트명 
  - npx가 실행되지 않는다면 (npm i -g create-react-app) 설치 후 ( create-react-app 프로젝트명 ) 과 같이 실행한다.
* App.css, App.js, App.test.js, logo.svg 삭제
* public폴더에 favicon.ico, index.html, manifest.json제외한 모든파일 삭제.
* public폴더의 index.html파일의 내부 소스 정리... (필요없는 주석 삭제 )
* components, containers폴더 생성
* index.js파일 수정
  - 필요없는 로딩 소스는 삭제하고 최초 로딩 컴포넌트를 Root로 설정해주고 Root 컴포넌트를 생성해 준다.
```
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
```
* Root.js 컴포넌트 생성
```
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
//import configure from './store/configure';


//const store = configure();

const Root = () => {
    return (
        //<Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        //</Provider>
    );
}

export default Root;
```
* Root.js 컴포넌트에서 필요한 library들을 설치해준다.
  - react-router-dom, redux, react-redux 등
* containers폴더 아래 App.js 컴포넌트를 생성.


* public/**manifest.json** 관련
  - 앱에 대한 정보를 담고있는 json파일 입니다.
  - 항목별 설명
    - short_name: 사용자 홈 화면에서 아이콘 이름으로 사용
    - name: 웹앱 설치 배너에 사용
    - icons: 홈 화면에 추가할때 사용할 이미지
    - start_url: 웹앱 실행시 시작되는 URL 주소
    - display: 디스플레이 유형(fullscreen, standalone, browser 중 설정)
    - theme_color: 상단 툴바의 색상
    - background_color: 스플래시 화면 배경 색상
    - orientation: 특정 방향을 강제로 지정(landscape, portrait 중 설정)
* src/**serviceWorker.js** 관련
  - 브라우저의 백그라운드에서 실행되는 자바스크립트 워커 이다. 웹에서도 네이티브처럼 오프라인 상테에서도 사용가능하고, 푸시알림 기능도 사용할 수 있는데, 이런기능을 할 수 있도록 도와주는 것.




## 참조 URL
* Redux관련 설명 (https://lunit.gitbook.io/redux-in-korean/)
* velopert님의 리덕스 사용 (https://velog.io/@velopert/Redux-3-%EB%A6%AC%EB%8D%95%EC%8A%A4%EB%A5%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%99%80-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-nvjltahf5e)
* velopert님의 미들웨어 관련 (https://velopert.com/3401)
* velog 리액트 Hooks 완벽정복 (https://velog.io/@velopert/react-hooks)
* React로 블로그 만들기 (https://www.dnkdream.com/react-blog-11/)


## 기타 참조 URL
* github README파일 마크다운 설명 (https://gist.github.com/ihoneymon/652be052a0727ad59601)
* 매니페스트,서비스워커 관련 설명 (https://altenull.github.io/2018/03/09/%EC%9B%B9%EC%95%B1-%EB%A7%A4%EB%8B%88%ED%8E%98%EC%8A%A4%ED%8A%B8-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%9B%8C%EC%BB%A4-Web-App-Manifest-Service-Worker/)
* Airbnb React 스타일 가이드 (https://github.com/apple77y/javascript/tree/master/react)