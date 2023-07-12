import "./App.css";
import { useState } from "react";
import Person from "./Components/Person";
import Card from "./Components/Card";
import { myData } from "./data";

function App() {
  const [time, setTime] = useState("daily");

  return (
    <div className="App">
      <Person setTime={setTime} />
      <div className="left">
        {myData.map((data) => (
          <Card data={data} key={data.title} time={time} />
        ))}
      </div>
    </div>
  );
}

export default App;
