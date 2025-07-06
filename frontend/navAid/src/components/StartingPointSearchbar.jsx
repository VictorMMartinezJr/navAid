import { useContext } from "react";
import { assets } from "../assets/assets";
import NavigationContext from "../context/NavigationContext";
const StartingPointSearchbar = () => {
  const { startingPoint, setStartingPoint } = useContext(NavigationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startingPoint) {
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex justify-between items-center w-[70%]"
    >
      <input
        className="border-2  border-gray-400 rounded-full p-2 w-full"
        type="text"
        value={startingPoint}
        onChange={(e) => {
          const value = e.target.value.trim();
          setStartingPoint(value === "" ? null : value);
        }}
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
