import { Link } from "react-router-dom";
import Information from "../components/footer/Information";
import { data } from "../data";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import FooterContainer from "../components/footer/FooterContainer";
import FooterContact from "../components/footer/FooterContact";

const Footer = () => {
  return (
    <div className="border-t-4 border-[#d02262]">
      <div className="px-10 pt-10 text-[13px]">
        <Information />
        <div className="flex flex-wrap gap-12 pb-16">
          <FooterContainer title="CHĂM SÓC KHÁCH HÀNG">
            <ul>
              {data.footer.support.map((info) => (
                <li key={info}>
                  <Link to="#">{info}</Link>
                </li>
              ))}
            </ul>
          </FooterContainer>
          <FooterContainer title="VỀ Berry">
            <ul>
              {data.footer.about.map((info) => (
                <li key={info}>
                  <Link to="#">{info}</Link>
                </li>
              ))}
            </ul>
          </FooterContainer>
          <div className="flex flex-col gap-3">
            <FooterContainer title="THANH TOÁN">
              <ul className="flex gap-4">
                {data.footer.pay.map((bank) => (
                  <li key={bank} className="w-[75px] h-[30px]">
                    <Link to="#">
                      <img
                        src={bank}
                        alt=""
                        className="max-w-full h-full object-cover"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterContainer>
            <FooterContainer title="VẬN CHUYỂN">
              <ul className="flex gap-4">
                {data.footer.transporter.map((bank) => (
                  <li key={bank} className="w-[75px] h-[30px]">
                    <Link to="#">
                      <img
                        src={bank}
                        alt=""
                        className="max-w-full h-full object-cover"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterContainer>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-sm leading-10">THEO DÕI CHÚNG TÔI</h1>
            <div className="flex items-center gap-2">
              <BsFacebook className="w-5 h-5" />
              <span className="text-sm">Facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineInstagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTiktok className="w-5 h-5" />
              <span className="text-sm">Tiktok</span>
            </div>
          </div>
        </div>
        <FooterContact />
      </div>
    </div>
  );
};

export default Footer;
