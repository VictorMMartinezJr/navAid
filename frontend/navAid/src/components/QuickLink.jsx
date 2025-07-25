import { useContext } from "react";
import { motion } from "framer-motion";
import NavigationContext from "../context/NavigationContext";

const QuickLink = ({ img, altText, quickLinkText }) => {
  const { setDestination } = useContext(NavigationContext);

  const handleClick = () => {
    setDestination(quickLinkText);
  };

  return (
    <motion.div
      className="h-auto w-auto flex flex-col items-center"
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <button
        className="flex-center text-center bg-[#e5e5e5] rounded-[50%] border-none cursor-pointer mb-2 p-[0.8rem] sm:p-4"
        onClick={handleClick}
      >
        <img className="w-6 h-6 sm:w-8 sm:-8" src={img} alt={altText} />
      </button>

      <p className="text-center">{quickLinkText}</p>
    </motion.div>
  );
};

export default QuickLink;
