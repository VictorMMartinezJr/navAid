import { useNav } from "../context/NavigationContext";

const QuickLink = ({ quickLinkText, Icon }) => {
  const { setDestination } = useNav();

  const handleClick = () => {
    setDestination(quickLinkText);
  };

  return (
    <button
      className="group h-auto w-auto flex flex-col items-center cursor-pointer transition-transformduration-200 hover:scale-105"
      onClick={handleClick}
    >
      <div className="flex-center text-center bg-[#e5e5e5] rounded-[50%] border-none mb-2 p-[0.8rem] sm:p-6">
        <Icon className="text-black w-6 h-6 transition-colors duration-200 group-hover:text-blue-500 sm:w-8 sm:h-8" />
      </div>

      <p className="text-center transition-colors duration-200 group-hover:text-blue-500">
        {quickLinkText}
      </p>
    </button>
  );
};

export default QuickLink;
