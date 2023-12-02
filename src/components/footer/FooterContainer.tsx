import React from "react";

const FooterContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="">
      <h1 className="font-bold text-sm leading-10">{title}</h1>
      {children}
    </div>
  );
};

export default FooterContainer;
