import { useContext, useEffect, useRef, useState } from "react";
import NavigationContext from "../context/NavigationContext";
import { FcRight, FcLeft, FcUp } from "react-icons/fc";
import { MdLocationPin } from "react-icons/md";
import { rooms } from "../util/rooms";

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
  } = useContext(NavigationContext);
  const [arrived, setArrived] = useState(false);
  const [directionArrow, setDirectionArrow] = useState("");

  const steps = generateInstructions(path);

  const handleClick = () => {
    // Reset app
    if (arrived) {
      setStartingPoint("Main Entrance");
      setDestination(null);
      setPath([]);
      setLinePath([]);
      setStartAndDestinationSubmitted(false);
      setCurrentStep(0);

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
      setArrived(true);
      setLinePath([]);
    }
  };

  const getDirectionIcon = () => {
    if (arrived) return <MdLocationPin />;
    if (directionArrow === "right") return <FcRight />;
    if (directionArrow === "left") return <FcLeft />;
    return <FcUp />;
  };

  useEffect(() => {
    if (steps[currentStep].toLowerCase().includes("right")) {
      setDirectionArrow("right");
    } else if (steps[currentStep].toLowerCase().includes("left")) {
      setDirectionArrow("left");
    } else {
      setDirectionArrow("straight");
    }
  }, [currentStep, steps]);

  return (
    <div className="absolute top-0 left-0 z-20 h-[10vh] w-full bg-[#303030] flex justify-between items-center px-2">
      <div className="flex justify-center items-center gap-4 text-white text-4xl">
        {getDirectionIcon()}
        <p className="text-white text-xl font-bold">
          {arrived ? "Arrived" : steps[currentStep]}
        </p>
      </div>
      <button
        className="px-4 py-2 rounded-lg font-bold text-white bg-blue-600 cursor-pointer"
        onClick={handleClick}
      >
        {arrived ? "Restart" : "Next"}
      </button>
    </div>
  );
};

export default Directions;
