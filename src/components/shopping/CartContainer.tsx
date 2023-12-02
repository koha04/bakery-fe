import React from "react";

const CartContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-5 flex justify-center min-[500px]:max-lg:flex-col min-[500px]:max-lg:items-center">
      {children}
    </div>
  );
};

export default CartContainer;
