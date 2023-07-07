import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div className="app bg-gray-2">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};
export default App;
