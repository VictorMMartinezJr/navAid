import { createContext, useRef, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [startingPoint, setStartingPoint] = useState("Main Entrance");
  const [destination, setDestination] = useState(null);
  const [startAndDestinationSubmitted, setStartAndDestinationSubmitted] =
    useState(false);
  const [path, setPath] = useState([]);
  const [linePath, setLinePath] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const stageRef = useRef();
  const [initialStageResetFn, setInitialStageResetFn] = useState(null);

  const generateInstructions = (nodePath, graph) => {
    const steps = [];

    for (let i = 0; i < nodePath.length - 1; i++) {
      const from = nodePath[i];
      const to = nodePath[i + 1];
      const prev = i > 0 ? nodePath[i - 1] : null;

      const edges = graph[from];
      const edge = edges ? edges.find((e) => e.node === to) : null;

      let direction;

      if (edge) {
        // If directionFrom exists and prev node matches a key, use that
        if (edge.directionFrom && prev && edge.directionFrom[prev]) {
          direction = edge.directionFrom[prev];
        }
        // Otherwise, use general direction if present
        else if (edge.direction) {
          direction = edge.direction;
        }
        // Else default text
        else {
          direction = `Go from ${from} to ${to}`;
        }
      } else {
        direction = `Go from ${from} to ${to}`;
      }

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
    stageRef,
    initialStageResetFn,
    setInitialStageResetFn,
  };

  return (
    <NavigationContext.Provider value={contextValues}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
