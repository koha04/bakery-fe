import useFetch from "../../hooks/useFetch";

const TableProducts = () => {
  const { data } = useFetch(
    `${import.meta.env.VITE_SERVER_PORT}/products/allproducts`
  );

  return (
    <div className="p-3 w-full h-full overflow-auto">
      <table border={1} className="overflow-hidden">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>ImageURL</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Type</th>
        </thead>
        <tbody>
          {data.products.map((item) => (
            <tr key={item.id} className="h-[50px]">
              <td className="text-center">{item.id}</td>
              <td className="w-20 text-center">{item.name}</td>
              <td className="w-40 h-40 flex justify-center items-center">
                <div className="w-20 h-20">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </td>
              <td className="text-center">{item.quantity}</td>
              <td>
                <p>
                  {item.description.slice(0, item.description.length / 2)}...
                  <button className="text-slate-600">Xem thêm</button>
                </p>
              </td>
              <td className="text-center">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
