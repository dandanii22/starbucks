import MyCard from '../../components/myStabucks/MyCard';
import MyFrequency from '../../components/myStabucks/MyFrequency';
import MyMenu from '../../components/myStabucks/MyMenu';
import MyReward from '../../components/myStabucks/MyReward';
import { MyStabucksWrap } from './MyStabucksStyle.js';
const MyStabucks = () => {
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
