const Checkbox = () => {
  return (
    <div className="flex gap-[5px]">
      <input type="checkbox" name="remember" id="remember" />
      <label htmlFor="remember">Remember me</label>
    </div>
  );
};

export default Checkbox;
