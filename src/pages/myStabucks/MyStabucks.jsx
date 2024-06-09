import MyCard from '../../components/myStabucks/MyCard';
import MyFrequency from '../../components/myStabucks/MyFrequency';
import MyMenu from '../../components/myStabucks/MyMenu';
import MyReward from '../../components/myStabucks/MyReward';
import { MyStabucksWrap } from './MyStabucksStyle.js';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/modules/myStarbucksSlice.js';

const MyStabucks = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const localUserData = localStorage.getItem('user');
        if (localUserData) {
            dispatch(setUser(JSON.parse(localUserData))); // 로컬 스토리지에서 사용자 정보를 읽어와 스토어에 설정
        }
    }, [dispatch]);

    return (
        <>
            <MyStabucksWrap className="page-mypage">
                <section id="content">
                    <div className="inner">
                        <ul>
                            <MyReward />
                            <MyCard />
                            <MyFrequency />
                            <MyMenu />
                        </ul>
                    </div>
                </section>
            </MyStabucksWrap>
        </>
    );
};

export default MyStabucks;
