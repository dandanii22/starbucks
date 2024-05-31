import { Link } from 'react-router-dom';
import { NavWarp, TopMenu } from './HeaderStyle';

const NavBar = () => {
    return (
        <>
            <NavWarp>
                <ul className="gnb">
                    <li>
                        <Link to={'/coffee'}>COFFEE</Link>
                    </li>
                    <li>
                        <Link to={'/menu'}>MENU</Link>
                    </li>
                    <li>
                        <Link to={'/product'}>PRODUCT</Link>
                    </li>
                    <li>
                        <Link to={'/mypage'}>MY STARBUCKS</Link>
                    </li>
                    <li>
                        <Link to={'/cart'}>
                            MY CART
                            <span>0</span>
                        </Link>
                    </li>
                </ul>
                <TopMenu>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/logout'}>Logout</Link>
                    </li>
                    <li>
                        <Link to={'/join'}>Join us</Link>
                    </li>
                </TopMenu>
            </NavWarp>
        </>
    );
};

export default NavBar;
