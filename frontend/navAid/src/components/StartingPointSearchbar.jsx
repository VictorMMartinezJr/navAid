import { useContext } from "react";
import { assets } from "../assets/assets";
import NavigationContext from "../context/NavigationContext";
import { FcSearch } from "react-icons/fc";
import { motion } from "framer-motion";
const StartingPointSearchbar = ({ shake, setShake }) => {
  const { startingPoint, setStartingPoint } = useContext(NavigationContext);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative flex justify-between items-center w-full"
    >
      <motion.div
        className="w-full"
        animate={shake ? { x: [0, -8, 8, -8, 8, 0] } : {}}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setShake(false)}
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
      </motion.div>
      <FcSearch className="absolute right-4 h-8 w-8 text-white" />
    </form>
  );
};

export default StartingPointSearchbar;
