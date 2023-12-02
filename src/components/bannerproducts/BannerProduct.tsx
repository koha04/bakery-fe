import Banner1 from "../../assets/img/bannerimg.png";
import Banner2 from "../../assets/img/bannerimg2.png";
import Banner3 from "../../assets/img/bannerimg1.png";
import { Link } from "react-router-dom";

const BannerProduct = () => {
  return (
    <ul className="flex justify-between w-[93%] mx-auto my-[30px]">
      <li className="w-[32%]">
        <Link to="" className="h-[110px] block">
          <img src={Banner1} alt="" className="w-full h-full object-cover rounded-[10px] border-2 border-[#d01257]"/>
        </Link>
      </li>
      <li className="w-[32%]">
        <Link to="" className="h-[110px] block">
          <img src={Banner2} alt="" className="w-full h-full object-cover rounded-[10px] border-2 border-[#d01257]"/>
        </Link>
      </li>
      <li className="w-[32%]">
        <Link to="" className="h-[110px] block">
          <img src={Banner3} alt="" className="w-full h-full object-cover rounded-[10px] border-2 border-[#d01257]"/>
        </Link>
      </li>
    </ul>
  );
};

export default BannerProduct;
