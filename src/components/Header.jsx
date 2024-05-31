import { Link } from 'react-router-dom';
import { HeaderWarp } from './HeaderStyle';
import NavBar from './NavBar';
const Header = () => {
    return (
        <HeaderWarp>
            <div className="inner">
                <h1>
                    <Link to={'/'}>
                        <img src="" alt="스타벅스 로고" />
                    </Link>
                </h1>
                <NavBar />
            </div>
        </HeaderWarp>
    );
};

export default Header;
