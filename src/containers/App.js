import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import SearchBar from '../components/common/SearchBar';
import NavBar from '../components/common/NavBar';


import styles from './App.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);



function App() {
  return (
      <div className={cx("wrapper")}>
        <HeaderContainer />
        <SearchBar />
        <NavBar />
    </div>
  );
}

export default App;
