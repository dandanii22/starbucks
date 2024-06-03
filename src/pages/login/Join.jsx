import JoinMemberInfo from './JoinMemberInfo';
import { JoinWrap, LoginBefore } from './LoginStyle';
import { FaCheck } from 'react-icons/fa';
const Join = () => {
    return (
        <JoinWrap>
            <h3>회원가입</h3>
            <img src="./images/login/join.png" alt="로그인 안내" />
            <p className="formTitle">회원가입 약관동의 및 본인인증단계입니다.</p>
            <form className="agreement">
                <div className="allAgree">
                    <input type="checkbox" name="keepAll" id="keepAll" />
                    <label htmlFor="keepAll" className="chk">
                        <FaCheck
                            style={{
                                fontSize: '16px',
                                color: 'white',
                                marginLeft: '-30px',
                                marginRight: '10px',
                                verticalAlign: 'middle',
                            }}
                        />
                        전체동의
                    </label>
                </div>
                <div className="agree">
                    <div className="chk">
                        <input type="checkbox" name="keep1" id="keep1" />
                        <label htmlFor="keep1" className="chk">
                            <FaCheck
                                style={{
                                    fontSize: '16px',
                                    color: 'white',
                                    marginLeft: '-30px',
                                    marginRight: '10px',
                                    verticalAlign: 'middle',
                                }}
                            />
                            홈페이지 이용약관 동의 <span>(필수)</span>
                        </label>
                    </div>
                    <div className="rule">
                        <h4>스타벅스 코리아는 고객님을 보호합니다.</h4>
                        <p>
                            본 약관은 스타벅스 코리아의 홈페이지 서비스 이용과 관련하여 필요한
                            사항을 규정합니다.
                        </p>
                        <strong>제1장 총칙</strong>
                        <em>제 1 조 목적</em>
                        <span>
                            1. 스타벅스 코리아를 운영하는 주식회사 에스씨케이컴퍼니(이하 '회사'라고
                            합니다)에서 운영하는 홈페이지 (https://www.starbucks.co.kr/, 이하
                            “홈페이지”라고 합니다)는 아래와 같은 약관에 동의하는 이용자들에게
                            제공되는 인터넷서비스로, 본 약관은 이용자와 회사 사이에 본 홈페이지
                            이용에 관한 권리 및 의무를 규정하는 것을 목적으로 합니다. <br />
                            2. 홈페이지의 모든 자료는 Starbucks Corporation 및 자회사, 계열사 혹은
                            Starbucks Corporation에 의해 자격을 취득한 기타 이해 관계자에 의한
                            저작권, 등록의장, 등록상표 또는 기타 지적소유권으로 보호되고 있습니다.
                            <br />
                            3. 본 홈페이지에 포함된 자료는 이용자에게 정보 제공을 위한 목적으로만
                            제공됩니다. 이용자는 본 홈페이지의 내용에 대하여 어떤 방법으로도 배포,
                            출판, 전송, 변경, 전시, 모방작품의 창조 혹은 개발할 수 없습니다.
                            이용자는 회사의 권한을 보호하여야 하고, 본 홈페이지의 자료를 허가 없이
                            유용할 수 없습니다. 허가 없이 본 홈페이지의 내용을 유용하는 경우에
                            회사와 Starbucks Corporation은 이용자에게 법적, 재정적으로 가능한 기타
                            추가적인 배상을 청구할 수 있습니다.
                        </span>
                    </div>
                </div>

                <div className="agree">
                    <div className="chk">
                        <input type="checkbox" name="keep2" id="keep2" />
                        <label htmlFor="keep2" className="chk">
                            <FaCheck
                                style={{
                                    fontSize: '16px',
                                    color: 'white',
                                    marginLeft: '-30px',
                                    marginRight: '10px',
                                    verticalAlign: 'middle',
                                }}
                            />
                            개인정보 수집 및 이용동의 <span>(필수)</span>
                        </label>
                    </div>
                    <div className="rule">
                        <span>
                            본인은 스타벅스 코리아를 운영하는 주식회사 에스씨케이컴퍼니(이하
                            '회사'라 합니다)가 제공하는 회원 서비스(이하 ‘서비스’라 합니다)를
                            이용하기 위해, 다음과 같이 ‘회사’가 본인의 개인정보를 수집/이용하는 것에
                            동의합니다.
                        </span>
                        <span className="point1">
                            ※ 귀하께서는 개인정보 수집·이용에 대한 동의를 거부하실 수 있으나, 동의를
                            거부하실 경우 회원가입, 서비스 이용 등을 하실 수 없습니다.
                        </span>
                        <span className="point2">1. 개인정보 항목·목적·보유기간</span>
                    </div>
                </div>
                <div className="agree">
                    <div className="chk">
                        <input type="checkbox" name="keep3" id="keep3" />
                        <label htmlFor="keep3" className="chk">
                            <FaCheck
                                style={{
                                    fontSize: '16px',
                                    color: 'white',
                                    marginLeft: '-30px',
                                    marginRight: '10px',
                                    verticalAlign: 'middle',
                                }}
                            />
                            스타벅스 카드 이용약관 <span>(필수)</span>
                        </label>
                    </div>
                    <div className="rule">
                        <h4>스타벅스 코리아는 고객님을 보호합니다.</h4>
                        <p>
                            본 약관은 스타벅스 코리아의 스타벅스 카드 이용과 관련하여 필요한 사항을
                            규정합니다.
                        </p>
                        <strong>제1장 총칙</strong>
                        <em>제 1 조 목적</em>
                        <span>
                            본 약관은 스타벅스 코리아를 운영하는 주식회사 에스씨케이컴퍼니(이하
                            '회사'라 합니다)가 발행한 스타벅스 카드를 구입 또는 정당한 방법으로
                            소지한 고객이 회사가 제공하는 스타벅스 카드 서비스를 이용함에 있어
                            필요한 이용 조건, 절차 및 당사자간의 권리, 의무 등 기본적인 사항을
                            규정하는 것을 목적으로 합니다.
                        </span>
                        <em>제 2 조 (용어의 정의)</em>
                        <span>
                            본 약관에서 사용하는 용어는 다음과 같이 정의합니다. <br />
                            1. '스타벅스 카드'란 회사가 정의한 기술사양에 따라 회사가 인증한 Chip
                            또는 Application을 내장하고 스타벅스 카드 브랜드를 부착한 카드로 선불
                            결제할 수 있는 수단임과 동시에 고객이 “별”을 적립하여 서비스를
                            정상적으로 이용할 수 있도록 회사가 승인한 카드로서 회사가 발급합니다.
                            스타벅스 카드는 지류 또는 플라스틱의 소재의 ‘실물 스타벅스 카드’와
                            모바일 APP에서 확인 가능한 전자적 형태의 ‘모바일 카드’로 구분되며,
                            회원은 실물 스타벅스 카드를 모바일APP에 등록함으로써 ‘모바일 카드’로도
                            사용하실 수 있습니다.
                        </span>
                    </div>
                </div>
            </form>
            <JoinMemberInfo />
        </JoinWrap>
    );
};

export default Join;
