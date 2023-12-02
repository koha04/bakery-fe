const Select = ({
  setOption,
}: {
  setOption: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-lg text-stone-600">Khoảng giá</h1>
      <select
        name="price"
        id="price"
        className="outline-none border border-[#ccc] p-1 rounded"
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="Chọn tại đây" selected disabled hidden>
          Chọn tại đây
        </option>
        <option value="0-10">Nhỏ hơn 10$</option>
        <option value="10-50">10$ - 50$</option>
        <option value="50-100">50$ - 100$</option>
        <option value="100-Infinity">100$ trở lên</option>
      </select>
    </div>
  );
};

export default Select;
