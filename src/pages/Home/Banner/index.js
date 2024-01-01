import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './styles.scss';

import { useMenuBannerContext } from "../../../commom/context/Menu_Banner";



const Banner = () => {
    const { banner1, banner2, banner3 } = useMenuBannerContext();

    return (
        <section className="box-banner">
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.arrow-right',
                    prevEl: '.arrow-left',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                <SwiperSlide className="image">
                    <img src={banner1} alt="Banner da loja"></img>
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src={banner2} alt="Banner da loja"></img>
                </SwiperSlide>
                <SwiperSlide className="image">
                    <img src={banner3} alt="Banner da loja"></img>
                </SwiperSlide>
            </Swiper>

            <BiSolidLeftArrow className="arrows arrow-left" />
            <BiSolidRightArrow className="arrows arrow-right" />
        </section>
    );
};
export default Banner;
