import { useState } from "react";
import ListProducts from "../../components/menu category/ListProducts";
import MenuOptions from "../../components/menu category/MenuOptions";
import { SearchCartProp } from "../../types";

const Menu = ({ user, cart, setCart, searchValue }: SearchCartProp) => {
  const [type, setType] = useState<string>("");
  const [option, setOption] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  return (
    <div className="py-5 flex gap-6 min-[500px]:max-lg:flex-col">
      <MenuOptions
        type={type}
        setType={setType}
        setOption={setOption}
        sort={sort}
        setSort={setSort}
      />
      <ListProducts
        user={user}
        searchValue={searchValue}
        type={type}
        option={option}
        sort={sort}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Menu;
