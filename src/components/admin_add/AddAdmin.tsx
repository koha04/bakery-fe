import axios from "axios";
import React, { useState } from "react";

interface AdminProps {
  name_admin: string;
  email_admin: string;
  pass_admin: string;
}

const initialValues: AdminProps = {
  name_admin: "",
  email_admin: "",
  pass_admin: "",
};

const AddAdmin = () => {
  const [admin, setAdmin] = useState<AdminProps>(initialValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_PORT}/dashboard/addAdmin`,
        admin,
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
      <div className="w-[90%] h-[200px] flex items-center justify-around flex-wrap gap-1 shadow-md">
        <div className="flex flex-col gap-px">
          <label htmlFor="name_admin">Tên</label>
          <input
            type="text"
            name="name_admin"
            id="name_admin"
            placeholder="Ex: John Smith..."
            value={admin.name_admin}
            className="w-[300px] border border-slate-500 outline-none rounded py-1 px-3"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-px">
          <label htmlFor="email_admin">Email</label>
          <input
            type="email"
            name="email_admin"
            id="email_admin"
            value={admin.email_admin}
            placeholder="Ex: john@gmail.com..."
            className="w-[300px] border border-slate-500 outline-none rounded py-1 px-3"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-px">
          <label htmlFor="pass_admin">Mật khẩu</label>
          <input
            type="password"
            name="pass_admin"
            id="pass_admin"
            value={admin.pass_admin}
            placeholder="Ex: *********..."
            className="w-[300px] border border-slate-500 outline-none rounded py-1 px-3"
            onChange={onChange}
          />
        </div>
        <button
          className="w-1/3 bg-slate-600 px-4 py-2 rounded text-sm text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddAdmin;
