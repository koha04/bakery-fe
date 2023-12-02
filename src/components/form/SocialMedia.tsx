import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getIdToken,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Facebook from "../../assets/img/facebook.png";
import Google from "../../assets/img/google.png";
import auth from "../../lib/firebase";
import { IProps } from "../../types";
import axios from "axios";

const SocialMedia = ({ setUser }: IProps) => {
  const navigate = useNavigate();

  const loginBySocialMedia = async (
    provider: FacebookAuthProvider | GoogleAuthProvider
  ) => {
    const { user } = await signInWithPopup(auth, provider);
    const token = await getIdToken(user);
    const { photoURL, displayName } = user;

    if (!photoURL || !displayName) {
      return;
    }
    try {
      await axios.get(`${import.meta.env.VITE_SERVER_PORT}/auth/setcookie`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setUser((prev) => ({ ...prev, displayName, photoURL }));
    } catch (error) {
      console.log(error);
    }
    localStorage.setItem("USER_DISPLAYNAME", displayName);
    localStorage.setItem("USER_AVATAR", photoURL);
    navigate("/", { replace: true });
  };

  return (
    <>
      <p className="relative text-center p-[10px] before:absolute before:top-1/2 before:left-[1px] before:w-[40%] before:h-[1px] before:bg-[#ccc] after:absolute after:top-1/2 after:right-[1px] after:w-[40%] after:h-[1px] after:bg-[#ccc]">
        Hoặc
      </p>
      <div className="flex justify-center items-center flex-col gap-[15px] md:max-lg:flex-row">
        <div className="px-5 flex justify-around items-center border border-[#ccc] bg-white">
          <div className="w-[30px]">
            <img src={Facebook} alt="" className="w-[30px]" />
          </div>
          <button
            className="p-[15px] w-[200px] whitespace-nowrap border-none outline-none bg-white text-[15px]"
            onClick={() => loginBySocialMedia(new FacebookAuthProvider())}
          >
            Login with Facebook
          </button>
        </div>
        <div className="px-5 flex justify-around items-center border border-[#ccc] bg-white">
          <div className="w-[30px]">
            <img src={Google} alt="" className="w-[30px]" />
          </div>
          <button
            className="p-[15px] w-[200px] whitespace-nowrap border-none outline-none bg-white text-[15px]"
            onClick={() => loginBySocialMedia(new GoogleAuthProvider())}
          >
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
