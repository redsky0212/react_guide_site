import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import SearchBar from '../components/common/SearchBar';
import NavBar from '../components/common/NavBar';

import {Switch, Route} from 'react-router-dom';

import Home from './body/Home';


import styles from './App.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);



function App() {
  return (
      <div className={cx("wrapper")}>
        <HeaderContainer />
        <SearchBar />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/> 
        </Switch>
    </div>
  );
}

export default App;
