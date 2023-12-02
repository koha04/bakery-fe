import AddAdmin from "../admin_add/AddAdmin";
import AddProducts from "../admin_add/AddProducts";

const Admin = () => {
  return (
    <div className="p-2 flex-1">
      <div className="pb-5 border-b border-slate-800">
        <h1 className="mb-1 text-2xl font-semibold text-orange-500">
          Thêm sản phẩm
        </h1>
        <AddProducts />
      </div>
      <div className="py-2">
        <h1 className="mb-1 text-2xl font-semibold text-orange-500">
          Thêm quản trị viên
        </h1>
        <AddAdmin />
      </div>
    </div>
  );
};

export default Admin;
