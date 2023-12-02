import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../data";
import TitleImage from "./TitleImage";

const ListImage = () => {
  return (
    <div className="w-[93%] mx-auto bg-list">
      <TitleImage />
      <div className="py-5 flex justify-between gap-10 min-[500px]:max-[915px]:flex-col">
        <div className="flex w-[355px] h-[512px] min-[500px]:max-[915px]:w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            pagination
            autoplay={{ delay: 1600, disableOnInteraction: false }}
          >
            {data.listImage.map(({ img, name }) => (
              <SwiperSlide key={img}>
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ul className="flex flex-wrap justify-between gap-3">
          {data.listImage.map(({ img, name }) => (
            <li className="" key={img}>
              <div className="w-[220px] h-[236px] min-[500px]:max-[915px]:w-[200px]">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-center text-lg text-hot">{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListImage;
