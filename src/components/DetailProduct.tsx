import { useEffect, useState } from "react";
import { AmountProductsProp } from "../types";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialValues: AmountProductsProp = {
  id: 0,
  description: "",
  imageUrl: "",
  name: "",
  price: 0,
  quantity: 0,
  type: "",
  amount: 0,
};

const DetailProduct = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<AmountProductsProp>(initialValues);

  useEffect(() => {
    const detailProduct = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_PORT}/products/detail/${id}`
        );
        const product = await res.data;
        setDetail(product);
      } catch (error) {
        console.log(error);
      }
    };
    detailProduct();
  }, [id]);
  console.log(detail);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[80%] h-[500px] flex items-center justify-center gap-5 shadow-lg bg-gradient-to-tr from-violet-300 via-yellow-300 to-emerald-300">
        <div className="w-72 h-[400px]">
          <img
            src={detail.imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-1">
          <h1 className="font-bold text-blue-500 text-3xl">{detail.name}</h1>
          <p className="text-sm font-light">{detail.description}</p>
          <p>Giá: {detail.price}</p>
          <p>Số lượng: {detail.quantity}</p>
          <p>Loại: {detail.type}</p>
          <p>Đã mua: {detail.amount ? detail.amount : 0}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
