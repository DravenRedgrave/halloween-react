import { Swiper, SwiperSlide } from 'swiper/react';
import wich from '../../../assets/wich.png'
import {BoxSwipe} from '../slider/styles/SlideStyles';
import 'swiper/css';

export default  () => {
  return (
    <BoxSwipe>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <img src={wich}/> </SwiperSlide>
      <SwiperSlide> <img src={wich}/> </SwiperSlide>
    </Swiper>
    </BoxSwipe>
  );
};