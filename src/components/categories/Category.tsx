import { data } from "../../data";

const Category = () => {
  return (
    <div className="flex flex-col">
      <p className="menutitle mx-[30px] text-center text-3xl font-bold leading-[50px] border-b-2 border-[#fecfef]">
        Menu nhà Berry
      </p>
      <div className="flex justify-around flex-wrap">
        {data.options.map((item) => (
          <div key={item.name} className="my-[30px] relative w-[400px] p-5 rounded-[30px] bg-[#ffe1ee] shadow-titleOptions">
            <div className="relative">
              <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 translate-y-1/4 text-white rounded-[10px] py-[10px] px-10 text-lg font-bold bg-button">
                {item.name}
              </div>
              <div className="flex justify-center gap-[3px]">
                {item.image.map((imgSrc) => (
                  <div key={imgSrc} className="w-[150px] h-[200px]">
                    <img
                      src={imgSrc}
                      alt={item.name}
                      className="max-w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button className="py-[10px] px-10 absolute -bottom-[20px] left-1/2 -translate-x-1/2 text-lg font-bold text-white rounded-[10px] border-none outline-none bg-border">
              Xem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
