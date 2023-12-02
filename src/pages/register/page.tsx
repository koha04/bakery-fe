import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailAndPassword from "../../components/form/EmailAndPassword";
import FormControl from "../../components/form/FormControl";
import Navigate from "../../components/form/Navigate";
import { HookFormProps } from "../../types";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HookFormProps>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<HookFormProps> = async (data, event) => {
    event?.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5432/auth/register",
        data,
        {
          withCredentials: true,
        }
      );
      const result = await res.data;
      console.log(result);
      if (result.status === 200 && result.message === "Register completely") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl title="Đăng ký">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between flex-wrap py-[15px] px-[10px] min-[500px]:max-lg:w-full">
          <label htmlFor="name-user">Username</label>
          <div className="relative w-[75%]">
            <input
              {...register("username", {
                minLength: {
                  value: 9,
                  message: "Please fill in a minimum of 9 characters",
                },
                maxLength: {
                  value: 20,
                  message: "You have entered more than 20 characters",
                },
              })}
              className="w-full py-[5px] outline-none text-base border-b border-[#ccc] bg-transparent"
              type="text"
              id="name-user"
              placeholder="Ex: John Stone"
            />
            {errors.username?.message && (
              <p className="absolute -bottom-[22px] left-0 text-sm font-normal text-[#f13333]">
                {errors.username.message}
              </p>
            )}
          </div>
        </div>
        <EmailAndPassword register={register} errors={errors} />
        <button className="mt-3 w-full py-3 mb-5 px-[25px] bg-button text-white border-none outline-none rounded-[10px] text-[17px] transition-all duration-300 hover:opacity-80">
          Đăng ký
        </button>
      </form>
      <Navigate
        firstLink="Trang chủ"
        firstPath="/"
        secondLink="Đăng nhập"
        secondPath="/login"
      />
    </FormControl>
  );
};

export default Register;
