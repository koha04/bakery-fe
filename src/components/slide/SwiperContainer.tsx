import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Video from "../../assets/img/97ce67ef2dd00371624deb8842baaa41.mp4";
import { data } from "../../data";

const SwiperContainer = () => {
  return (
    <div className="px-5 pb-5 w-full flex justify-between gap-[5px] min-[500px]:max-[900px]:flex-col">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="w-[800px] h-[300px] min-[500px]:max-[900px]:w-full"
      >
        {data.sliderImage.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} alt="" className="max-w-full h-3/4" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-[35%] h-[235px] min-[500px]:max-[900px]:w-full">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded-[20px]"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default SwiperContainer;
