import { useState } from "react";
import DestinationSearchbar from "./DestinationSearchbar";
import { useNav } from "../context/NavigationContext";
import StartingPointSearchbar from "./StartingPointSearchbar";
import { rooms } from "../util/rooms";
import QuickLinks from "./QuickLinks";
import { dijkstra } from "../util/dijkstra";
import { graph } from "../util/graph";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

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
  } = useNav();

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
      return null;
    }

    // Input not numeric, fallback to partial string match
    for (let name of allRoomNames) {
      const nameNorm = normalize(name);

      if (nameNorm.startsWith(inputNorm) || nameNorm.endsWith(inputNorm)) {
        return name;
      }
    }

    return null;
  };

  const handleClick = (e) => {
    e.preventDefault();

    const startKey = findBestMatch(startingPoint);
    const endKey = findBestMatch(destination);

    console.log(endKey);

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

    if (startKey.includes("hall") || startKey.includes("meet")) {
      setShakeStartInput(true);
      toast.error("Staring point not found.");
      return;
    }

    if (endKey.includes("hall") || endKey.includes("meet")) {
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
    <div className="absolute bottom-0 left-0 z-20 min-h-[45vh] w-full bg-[#303030] flex flex-col justify-around items-center px-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent lg:h-screen lg:overflow-y-auto lg:overflow-x-hidden lg:w-[30vw] 2xl:px-8">
      <div className="flex flex-col justify-around items-center w-full h-full gap-8 md:w-[80%] lg:w-full">
        <img
          src={assets.logo}
          alt="NavAid logo"
          className="hidden lg:inline py-4 h-30 w-30 self-start"
        />

        <div className="flex flex-col w-full gap-6 pt-4">
          {/* Start input only visible after destination clicked */}
          {destination && (
            <motion.div
              className="lg:hidden"
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

          {/* Start input always visible after lg screen */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <StartingPointSearchbar
              shake={shakeStartInput}
              setShake={setShakeStartInput}
            />
          </motion.div>

          <DestinationSearchbar
            shake={shakeDestinationInput}
            setShake={setShakeDestinationInput}
          />

          <div className="flex justify-end items-center">
            <button
              className={`px-4 py-2 rounded-lg font-bold text-white ${
                destination
                  ? "bg-blue-700 cursor-pointer "
                  : "bg-blue-500 cursor-not-allowed"
              } transition-colors duration-200 sm:text-xl lg:w-full lg:py-3`}
              disabled={!destination}
              onClick={handleClick}
            >
              Start
            </button>
          </div>
        </div>

        <div className="flex justify-around items-center w-full pb-8">
          <QuickLinks />
        </div>
      </div>
    </div>
  );
};

export default Start;
