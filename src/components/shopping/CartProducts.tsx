import { XOutline, Heart, PlusOutline, MinusOutline } from "heroicons-react";
import { AmountProductsProp, CartProp } from "../../types";

const CartProducts = ({ cart, setCart }: CartProp) => {
  const handleRemove = (id: number) => {
    const filter = cart.filter((item) => item.id !== id);
    setCart(filter);
  };

  const handleAmount = (item: AmountProductsProp, number: number) => {
    const selectedProduct = cart.find((v) => v.id === item.id);

    if (selectedProduct) {
      setCart((prev) =>
        prev.map((t) =>
          t.id === selectedProduct.id
            ? {
                ...t,
                amount: t.amount + number >= 1 ? t.amount + number : 1,
              }
            : t
        )
      );
    }
  };

  return (
    <div className="w-[750px] h-[423px] bg-white shadow-cart rounded-md flex flex-col overflow-auto min-[500px]:max-md:w-[90%]">
      <h1 className="h-[60px] border-b border-[#e1e8ee] py-5 px-[30px] text-[#5e6977] text-lg font-normal">
        Giỏ hàng
      </h1>
      {cart.map((item) => {
        return (
          <div
            key={item.id}
            className="py-5 px-[30px] h-[120px] flex flex-wrap justify-between min-[500px]:max-[900px]:mb-3"
          >
            <div className="py-[30px] flex items-center gap-6">
              <XOutline
                className="cursor-pointer"
                onClick={() => handleRemove(item.id)}
              />
              <Heart className="transition-all cursor-pointer" />
            </div>

            <div className="flex items-center gap-10 px-8 min-[500px]:max-md:px-3">
              <div className="w-[70px] h-[70px] min-[500px]:max-[900px]:w-20 min-[500px]:max-[900px]:h-20">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="description">
                <span className="w-32 text-center block text-[#86939E] font-light">
                  {item.name}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between flex-1 min-[500px]:max-[900px]:mt-1">
              <div className="flex items-center justify-center gap-3">
                <PlusOutline
                  className="w-[30px] h-[30px] p-[5px] rounded-md bg-[#E1E8EE] cursor-pointer"
                  onClick={() => handleAmount(item, 1)}
                />
                <span className="w-[20px] px-2 text-[#43484D]">
                  {item.amount}
                </span>
                <MinusOutline
                  className="w-[30px] h-[30px] p-[5px] rounded-md bg-[#E1E8EE] cursor-pointer"
                  onClick={() => handleAmount(item, -1)}
                />
              </div>
              <span className="flex-1 flex items-center justify-center text-[#43484D] font-normal">
                {item.price}$
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProducts;
