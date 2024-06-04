import { useState } from 'react';
import { MyMenuListTbody, OverlayWrap } from './MyStabucksStyle.js';
import MyMenuDetail from './MyMenuDetail.jsx';

const MyMenuItem = ({ menu, index, changeInput }) => {
    const { kor, option, date, isChk } = menu;
    const [isDetail, setIsDetail] = useState(false);
    const [tab, setTab] = useState('');

    const onToggle = (kor) => {
        setIsDetail(!isDetail);
        setTab(kor);
    };
    return (
        <>
            {isDetail && (
                <OverlayWrap>
                    <MyMenuDetail onToggle={onToggle} kor={kor} />
                </OverlayWrap>
            )}
            <MyMenuListTbody>
                <tr>
                    <td>
                        <p>
                            <input type="checkbox" checked={isChk} name={kor} onChange={changeInput} />
                            <label htmlFor="all"></label>
                        </p>
                    </td>
                    <td>{index}</td>
                    <td onClick={() => onToggle(kor)}>{kor}</td>
                    <td>{option}</td>
                    <td>{date}</td>
                </tr>
            </MyMenuListTbody>
        </>
    );
};

export default MyMenuItem;
