import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

const QuickLink = ({ img, altText, quickLinkText }) => {
  const {} = useContext(NavigationContext);

  const handleClick = () => {};

  return (
    <div className="h-auto w-auto flex flex-col items-center">
      <button
        className="flex-center text-center bg-[#e5e5e5] rounded-[50%] border-none cursor-pointer p-[0.8rem]"
        onClick={handleClick}
      >
        <img className="w-6 h-6" src={img} alt={altText} />
      </button>

      <p>{quickLinkText}</p>
    </div>
  );
};

export default QuickLink;
