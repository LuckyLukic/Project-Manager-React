import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  function handleClick() {
    setButtonClicked(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onClick={handleClick}></Sidebar>
      {buttonClicked ? (
        <NewProject></NewProject>
      ) : (
        <NoProjectSelected onClick={handleClick}></NoProjectSelected>
      )}
    </main>
  );
}

export default App;
