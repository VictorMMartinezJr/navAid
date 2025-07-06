import { assets } from "../assets/assets";

const StartingPointSearchbar = () => {
  return (
    <form className="relative flex justify-between items-center w-[70%]">
      <input
        className="border-2  border-gray-400 rounded-full p-2 w-full"
        type="text"
        placeholder="Starting Point"
      />
      <img
        src={assets.searchIcon}
        alt="Search icon"
        className="absolute right-4 h-8 w-8"
      />
    </form>
  );
};

export default StartingPointSearchbar;
