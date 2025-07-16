import { createContext, useState } from "react";
import { graph } from "../util/graph";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [startingPoint, setStartingPoint] = useState("Main Entrance");
  const [destination, setDestination] = useState(null);
  const [startAndDestinationSubmitted, setStartAndDestinationSubmitted] =
    useState(false);
  const [path, setPath] = useState([]);
  const [linePath, setLinePath] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const generateInstructions = (nodePath) => {
    const steps = [];

    for (let i = 0; i < nodePath.length - 1; i++) {
      const from = nodePath[i];
      const to = nodePath[i + 1];
      const edge = graph[from]?.find((e) => e.node === to);
      const direction = edge?.direction || `Go from ${from} to ${to}`;
      steps.push(`${direction}`);
    }
    return steps;
  };

  const contextValues = {
    startingPoint,
    setStartingPoint,
    destination,
    setDestination,
    path,
    setPath,
    linePath,
    setLinePath,
    setStartAndDestinationSubmitted,
    startAndDestinationSubmitted,
    generateInstructions,
    currentStep,
    setCurrentStep,
  };

  return (
    <NavigationContext.Provider value={contextValues}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
