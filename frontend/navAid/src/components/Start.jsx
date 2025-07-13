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
    setPath,
    setStartAndDestinationSubmitted,
    instructions,
    setInstructions,
  } = useContext(NavigationContext);

  const generateInstructions = (nodePath) => {
    const steps = [];

    for (let i = 0; i < nodePath.length - 1; i++) {
      const from = nodePath[i];
      const to = nodePath[i + 1];
      const edge = graph[from]?.find((e) => e.node === to);
      const direction = edge?.direction || `Go from ${from} to ${to}`;
      steps.push(`Step ${i + 1}: ${direction}`);
    }

    console.log(steps);

    return steps;
  };

  const handleClick = (e) => {
    e.preventDefault();

    const startKey = startingPoint?.toLowerCase().trim();
    const endKey = destination?.toLowerCase().trim();

    if (!graph[startKey] || !graph[endKey]) {
      console.error("Invalid start or destination node");
      return;
    }

    const nodePath = dijkstra(graph, startKey, endKey);
    const coordPath = nodePath.map((roomName) => rooms[roomName]);

    setPath(coordPath);
    setStartAndDestinationSubmitted(true);
    // Generate and store directions
    const directions = generateInstructions(nodePath);
    setInstructions(directions);
    console.log(instructions);
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
