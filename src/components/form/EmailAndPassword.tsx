import { HookFormProps } from "../../types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

const EmailAndPassword = ({
  register,
  errors,
}: {
  register: UseFormRegister<HookFormProps>;
  errors: FieldErrors<HookFormProps>;
}) => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap py-[15px] px-[10px] min-[500px]:max-lg:w-full">
        <label htmlFor="email-user">Email</label>
        <div className="relative w-[75%]">
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Please fill in this field",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter the correct email format",
              },
            })}
            className="w-full py-[5px] outline-none text-base border-b border-[#ccc] bg-transparent"
            type="email"
            id="email-user"
            placeholder="example@gmail.com"
          />
          {errors.email?.message && (
            <p className="absolute -bottom-[22px] left-0 text-sm font-normal text-[#f13333]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap py-[15px] px-[10px]">
        <label htmlFor="pass-user">Password</label>
        <div className="relative w-[75%]">
          <input
            {...register("password", {
              minLength: {
                value: 9,
                message: "Please fill in a minimum of 9 characters",
              },
            })}
            className="w-full py-[5px] outline-none text-base border-b border-[#ccc] bg-transparent"
            type="password"
            id="pass-user"
            placeholder="************"
          />
          {errors.password?.message && (
            <p className="absolute -bottom-[22px] left-0 text-sm font-normal text-[#f13333]">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default EmailAndPassword;
