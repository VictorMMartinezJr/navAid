import { useContext } from "react";
import { assets } from "../assets/assets";
import NavigationContext from "../context/NavigationContext";

const FooterDestination = () => {
  const { setStartingPoint, setDestination, setPath, destination } =
    useContext(NavigationContext);
  const handleCancel = () => {
    setStartingPoint(null);
    setDestination(null);
    setPath([]);
  };
  return (
    <div className="bg-[#3b3b3b] text-white p-4">
      <div className="w-full flex justify-between items-center flex-1 ">
        <p className="text-gray-400">Heading to:</p>
        <button
          className="px-4 py-2 rounded-lg font-bold text-white bg-blue-600 cursor-pointer"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>

      <div className="w-full flex items-center flex-1">
        <img src={assets.searchIcon} alt="" className="h-6 w-6 " />
        <p className="text-2xl">{destination}</p>
      </div>
    </div>
  );
};

export default FooterDestination;
