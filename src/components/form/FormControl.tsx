import Login from "../../assets/img/login.jpg";
import { FormProps } from "../../types";

const FormControl = ({ title, children }: FormProps) => {
  return (
    <div className="pb-[30px] w-full flex flex-col justify-between items-center text-lg gap-[30px]">
      <p className="menutitle w-[90%] text-center text-[30px] font-bold leading-[50px] border-b-2 border-[#fecfef]">
        {title}
      </p>
      <div className="max-w-full w-[80%] p-5 flex bg-list justify-around shadow-container min-[500px]:max-lg:flex-col-reverse min-[500px]:max-sm:w-[90%]">
        <div className="flex flex-col justify-center w-1/2 max-w-full min-[500px]:max-lg:w-full">
          <h1 className="text-center font-normal text-4xl py-1">
            {title.toUpperCase()}
          </h1>
          {children}
        </div>
        <div className="w-[350px] h-[490px] min-[500px]:max-lg:w-full min-[500px]:max-lg:h-[200px]">
          <img
            src={Login}
            alt="img-login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FormControl;
