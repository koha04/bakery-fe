import BillCart from "../../components/shopping/BillCart";
import CartContainer from "../../components/shopping/CartContainer";
import CartProducts from "../../components/shopping/CartProducts";
import { CartProp } from "../../types";

const Cart = ({ cart, setCart }: CartProp) => {
  return (
    <CartContainer>
      <CartProducts cart={cart} setCart={setCart} />
      <BillCart cart={cart} />
    </CartContainer>
  );
};

export default Cart;
