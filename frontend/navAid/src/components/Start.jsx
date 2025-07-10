import { useContext } from "react";
import DestinationSearchbar from "./DestinationSearchbar";
import NavigationContext from "../context/NavigationContext";
import StartingPointSearchbar from "./StartingPointSearchbar";
import QuickLinks from "./QuickLinks";
const Start = () => {
  const { destination, setPath, setStartAndDestinationSubmitted } =
    useContext(NavigationContext);

  const generateMockPath = (start, end) => {
    console.log("Calculating path from:", start, "to:", end);

    // Later you’ll replace this with real Dijkstra logic
    return [
      { x: 100, y: 100 },
      { x: 250, y: 200 },
      { x: 400, y: 350 },
    ];
  };

  const handleClick = (e) => {
    e.preventDefault();

    const newPath = generateMockPath(destination, destination);
    setPath(newPath);
    setStartAndDestinationSubmitted(true);
  };

  return (
    <div className="absolute bottom-0 left-0 z-20 h-[35vh] w-full bg-[#303030] flex flex-col justify-around items-center px-2">
      <div className="flex flex-col w-full gap-4">
        {destination && <StartingPointSearchbar />}
        <DestinationSearchbar />

        <div className="flex justify-end items-center">
          <button
            className={`px-4 py-2 rounded-lg font-bold text-white ${
              destination
                ? "bg-blue-600 cursor-pointer "
                : "bg-blue-400 cursor-not-allowed"
            }`}
            disabled={!destination}
            onClick={handleClick}
          >
            Start
          </button>
        </div>
      </div>

      <div className="flex justify-around items-center w-full">
        <QuickLinks />
      </div>
    </div>
  );
};

export default Start;
