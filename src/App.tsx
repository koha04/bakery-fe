import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "./constant/Footer";
import Header from "./constant/Header";
import Navbar from "./constant/Navbar";
import Cart from "./pages/cart/page";
import Dashboard from "./pages/dashboard/page";
import Home from "./pages/home/page";
import Info from "./pages/info/page";
import Login from "./pages/login/page";
import Menu from "./pages/menu/page";
import Register from "./pages/register/page";
import { AmountProductsProp, UserProps } from "./types";
import ManageUser from "./components/manage/user/page";
import ManageProducts from "./components/manage/products/page";
import ManageOrders from "./components/manage/orders/page";
import Admin from "./components/admin/Admin";
import axios from "axios";
import DetailProduct from "./components/DetailProduct";

const App = () => {
  const [user, setUser] = useState<UserProps>({
    photoURL: "",
    displayName: "",
  });
  const [searchValue, setSearchValue] = useState<string>("");
  const [cart, setCart] = useState<AmountProductsProp[]>([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const displayName = localStorage.getItem("USER_DISPLAYNAME");
    const photoURL = localStorage.getItem("USER_AVATAR");

    if (displayName && photoURL) {
      setUser((prev) => ({ ...prev, displayName, photoURL }));
    }
  }, [setUser]);

  useEffect(() => {
    const authenticateAdmin = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_PORT}/dashboard`,
          { withCredentials: true }
        );
        const data = await res.data;
        console.log(data);
        
        return data;
      } catch (error) {
        navigate("/", { replace: true });
      }
    };

    pathname.includes("dashboard") ? authenticateAdmin() : null;
  }, [navigate, pathname]);

  if (pathname.includes("/dashboard")) {
    return (
      <Routes>
        <Route element={<Dashboard setUser={setUser} />} path="/dashboard">
          <Route element={<Admin />} path="" />
          <Route element={<ManageUser />} path="manage-user" />
          <Route element={<ManageProducts />} path="manage-products" />
          <Route element={<ManageOrders />} path="manage-orders" />
        </Route>
      </Routes>
    );
  }

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={
            <Menu
              user={user}
              searchValue={searchValue}
              cart={cart}
              setCart={setCart}
            />
          }
          path="/menu"
        />
        <Route element={<Info />} path="/info" />
        <Route element={<Login setUser={setUser} />} path="/login" />
        <Route element={<Cart cart={cart} setCart={setCart} />} path="/cart" />
        <Route element={<Register />} path="/register" />
        <Route element={<DetailProduct />} path="/menu/:id" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
