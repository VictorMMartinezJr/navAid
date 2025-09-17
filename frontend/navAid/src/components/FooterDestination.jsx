import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
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
  } = useContext(NavigationContext);
  const steps = generateInstructions(path, graph);

  const handleCancel = () => {
    setStartingPoint("Main Entrance");
    setDestination(null);
    setPath([]);
    setLinePath([]);
    setStartAndDestinationSubmitted(false);
    if (initialStageResetFn) {
      initialStageResetFn();
    }
  };
  return (
    <div className="absolute h-[35vh] w-full bottom-0 left-0 bg-[#3b3b3b] text-white p-4 ">
      <div className="w-full flex justify-between items-center flex-1 ">
        <p className="text-gray-400 sm:text-2xl md:text-3xl">Heading to:</p>
        <button
          className="px-4 py-2 rounded-lg font-bold text-white bg-red-600 cursor-pointer sm:text-xl"
          onClick={handleCancel}
        >
          Cancel Route
        </button>
      </div>

      <div className="w-full flex flex-col flex-1 ">
        <p className="my-6 text-3xl md:text-4xl md:my-12">📍 {destination}</p>
        <p className="text-gray-400 sm:text-2xl md:text-3xl">
          {steps.length > 0
            ? `${steps.length} total steps from ${startingPoint} to ${destination}`
            : `Calculating route from ${startingPoint} to ${destination}...`}
        </p>
      </div>
    </div>
  );
};

export default FooterDestination;
