import { useEffect } from "react";
import { useNav } from "../context/NavigationContext";
import { graph } from "../util/graph";

const FooterDestination = () => {
  const {
    setStartingPoint,
    startingPoint,
    setDestination,
    setPath,
    setLinePath,
    destination,
    path,
    generateInstructions,
    setStartAndDestinationSubmitted,
    initialStageResetFn,
    currentStep,
  } = useNav();
  const steps = generateInstructions(path, graph);
  const stepsLeft = path.length > 0 ? steps.length - currentStep : 0;

  const handleCancel = () => {
    setStartingPoint("Main Entrance");
    setDestination(null);
    setPath([]);
    setLinePath([]);
    setStartAndDestinationSubmitted(false);
    setStepsLeft(0);
    if (initialStageResetFn) {
      initialStageResetFn();
    }
  };

  // Get actual end node from path (last node)
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const endNode = path.length > 0 ? path[path.length - 1] : destination;
  const startNode = path.length > 0 ? path[0] : destination;
  const displayEndNode = endNode ? capitalize(endNode) : "";
  const displayStartNode = startNode ? capitalize(startNode) : "";

  return (
    <div className="absolute h-[35vh] w-full bottom-0 left-0 bg-[#3b3b3b] text-white p-4 lg:flex lg:justify-center">
      <div className="lg:w-[85%]">
        <div className="w-full flex justify-between items-center flex-1 ">
          <p className="text-gray-400 sm:text-2xl md:text-3xl">Heading to:</p>
          <button
            className="px-4 py-2 rounded-lg font-bold text-white bg-red-600 cursor-pointer transition-colors duration-200 hover:bg-red-700 sm:text-xl"
            onClick={handleCancel}
          >
            Cancel Route
          </button>
        </div>

        <div className="w-full flex flex-col flex-1 ">
          <p className="my-6 font-bold text-3xl md:text-4xl md:my-12">
            📍 {displayEndNode}
          </p>
          <p className="text-gray-400 sm:text-2xl md:text-3xl">
            {steps.length > 0
              ? `${stepsLeft} steps left from ${displayStartNode} to ${displayEndNode}`
              : `Calculating route from ${displayStartNode} to ${displayEndNode}...`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterDestination;
