import { ShoppingCart } from "heroicons-react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { AmountProductsProp, UserProps } from "../../types";

interface ListProductsProp {
  user: UserProps;
  searchValue: string;
  type: string;
  option: string;
  sort: string;
  cart: AmountProductsProp[];
  setCart: React.Dispatch<React.SetStateAction<AmountProductsProp[]>>;
}

const ListProducts = ({
  user,
  searchValue,
  type,
  option,
  sort,
  cart,
  setCart,
}: ListProductsProp) => {
  const { data } = useFetch(
    `${import.meta.env.VITE_SERVER_PORT}/products/allproducts`
  );
  const navigate = useNavigate();

  const priceFilter = (item: { price: number }) => {
    switch (option) {
      case "0-10":
        return item.price < 10;
      case "10-50":
        return item.price >= 10 && item.price < 50;
      case "50-100":
        return item.price >= 50 && item.price < 100;
      case "100-Infinity":
        return item.price >= 100;
      default:
        return true;
    }
  };

  const typeFilter = (item: { type: string }) => {
    switch (type) {
      case "SWEET_CAKE":
        return item.type === "SWEET_CAKE";
      case "CHEESE_CAKE":
        return item.type === "CHEESE_CAKE";
      case "DRINK":
        return item.type === "DRINK";
      default:
        return true;
    }
  };

  const searchFilter = (item: { name: string }) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  };

  const sortProducts = (a: AmountProductsProp, b: AmountProductsProp) => {
    switch (sort) {
      case "nameProduct":
        return a.name.localeCompare(b.name);
      case "priceProduct":
        return a.price - b.price;
      default:
        return 1;
    }
  };

  const addCart = (item: AmountProductsProp) => {
    if (!user.displayName && !user.photoURL) {
      return navigate("/login");
    }

    const selectedItem = cart.find((t) => t.id === item.id);

    if (!selectedItem) {
      return setCart((prev) => [...prev, { ...item, amount: 1 }]);
    }

    setCart((prev) =>
      prev.map((v) =>
        v.id === selectedItem?.id
          ? { ...v, amount: v.amount ? v.amount + 1 : 1 }
          : v
      )
    );
  };

  const filterByType = data.products.filter(typeFilter);
  const filterByPrice = filterByType.filter(priceFilter);
  const filterList = filterByPrice.filter(searchFilter);
  const sortList = [...filterList].sort(sortProducts);

  return (
    <div className="flex flex-wrap">
      <div className="px-5 h-[420px] flex flex-wrap justify-between gap-5 overflow-auto">
        {sortList.map((item) => {
          return (
            <Link
              to={`/menu/${item.id}`}
              key={item.id}
              className="py-2 flex justify-center items-center gap-3 w-[420px] h-[200px] bg-list border border-hot rounded-[10px]"
            >
              <div className="w-[170px] h-[180px]">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="w-56 flex flex-col justify-around h-full">
                <h1 className="font-bold text-[19px]">{item.name}</h1>
                <div className="">
                  <p>
                    Giá: <span>{item.price}</span>$
                  </p>
                  <p>
                    Số lượng hiện có: <span>{item.quantity}</span>
                  </p>
                </div>
                <button
                  onClick={() => addCart(item)}
                  className="py-1 px-2 rounded flex justify-center  gap-1 text-white bg-button"
                >
                  Thêm sản phẩm
                  <ShoppingCart />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ListProducts;
