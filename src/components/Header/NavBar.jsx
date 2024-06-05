import { Link } from 'react-router-dom';
import { NavWarp, TopMenu } from './HeaderStyle';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [coffeeOpen, setCoffeeOpen] = useState(false);
    const [foodOpen, setFoodOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);

    const handleMouseEnter1 = () => setCoffeeOpen(true);
    const handleMouseLeave1 = () => setCoffeeOpen(false);

    const handleMouseEnter2 = () => setFoodOpen(true);
    const handleMouseLeave2 = () => setFoodOpen(false);

    const handleMouseEnter3 = () => setProductOpen(true);
    const handleMouseLeave3 = () => setProductOpen(false);

    const { authed } = useSelector((state) => state.authR);
    return (
        <>
            <NavWarp>
                <ul className="gnb">
                    <li
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                        className={coffeeOpen ? 'on' : ''}
                    >
                        <Link to="coffee" className="active ">
                            COFFEE
                        </Link>
                    </li>
                    {coffeeOpen && (
                        <div
                            className="dropdown"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >
                            <ul>
                                <li className="coffee">
                                    <Link to="/menu/coffee">음료</Link>
                                    <Link to="/menu/coffee">콜드브루</Link>
                                    <Link to="/menu/coffee">브루드커피</Link>
                                    <Link to="/menu/coffee">에스프레소</Link>
                                    <Link to="/menu/coffee">프라푸치노</Link>
                                    <Link to="/menu/coffee">블렌디드</Link>
                                    <Link to="/menu/coffee">스타벅스 리프레셔</Link>
                                    <Link to="/menu/coffee">스타벅스 피지오</Link>
                                    <Link to="/menu/coffee">티(티바나)</Link>
                                    <Link to="/menu/coffee">기타 제조 음료</Link>
                                    <Link to="/menu/coffee">스바벅스 주스(병음료)</Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    <li
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        className={foodOpen ? 'on' : ''}
                    >
                        <Link to="/food" className="active">
                            FOOD
                        </Link>
                    </li>
                    {foodOpen && (
                        <div
                            className="dropdown"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                        >
                            <ul>
                                <li className="food">
                                    <Link to="/menu/food">푸드</Link>
                                    <Link to="/menu/food">브레드</Link>
                                    <Link to="/menu/food">케이크</Link>
                                    <Link to="/menu/food">샌드위치 & 샐러드</Link>
                                    <Link to="/menu/food">따뜻한 푸드</Link>
                                    <Link to="/menu/food">과일 & 요거트</Link>
                                    <Link to="/menu/food">스낵 & 미니 디저트</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    <li
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                        className={productOpen ? 'on' : ''}
                    >
                        <Link to="product" className="active">
                            PRODUCT
                        </Link>
                    </li>
                    {productOpen && (
                        <div
                            className="dropdown"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                        >
                            <ul>
                                <li className="product">
                                    <Link to="/menu/product">상품</Link>
                                    <Link to="/menu/product">머그</Link>
                                    <Link to="/menu/product">글라스</Link>
                                    <Link to="/menu/product">플라스틱 텀블러</Link>
                                    <Link to="/menu/product">스테인리스 텀블러</Link>
                                    <Link to="/menu/product">보온병</Link>
                                    <Link to="/menu/product">액세서리</Link>
                                    <Link to="/menu/product">선물세트</Link>
                                    <Link to="/menu/product">패키지(티바나)</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    <li>
                        <Link to="mystarbucks">MY STARBUCKS</Link>
                    </li>
                    <li>
                        <Link to="mycart">
                            MY CART
                            <span>0</span>
                        </Link>
                    </li>
                </ul>
                <TopMenu>
                    {authed ? (
                        <li>
                            <Link to={'/logout'}>Logout</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    )}

                    <li>
                        <Link to={'/join'}>Join us</Link>
                    </li>
                </TopMenu>
            </NavWarp>
        </>
    );
};

export default NavBar;
