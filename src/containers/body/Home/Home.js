
    import React from 'react'
    
  
    class Home extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
  
        };
      }
  
      render() {
        return (
          <div className="container">
            {/* //groupbox s*/}
            <div className="groupbox">
              <div className="data1">
                <ul className="datanum">
                  <li className="datanum_cnt">200건</li>
                  <li className="datanum_desc"><span className="left">당월무선실적</span><span className="right"><img
                    src={require('resources/images/arrow_inc.png')} alt="증가" />18.2%</span>
							    </li>
						    </ul>
					    </div>

              <div className="data2">
                <ul className="datanum">
                  <li className="datanum_cnt">20건</li>
                  <li className="datanum_desc"><span className="left">당월5G실적</span><span className="right"><img
                    src={require('resources/images/arrow_dec.png')} alt="감소" />6.2%</span>
							    </li>
						    </ul>
					    </div>
              <div className="data3">
                <ul className="datanum">
                  <li className="datanum_cnt">150건</li>
                  <li className="datanum_desc"><span className="left">당월유선실적</span><span className="right"><img
                    src={require('resources/images/arrow_inc.png')} alt="증가" />18.2%</span>
							    </li>
						    </ul>
					    </div>
              <div className="data4">
                <ul className="datanum">
                  <li className="datanum_cnt">150건</li>
                  <li className="datanum_desc"><span className="left">내방대비 판매비율</span><span className="right"><img
                          src={require('resources/images/arrow_dec.png')} alt="감소" />7.2%</span>
							    </li>
						    </ul>
					    </div>
            </div>
            {/* //groupbox e*/}
            {/* //chartArea s*/}
            <div className="chartArea">
              <div className="left">
                <div className="upper">
                  {/* //segment Header s*/}
                  <div className="segmentHeader">
                    <div className="segmentTitle">
                      <h3>실적 트렌드 그래프</h3>
                    </div>
                    <div className="btnFarm">
                      <ul className="btnFarmUL">
                        <li>
                          <div className="selectbox2 sel_02">
                              {/* style="width:120px;z-index:1;cursor:pointer;"> */}
                            <div className="select">
                              <p className="tit" title="조회월"><a><span>실적구분</span></a></p>
                              <div className="mask mask_box2">
                                <div className="overcon" >
                                  <ul className="con">
                                    <li><a href="#none"><span>2019년 02월</span></a></li>
                                    <li><a href="#none"><span>2019년 01월</span></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
											    </div>
										    </li>
                        <li>
                          <div className="selectbox2 sel_03">
                          {/* style="width:120px;z-index:1;cursor:pointer;"> */}
                            <div className="select">
                              <p className="tit" title="조회월"><a><span>기간구분</span></a></p>
                              <div className="mask mask_box3">
                                <div className="overcon" >
                                  <ul className="con">
                                    <li><a href="#none"><span>2019년 02월</span></a></li>
                                    <li><a href="#none"><span>2019년 01월</span></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
											    </div>
										    </li>
                        <li><button className="com_gray bgArrow">Coaching Tip</button></li>
									    </ul>
                    </div>
                  </div>
                  {/* //segment Header e*/}
                  {/* //segment Body s*/}
                  <div className="segmentBody">
                    <div className="checkFarm">
                      <ul className="chkFarmUL">
                        <li>
                          <label className="check">
                            <input type="checkbox" name="" />
                            <span className="ico"></span>
                            <span className="txt f_bold">2nd Device 포함</span>
											    </label>
                        </li>
                        <li>
                          <label className="check">
                            <input type="checkbox" name="" />
                            <span className="ico"></span>
                            <span className="txt f_bold">Table 포함</span>
											    </label>
                        </li>
                        <li>
                          <label className="check">
                            <input type="checkbox" name="" />
                            <span className="ico"></span>
                            <span className="txt f_bold">데이터 쉐어링 포함</span>
											    </label>
										    </li>
									    </ul>
								    </div>
                    <img src="resources/~mockup/Untitled-1.png" />
							    </div>
                  {/* //segment Body e*/}
						    </div>

                <div className="downer segmentDivder">
                  <div className="segmentDiv">
                    {/* //segment Header s*/}
                    <div className="segmentHeader">
                      <div className="segmentTitle">
                        <h3>실적 트렌드 그래프</h3>
                      </div>
                      <div className="btnFarm">
                        <ul className="btnFarmUL">
                          <li><button className="com_gray bgArrow">Coaching Tip</button></li>
                        </ul>
                      </div>
                    </div>
                    {/* //segment Header e*/}
                    {/* //segment Body s*/}
                    <div className="segmentBody">
                      <table className="tbl1 mt30">
                        <colgroup>
                          <col  />
                          <col  />
                          <col  />
										    </colgroup>
                        <tr>
                          <td>최인접 LG매장까지의 거리</td>
                          <td>상위 0.2%</td>
                          <td><span className="text_blue">+0.2건</span></td>
                        </tr>
                        <tr>
                          <td>100m ~ 1,000m 이내 인접 거주인구 평균 통화량</td>
                          <td>상위 0.1%</td>
                          <td><span className="text_blue">+8.2건</span></td>
                        </tr>
                        <tr>
                          <td>스타벅스까지의 거리</td>
                          <td>상위 1.4%</td>
                          <td><span className="text_blue">+6.7건</span></td>
                        </tr>
									    </table>
								    </div>
                    {/* //segment Body e*/}
							    </div>
                  <div className="segmentDiv bgVblue">
                    {/* //segment Header s*/}
                    <div className="segmentHeader">
                      <div className="segmentTitle">
                        <h3>예상판매량</h3>
                        <p className="totalSale">140건</p>
                        <p className="descSale">전월 시장 Size기준</p>
                      </div>
                    </div>
                    {/* //segment Header e*/}
                    {/* //segment Body s*/}
                    <div className="segmentBody">
                      <img src="resources/~mockup/Untitled-8.png" />
								    </div>
                    {/* //segment Body e*/}
                  </div>
                </div>
					    </div>

              <div className="right">
                <div className="upper">
                  {/* //segment Header s*/}
                  <div className="segmentHeader">
                    <div className="segmentTitle">
                      <h3>유형별 통계</h3>
                    </div>
                    <div className="btnFarm">
                      <ul className="btnFarmUL">
                        <li>
                          <div className="selectbox2 sel_02"> {/* style="width:90px;z-index:1;cursor:pointer;"> */}
                            <div className="select">
                              <p className="tit" title="조회월"><a><span>실적구분</span></a></p>
                              <div className="mask mask_box2">
                                <div className="overcon" >
                                  <ul className="con">
                                    <li><a href="#none"><span>2019년 02월</span></a></li>
                                    <li><a href="#none"><span>2019년 01월</span></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
											    </div>
										    </li>
                        <li>
                          <div className="selectbox2 sel_03"> {/* style="width:90px;z-index:1;cursor:pointer;"> */}
                            <div className="select">
                              <p className="tit" title="조회월"><a><span>기간구분</span></a></p>
                              <div className="mask mask_box3">
                                <div className="overcon" >
                                  <ul className="con">
                                    <li><a href="#none"><span>2019년 02월</span></a></li>
                                    <li><a href="#none"><span>2019년 01월</span></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
											    </div>
										    </li>
                        <li><button className="com_gray bgArrow">Coaching Tip</button></li>
									    </ul>
                    </div>
                  </div>
                  {/* //segment Header e*/}
                  {/* //segment Body s*/}
                  <div className="segmentBody">
                    <img src="resources/~mockup/Untitled-2.png" />
							    </div>
                  {/* //segment Body e*/}
                </div>
                <div className="downer">
                  {/* //segment Header s*/}
                  <div className="segmentHeader">
                    <div className="segmentTitle">
                      <h3>고객/상권 특성</h3>
                    </div>
                    <div className="btnFarm">
                      <ul className="btnFarmUL">
                        <li>
                          <div className="selectbox2 sel_03">
                            {/* tyle="width:120px;z-index:1;cursor:pointer;"> */}
                            <div className="select">
                              <p className="tit" title="조회월"><a><span>구분</span></a></p>
                              <div className="mask mask_box3">
                                <div className="overcon" >
                                  <ul className="con">
                                    <li><a href="#none"><span>2019년 02월</span></a></li>
                                    <li><a href="#none"><span>2019년 01월</span></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
											    </div>
										    </li>
                        <li><button className="com_gray bgArrow">Coaching Tip</button></li>
									    </ul>
                    </div>
                  </div>
                  {/* //segment Header e*/}
                  {/* //segment Body s*/}
                  <div className="segmentBody">
                    <img src="resources/~mockup/Untitled-6.png" />
							    </div>
                  {/* //segment Body e*/}
                </div>
              </div>
            </div>
            {/* //chartArea s*/}
          </div>
        );
      }
    }
  
    export default Home
    