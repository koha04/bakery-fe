import { Link, useNavigate } from "react-router-dom";
import Shield from "../../assets/img/vector-shield.jpg";
import { Logout } from "heroicons-react";
import axios from "axios";
import { UserProps } from "../../types";

const Sidebar = ({
  setUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
}) => {
  const navigate = useNavigate()

  const logOut = async () => {
    localStorage.removeItem("USER_DISPLAYNAME");
    localStorage.removeItem("USER_AVATAR");
    setUser({ displayName: "", photoURL: "" });
    navigate("/")

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_PORT}/auth/clearcookie`,
        {
          withCredentials: true,
        }
      );
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="py-5 w-[280px] h-screen flex justify-center bg-violet-400">
      <div className="flex flex-col items-center justify-between">
        <div className="py-px">
          <Link to="/dashboard" className="flex items-center">
            <div className="w-10 h-10">
              <img
                src={Shield}
                alt="shield"
                className="max-w-full h-full mix-blend-multiply object-cover"
              />
            </div>
            <span className="text-2xl">ADMIN</span>
          </Link>
        </div>
        <ul>
          <li className="my-3 p-2">
            <Link
              to="/dashboard/manage-user"
              className="font-semibold text-xl flex justify-center"
            >
              Quản lí khách hàng
            </Link>
          </li>
          <li className="my-3 p-2">
            <Link
              to="/dashboard/manage-products"
              className="font-semibold text-xl flex justify-center"
            >
              Quản lí sản phẩm
            </Link>
          </li>
          <li className="my-3 p-2">
            <Link
              to="/dashboard/manage-orders"
              className="font-semibold text-xl flex justify-center"
            >
              Quản lí đơn hàng
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">Đăng xuất</span>
          <Logout className="cursor-pointer" onClick={logOut} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
