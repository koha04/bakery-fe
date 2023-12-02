import axios from "axios";
import React, { useState } from "react";

interface ProductsProps {
  name_product: string;
  imageurl: string;
  price_product: number;
  desc_product: string;
  quantity_product: number;
  type_product: "SWEET_CAKE" | "CHEESE_CAKE" | "DRINK";
}

const initialValues: ProductsProps = {
  name_product: "",
  imageurl: "",
  desc_product: "",
  price_product: 0,
  quantity_product: 0,
  type_product: "SWEET_CAKE",
};

const AddProducts = () => {
  const [infoProduct, setInfoProduct] = useState<ProductsProps>(initialValues);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setInfoProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_PORT}/dashboard/addProduct`,
        infoProduct,
        {
          withCredentials: true,
        }
      );
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex justify-center" onSubmit={onSubmit}>
      <div className="w-[90%] h-[200px] py-2 flex items-center justify-around flex-wrap gap-1 shadow-md">
        <div className="flex flex-col gap-px">
          <label className="text-sm" htmlFor="name_product">
            Tên sản phẩm
          </label>
          <input
            type="text"
            name="name_product"
            id="name_product"
            placeholder="Ex: Sweet Cake..."
            value={infoProduct.name_product}
            onChange={onChange}
            className="w-[250px] border border-slate-500 outline-none rounded py-1 px-3"
          />
        </div>
        <div className="flex flex-col gap-px">
          <label className="text-sm" htmlFor="imageurl">
            Hình ảnh
          </label>
          <input
            type="url"
            name="imageurl"
            id="imageurl"
            value={infoProduct.imageurl}
            onChange={onChange}
            placeholder="Đường dẫn hình ảnh..."
            className="w-[250px] border border-slate-500 outline-none rounded py-1 px-3"
          />
        </div>
        <div className="flex flex-col gap-px">
          <label className="text-sm" htmlFor="price_product">
            Giá sản phẩm
          </label>
          <input
            type="number"
            name="price_product"
            id="price_product"
            placeholder="Ex: 500..."
            value={infoProduct.price_product}
            onChange={onChange}
            className="w-[250px] border border-slate-500 outline-none rounded py-1 px-3"
          />
        </div>
        <div className="flex flex-col gap-px">
          <label className="text-sm" htmlFor="desc_product">
            Mô tả sản phẩm
          </label>
          <textarea
            className="w-[250px] resize-none border border-slate-500 outline-none rounded py-1 px-3"
            name="desc_product"
            id="desc_product"
            placeholder="Ex: lorem ipsum..."
            cols={10}
            rows={1}
            value={infoProduct.desc_product}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="flex flex-col gap-px">
          <label className="text-sm" htmlFor="quantity_product">
            Số lượng sản phẩm
          </label>
          <input
            type="number"
            name="quantity_product"
            id="quantity_product"
            placeholder="Ex: 26..."
            value={infoProduct.quantity_product}
            onChange={onChange}
            className="w-[250px] border border-slate-500 outline-none rounded py-1 px-3"
          />
        </div>
        <div className="flex flex-col gap-px">
          <label className="text-sm" htmlFor="type_product">
            Loại sản phẩm
          </label>
          <select
            className="w-[250px] border border-slate-500 outline-none p-1 rounded"
            name="type_product"
            id="type_product"
            value={infoProduct.type_product}
            onChange={onChange}
          >
            <option value="SWEET_CAKE">Sweet Cake</option>
            <option value="CHEESE_CAKE">Cheese Cake</option>
            <option value="DRINK">Drink</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-1/3 bg-slate-600 px-4 py-2 rounded text-sm text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProducts;
