import { LoginWrap } from './LoginStyle';

import { FaCheck } from 'react-icons/fa';
const Login = () => {
    return (
        <LoginWrap>
            <h3>로그인</h3>
            <img src="./images/login/bgLogo.png" alt="스타벅스 로고" />
            <form className="loginForm">
                <p className="greeting">
                    <span>Welcome!</span> 스타벅스 코리아에 오신 것을 환영합니다.
                </p>
                <input type="text" placeholder="아이디를 입력해주세요" />
                <input type="text" placeholder="비밀번호를 입력해주세요" />
                <div className="idKeep">
                    <input type="checkbox" name="keep" id="keep" />
                    <label htmlFor="keep">
                        <FaCheck
                            style={{
                                color: 'white',
                                marginLeft: '-30px',
                                marginRight: '10px',
                                verticalAlign: 'middle',
                            }}
                        />
                        아이디저장
                    </label>
                </div>

                <p>
                    <button>로그인</button>
                </p>
            </form>
            <p className="attention">
                * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이 있으므로, 정기적인
                비밀번호 변 경을 해주시길 바랍니다.
            </p>
            <p className="attention">
                * 스타벅스 코리아의 공식 홈페이지는 Internet Explorer 9.0 이상, Chrome, Firefox,
                Safari 브라우저에 최적화 되어있습니다.
            </p>
        </LoginWrap>
    );
};

export default Login;
