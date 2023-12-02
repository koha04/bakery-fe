import { SortProp } from "../../types";

const SortProducts = ({ sort, setSort }: SortProp) => {
  const onSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <h1 className="text-lg text-stone-600">Sắp xếp theo</h1>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name=""
            id="name"
            value="nameProduct"
            checked={sort === "nameProduct"}
            onChange={onSortChange}
          />
          <label htmlFor="name">Tên</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name=""
            id="cost"
            value="priceProduct"
            checked={sort === "priceProduct"}
            onChange={onSortChange}
          />
          <label htmlFor="cost">Giá</label>
        </div>
      </div>
    </div>
  );
};

export default SortProducts;
