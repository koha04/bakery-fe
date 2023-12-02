import { SearchOutline } from "heroicons-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchProp } from "../types";

const Header = ({ searchValue, setSearchValue }: SearchProp) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const submit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!pathname.includes("/menu")) {
      navigate("/menu");
    }
  };

  return (
    <header className="py-5 max-h-[250px] bg-header bg-cover">
      <div className="name text-center text-[95px] text-[#d02262] min-[500px]:max-[900px]:mb-5">
        Berry
      </div>
      <div className="relative w-full max-h-[90px] flex justify-center items-end min-[900px]:h-[90px]">
        <div
          className={`w-[60px] h-[50px] absolute -top-[10px] left-[35%] bg-emoji bg-cover drop-shadow-emoji transition-all duration-700 ease-out min-[500px]:max-[900px]:hidden ${
            searchValue ? "active" : ""
          } [&.active]:left-[60%]`}
        ></div>
        <form
          onSubmit={submit}
          className="w-[45%] h-[45px] p-[2px] flex items-center bg-navText rounded border border-[#ff9a9e] min-[500px]:max-[900px]:w-[60%]"
        >
          <input
            className="px-[10px] w-full h-11 border-none outline-none"
            type="text"
            placeholder="Bạn cần gì nè.. !"
            autoComplete="off"
            value={searchValue}
            required
            onChange={onChange}
          />
          <SearchOutline
            color="#fff"
            cursor="pointer"
            className="w-[60px] h-full p-[9px] rounded bg-button transition-all duration-[400ms] hover:scale-90"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
