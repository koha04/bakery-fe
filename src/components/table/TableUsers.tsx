import axios from "axios";
import { useEffect, useState } from "react";

interface UserList {
  id: number;
  name: string;
  email: string;
  image: string;
  role: "USER" | "ADMIN";
}

const TableUsers = () => {
  const [userList, setUserList] = useState<{
    users: UserList[];
  }>({ users: [] });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_PORT}/users/allusers`
        );
        const data = await res.data;
        setUserList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-3 w-full h-[500px] overflow-auto">
      <table border={1} className="w-full overflow-hidden">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Image</th>
          <th>Role</th>
        </thead>
        <tbody>
          {userList.users.map((item) => (
            <tr key={item.id}>
              <td className="text-center">{item.id}</td>
              <td className="w-20 text-center">{item.name}</td>
              <td className="w-40 h-28">
                <div className="w-full h-20 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="max-w-full h-full object-cover"
                  />
                </div>
              </td>
              <td className="text-center">{item.email}</td>
              <td className="text-center">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
