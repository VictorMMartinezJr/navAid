import { useContext } from "react";
import "./App.css";
import FooterDestination from "./components/FooterDestination";
import MapWithLine from "./components/MapWithLine";
import NavigationContext from "./context/NavigationContext";
import Start from "./components/Start";
import Directions from "./components/Directions";
import { ToastContainer } from "react-toastify";

function App() {
  const { startAndDestinationSubmitted, path, currentStep } =
    useContext(NavigationContext);
  return (
    <main className="h-full w-full flex flex-col overflow-hidden">
      {startAndDestinationSubmitted && <Directions />}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Top content (Start will only show when not submitted) */}
      {!startAndDestinationSubmitted && <Start />}

      {/* Map takes up all available space */}
      <div className="flex-grow relative">
        <MapWithLine currentRoom={path[currentStep]} />
      </div>

      {/* Footer only shows when submitted */}
      {startAndDestinationSubmitted && <FooterDestination />}
    </main>
  );
}

export default App;
