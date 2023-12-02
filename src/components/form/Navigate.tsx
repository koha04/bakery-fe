import { Link } from "react-router-dom";
import { NavigateProps } from "../../types";

const Navigate = ({
  firstLink,
  secondLink,
  firstPath,
  secondPath,
}: NavigateProps) => {
  return (
    <div className="flex items-center justify-between flex-wrap py-[15px] px-[10px]">
      <Link
        className="transition-all duration-[600ms] hover:underline hover:text-[#fe5858]"
        to={firstPath}
      >
        {firstLink}
      </Link>
      <Link
        className="transition-all duration-[600ms] hover:underline hover:text-[#fe5858]"
        to={secondPath}
      >
        {secondLink}
      </Link>
    </div>
  );
};

export default Navigate;
