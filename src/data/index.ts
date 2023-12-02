import Home from "../assets/img/home.png";
import Cake from "../assets/img/cake.png";
import Information from "../assets/img/information.png";
import Key from "../assets/img/key.png";
import ShoppingCart from "../assets/img/shopping-cart.png";
import Appreciated from "../assets/img/appreciated!.png";
import SecondAppreciated from "../assets/img/appreciated!(1).png";
import ThirdAppreciated from "../assets/img/appreciated!(2).png";
import FourthAppreciated from "../assets/img/appreciated!(3).png";
import FifthAppreciated from "../assets/img/appreciated!(4).png";
import FirstSweetCake from "../assets/img/banhngot1.png";
import SecondSweetCake from "../assets/img/banhngot2.png";
import FirstCheeseCake from "../assets/img/banhkem1.png";
import SecondCheeseCake from "../assets/img/banhkem2.png";
import FirstDrink from "../assets/img/drink1.png";
import SecondDrink from "../assets/img/drink2.png";
import SaleProduct1 from "../assets/img/tops.jpg";
import SaleProduct2 from "../assets/img/tops1.jpg";
import SaleProduct3 from "../assets/img/tops2.jpg";
import SaleProduct4 from "../assets/img/tops3.jpg";
import SaleProduct5 from "../assets/img/tops4.jpg";
import SaleProduct6 from "../assets/img/tops5.jpg";
import Image1 from "../assets/img/sld1.jpg";
import Image2 from "../assets/img/sld2.jpg";
import Image3 from "../assets/img/sld3.jpg";
import Image4 from "../assets/img/sld4.jpg";
import Image5 from "../assets/img/sld5.jpg";
import Image6 from "../assets/img/sld6.jpg";
import Image7 from "../assets/img/sld7.jpg";
import Image8 from "../assets/img/sld8.jpg";
import Pay1 from "../assets/img/pay1.png";
import Pay2 from "../assets/img/pay2.png";
import Pay3 from "../assets/img/pay3.png";
import Pay4 from "../assets/img/pay4.png";
import Pay5 from "../assets/img/pay5.png";
import Ship1 from "../assets/img/ship1.png";
import Ship2 from "../assets/img/ship2.png";
import Ship3 from "../assets/img/ship3.png";
import Ship4 from "../assets/img/ship4.png";

export const data = {
  navlinks: [
    {
      id: 1,
      name: "Trang Chủ",
      path: "/",
      imageSrc: Home,
    },
    {
      id: 2,
      name: "Thực Đơn",
      path: "/menu",
      imageSrc: Cake,
    },
    {
      id: 3,
      name: "Thông Tin",
      path: "/info",
      imageSrc: Information,
    },
    {
      id: 4,
      name: "Đăng Nhập",
      path: "/login",
      imageSrc: Key,
    },
    {
      id: 5,
      name: "Giỏ Hàng",
      path: "/cart",
      imageSrc: ShoppingCart,
    },
  ],
  sliderImage: [
    Appreciated,
    SecondAppreciated,
    ThirdAppreciated,
    FourthAppreciated,
    FifthAppreciated,
  ],
  options: [
    {
      name: "Bánh Ngọt",
      type: "sweetcake",
      image: [FirstSweetCake, SecondSweetCake],
    },
    {
      name: "Bánh Kem",
      type: "cheesecake",
      image: [FirstCheeseCake, SecondCheeseCake],
    },
    {
      name: "Đồ Uống",
      type: "drink",
      image: [FirstDrink, SecondDrink],
    },
  ],
  saleProducts: [
    {
      price: 120.99,
      salesPercent: "15%",
      image: SaleProduct1,
    },
    {
      price: 120.99,
      salesPercent: "20%",
      image: SaleProduct2,
    },
    {
      price: 120.99,
      salesPercent: "10%",
      image: SaleProduct3,
    },
    {
      price: 120.99,
      salesPercent: "40%",
      image: SaleProduct4,
    },
    {
      price: 120.99,
      salesPercent: "30%",
      image: SaleProduct5,
    },
    {
      price: 120.99,
      salesPercent: "5%",
      image: SaleProduct6,
    },
  ],
  listImage: [
    { img: Image1, name: "Bánh Mật Ong" },
    { img: Image2, name: "Bánh Xốp Dâu" },
    { img: Image3, name: "Bánh Sợi Kem" },
    { img: Image4, name: "Sinh tố" },
    { img: Image5, name: "Đá Xay Socola" },
    { img: Image6, name: "Soda" },
    { img: Image7, name: "Sữa chua Dâu" },
    { img: Image8, name: "Bánh Sinh Nhật" },
  ],
  footer: {
    support: [
      "Trung Tâm Trợ Giúp",
      "Berry Mall",
      "Berry Blog",
      "Hướng Dẫn Mua Hàng",
      "Hướng Dẫn Bán Hàng",
      "Thanh Toán",
      "Berry Xu",
      "Vận Chuyển",
      "Trả hàng và Hoàn Tiền",
    ],
    about: [
      "Giới Thiệu Về Berry Việt Nam",
      "Tuyển Dụng",
      "Điều Khoản Berry",
      "Chính Sách Bảo Mật",
      "Chính Hãng",
      "Kênh Người Bán",
      "Flash Sales",
      "Chương Trình Tiếp Thị Liên Kết Berry",
      "Liên Hệ Với Truyền Thông",
    ],
    pay: [Pay1, Pay2, Pay3, Pay4, Pay5],
    transporter: [Ship1, Ship2, Ship3, Ship4],
  },
};
