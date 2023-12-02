import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { UserProps } from "../../types";

const Dashboard = ({
  setUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
}) => {
  return (
    <div className="flex">
      <Sidebar setUser={setUser}/>
      <Outlet />
    </div>
  );
};

export default Dashboard;
