import { useState } from "react";
import "./App.css";
import Bar from "./components/Bar";
import { useEffect } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((prog) => prog + 1);
    }, 100);
  }, []);

  return (
    <>
      <div className="container">
        <center>Progress-bar</center>
        <Bar value={progress} />
        <center className="loadingtxt">
          {progress < 99 ? "Loading.." : "Completed!!"}
        </center>
      </div>
    </>
  );
}

export default App;
