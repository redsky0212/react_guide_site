import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';


import styles from './App.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//import RouterEx from '../components/router_ex';

function App() {
  return (
      <div className={cx("wrapper")}>
        <HeaderContainer />
    </div>
  );
}

export default App;
