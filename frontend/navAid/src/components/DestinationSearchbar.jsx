import { useContext } from "react";
import { assets } from "../assets/assets";
import NavigationContext from "../context/NavigationContext";
import { FcSearch } from "react-icons/fc";

const DestinationSearchbar = () => {
  const { destination, setDestination } = useContext(NavigationContext);

  return (
    <form
      className="relative flex justify-between items-center w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="bg-[#5b5b5b] rounded-lg p-2 w-full text-white"
        type="text"
        placeholder="Destination"
        value={destination ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          setDestination(value === "" ? null : value);
        }}
      />
      <FcSearch className="absolute right-4 h-8 w-8 " />
    </form>
  );
};

export default DestinationSearchbar;
