import { useContext } from "react";
import { assets } from "../assets/assets";
import NavigationContext from "../context/NavigationContext";

const DestinationSearchbar = () => {
  const { destination, setDestination } = useContext(NavigationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (destination) {
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
        placeholder="Destination"
        value={destination}
        onChange={(e) => {
          const value = e.target.value.trim();
          setDestination(value === "" ? null : value);
        }}
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
