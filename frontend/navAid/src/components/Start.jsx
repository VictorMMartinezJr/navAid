import { useContext } from "react";
import DestinationSearchbar from "./DestinationSearchbar";
import NavigationContext from "../context/NavigationContext";
import StartingPointSearchbar from "./StartingPointSearchbar";
import { rooms } from "../util/rooms";
import QuickLinks from "./QuickLinks";
import { dijkstra } from "../util/dijkstra";
import { graph } from "../util/graph";

const Start = () => {
  const {
    destination,
    startingPoint,
    path,
    setPath,
    setLinePath,
    setStartAndDestinationSubmitted,

    generateInstructions,
  } = useContext(NavigationContext);

  const handleClick = (e) => {
    e.preventDefault();

    const startKey = startingPoint?.toLowerCase().trim();
    const endKey = destination?.toLowerCase().trim();

    if (!graph[startKey] || !graph[endKey]) {
      console.error("Invalid start or destination node");
      return;
    }

    const generatedPath = dijkstra(graph, startKey, endKey);
    setPath(generatedPath);
    console.log(path);
    console.log(generatedPath);

    const coordPath = generatedPath.map((roomName) => rooms[roomName]);

    setLinePath(coordPath);

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
