import { useContext } from "react";
import { assets } from "../assets/assets";
import NavigationContext from "../context/NavigationContext";

const FooterDestination = () => {
  const {
    setStartingPoint,
    setDestination,
    setPath,
    destination,
    setStartAndDestinationSubmitted,
  } = useContext(NavigationContext);

  const handleCancel = () => {
    setStartingPoint("Main Entrance");
    setDestination(null);
    setPath([]);
    setStartAndDestinationSubmitted(false);
  };
  return (
    <div className="absolute bottom-0 left-0 bg-[#3b3b3b] text-white p-4 w-full">
      <div className="w-full flex justify-between items-center flex-1 ">
        <p className="text-gray-400">Heading to:</p>
        <button
          className="px-4 py-2 rounded-lg font-bold text-white bg-blue-600 cursor-pointer"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>

      <div className="w-full flex items-center flex-1 gap-2">
        <img src={assets.searchIcon} alt="search icon" className="h-6 w-6 " />
        <p className="text-2xl">{destination}</p>
      </div>
    </div>
  );
};

export default FooterDestination;
