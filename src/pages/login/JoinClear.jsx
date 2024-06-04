import { JoinUs } from './LoginStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const JoinClear = () => {
    const navigate = useNavigate();

    const { name } = useSelector((state) => state.authR);
    return (
        <JoinUs>
            <h3>
                {name} 고객님!
                <br />
                스타벅스 코리아 회원가입이 완료되었습니다.
            </h3>

            <img src="./images/login/joinClear.png" alt="가입을 축하드립니다" />

            <p>
                <button onClick={() => navigate('/')}>홈으로 가기</button>
            </p>
        </JoinUs>
    );
};

export default JoinClear;
