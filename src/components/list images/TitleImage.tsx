import {
  ArrowRightOutline,
  HandOutline,
  ShieldCheckOutline,
  CollectionOutline,
} from "heroicons-react";

const TitleImage = () => {
  return (
    <div className="py-3 px-2 flex justify-between border-b border-[#ccc] min-[500px]:max-[820px]:flex-col">
      <div className="flex min-[500px]:max-[820px]:flex-col">
        <p className="pr-2 text-hot border-r border-border text-xl font-bold min-[500px]:max-[820px]:border-b min-[500px]:max-[820px]:border-r-0 min-[500px]:max-[820px]:pr-0 min-[500px]:max-[820px]:text-center">
          Berry
        </p>
        <div className="flex items-center justify-center gap-3 px-2 min-[500px]:max-[820px]:py-2 sm:flex-row max-sm:flex-col">
          <div className="flex items-center gap-1">
            <HandOutline className="stroke-[#d01257] fill-[#d01257]" />
            <span className="text-[15px] text-[#837D7C] max-sm:w-40">Miễn phí trả hàng</span>
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheckOutline className="stroke-[#d01257] fill-[#d01257]" />
            <span className="text-[15px] text-[#837D7C] max-sm:w-40">Đảm bảo nguyên liệu</span>
          </div>
          <div className="flex items-center gap-1">
            <CollectionOutline className="stroke-[#d01257] fill-[#d01257]" />
            <span className="text-[15px] text-[#837D7C] max-sm:w-40">Miễn phí vận chuyển</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <p className="text-[#d01257] text-sm">Xem tất cả</p>
        <ArrowRightOutline className="p-[5px] text-white rounded-full bg-button cursor-pointer" />
      </div>
    </div>
  );
};
export default TitleImage;
