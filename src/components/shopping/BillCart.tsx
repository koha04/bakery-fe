import axios from "axios";
import { AmountProductsProp } from "../../types";

const BillCart = ({ cart }: { cart: AmountProductsProp[] }) => {
  const total = cart.reduce(
    (acc, cur) => (cur.amount ? acc + cur.amount * cur.price : acc),
    0
  );

  const buyProducts = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_PORT}/products/buyproducts`,
        cart,
        { withCredentials: true }
      );
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[400px] text-[#43484d] shadow-cart min-[500px]:max-md:w-[90%] md:max-lg:w-[750px]">
      <h1 className="h-[60px] border-b border-[#e1e8ee] py-5 px-[30px] text-[#5e6977] text-lg font-normal">
        Tổng
      </h1>
      <div className="flex items-center justify-around py-[30px] px-[10px]">
        <label htmlFor="voucher">Mã Voucher:</label>
        <input
          type="text"
          name="voucher"
          id="voucher"
          placeholder="Nhập mã"
          className="py-1 border-b border-black outline-none"
        />
      </div>
      <p className="flex items-center justify-around py-[30px] min-[500px]:max-lg:py-2">
        Tổng tiền hàng: <span>{total.toFixed(2)}$</span>
      </p>
      <span className="flex justify-center min-[500px]:max-lg:py-5">
        <button
          onClick={buyProducts}
          className="w-[80%] p-[10px] text-lg border-none outline-none text-white bg-button rounded-[10px] hover:opacity-80 transition-opacity duration-300"
        >
          Mua hàng
        </button>
      </span>
    </div>
  );
};

export default BillCart;
