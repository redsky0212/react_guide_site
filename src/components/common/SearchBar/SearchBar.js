import React from 'react'
import styles from './SearchBar.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const input2 = {
    width: '150px'
};

const SearchBar = () => (
    <div className="search_area">
        <div className="search_box">
            <input type="text" placeholder="매장명을 입력하세요." className={cx("SearchBar-input1")} />&nbsp;&nbsp;
            <input type="text" id="daily_start_date" placeholder="2019.07.10" className="calend mr10" autocomplete="off" style={input2} />
            <span>
                <button className="com_gray mr3">경쟁매장비교</button>
            </span>
            <ul className="right">
                <li>
                    <a href="#" className="r_tit">합정미니대리점 서교점 매장컨설팅리포트</a>
                </li>
            </ul>
        </div>
    </div>
);

export default SearchBar
