import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Maincon2Wrap } from './MainConStyles';

const Maincon2 = () => {
    return (
        <Maincon2Wrap>
            <div className="con2Wrap">
                <h3>스타벅스 프로모션 안내</h3>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    <SwiperSlide>
                        <img src="./images/main/con2(1).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/main/con2(2).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/main/con2(1).jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/main/con2(2).jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Maincon2Wrap>
    );
};

export default Maincon2;
