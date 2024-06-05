import { useSelector } from 'react-redux';

const Con3Reward = () => {
    const { user } = useSelector((state) => state.authR);

    return (
        <div className="Member">
            <div className="reward-icon">
                <div className="reward-icon star">
                    <img src="./images/main/star_bg.png" alt="starbucks reward" />
                    <span className="level">{user.myReward.stars}</span>
                </div>
            </div>
            <div className="reward-text">
                <h4>
                    <span>{user.nickName}</span>님의 현재 <span>Welcome Level</span>이십니다.
                </h4>
                <p>
                    <span className="color">Green Level</span>이 되기까지 5개의 별이 필요합니다.
                </p>

                <p className="btn">
                    <button>리워드 및 혜택</button>
                </p>
            </div>
        </div>
    );
};

export default Con3Reward;
