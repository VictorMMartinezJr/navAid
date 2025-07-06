import { useState } from "react";
import { assets } from "../assets/assets";
import { AnimatePresence, motion } from "framer-motion";
import DestinationSearchbar from "./DestinationSearchbar";
import StartingPointSearchbar from "./StartingPointSearchbar";

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <nav className="relative h-[8vh] w-full flex justify-between items-center px-4 shadow-xl z-20">
      <img src={assets.logo} alt="NavAid logo" className="h-full p-1" />

      {/* Menu Button */}
      <button
        aria-label="Toggle menu"
        className="cursor-pointer z-30 md:hidden"
        onClick={() => setMenuClicked((prev) => !prev)}
      >
        {/* Line 1 */}
        <motion.div
          className="w-6 h-1 m-1 bg-black"
          animate={{
            rotate: menuClicked ? -45 : 0,
            x: menuClicked ? -5 : 0,
            y: menuClicked ? 8 : 0,
          }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        {/* Line 2 */}
        <motion.div
          className="w-6 h-1 m-1 bg-black"
          animate={{ opacity: menuClicked ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        {/* Line 3 */}
        <motion.div
          className="w-6 h-1 m-1 bg-black"
          animate={{
            rotate: menuClicked ? 45 : 0,
            x: menuClicked ? -5 : 0,
            y: menuClicked ? -8 : 0,
          }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </button>
      <AnimatePresence mode="wait">
        {menuClicked && (
          <motion.div
            className="absolute top-[0vh] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-4 bg-gray-200 w-full h-[30vh] z-20"
            initial={{ y: -100, opacity: 0, filter: "blur(10px)" }}
            animate={{
              y: menuClicked ? 0 : -100,
              opacity: menuClicked ? 1 : 0,
              filter: menuClicked ? "blur(0px)" : "blur(10px)",
            }}
            exit={{ y: -100, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <StartingPointSearchbar />
            <DestinationSearchbar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop */}
      <div className="hidden md:flex md:gap-4 md:w-[80%]">
        <StartingPointSearchbar />
        <DestinationSearchbar />
      </div>
    </nav>
  );
};

export default Nav;
