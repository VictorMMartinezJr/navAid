import { createContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [startingPoint, setStartingPoint] = useState("Main Entrance");
  const [destination, setDestination] = useState(null);
  const [startAndDestinationSubmitted, setStartAndDestinationSubmitted] =
    useState(false);
  const [instructions, setInstructions] = useState([]);

  const [path, setPath] = useState([]);

  const contextValues = {
    startingPoint,
    setStartingPoint,
    destination,
    setDestination,
    path,
    setPath,
    setStartAndDestinationSubmitted,
    startAndDestinationSubmitted,
    instructions,
    setInstructions,
  };

  return (
    <NavigationContext.Provider value={contextValues}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
