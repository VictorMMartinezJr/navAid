import { useEffect, useState } from "react";
import { useNav } from "../context/NavigationContext";
import { FcRight, FcLeft, FcUp } from "react-icons/fc";
import { MdLocationPin } from "react-icons/md";
import { rooms } from "../util/rooms";
import { graph } from "../util/graph";
import { easeInOut, motion } from "framer-motion";

const Directions = () => {
  const {
    setStartingPoint,
    setDestination,
    setPath,
    setLinePath,
    setStartAndDestinationSubmitted,
    generateInstructions,
    path,
    currentStep,
    setCurrentStep,
    initialStageResetFn,
  } = useNav();
  const [arrived, setArrived] = useState(false);
  const [directionArrow, setDirectionArrow] = useState("");
  const [isCooldown, setIsCooldown] = useState(false);

  const steps = generateInstructions(path, graph);

  const handleClick = () => {
    if (isCooldown) return;

    setIsCooldown(true);
    setTimeout(() => setIsCooldown(false), 500);

    // Reset app
    if (arrived) {
      setStartingPoint("Main Entrance");
      setDestination(null);
      setPath([]);
      setLinePath([]);
      setStartAndDestinationSubmitted(false);
      setCurrentStep(0);
      setArrived(false);
      if (initialStageResetFn) {
        initialStageResetFn();
      }

      return;
    }

    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);

      // Convert remaining room names to coordinates and erase passed area
      const remainingRoomNames = path.slice(newStep);

      const newLinePath = remainingRoomNames.map((roomName) => {
        return rooms[roomName];
      });
      setTimeout(() => {
        setLinePath(newLinePath);
      }, 200);
    } else {
      // Move to final destination before showing "Arrived"
      const finalStep = currentStep + 1;
      setCurrentStep(finalStep);

      const remainingRoomNames = path.slice(finalStep);
      const newLinePath = remainingRoomNames.map((roomName) => rooms[roomName]);

      setTimeout(() => {
        setLinePath(newLinePath);

        // Wait for user marker animation then set Arrived to true
        setTimeout(() => {
          setArrived(true);
          setLinePath([]);
        }, 500);
      }, 200);
    }
  };

  const getDirectionIcon = () => {
    if (arrived) return <MdLocationPin />;
    if (directionArrow === "right") return <FcRight className="" />;
    if (directionArrow === "left") return <FcLeft className="" />;
    return <FcUp />;
  };

  // Set which arrow to show in direction
  useEffect(() => {
    if (!steps[currentStep]) return;

    if (steps[currentStep].toLowerCase().includes("right")) {
      setDirectionArrow("right");
    } else if (steps[currentStep].toLowerCase().includes("left")) {
      setDirectionArrow("left");
    } else {
      setDirectionArrow("straight");
    }
  }, [currentStep, steps]);

  return (
    <div className="absolute top-0 left-0 z-20 min-h-[10vh] w-full bg-[#303030] px-2 flex justify-center">
      <div className="w-full min-h-[10vh] flex justify-between items-center lg:w-[85%]">
        <motion.div
          className="direction flex justify-center items-center gap-4 text-white text-5xl"
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          {steps[currentStep] ? (
            getDirectionIcon()
          ) : arrived ? (
            <MdLocationPin />
          ) : null}
          <p className="text-white text-xl font-bold sm:text-2xl md:text-3xl">
            {arrived ? "Arrived" : steps[currentStep]}
          </p>
        </motion.div>
        <button
          className="px-4 py-2 rounded-lg font-bold text-white bg-blue-600 cursor-pointer transition-colors duration-200 hover:bg-blue-700 sm:text-xl lg:px-8"
          onClick={handleClick}
          disabled={isCooldown}
        >
          {arrived ? "Restart" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Directions;
