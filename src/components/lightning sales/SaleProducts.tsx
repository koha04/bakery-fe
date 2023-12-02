import { ArrowRightOutline } from "heroicons-react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Flash from "../../assets/img/flash.png";
import { data } from "../../data";

const SaleProducts = () => {
  return (
    <div className="relative w-[93%] mx-auto bg-list">
      <div className="px-[30px] h-[50px] w-full flex items-center justify-between">
        <h1 className="inline-flex text-[#d01257] text-[22px] font-bold">
          L<img src={Flash} alt="flash-sales" width={25} height={25} />
          GHTNING SALES
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-[#d01257] text-sm">Xem tất cả</p>
          <ArrowRightOutline className="p-[5px] text-white rounded-full bg-button cursor-pointer" />
        </div>
      </div>
      <Swiper
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1240: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="scrollbar w-full h-[300px] px-4 py-7"
        modules={[Scrollbar, Autoplay]}
        scrollbar={{ draggable: true }}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {data.saleProducts.map((item) => (
          <SwiperSlide
            key={item.image}
            className="flex flex-col items-center justify-center"
            style={{ width: 200, height: 200 }}
          >
            <div className="relative flex justify-center w-[200px] h-[200px]">
              <img
                src={item.image}
                alt="sales-product"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-2 -left-1 bg-button text-white text-xs py-[2px] px-1 rounded-e-[5px]">
                Mall
              </span>
              <p className="sale-percent flex flex-col items-center py-2 px-[5px] text-hot text-xs absolute -top-[1px] -right-[1px] bg-[#ffd424]">
                {item.salesPercent}
                <span className="text-navText">GIẢM</span>
              </p>
            </div>
            <div className="p-1 tracking-wide flex flex-col items-center justify-between text-sm">
              <p className=" text-hot">
                Giá gốc: <span className="line-through">{item.price}đ</span>
              </p>
              <p className="text-orange-500 font-medium">
                Sale:{" "}
                {(
                  (item.price *
                    (100 - Number(item.salesPercent.split("")[0]))) /
                  100
                ).toFixed(2)}
                đ
              </p>
            </div>
            <p className="uppercase flex justify-center w-[90%] py-[3px] rounded-[10px] font-normal text-xs text-white bg-button">
              Đang bán chạy
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SaleProducts;
