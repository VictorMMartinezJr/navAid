import { useContext, useState } from "react";
import DestinationSearchbar from "./DestinationSearchbar";
import NavigationContext from "../context/NavigationContext";
import StartingPointSearchbar from "./StartingPointSearchbar";
import { rooms } from "../util/rooms";
import QuickLinks from "./QuickLinks";
import { dijkstra } from "../util/dijkstra";
import { graph } from "../util/graph";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Start = () => {
  const [shakeStartInput, setShakeStartInput] = useState(false);
  const [shakeDestinationInput, setShakeDestinationInput] = useState(false);
  const {
    destination,
    startingPoint,
    setPath,
    setLinePath,
    setStartAndDestinationSubmitted,
    setCurrentStep,
  } = useContext(NavigationContext);

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "");
  const extractDigits = (str) => str.match(/\d+/g)?.join("") || "";
  const isNumeric = (str) => /^\d+$/.test(str);

  const findBestMatch = (input) => {
    if (!input) return null;

    const inputNorm = normalize(input);
    const inputDigits = extractDigits(input);
    const allRoomNames = Object.keys(rooms);

    // If input is numeric, only accept exact digit match
    if (isNumeric(input)) {
      for (let name of allRoomNames) {
        const nameDigits = extractDigits(name);
        if (inputDigits === nameDigits) {
          return name;
        }
      }
      return null; // no exact digit match found
    }

    // Input not numeric, fallback to partial string match
    for (let name of allRoomNames) {
      const nameNorm = normalize(name);
      if (nameNorm.includes(inputNorm) || inputNorm.includes(nameNorm)) {
        return name;
      }
    }

    return null;
  };

  const handleClick = (e) => {
    e.preventDefault();

    const startKey = findBestMatch(startingPoint);
    const endKey = findBestMatch(destination);

    if (!startKey) {
      setShakeStartInput(true);
      toast.error("Starting point not found.");
      return;
    }

    if (!endKey) {
      setShakeDestinationInput(true);
      toast.error("Destination not found.");
      return;
    }

    const generatedPath = dijkstra(graph, startKey, endKey);
    setPath(generatedPath);

    const coordPath = generatedPath.map((roomName) => rooms[roomName]);

    setLinePath(coordPath);
    setCurrentStep(0);

    setStartAndDestinationSubmitted(true);
  };

  return (
    <div className="start absolute bottom-0 left-0 z-20 h-[42vh] w-full bg-[#303030] flex flex-col justify-around items-center px-2">
      <div className="flex flex-col w-full gap-4">
        {destination && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <StartingPointSearchbar
              shake={shakeStartInput}
              setShake={setShakeStartInput}
            />
          </motion.div>
        )}

        <DestinationSearchbar
          shake={shakeDestinationInput}
          setShake={setShakeDestinationInput}
        />

        <div className="flex justify-end items-center">
          <button
            className={`px-4 py-2 rounded-lg font-bold text-white ${
              destination
                ? "bg-blue-600 cursor-pointer "
                : "bg-blue-400 cursor-not-allowed"
            } sm:text-xl`}
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
