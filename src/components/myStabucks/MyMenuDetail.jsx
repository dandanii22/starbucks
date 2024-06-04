// My메뉴 상품별 상세 팝업
import { useSelector } from 'react-redux';
import { MyMenuDetailDiv } from './MyStabucksStyle.js';

const MyMenuDetail = ({ onToggle, kor }) => {
    const { tabMenus } = useSelector((state) => state.myStar);
    const matchTab = tabMenus.find((menu) => menu.kor === kor);
    const { cate, date, imgurl, option } = matchTab;
    return (
        <MyMenuDetailDiv>
            <i onClick={() => onToggle('')} className="xi-close"></i>
            <strong>MY FAVORITE {cate === 1 ? 'DRINK' : cate === 2 ? 'FOOD' : 'GOODS'}</strong>
            <span>{kor}</span>
            <div className="options">
                <em>
                    <img src={imgurl} alt="" />
                </em>
                <ul>
                    <li>
                        <b>기본 {cate === 1 ? '음료' : cate === 2 ? '푸드' : '상품'}</b>
                        <span>{kor}</span>
                    </li>
                    <li>
                        <b>{cate === 1 ? '퍼스널' : cate === 2 ? '워밍' : ''} 옵션</b>
                        <span>{option}</span>
                    </li>
                    <li>
                        <b>메뉴 추가</b>
                        <span>{''}</span>
                    </li>
                    <li>
                        <button>{cate === 1 ? '음료' : cate === 2 ? '푸드' : '상품'} 정보</button>
                    </li>
                </ul>
            </div>
        </MyMenuDetailDiv>
    );
};

export default MyMenuDetail;
