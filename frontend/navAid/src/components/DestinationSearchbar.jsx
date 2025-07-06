import { assets } from "../assets/assets";

const DestinationSearchbar = () => {
  return (
    <form className="relative flex justify-between items-center flex-1/2 ">
      <input
        className="border-2  border-gray-400 rounded-full p-2 w-full"
        type="text"
        placeholder="Destination"
      />
      <img
        src={assets.searchIcon}
        alt="Search icon"
        className="absolute right-4 h-8 w-8"
      />
    </form>
  );
};

export default DestinationSearchbar;
