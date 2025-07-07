import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [startingPoint, setStartingPoint] = useState(null);
  const [destination, setDestination] = useState(null);
  const [path, setPath] = useState([]);

  const contextValues = {
    startingPoint,
    setStartingPoint,
    destination,
    setDestination,
    path,
    setPath,
  };

  return (
    <NavigationContext.Provider value={contextValues}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
