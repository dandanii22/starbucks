import { LoginBefore } from './LoginStyle';

const BeforeLogin = () => {
    return (
        <LoginBefore>
            <img src="./images/login/beforeLogin.png" alt="로그인이 필요합니다" />
            <div className="please">
                <h3>
                    <span>로그인</span> 시 이용 가능합니다.
                </h3>
                <p>해당 서비스를 이용하시려면 스타벅스 회원으로 가입하시기 바랍니다.</p>
                <p>
                    <button className="btn1">로그인</button>
                    <button className="btn2">회원가입</button>
                </p>
            </div>
        </LoginBefore>
    );
};

export default BeforeLogin;
