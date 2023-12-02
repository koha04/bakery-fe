import axios from "axios";
import { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState<{
    orderItems: {
      id: number;
      quantity: number;
      createAt: string;
      order: {
        userId: number;
      };
      product: {
        name: string;
        imageUrl: string;
        price: number;
        type: string;
      };
    }[];
  }>({ orderItems: [] });
  console.log(orders);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_PORT}/orders/allorders`,
          {
            withCredentials: true,
          }
        );
        const data = await res.data;
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="w-full h-[530px] p-2">
      <h1 className="font-semibold text-2xl leading-loose border-b">
        Danh sách đơn hàng
      </h1>
      <ul className="mt-3 flex flex-wrap justify-between gap-4 text-white">
        {orders.orderItems.map((item) => (
          <li className="p-3 rounded w-[32%] bg-slate-500" key={item.id}>
            <h1 className="text-center font-bold text-2xl">
              User ID: {item.order.userId}
            </h1>
            <p className="font-medium text-sm border-b leading-7">
              Sản phẩm thuộc về userId {item.order.userId}
            </p>
            <div className="h-28 my-3 flex items-center justify-between">
              <div className="w-20 h-full">
                <img
                  src={item.product.imageUrl}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-60 flex flex-col gap-1">
                <h1 className="text-base font-medium text-center">{item.product.name}</h1>
                <p className="text-center">Giá: {item.product.price}$</p>
                <p className="text-center">Số lượng: {item.quantity}</p>
                <p className="text-center">Loại: {item.product.type}</p>
              </div>
            </div>
            <p className="text-green-200">Được mua vào ngày {item.createAt.slice(0, 10)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageOrders;
