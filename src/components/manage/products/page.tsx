import { Plus } from "heroicons-react";
import TableProducts from "../../table/TableProducts";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[530px] p-2">
      <div className="flex items-center justify-between border-b border-stone-400">
        <h1 className="font-semibold text-2xl leading-loose">
          Danh sách sản phẩm
        </h1>
        <button
          className="flex gap-px rounded py-[6px] px-3 text-white bg-emerald-500"
          onClick={() => navigate("/dashboard")}
        >
          <Plus />
          Thêm sản phẩm
        </button>
      </div>
      <TableProducts />
    </div>
  );
};

export default ManageProducts;
