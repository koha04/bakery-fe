import Select from "./Select";
import SortProducts from "./SortProducts";

interface MenuOptionsProp {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const MenuOptions = ({
  type,
  setType,
  setOption,
  sort,
  setSort,
}: MenuOptionsProp) => {
  const selectedType = (type: string) => {
    setType(type);
  };

  return (
    <div className="w-1/4 px-5 border-r border-r-black min-[500px]:max-lg:w-full min-[500px]:max-[900px]:border-none lg:max-[1200px]:w-[30%]">
      <div>
        <h1 className="text-[25px] font-bold text-[#d01257]">Danh Mục</h1>
        <ul className="flex flex-col gap-[2px] min-[500px]:max-lg:flex-row min-[500px]:max-lg:flex-wrap min-[500px]:max-md:justify-between">
          {[
            { category: "Bánh Ngọt", type: "SWEET_CAKE" },
            { category: "Bánh Kem", type: "CHEESE_CAKE" },
            { category: "Đồ Uống", type: "DRINK" },
          ].map((item) => (
            <li
              key={item.category}
              onKeyDown={() => {}}
              onClick={() => selectedType(item.type)}
              className={`menutitle ${
                type === item.type ? "border-none bg-button text-white" : ""
              } m-[5px] w-[250px] py-[5px] px-5 border border-black transition-all duration-200 rounded-[10px] text-[25px] font-bold text-center cursor-pointer min-[500px]:max-md:w-[48%] min-[500px]:max-md:mx-0 md:max-lg:w-[31%]`}
            >
              {item.category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[25px] font-bold text-[#d01257]">Lọc</h1>
        <div className="flex flex-col gap-2">
          <Select setOption={setOption} />
          <SortProducts sort={sort} setSort={setSort} />
        </div>
      </div>
    </div>
  );
};

export default MenuOptions;
