import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/form/Checkbox";
import EmailAndPassword from "../../components/form/EmailAndPassword";
import FormControl from "../../components/form/FormControl";
import Navigate from "../../components/form/Navigate";
import SocialMedia from "../../components/form/SocialMedia";
import { HookFormProps, IProps } from "../../types";

const Login = ({ setUser }: IProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HookFormProps>();

  const onSubmit: SubmitHandler<HookFormProps> = async (data, event) => {
    event?.preventDefault();
    try {
      const res = await axios.post("http://localhost:5432/auth/login", data, {
        withCredentials: true,
      });
      const result = await res.data;
      if (result.status === 200) {
        setUser((prev) => ({
          ...prev,
          displayName: result.displayName,
          photoURL: result.photoURL,
        }));
        localStorage.setItem("USER_DISPLAYNAME", result.displayName);
        localStorage.setItem("USER_AVATAR", result.photoURL);
        navigate(`/?data=${result.message}`, { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl title="Đăng nhập">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <EmailAndPassword register={register} errors={errors} />
        <div className="flex items-center justify-between flex-wrap py-[15px] px-[10px]">
          <Checkbox />
          <button className="py-3 px-[25px] bg-button text-white border-none outline-none rounded-[10px] text-[17px] transition-all duration-300 hover:opacity-80">
            Đăng nhập
          </button>
        </div>
      </form>
      <Navigate
        firstLink="Đăng ký"
        firstPath="/register"
        secondLink="Quên mật khẩu"
        secondPath="/forgotpassword"
      />
      <SocialMedia setUser={setUser} />
    </FormControl>
  );
};

export default Login;
