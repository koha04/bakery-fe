import { Plus } from "heroicons-react";
import { useNavigate } from "react-router-dom";
import TableUsers from "../../table/TableUsers";

const ManageUser = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-2">
      <div className="flex items-center justify-between border-b border-stone-400">
        <h1 className="font-semibold text-2xl leading-loose">
          Danh sách người dùng
        </h1>
        <button
          className="flex gap-px rounded py-[6px] px-3 text-white bg-emerald-500"
          onClick={() => navigate("/dashboard")}
        >
          <Plus />
          Thêm quản trị viên
        </button>
      </div>
      <TableUsers />
    </div>
  );
};

export default ManageUser;
