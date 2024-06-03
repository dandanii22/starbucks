import { LogoutWrap } from './LoginStyle';

const Logout = () => {
    return (
        <LogoutWrap>
            <h3>안녕히 가세요</h3>
            <img src="./images/login/logout.png" alt="안녕히 가세요" />

            <p>
                <button>홈으로 가기</button>
            </p>
        </LogoutWrap>
    );
};

export default Logout;
