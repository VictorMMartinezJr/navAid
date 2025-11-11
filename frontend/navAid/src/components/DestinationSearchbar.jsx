import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import { FcSearch } from "react-icons/fc";
import { motion } from "framer-motion";
import { MdOutlineLocationSearching } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const DestinationSearchbar = ({ shake, setShake }) => {
  const { destination, setDestination } = useContext(NavigationContext);

  return (
    <form
      className="relative flex justify-between items-center w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <motion.div
        className="w-full"
        animate={shake ? { x: [0, -8, 8, -8, 8, 0] } : {}}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setShake(false)}
      >
        <input
          className="bg-[#4b4b4b] rounded-lg p-2 w-full text-white focus:outline-none focus:ring-3 focus:ring-blue-500 transition duration-200 lg:py-3"
          type="text"
          placeholder="Destination"
          value={destination ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            setDestination(value === "" ? null : value);
          }}
        />
      </motion.div>
      <FiSearch className="absolute right-4 h-8 w-8 text-[#818181]" />
    </form>
  );
};

export default DestinationSearchbar;
