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
  - Presentational컴포넌트 : redux나 상태관리 미들웨어의 의존성이 없고 주어진 props로 화면을 그리거나 style 처리만 하는 컴포넌트
  - Container컴포넌트 : 상태를 관리,변경하고 액션을 처리하여 등을 하는 컴포넌트
    (아주 작은 단위의 컴포넌트이면서 어떤 컴포넌트로 만들어야하나 고민스러울때는 하나의 컴포넌트에서 다 처리하기도 한다.)
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
* components폴더 아래 App.js 컴포넌트를 생성.
* 상황에 따라 webpack.config.js 와 같이 설정을 해줘야 하는 경우에는 **npm run eject** 를 해서 프로젝트 환경설정 파일들이 루트 경로로 이동되게 한다음 설정한다.
  - (아직 커밋이 되어있지 않은 파일들이 있을경우에는 eject가 되지 않는다.)
* 프로젝트 루트 지정하기
  - import할때 경로지정이 복잡할 경우 webpack, babel plugin등을 사용합니다. 그럴경우 editor에서 import자동완성 기능을 사용할 수 없음.
  - 그래서 VS code에서는 jsconfig.json를 통하여 자동완성을 사용할 수 있다.
  - 기본적으로 css-loader등이 설치 되어있으므로 루트 경로를 설정하기 위한 jsconfig.json파일을 루트에(src밑이 아님) 생성한 다음 아래코드를 넣는다.
```
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```
  - VSCode jsconfig.json 관련 (https://code.visualstudio.com/docs/languages/jsconfig)

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


## React 에서 사용하는 기능들 정리
* css module (css파일명을 [파일이름].module.css 로 만들면 최종 적용 classname은 [파일이름]_[클래스이름]__[해쉬값] 형태로 자동으로 생성해서 중복을 피해주는 기술)
  - jsx코딩시 className={styles.wrapper} 형태로 사용.
  - global로 사용하고 싶을때는 css에는 :global .wrapper {...} 로 작성하고 jsx에는 className="wrapper"로 사용한다.
  - 두개 이상 class를 적용할 때는 className={ `${styles.wrapper} ${styles.wrapper}` } 와 같이 사용한다.
  - 이같은 사용성 편의를 위해 classnames 라이브러리를 사용하면 좀 더 쉬워진다. 참조 url(https://github.com/JedWatson/classnames#readme)

* .env 파일을 이용한 환경변수 설정하기(http://lemonja.blogspot.com/2018/08/reactjs-cra.html)
* CORS해결하기
  - node서버와 react front가 서로 다른 서버일 경우 (Access-Control-Allow-Origin)에러발생시
  - package.json에 프록시 추가 ("proxy": "http://localhost:4000" <-- 서버주소>)
  - 그런다음 api호출시 '/api/...// ' 이런식으로 baseURL을 빼고 호출하여 사용하면 된다.


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
* 리액트 라우터 (https://kbennycc.blogspot.com/2019/02/0117-react-router.html)
* 최신 라우터 처리 (https://medium.com/@wdjty326/react-router-dom-v5-route-%EC%A0%84%ED%99%98-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%B2%98%EB%A6%AC-935dfc6cc475)
* React.Fragment 관련 (https://ko.reactjs.org/docs/fragments.html)
* react-router-dom Switch 관련 
* classNames (npm i classnames) (https://velog.io/@velopert/react-component-styling) (https://github.com/JedWatson/classnames#readme)
* 리액트 스타일링 방법 (https://velog.io/@velopert/react-component-styling)
* 리액트 파일로더, url로더 관련 (http://jeonghwan-kim.github.io/js/2017/05/22/webpack-file-loader.html)
* css-loader (https://github.com/webpack-contrib/css-loader)
* VSCode jsconfig.json 관련 (https://code.visualstudio.com/docs/languages/jsconfig)
* 리덕스 관련 (https://deminoth.github.io/redux/basics/UsageWithReact.html)