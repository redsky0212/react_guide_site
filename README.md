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

* Redux 설명 (npm install --save redux react-redux)
  - **store**: React.js 프로젝트에서 사용하는 모든 동적 데이터들을 담아두는 곳 입니다.
  - **action**: 어떤 변화가 일어나야 할 지 나타내는 객체입니다.
  - **reducer**: action 객체를 받았을 때, 데이터를 어떻게 바꿀지 처리할지 정의하는 객체입니다.
  - 처리과정
    (이벤트발생 -> 걸려있는redux객체의dispatch처리(인자:액션생성자) -> 액션생성자는type에따른 리듀서로직처리 )

* ducks구조의 액션을 사용하는 Container컴포넌트쪽에서 코딩해야하는 소스
```
// store안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => ({
    counters: state.get('counters')
});

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({index, color}));
    }
});

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);
```


## React 개발시 알아두면 좋은 것들
* render안에있는 로직은 메서드 함수로 밖으로 빼놓는게 좋음.
  - state의 변화(this.setState)에 의해서 render는 수시로 호출이 되므로 render안쪽에 함수를 직접 넣으면 매번 함수가 새로 생성이 되며 렌더링 되므로 낭비가 심해진다.
* this.setState 사용시 유의점 
  - this.setState({key: value}}); 일반적인 state변화 방법
  - this.setState((prevState) => { return {key: prevState.key + 1}; }); 이전 상태값을 사용하여 state를 변화 시킬때는 함수를 이용해서 사용하는게 좋음.
  - setState는 비동기 이기때문에 여러번 상태변화가 있을경우에는 문제가 생기지 않는다.
* 리엑트 돔 element접근방법 ref 문구.
  ```
  <input type="button" ref={(e)=>{this.input=e}} />
  ```
* .js, .jsx의 차이
  - 사실 큰 차이는 없으나 소스의 내용중에 jsx문법이 들어있으면 .jsx확장자로 입력해주는게 좋다.(추후 유지보수나 가독성 면에서 금방 jsx문법이 있는 파일이다는 것을 바로 알 수 있어서.)

* react에서 form다룰때 자주 발생하는 에러 
  - input 에 value속성과 onChange이벤트를 셋트로 사용해야한다.

* react 개발시 자동 빌드 관련
  - react-hot-loader webpack-dev-server  두가지를 설치
  - hot사용법 익혀야함.
  - webpack-dev-server를 띄워서 할 경우 초기 app.js파일 로드 하는 가상경로 셋팅이 필요.

* component 만들때 class방식과 함수형 두가지 방법을 알 필요 있음 (함수형 권장).
  - 함수형(Hooks) 컴포넌트는 state변화시 컴포넌트 함수 전체가 다시 실행된다. 그러므로 class형 컴포넌트보다 조금 더 느릴 수 있다.
  - jsx 속성 코딩시 체크 (class --> className, for --> htmlFor)
  - class컴포넌트에서 setState를 할때마나 render가 호출 되므로 내부에 함수를 넣어서 적용할 필요가 있음.
  - 함수형컴포넌트에서는 각각의 setState(setFirst, setValue 등)를 처리 할때는 몰아서 한번만 render가 호출됨.
  - 함수형 컴포넌트 개발시 state, ref사용방법 

  - (최종 나의 생각) 함수형 컴포넌트를 쓰면서 state, ref를 사용하는 방법으로 개발, render 호출시 여러번 되는지 유의, 함수형 컴포넌트를 쓰면서 class할때보다 느려질 요소가 있는지?.

  ```
  // 예시 코딩
  const GuGuDan = () => {
      // state초기 할당 방법
      const [first, setFirst] = React.useState(초기값);
      const [second, setSecond] = React.useState(초기값);
      const [value, setValue] = React.useState('');
      // ref 초기 할당 방법
      const inputRef = React.useRef(초기값);

      // 사용할 함수 설정
      const onChangeInput = (e) => {
          setValue(e.target.value);
      }
      const onSubmitForm = (e) => {
          e.preventDefault();
          // ref사용방법
          inputRef.current.focus();
      }

      return (
          <React.Fragment>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} />
            </form>
          </React.Fragment>
      );
  }
  ```
