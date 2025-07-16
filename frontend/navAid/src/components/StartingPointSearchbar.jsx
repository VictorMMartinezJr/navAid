import { useContext } from "react";
import { assets } from "../assets/assets";
import NavigationContext from "../context/NavigationContext";
import { FcSearch } from "react-icons/fc";
const StartingPointSearchbar = () => {
  const { startingPoint, setStartingPoint } = useContext(NavigationContext);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative flex justify-between items-center w-full"
    >
      <input
        className="bg-[#5b5b5b] rounded-lg p-2 w-full text-white"
        type="text"
        value={startingPoint ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          setStartingPoint(value === "" ? null : value);
        }}
        placeholder="Starting Point"
      />
      <FcSearch className="absolute right-4 h-8 w-8 text-white" />
    </form>
  );
};

export default StartingPointSearchbar;
