import { useLocation, useNavigate } from "react-router-dom";
import BannerProduct from "../../components/bannerproducts/BannerProduct";
import Category from "../../components/categories/Category";
import SaleProducts from "../../components/lightning sales/SaleProducts";
import ListImage from "../../components/list images/ListImage";
import SwiperContainer from "../../components/slide/SwiperContainer";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const token = search.split("=")[1];

  useEffect(() => {
    const setCookie = async () => {
      try {
        const res = await axios.get("http://localhost:5432/auth/setcookie", {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.data;
        const role = data.message.split(" ")[4];
        console.log(data);
        
        if (role === "ADMIN") {
          return navigate("/dashboard", { replace: true });
        }
        return navigate("/", { replace: true });
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      setCookie();
      history.pushState({}, "", "http://localhost:5173");
    }
  }, [navigate, token]);

  return (
    <>
      <SwiperContainer />
      <Category />
      <SaleProducts />
      <BannerProduct />
      <ListImage />
    </>
  );
};

export default Home;
