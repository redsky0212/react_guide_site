import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from 'resources/images/logo.png';
import profile from 'resources/images/img_profile.png';
import info from 'resources/images/img_info.png';

const propTypes = {
    
};

const defaultProps = {
    
};

class HeaderContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const select = {
            width: '140px',
            zIndex: 1,
            cursor:'pointer'
        };
        const selectItem = {
            display:'none'
        };

        return (
            <header>
                <div className="hear_wrap">
                    <h1><img src={logo} alt="BI" /> <a href="my_vm.html">React Guide</a></h1>
                    <nav className="gnb_right">
                        <a><img src={profile} alt="로그인" />&nbsp;&nbsp;&nbsp;김찬호님</a>
                        <a><img src={require('resources/images/img_info.png')} alt="로그아웃" />&nbsp;&nbsp;&nbsp;사용안내</a>
                        <div className="selectbox" style={select}>
                            <div className="select">
                                <p className="tit" title="조회월"><a href="#none"><span>데이타서비스</span></a></p>
                                <div className="mask_box">
                                    <div className="overcon" style={selectItem}>
                                        <ul className="con">
                                            <li><a href="#none"><span>2019년 02월</span></a></li>
                                            <li><a href="#none"><span>2019년 01월</span></a></li>
                                            <li><a href="#none"><span>2018년 12월</span></a></li>
                                            <li><a href="#none"><span>2018년 11월</span></a></li>
                                            <li><a href="#none"><span>2018년 10월</span></a></li>
                                            <li><a href="#none"><span>2018년 09월</span></a></li>
                                            <li><a href="#none"><span>2018년 08월</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
					    </div>
				    </nav>
			    </div>
		    </header>
        );
    }
}

HeaderContainer.propTypes = propTypes;
HeaderContainer.defaultProps = defaultProps;

export default HeaderContainer;