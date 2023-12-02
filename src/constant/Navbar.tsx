import { LogoutOutline } from "heroicons-react";
import { Link, useLocation } from "react-router-dom";
import { data } from "../data";
import { UserStateProp } from "../types";
import axios from "axios";

const Navbar = ({ user, setUser }: UserStateProp) => {
  const { pathname } = useLocation();

  const logOut = async () => {
    localStorage.removeItem("USER_DISPLAYNAME");
    localStorage.removeItem("USER_AVATAR");
    setUser({ displayName: "", photoURL: "" });

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_PORT}/auth/clearcookie`,
        {
          withCredentials: true,
        }
      );
      const data = await res.data
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`p-5 w-full h-[200px] bg-navbar bg-cover bg-no-repeat ${
        user?.displayName && user?.photoURL
          ? "flex justify-around min-[500px]:max-[900px]:flex-col-reverse"
          : ""
      }`}
    >
      <ul className="flex justify-center flex-wrap min-[500px]:max-[900px]:justify-evenly min-[673px]:max-[821px]:w-[80%] min-[673px]:max-[821px]:mx-auto">
        {data.navlinks.map((item) => (
          <li
            key={item.id}
            className={`px-[2px] ${
              user?.displayName && user?.photoURL && item.id === 4
                ? "hidden"
                : ""
            }`}
          >
            <Link
              to={item.path}
              className={`link py-[10px] px-5 text-[23px] flex items-center justify-center gap-[5px] transition-all duration-300 ${
                pathname.endsWith(item.path) ? "scale-110" : "opacity-50"
              }`}
            >
              <img
                src={item.imageSrc}
                alt={item.name}
                className="w-[25px] h-[25px]"
              />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {user?.displayName && user?.photoURL ? (
        <div className="flex items-center gap-[5px] h-12 min-[500px]:max-[900px]:p-1 min-[500px]:max-[900px]:justify-between">
          <span className="text-purple-600 font-medium text-[23px]">
            {user.displayName}
          </span>
          <img
            title={user.displayName}
            src={user.photoURL}
            alt={user.displayName}
            className="w-10 h-10 object-cover rounded-full cursor-pointer"
          />
          <LogoutOutline
            className="text-purple-600 cursor-pointer"
            onClick={logOut}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
