import { useEffect, useState } from "react";
import "./App.css";
import BestCarsection from "./components/BestCarsection";
import EngineDetails from "./components/EngineDetails";
import Herosection from "./components/Herosection";
import IconicDesignsection from "./components/IconicDesignsection";
import NavBar from "./components/NavBar";
import WhoItsfor from "./components/WhoItsfor";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const HandleResize = () => {
      setIsMobile(window.innerWidth <= 890);
    };

    HandleResize();

    window.addEventListener("resize", HandleResize);

    return () => {
      window.removeEventListener("resize", HandleResize);
    };
  }, []);

  return (
    <>
      <div className="contain">
        {isMobile && <MobileNavBar />}
        {!isMobile && <NavBar />}
        <Herosection />
        <BestCarsection />
        <EngineDetails />
        <IconicDesignsection />
        <WhoItsfor />
      </div>
    </>
  );
}

export default App;