* babel 사용용도 (react에서 jsx를 사용하기 위하여 설치)(babel의 설정이 추가적으로 필요함. ---> webpack.config.js 에서 module에 rules를 설정)) 
  - @babel/core ---> babel의 기본적인 것들이 들어있음.
  - @babel/preset-env ---> 각 브라우져에 맞게 최신분법을 예전 문법으로 바꿔줌.
  - @babel/preset-react ---> 리엑트에서 jsx를 사용할 수 있음.
  - babel-loader ---> babel과 webpack을 연결해 줌.
  - @babel/plugin-proposal-class-properties ---> class컴포넌트 안에서 state = {} 이와같이 사용하려면 설치가 필요. (에러발생)

* webpack 공식문서(https://webpack.js.org/concepts/)
  - 가장 기본이 되는 속성은 (entry, mode, module, plugins, output)

* webpack 설정시 babel preset env설정시 browser설정 관련 참조 사이트 (https://github.com/browserslist/browserslist) --> Full list
  - 브라우저 지원을 어느 선 까지 해야하나.. 설정할때 유용. 

* node 시스템에서의 import와 require 차이
  - node시스템 에서는 사실 require만 지원을 한다.
  - 하지만 babel을 이용하여 import를 require와 같은 느낌으로 사용할 수 있다.
  - import와 require는 엄격히 따지면 다르지만 일정부분은 호환이 된다.

* react개발 완료 최종 완료시 소스 및 redux를 디버깅 시 가려지게 적용해야함.

* react 컴포넌트 사용시 , shouldComponentUpdate 사용, PureComponent로 생성하여 사용하면 state의 변경을 조정하여 render의 성능을 개선할 수 있다.
  - hooks, 함수형 컴포넌트에서는 memo로 감싸서 적용하면 PureComponent와 같은 것을 적용할 수 있다.

* class 컴포넌트에서 createRef사용방법
  - this.inputRef = createRef(); 이렇게 지정한 다음. &lt;input ref={this.inputRef} /&gt;

* 자식은 부모로부터 물려받은 props를 바꿀 수 없기 때문에 state에 만들어서 그 state값을 바꿔서 적용하는 방법으로 한다.

* 부모 -> 자식 -> 자식 -> 자식 이와같이 깊은 부모자식관계에서 부모가 최종 자식에게 바로 값을 넘길 수 있는 방법이 redux, context이다. 

* react의 jsx에서는 조건문을 삼항연산자로 적용한다. 아니면 함수로 빼서 사용한다.

* 함수형(hooks)컴포넌트에서는 class컴포넌트에서 사용하던 this.timeout 같은 전역적인 것들을 ref로 사용하여 적용한다.
  - const timeout = useRef(null);  timeout.current = 어쩌고....  이런식으로 사용..
  - 값이 바뀌어도 render를 하고 싶지 않은 것들은 useRef를 사용하여 적용한다.

* setInterval과 같은 비동기 호출 함수들은 추 후 콤포넌트가 제거 되거나 나갔을때는 반드시 제거(clear)를 해줘야 한다.
  - componentWillUnmount부분에서 주로 처리 함.

* 함수형 컴포넌트와 hooks컴포넌트의 차이는 state를 이용하는냐의 차이.

* 함수형(hooks)컴포넌트에서 LifeCycle사용법
  - useEffect를 사용한다.
  ```
  useEffect(() => {
      // componentDidMount, componentDidUpdate 역할 (1:1대응은 아님)
       // 코딩... 

      return () => {// componentWillUnmount 역할 (1:1대응은 아님)
        // 코딩...
      }
  }, [  // 두번째인자인 배열에 매번 바뀌어야 하는 state를 넣어서 확인한다.(헷갈리는 부분...)

  ]);
  ```
  - useLayoutEffect는 화면의 변화가 일어나기 전에 발생됨. useEffect는 화면이 변경되고나서 호출.

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