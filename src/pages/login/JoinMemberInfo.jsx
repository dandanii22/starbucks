import { FaCheck } from 'react-icons/fa';

const JoinMemberInfo = () => {
    return (
        <>
            <p className="formTitle">회원 정보를 입력해주세요</p>
            <form className="memberInfo">
                <input type="text" placeholder="아이디" />
                <input type="text" placeholder="비밀번호" />
                <input type="text" placeholder="비밀번호 확인" />
                <div className="name">
                    <h5>
                        이름<span>(필수)</span>
                    </h5>
                    <div className="gender">
                        <input className="word" type="text" />
                        <p>
                            <button className="on">남</button>
                            <button>여</button>
                        </p>

                        {/* <input type="radio" name="gender" id="gender" />
                        <label htmlFor="gender1" className="male"></label>

                        <input type="radio" name="gender" id="gender" />
                        <label htmlFor="gender" className="fe male"></label> */}
                    </div>
                </div>
                <div className="birth">
                    <h5>
                        생년월일<span>(필수)</span>
                        <div id="birth-date">
                            <select>
                                <option>2000년</option>
                                <option>1999년</option>
                                <option>1998년</option>
                                <option>1997년</option>
                                <option>1996년</option>
                                <option>1995년</option>
                                <option>1994년</option>
                                <option>1993년</option>
                                <option>1992년</option>
                                <option>1991년</option>
                            </select>
                            <select>
                                <option>1월</option>
                                <option>2월</option>
                                <option>3월</option>
                                <option>4월</option>
                                <option>5월</option>
                                <option>6월</option>
                                <option>7월</option>
                                <option>8월</option>
                                <option>9월</option>
                                <option>10월</option>
                                <option>11월</option>
                                <option>12월</option>
                            </select>
                            <select>
                                <option>1일</option>
                                <option>2일</option>
                                <option>3일</option>
                                <option>4일</option>
                                <option>5일</option>
                                <option>6일</option>
                                <option>7일</option>
                                <option>8일</option>
                                <option>9일</option>
                                <option>10일</option>
                                <option>11일</option>
                                <option>12일</option>
                                <option>13일</option>
                                <option>14일</option>
                                <option>15일</option>
                                <option>16일</option>
                                <option>17일</option>
                                <option>18일</option>
                                <option>19일</option>
                                <option>20일</option>
                                <option>21일</option>
                                <option>22일</option>
                                <option>23일</option>
                                <option>24일</option>
                                <option>25일</option>
                                <option>26일</option>
                                <option>27일</option>
                                <option>28일</option>
                                <option>29일</option>
                                <option>30일</option>
                                <option>31일</option>
                            </select>
                            <select>
                                <option>양력</option>
                                <option>음력</option>
                            </select>
                        </div>
                    </h5>
                </div>
                <div className="tel">
                    <h5>
                        휴대폰<span>(필수)</span>
                    </h5>
                    <input type="text" />
                    <input type="checkbox" name="agree1" id="agree1" />
                    <label htmlFor="agree1" className="chk sub">
                        <FaCheck
                            style={{
                                color: 'white',
                                marginLeft: '-30px',
                                marginRight: '10px',
                                verticalAlign: 'middle',
                            }}
                        />
                        SNS를 통한 이벤트 및 신규 매장 정보 수신에 동의합니다. [선택]
                    </label>
                </div>
                <div className="email">
                    <h5>
                        이메일<span>(필수)</span>
                    </h5>
                    <input type="text" />
                    <input type="checkbox" name="agree2" id="agree2" />
                    <label htmlFor="agree2" className="chk sub">
                        <FaCheck
                            style={{
                                color: 'white',
                                marginLeft: '-30px',
                                marginRight: '10px',
                                verticalAlign: 'middle',
                            }}
                        />
                        이메일을 통한 이벤트 및 신규 매장 정보 수신에 동의합니다. [선택]
                    </label>
                </div>
                <p>
                    <button className="join">가입하기</button>
                </p>
            </form>
        </>
    );
};

export default JoinMemberInfo;
